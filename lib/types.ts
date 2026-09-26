export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'review' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
  id: string;
  projectId?: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  dueDate: string; // YYYY-MM-DD or empty
  tags: string[];
  createdAt: string;
  updatedAt: string;
  order: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  tasks: Task[];
  spreadsheetConfig?: SpreadsheetConfig | null;
  createdAt: string;
  updatedAt: string;
}

export interface ColumnDefinition {
  id: TaskStatus;
  title: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
}

export const COLUMNS: ColumnDefinition[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    description: 'Ide dan tugas yang direncanakan',
    accentColor: 'border-slate-300 dark:border-slate-700',
    badgeBg: 'bg-slate-100 dark:bg-slate-800',
    badgeText: 'text-slate-700 dark:text-slate-300',
  },
  {
    id: 'todo',
    title: 'To Do',
    description: 'Siap dikerjakan oleh tim',
    accentColor: 'border-blue-300 dark:border-blue-800',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/60',
    badgeText: 'text-blue-700 dark:text-blue-300',
  },
  {
    id: 'in_progress',
    title: 'In Progress',
    description: 'Sedang aktif dikerjakan',
    accentColor: 'border-amber-300 dark:border-amber-800',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60',
    badgeText: 'text-amber-700 dark:text-amber-300',
  },
  {
    id: 'review',
    title: 'In Review',
    description: 'Tahap pengujian dan evaluasi',
    accentColor: 'border-purple-300 dark:border-purple-800',
    badgeBg: 'bg-purple-50 dark:bg-purple-950/60',
    badgeText: 'text-purple-700 dark:text-purple-300',
  },
  {
    id: 'done',
    title: 'Done',
    description: 'Telah selesai dan diverifikasi',
    accentColor: 'border-emerald-300 dark:border-emerald-800',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
  },
];

export interface SpreadsheetConfig {
  id: string;
  title: string;
  url: string;
  sheetName: string;
  connectedAt?: string;
  lastSyncedAt?: string;
}

export type SyncState = 'idle' | 'syncing' | 'synced' | 'error';
