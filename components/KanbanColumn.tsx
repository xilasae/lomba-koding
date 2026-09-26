'use client';

import React, { useState } from 'react';
import { Plus, Check, X } from 'lucide-react';
import { ColumnDefinition, Task, TaskStatus } from '@/lib/types';
import { KanbanCard } from './KanbanCard';
import { Button } from './ui/button';

interface KanbanColumnProps {
  column: ColumnDefinition;
  tasks: Task[];
  draggingTaskId: string | null;
  onCardSelect: (task: Task) => void;
  onCardDelete: (task: Task) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDropTask: (taskId: string, targetStatus: TaskStatus, targetIndex?: number) => void;
  onQuickAddTask: (status: TaskStatus, title: string) => void;
}

export function KanbanColumn({
  column,
  tasks,
  draggingTaskId,
  onCardSelect,
  onCardDelete,
  onDragStart,
  onDragEnd,
  onDropTask,
  onQuickAddTask,
}: KanbanColumnProps) {
  const [isOver, setIsOver] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!isOver) setIsOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // Only deactivate if leaving the column boundary
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    const taskId = e.dataTransfer.getData('text/plain') || draggingTaskId;
    if (taskId) {
      onDropTask(taskId, column.id);
    }
  };

  const handleQuickAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newTitle.trim();
    if (trimmed) {
      onQuickAddTask(column.id, trimmed);
      setNewTitle('');
      setIsAdding(false);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex flex-col w-72 sm:w-80 shrink-0 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border ${
        isOver
          ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20 ring-2 ring-blue-400/40 shadow-md'
          : 'border-slate-200/80 dark:border-slate-800'
      } transition-all duration-200 h-[calc(100vh-12rem)] max-h-[820px]`}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between px-3.5 py-3 border-b border-slate-200/70 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
            {column.title}
          </h3>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${column.badgeBg} ${column.badgeText}`}
          >
            {tasks.length}
          </span>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
          onClick={() => setIsAdding(true)}
          title={`Tambah tugas ke ${column.title}`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Cards Scroll Container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {/* Quick Add Form inside column */}
        {isAdding && (
          <form
            onSubmit={handleQuickAddSubmit}
            className="p-2.5 rounded-lg border border-blue-400 bg-white dark:bg-slate-900 shadow-sm animate-in fade-in zoom-in-95 duration-150"
          >
            <input
              type="text"
              autoFocus
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Ketik judul tugas..."
              className="w-full text-xs font-medium text-slate-800 dark:text-slate-200 bg-transparent border-none outline-none placeholder:text-slate-400 mb-2"
            />
            <div className="flex items-center justify-end gap-1.5">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={() => {
                  setIsAdding(false);
                  setNewTitle('');
                }}
              >
                <X className="h-3 w-3 mr-1" />
                Batal
              </Button>
              <Button
                type="submit"
                variant="default"
                size="sm"
                className="h-6 px-2 text-xs bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Check className="h-3 w-3 mr-1" />
                Tambah
              </Button>
            </div>
          </form>
        )}

        {/* Task Cards List */}
        {tasks.map((task) => (
          <KanbanCard
            key={task.id}
            task={task}
            isDragging={draggingTaskId === task.id}
            onSelect={onCardSelect}
            onDelete={onCardDelete}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        ))}

        {/* Drop zone placeholder if empty */}
        {tasks.length === 0 && !isAdding && (
          <div
            onClick={() => setIsAdding(true)}
            className="h-28 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-xs text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-500 cursor-pointer transition-colors p-4 text-center"
          >
            <Plus className="h-4 w-4 mb-1" />
            <span>Klik atau seret kartu ke sini</span>
          </div>
        )}
      </div>

      {/* Column Footer: Quick add button */}
      <div className="p-2 border-t border-slate-200/50 dark:border-slate-800/50">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="w-full justify-start text-xs text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 h-8"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="h-3.5 w-3.5 mr-1.5" />
          Tambah Kartu
        </Button>
      </div>
    </div>
  );
}
