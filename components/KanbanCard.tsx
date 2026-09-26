'use client';

import React from 'react';
import { GripVertical } from 'lucide-react';
import { Task } from '@/lib/types';

interface KanbanCardProps {
  task: Task;
  onSelect: (task: Task) => void;
  onDelete?: (task: Task) => void;
  isDragging?: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}

export function KanbanCard({
  task,
  onSelect,
  isDragging = false,
  onDragStart,
  onDragEnd,
}: KanbanCardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onDragEnd={onDragEnd}
      onClick={() => onSelect(task)}
      className={`group relative rounded-lg border bg-white p-3 shadow-2xs transition-all duration-150 cursor-grab active:cursor-grabbing hover:border-blue-400 hover:shadow-xs dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500/70 select-none ${
        isDragging
          ? 'opacity-40 ring-2 ring-blue-500 scale-[0.98]'
          : 'opacity-100'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {task.title}
        </h4>
        <GripVertical className="h-4 w-4 text-slate-300 dark:text-slate-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
      </div>
    </div>
  );
}

