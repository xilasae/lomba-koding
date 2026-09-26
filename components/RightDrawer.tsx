'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  User,
  Tag,
  AlertCircle,
  Clock,
  CheckCircle2,
  Layers,
  ArrowRight,
  Eye,
  FileText,
} from 'lucide-react';
import { Task, TaskPriority, COLUMNS } from '@/lib/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface RightDrawerProps {
  isOpen: boolean;
  task: Task | null;
  onClose: () => void;
  onSave?: (updatedTask: Task) => void;
  onDelete?: (task: Task) => void;
  isSyncing?: boolean;
}

const PRIORITY_LABELS: Record<
  TaskPriority,
  { label: string; variant: 'low' | 'medium' | 'high' | 'urgent' }
> = {
  low: { label: 'Rendah', variant: 'low' },
  medium: { label: 'Menengah', variant: 'medium' },
  high: { label: 'Tinggi', variant: 'high' },
  urgent: { label: 'Mendesak', variant: 'urgent' },
};

function renderFormattedPoints(text: string) {
  if (!text) {
    return <p className="text-slate-500 italic text-xs">Tidak ada deskripsi rinci untuk tiket ini.</p>;
  }

  const lines = text.split('\n');
  return (
    <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Bullet point lines starting with - or *
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const content = trimmed.substring(2);
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-blue-500 dark:text-blue-400 select-none font-bold text-sm leading-tight">•</span>
              <span className="flex-1">{content}</span>
            </div>
          );
        }

        // Numbered list lines (e.g. 1. 2. 3.)
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400 min-w-[16px]">
                {numMatch[1]}.
              </span>
              <span className="flex-1">{numMatch[2]}</span>
            </div>
          );
        }

        // Header lines like "Kategori:", "Deskripsi:", "Spesifikasi Output:", "Definisi Selesai (DoD):"
        const headerMatch = trimmed.match(/^([^:]+:)(.*)$/);
        if (headerMatch && !trimmed.startsWith('http')) {
          return (
            <div key={idx} className="pt-2 first:pt-0">
              <span className="font-semibold text-slate-900 dark:text-slate-100">{headerMatch[1]}</span>
              {headerMatch[2] ? <span className="ml-1">{headerMatch[2]}</span> : null}
            </div>
          );
        }

        return <p key={idx}>{line}</p>;
      })}
    </div>
  );
}

export function RightDrawer({
  isOpen,
  task,
  onClose,
}: RightDrawerProps) {
  if (!isOpen || !task) return null;

  const currentColumn = COLUMNS.find((col) => col.id === task.status) || COLUMNS[0];
  const priorityInfo = PRIORITY_LABELS[task.priority] || PRIORITY_LABELS.medium;

  const formattedCreated = task.createdAt
    ? new Date(task.createdAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '-';

  const formattedUpdated = task.updatedAt
    ? new Date(task.updatedAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '-';

  const formattedDueDate = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Tidak ditentukan';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
        />

        {/* Sliding Drawer Panel (View Only) */}
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="w-screen max-w-md sm:max-w-lg pointer-events-auto bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-full"
          >
            {/* Drawer Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-900/80">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-xs font-semibold px-2 py-0.5">
                  {task.id}
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  Mode Tinjauan Tiket
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                title="Tutup Panel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Drawer Content (Read-Only) */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {/* Task Title */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Judul Tiket Kerja
                </span>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {task.title}
                </h2>
              </div>

              {/* Status and Priority Meta Row */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <ArrowRight className="h-3 w-3" />
                    Status Tahapan
                  </span>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${currentColumn.badgeBg} ${currentColumn.badgeText} ${currentColumn.accentColor}`}
                    >
                      {currentColumn.title}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Prioritas
                  </span>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <Badge variant={priorityInfo.variant} className="text-xs px-2.5 py-1">
                      {priorityInfo.label}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Assignee and Due Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    Penanggung Jawab
                  </span>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 text-xs font-bold">
                      {(task.assignee || 'Z').charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {task.assignee || 'ZAYYAN NAFI PRATAMA'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    Tenggat Waktu
                  </span>
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200 pt-1">
                    {formattedDueDate}
                  </div>
                </div>
              </div>

              {/* Tags / Labels */}
              {task.tags.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" />
                    Label Kategori
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description & Definition of Done (DoD) */}
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" />
                  Spesifikasi Tiket & Definisi Selesai (DoD)
                </span>
                <div className="p-4 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40">
                  {renderFormattedPoints(task.description)}
                </div>
              </div>

              {/* Audit Timestamps */}
              <div className="rounded-lg border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40 p-3 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>Dibuat: {formattedCreated}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                  <span>Terakhir Diperbarui: {formattedUpdated}</span>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions (Read-Only) */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onClose}
                className="text-xs px-4"
              >
                Tutup
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
