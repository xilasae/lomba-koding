'use client';

import React, { useState } from 'react';
import {
  COLUMNS,
  Task,
  TaskPriority,
  TaskStatus,
} from '@/lib/types';
import { KanbanColumn } from './KanbanColumn';
import {
  CheckCircle2,
  Clock,
  Layers,
  AlertCircle,
  FileSpreadsheet,
  Filter,
} from 'lucide-react';

interface KanbanBoardProps {
  tasks: Task[];
  searchQuery: string;
  priorityFilter: TaskPriority | 'all';
  onCardSelect: (task: Task) => void;
  onCardDelete: (task: Task) => void;
  onDropTask: (taskId: string, targetStatus: TaskStatus) => void;
  onQuickAddTask: (status: TaskStatus, title: string) => void;
}

export function KanbanBoard({
  tasks,
  searchQuery,
  priorityFilter,
  onCardSelect,
  onCardDelete,
  onDropTask,
  onQuickAddTask,
}: KanbanBoardProps) {
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);

  // Apply filters
  const filteredTasks = tasks.filter((task) => {
    // Priority filter
    if (priorityFilter !== 'all' && task.priority !== priorityFilter) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = task.title.toLowerCase().includes(q);
      const matchDesc = task.description.toLowerCase().includes(q);
      const matchAssignee = task.assignee.toLowerCase().includes(q);
      const matchTags = task.tags.some((t) => t.toLowerCase().includes(q));
      const matchId = task.id.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchAssignee || matchTags || matchId;
    }

    return true;
  });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
    setDraggingTaskId(task.id);
  };

  const handleDragEnd = () => {
    setDraggingTaskId(null);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === 'done').length;
  const inProgressTasks = tasks.filter((t) => t.status === 'in_progress').length;
  const urgentTasks = tasks.filter((t) => t.priority === 'urgent' && t.status !== 'done').length;

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Metric summary bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 bg-slate-50/60 dark:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 sm:gap-6 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5 font-medium">
              <Layers className="h-4 w-4 text-blue-600" />
              <span>Total Tugas:</span>
              <strong className="text-slate-900 dark:text-slate-100">{totalTasks}</strong>
            </div>

            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-amber-500" />
              <span>Sedang Berjalan:</span>
              <strong className="text-slate-900 dark:text-slate-100">{inProgressTasks}</strong>
            </div>

            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Selesai:</span>
              <strong className="text-slate-900 dark:text-slate-100">{completedTasks}</strong>
            </div>

            {urgentTasks > 0 && (
              <div className="flex items-center gap-1.5 font-medium text-red-600 dark:text-red-400">
                <AlertCircle className="h-4 w-4" />
                <span>Mendesak:</span>
                <strong>{urgentTasks}</strong>
              </div>
            )}
          </div>

          {(searchQuery || priorityFilter !== 'all') && (
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
              <Filter className="h-3.5 w-3.5" />
              <span>Menampilkan {filteredTasks.length} dari {totalTasks} tugas tersaring</span>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Kanban Lanes */}
      <div className="flex-1 overflow-x-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-start gap-4 pb-4 min-w-max">
          {COLUMNS.map((column) => {
            const columnTasks = filteredTasks.filter((t) => t.status === column.id);
            return (
              <KanbanColumn
                key={column.id}
                column={column}
                tasks={columnTasks}
                draggingTaskId={draggingTaskId}
                onCardSelect={onCardSelect}
                onCardDelete={onCardDelete}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDropTask={onDropTask}
                onQuickAddTask={onQuickAddTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
