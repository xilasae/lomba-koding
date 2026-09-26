'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { User } from 'firebase/auth';
import {
  Project,
  Task,
  TaskPriority,
  TaskStatus,
  SpreadsheetConfig,
  SyncState,
} from '@/lib/types';
import { INITIAL_PROJECTS } from '@/lib/initial-data';
import {
  initAuth,
  googleSignIn,
  logout,
  getAccessToken,
  setAccessToken,
} from '@/lib/firebase';
import {
  createSpreadsheet,
  fetchTasksFromSheet,
  syncAllTasksToSheet,
} from '@/lib/sheets';
import { ProjectListView } from '@/components/ProjectListView';
import { Navbar } from '@/components/Navbar';
import { KanbanBoard } from '@/components/KanbanBoard';
import { RightDrawer } from '@/components/RightDrawer';
import { NewTaskModal } from '@/components/NewTaskModal';
import { NewProjectModal } from '@/components/NewProjectModal';
import { SheetConfigDialog } from '@/components/SheetConfigDialog';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { Button } from '@/components/ui/button';
import {
  FileSpreadsheet,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

const STORAGE_KEY_PROJECTS = 'kanban_sheet_flow_four_projects_v5';

export default function KanbanPage() {
  // Authentication & token
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Projects list with lazy initialization
  const [projects, setProjects] = useState<Project[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
        if (saved) return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return INITIAL_PROJECTS;
  });

  // Current active project ID (null = show project list selection view)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Filters & Search within active project
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | 'all'>('all');

  // Modals & Drawers
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [defaultNewStatus, setDefaultNewStatus] = useState<TaskStatus>('todo');

  // Project Modals
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [isDeletingProject, setIsDeletingProject] = useState(false);

  // Task deletion
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  // Google Sheets integration state
  const [sheetConfigProjectTarget, setSheetConfigProjectTarget] = useState<Project | null>(null);
  const [syncState, setSyncState] = useState<SyncState>('idle');
  const [lastSyncedText, setLastSyncedText] = useState('Belum disinkronkan');
  const [syncError, setSyncError] = useState<string | null>(null);

  // Debounced auto-sync ref
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Active project helper
  const currentProject = projects.find((p) => p.id === selectedProjectId) || null;
  const currentTasks = currentProject ? currentProject.tasks : [];
  const currentSheetConfig = currentProject ? currentProject.spreadsheetConfig || null : null;

  // 1. Initialize Auth
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
    } catch (err) {
      console.error('Failed to save projects to localStorage:', err);
    }
  }, [projects]);

  // Google Sign In
  const handleSignIn = async () => {
    try {
      setIsLoggingIn(true);
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        setAccessToken(res.accessToken);
      }
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setSyncState('idle');
  };

  // Google Sheets synchronization for a project
  const triggerGoogleSheetsSync = useCallback(
    async (targetProjectId: string, tasksToSync: Task[], explicitConfig?: SpreadsheetConfig | null) => {
      const proj = projects.find((p) => p.id === targetProjectId);
      const activeConfig = explicitConfig !== undefined ? explicitConfig : proj?.spreadsheetConfig;
      if (!activeConfig || !activeConfig.id) {
        return;
      }

      const currentToken = token || (await getAccessToken());
      if (!currentToken) {
        setSyncState('idle');
        return;
      }

      try {
        setSyncState('syncing');
        setSyncError(null);
        await syncAllTasksToSheet(
          currentToken,
          activeConfig.id,
          activeConfig.sheetName,
          tasksToSync
        );
        const timeStr = new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setSyncState('synced');
        setLastSyncedText(`Tersinkron pukul ${timeStr}`);
      } catch (err: unknown) {
        console.error('Sync failed:', err);
        setSyncState('error');
        const msg = err instanceof Error ? err.message : 'Gagal menyinkronkan tugas.';
        setSyncError(msg);
      }
    },
    [projects, token]
  );

  // Debounced sync for current project
  const scheduleSync = useCallback(
    (targetProjectId: string, tasksToSync: Task[]) => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
      syncTimeoutRef.current = setTimeout(() => {
        triggerGoogleSheetsSync(targetProjectId, tasksToSync);
      }, 600);
    },
    [triggerGoogleSheetsSync]
  );

  // Update tasks for a project
  const updateProjectTasks = useCallback(
    (projectId: string, newTasks: Task[], shouldSyncSheet = true) => {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId
            ? {
                ...p,
                tasks: newTasks,
                updatedAt: new Date().toISOString(),
              }
            : p
        )
      );

      if (shouldSyncSheet) {
        scheduleSync(projectId, newTasks);
      }
    },
    [scheduleSync]
  );

  // Pull tasks from connected spreadsheet for a project
  const pullFromSpreadsheet = async (
    targetProject: Project,
    configToUse: SpreadsheetConfig,
    activeToken: string
  ) => {
    try {
      setSyncState('syncing');
      setSyncError(null);
      const fetchedTasks = await fetchTasksFromSheet(
        activeToken,
        configToUse.id,
        configToUse.sheetName
      );

      if (fetchedTasks.length > 0) {
        updateProjectTasks(targetProject.id, fetchedTasks, false);
      } else if (targetProject.tasks.length > 0) {
        // If sheet is empty, populate it with existing tasks
        await syncAllTasksToSheet(
          activeToken,
          configToUse.id,
          configToUse.sheetName,
          targetProject.tasks
        );
      }

      const timeStr = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setSyncState('synced');
      setLastSyncedText(`Tersinkron pukul ${timeStr}`);
    } catch (err: unknown) {
      console.error('Pull failed:', err);
      setSyncState('error');
      const msg = err instanceof Error ? err.message : 'Gagal memuat dari spreadsheet.';
      setSyncError(msg);
    }
  };

  // Handle Sheet Config Change
  const handleSheetConfigChange = (newConfig: SpreadsheetConfig | null) => {
    const targetProj = sheetConfigProjectTarget || currentProject;
    if (!targetProj) return;

    setProjects((prev) =>
      prev.map((p) =>
        p.id === targetProj.id
          ? {
              ...p,
              spreadsheetConfig: newConfig,
              updatedAt: new Date().toISOString(),
            }
          : p
      )
    );

    if (newConfig && token) {
      pullFromSpreadsheet(targetProj, newConfig, token);
    } else {
      setSyncState('idle');
      setLastSyncedText('Tidak terhubung');
    }
  };

  // Project CRUD Actions
  const handleCreateProject = ({
    name,
    description,
    color,
  }: {
    name: string;
    description: string;
    color: string;
  }) => {
    const newId = `proj-${Date.now().toString().slice(-4)}`;
    const now = new Date().toISOString();
    const newProj: Project = {
      id: newId,
      name,
      description,
      color,
      tasks: [],
      spreadsheetConfig: null,
      createdAt: now,
      updatedAt: now,
    };
    setProjects([newProj, ...projects]);
    setSelectedProjectId(newId);
  };

  const handleUpdateProjectInfo = ({
    name,
    description,
    color,
  }: {
    name: string;
    description: string;
    color: string;
  }) => {
    if (!projectToEdit) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectToEdit.id
          ? {
              ...p,
              name,
              description,
              color,
              updatedAt: new Date().toISOString(),
            }
          : p
      )
    );
    setProjectToEdit(null);
  };

  const handleConfirmDeleteProject = () => {
    if (!projectToDelete) return;
    setIsDeletingProject(true);
    try {
      const nextProjects = projects.filter((p) => p.id !== projectToDelete.id);
      setProjects(nextProjects);
      if (selectedProjectId === projectToDelete.id) {
        setSelectedProjectId(null);
      }
      setProjectToDelete(null);
    } finally {
      setIsDeletingProject(false);
    }
  };

  // Task CRUD Actions within current project
  // 1. Create Task
  const handleCreateTask = (
    newTaskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'order'>
  ) => {
    if (!currentProject) return;
    const newId = `TASK-${Date.now().toString().slice(-4)}`;
    const now = new Date().toISOString();
    const created: Task = {
      ...newTaskData,
      id: newId,
      projectId: currentProject.id,
      createdAt: now,
      updatedAt: now,
      order: currentTasks.filter((t) => t.status === newTaskData.status).length + 1,
    };

    const nextTasks = [created, ...currentTasks];
    updateProjectTasks(currentProject.id, nextTasks, true);
  };

  // 2. Update Task
  const handleUpdateTask = (updatedTask: Task) => {
    if (!currentProject) return;
    const nextTasks = currentTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
    updateProjectTasks(currentProject.id, nextTasks, true);
    setSelectedTask(updatedTask);
  };

  // 3. Delete Task with confirmation
  const handleConfirmDeleteTask = async () => {
    if (!taskToDelete || !currentProject) return;
    try {
      setIsDeletingTask(true);
      const nextTasks = currentTasks.filter((t) => t.id !== taskToDelete.id);
      updateProjectTasks(currentProject.id, nextTasks, true);

      if (selectedTask?.id === taskToDelete.id) {
        setIsDrawerOpen(false);
        setSelectedTask(null);
      }
      setTaskToDelete(null);
    } finally {
      setIsDeletingTask(false);
    }
  };

  // 4. Drag & Drop Move Task
  const handleDropTask = (taskId: string, targetStatus: TaskStatus) => {
    if (!currentProject) return;
    const taskIndex = currentTasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) return;

    const currentTask = currentTasks[taskIndex];
    if (currentTask.status === targetStatus) return;

    const updatedTask: Task = {
      ...currentTask,
      status: targetStatus,
      updatedAt: new Date().toISOString(),
      order: currentTasks.filter((t) => t.status === targetStatus).length + 1,
    };

    const nextTasks = currentTasks.map((t) => (t.id === taskId ? updatedTask : t));
    updateProjectTasks(currentProject.id, nextTasks, true);

    if (selectedTask?.id === taskId) {
      setSelectedTask(updatedTask);
    }
  };

  // Quick add inside column
  const handleQuickAdd = (status: TaskStatus, title: string) => {
    if (!currentProject) return;
    const newId = `TASK-${Date.now().toString().slice(-4)}`;
    const now = new Date().toISOString();
    const created: Task = {
      id: newId,
      projectId: currentProject.id,
      title,
      description: '',
      status,
      priority: 'medium',
      assignee: user?.displayName || '',
      dueDate: '',
      tags: [],
      createdAt: now,
      updatedAt: now,
      order: currentTasks.filter((t) => t.status === status).length + 1,
    };

    const nextTasks = [created, ...currentTasks];
    updateProjectTasks(currentProject.id, nextTasks, true);
  };

  // Open right drawer
  const handleCardSelect = (task: Task) => {
    setSelectedTask(task);
    setIsDrawerOpen(true);
  };

  // Manual sync button
  const handleManualSync = async () => {
    if (!currentProject) return;
    if (!currentSheetConfig) {
      setSheetConfigProjectTarget(currentProject);
      return;
    }
    const currentToken = token || (await getAccessToken());
    if (!currentToken) {
      handleSignIn();
      return;
    }
    await triggerGoogleSheetsSync(currentProject.id, currentTasks);
  };

  // If NO project is selected, render the multi-project selection dashboard!
  if (!selectedProjectId || !currentProject) {
    return (
      <>
        <ProjectListView
          projects={projects}
          user={user}
          onSelectProject={(id) => {
            setSelectedProjectId(id);
            setSearchQuery('');
            setPriorityFilter('all');
          }}
          onCreateProjectClick={() => setIsNewProjectModalOpen(true)}
          onEditProjectClick={(proj) => setProjectToEdit(proj)}
          onDeleteProjectClick={(proj) => setProjectToDelete(proj)}
          onConfigureSheetsClick={(proj) => setSheetConfigProjectTarget(proj)}
          onSignIn={handleSignIn}
          onSignOut={handleSignOut}
          isLoggingIn={isLoggingIn}
        />

        {/* Modal: New Project */}
        <NewProjectModal
          isOpen={isNewProjectModalOpen}
          onClose={() => setIsNewProjectModalOpen(false)}
          onSubmit={handleCreateProject}
        />

        {/* Modal: Edit Project */}
        <NewProjectModal
          isOpen={!!projectToEdit}
          onClose={() => setProjectToEdit(null)}
          onSubmit={handleUpdateProjectInfo}
          initialData={projectToEdit}
          isEditing={true}
        />

        {/* Modal: Sheets Config for a project */}
        <SheetConfigDialog
          isOpen={!!sheetConfigProjectTarget}
          onClose={() => setSheetConfigProjectTarget(null)}
          config={sheetConfigProjectTarget?.spreadsheetConfig || null}
          accessToken={token}
          projectName={sheetConfigProjectTarget?.name}
          onConfigChange={handleSheetConfigChange}
        />

        {/* Confirm Delete Project Dialog */}
        <ConfirmDialog
          isOpen={!!projectToDelete}
          title="Hapus Seluruh Proyek?"
          description={
            projectToDelete
              ? `Apakah Anda yakin ingin menghapus proyek "${projectToDelete.name}" beserta ${projectToDelete.tasks.length} tugas di dalamnya? Tindakan ini tidak dapat dibatalkan.`
              : 'Hapus proyek ini?'
          }
          confirmLabel="Ya, Hapus Proyek"
          cancelLabel="Batal"
          isDestructive={true}
          isLoading={isDeletingProject}
          onConfirm={handleConfirmDeleteProject}
          onCancel={() => setProjectToDelete(null)}
        />
      </>
    );
  }

  // If a project IS selected, render its Kanban board!
  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans">
      {/* Top Navbar with Project Navigation */}
      <Navbar
        user={user}
        currentProject={currentProject}
        projects={projects}
        onSelectProject={(id) => setSelectedProjectId(id)}
        onBackToProjects={() => setSelectedProjectId(null)}
        spreadsheetConfig={currentSheetConfig}
        syncState={syncState}
        lastSyncedText={lastSyncedText}
        searchQuery={searchQuery}
        priorityFilter={priorityFilter}
        onSearchChange={setSearchQuery}
        onPriorityFilterChange={setPriorityFilter}
        onOpenNewTaskModal={() => {
          setDefaultNewStatus('todo');
          setIsNewTaskModalOpen(true);
        }}
        onOpenSheetConfig={() => setSheetConfigProjectTarget(currentProject)}
        onManualSync={handleManualSync}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
        isLoggingIn={isLoggingIn}
      />

      {/* Main Container */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Connection Notice Banner if Google Sheets not yet connected for this project */}
        {!currentSheetConfig && (
          <div className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 shadow-xs">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 shrink-0 text-blue-200" />
                <span>
                  <strong>Google Sheets untuk &quot;{currentProject.name}&quot;:</strong> Hubungkan spreadsheet untuk mencatat dan memperbarui status kartu kanban proyek ini secara otomatis.
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    if (!user) {
                      handleSignIn();
                    } else {
                      setSheetConfigProjectTarget(currentProject);
                    }
                  }}
                  className="h-7 text-xs bg-white text-blue-700 hover:bg-blue-50 border-none font-semibold px-3"
                >
                  <Sparkles className="h-3 w-3 mr-1 text-blue-600" />
                  {user ? 'Hubungkan Sheets Proyek' : 'Masuk Google & Hubungkan Sheets'}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Sync Error Banner if any */}
        {syncError && (
          <div className="bg-red-50 dark:bg-red-950/70 border-b border-red-200 dark:border-red-900 px-4 py-2 text-xs text-red-700 dark:text-red-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 shrink-0 text-red-500" />
              <span>Gagal sinkron ke Google Sheets: {syncError}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleManualSync}
              className="h-6 text-xs text-red-700 dark:text-red-300 hover:bg-red-100"
            >
              Coba Lagi
            </Button>
          </div>
        )}

        {/* Kanban Board Container (Title-only cards!) */}
        <KanbanBoard
          tasks={currentTasks}
          searchQuery={searchQuery}
          priorityFilter={priorityFilter}
          onCardSelect={handleCardSelect}
          onCardDelete={(task) => setTaskToDelete(task)}
          onDropTask={handleDropTask}
          onQuickAddTask={handleQuickAdd}
        />
      </main>

      {/* Right Drawer for Task Details */}
      <RightDrawer
        isOpen={isDrawerOpen}
        task={selectedTask}
        onClose={() => setIsDrawerOpen(false)}
        onSave={handleUpdateTask}
        onDelete={(task) => setTaskToDelete(task)}
        isSyncing={syncState === 'syncing'}
      />

      {/* New Task Creation Modal */}
      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        onSubmit={handleCreateTask}
        defaultStatus={defaultNewStatus}
      />

      {/* Google Sheets Settings & Connection Modal */}
      <SheetConfigDialog
        isOpen={!!sheetConfigProjectTarget}
        onClose={() => setSheetConfigProjectTarget(null)}
        config={sheetConfigProjectTarget?.spreadsheetConfig || null}
        accessToken={token}
        projectName={sheetConfigProjectTarget?.name}
        onConfigChange={handleSheetConfigChange}
      />

      {/* Mandatory User Confirmation Dialog for Destructive Operations */}
      <ConfirmDialog
        isOpen={!!taskToDelete}
        title="Hapus Kartu Tugas?"
        description={
          taskToDelete
            ? `Apakah Anda yakin ingin menghapus "${taskToDelete.title}" (${taskToDelete.id})? Kartu ini akan dihapus dari proyek "${currentProject.name}" dan disinkronkan ke Google Sheets.`
            : 'Apakah Anda yakin ingin menghapus tugas ini?'
        }
        confirmLabel="Ya, Hapus Kartu"
        cancelLabel="Batal"
        isDestructive={true}
        isLoading={isDeletingTask}
        onConfirm={handleConfirmDeleteTask}
        onCancel={() => setTaskToDelete(null)}
      />
    </div>
  );
}
