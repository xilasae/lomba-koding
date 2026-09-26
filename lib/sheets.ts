import { Task, SpreadsheetConfig, TaskStatus, TaskPriority } from './types';

export const SHEET_HEADERS = [
  'Task ID',
  'Title',
  'Description',
  'Status',
  'Priority',
  'Assignee',
  'Due Date',
  'Tags',
  'Created At',
  'Updated At',
  'Order',
];

export const DEFAULT_SHEET_NAME = 'KanbanTasks';

/**
 * Extracts a Google Spreadsheet ID from either a raw ID or full Google Sheets URL.
 */
export function extractSpreadsheetId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return match[1];
  }
  // Check if it's already a clean ID
  if (/^[a-zA-Z0-9-_]{20,}$/.test(trimmed)) {
    return trimmed;
  }
  return null;
}

/**
 * Creates a brand new Google Spreadsheet with headers formatted.
 */
export async function createSpreadsheet(
  accessToken: string,
  title: string = 'Kanban Sheet Flow - Task Tracker',
  sheetName: string = DEFAULT_SHEET_NAME
): Promise<SpreadsheetConfig> {
  const targetSheetName = sheetName.trim() || DEFAULT_SHEET_NAME;
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
      },
      sheets: [
        {
          properties: {
            title: targetSheetName,
            gridProperties: {
              frozenRowCount: 1,
              rowCount: 100,
              columnCount: 15,
            },
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Gagal membuat spreadsheet: ${response.statusText}`
    );
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const sheetUrl = data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Write header row
  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/'${targetSheetName}'!A1:K1?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        range: `'${targetSheetName}'!A1:K1`,
        values: [SHEET_HEADERS],
      }),
    }
  );

  return {
    id: spreadsheetId,
    title,
    url: sheetUrl,
    sheetName: targetSheetName,
    connectedAt: new Date().toISOString(),
    lastSyncedAt: new Date().toISOString(),
  };
}

/**
 * Fetch spreadsheet metadata to get the actual sheet names.
 */
export async function getSpreadsheetDetails(
  accessToken: string,
  spreadsheetId: string
): Promise<{ title: string; sheetNames: string[]; url: string }> {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Spreadsheet tidak ditemukan atau akses ditolak.');
  }

  const data = await res.json();
  const title = data.properties?.title || 'Spreadsheet Tanpa Judul';
  const sheetNames = (data.sheets || []).map(
    (s: { properties?: { title?: string } }) => s.properties?.title || 'Sheet1'
  );

  return {
    title,
    sheetNames,
    url: data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
  };
}

/**
 * Fetch tasks from sheet
 */
export async function fetchTasksFromSheet(
  accessToken: string,
  spreadsheetId: string,
  sheetName: string = DEFAULT_SHEET_NAME
): Promise<Task[]> {
  const encodedSheet = encodeURIComponent(sheetName);
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedSheet}!A1:K500`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Gagal membaca data dari spreadsheet.');
  }

  const data = await res.json();
  const rows: string[][] = data.values || [];

  if (rows.length <= 1) {
    return [];
  }

  // Row 0 is header, rows 1..N are tasks
  const tasks: Task[] = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[0] && !row[1]) continue;

    const id = row[0] || `TASK-${Date.now()}-${i}`;
    const title = row[1] || 'Tugas Tanpa Judul';
    const description = row[2] || '';
    const status = (['backlog', 'todo', 'in_progress', 'review', 'done'].includes(row[3])
      ? row[3]
      : 'todo') as TaskStatus;
    const priority = (['low', 'medium', 'high', 'urgent'].includes(row[4])
      ? row[4]
      : 'medium') as TaskPriority;
    const assignee = row[5] || '';
    const dueDate = row[6] || '';
    const tags = row[7]
      ? row[7]
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)
      : [];
    const createdAt = row[8] || new Date().toISOString();
    const updatedAt = row[9] || new Date().toISOString();
    const order = Number(row[10]) || i;

    tasks.push({
      id,
      title,
      description,
      status,
      priority,
      assignee,
      dueDate,
      tags,
      createdAt,
      updatedAt,
      order,
    });
  }

  return tasks.sort((a, b) => a.order - b.order);
}

/**
 * Sync entire task list to sheet (used after reordering, dragging, editing, or deleting).
 */
export async function syncAllTasksToSheet(
  accessToken: string,
  spreadsheetId: string,
  sheetName: string,
  tasks: Task[]
): Promise<void> {
  const encodedSheet = encodeURIComponent(sheetName);

  // Clear existing task rows
  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedSheet}!A2:K500:clear`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  // Ensure header is written
  const rows = [
    SHEET_HEADERS,
    ...tasks.map((t, idx) => [
      t.id,
      t.title,
      t.description,
      t.status,
      t.priority,
      t.assignee,
      t.dueDate,
      t.tags.join(', '),
      t.createdAt,
      t.updatedAt,
      idx + 1,
    ]),
  ];

  const updateRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedSheet}!A1:K${rows.length}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        range: `${sheetName}!A1:K${rows.length}`,
        values: rows,
      }),
    }
  );

  if (!updateRes.ok) {
    const err = await updateRes.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Gagal menyinkronkan tugas ke Google Sheets.');
  }
}

/**
 * Append a single task to sheet
 */
export async function appendTaskToSheet(
  accessToken: string,
  spreadsheetId: string,
  sheetName: string,
  task: Task
): Promise<void> {
  const encodedSheet = encodeURIComponent(sheetName);
  const row = [
    task.id,
    task.title,
    task.description,
    task.status,
    task.priority,
    task.assignee,
    task.dueDate,
    task.tags.join(', '),
    task.createdAt,
    task.updatedAt,
    task.order,
  ];

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedSheet}!A:K:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [row],
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Gagal menambahkan tugas ke Google Sheets.');
  }
}
