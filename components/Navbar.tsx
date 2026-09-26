'use client';

import React from 'react';
import {
  Columns3,
  Search,
  Plus,
  RefreshCw,
  ExternalLink,
  FileSpreadsheet,
  LogOut,
  ChevronLeft,
  ChevronDown,
  X,
  Layers,
} from 'lucide-react';
import { User } from 'firebase/auth';
import { Project, SpreadsheetConfig, SyncState, TaskPriority } from '@/lib/types';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface NavbarProps {
  user: User | null;
  currentProject: Project | null;
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  onBackToProjects: () => void;
  spreadsheetConfig: SpreadsheetConfig | null;
  syncState: SyncState;
  lastSyncedText: string;
  searchQuery: string;
  priorityFilter: TaskPriority | 'all';
  onSearchChange: (q: string) => void;
  onPriorityFilterChange: (p: TaskPriority | 'all') => void;
  onOpenNewTaskModal: () => void;
  onOpenSheetConfig: () => void;
  onManualSync: () => void;
  onSignIn: () => void;
  onSignOut: () => void;
  isLoggingIn?: boolean;
}

export function Navbar({
  user,
  currentProject,
  projects,
  onSelectProject,
  onBackToProjects,
  spreadsheetConfig,
  syncState,
  lastSyncedText,
  searchQuery,
  priorityFilter,
  onSearchChange,
  onPriorityFilterChange,
  onOpenNewTaskModal,
  onOpenSheetConfig,
  onManualSync,
  onSignIn,
  onSignOut,
  isLoggingIn = false,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Left Brand & Project Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Back to all projects button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onBackToProjects}
              className="h-8 px-2.5 text-xs text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 gap-1"
              title="Kembali ke Daftar Proyek"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Semua Proyek</span>
            </Button>

            {/* Project Switcher Select */}
            {currentProject && (
              <div className="relative flex items-center">
                <select
                  value={currentProject.id}
                  onChange={(e) => onSelectProject(e.target.value)}
                  className="h-8 max-w-[150px] sm:max-w-[210px] truncate pl-2 pr-7 text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-100/90 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 outline-none cursor-pointer hover:bg-slate-200/70"
                >
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 h-3.5 w-3.5 pointer-events-none text-slate-500" />
              </div>
            )}
          </div>

          {/* Center: Search & Filter */}
          <div className="flex-1 max-w-md mx-2 hidden lg:flex items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari tugas di proyek ini..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 h-9 text-xs w-full bg-slate-50 dark:bg-slate-800/60"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <select
              value={priorityFilter}
              onChange={(e) => onPriorityFilterChange(e.target.value as TaskPriority | 'all')}
              className="h-9 px-2.5 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Prioritas</option>
              <option value="urgent">Mendesak</option>
              <option value="high">Tinggi</option>
              <option value="medium">Menengah</option>
              <option value="low">Rendah</option>
            </select>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Google Sheets Connection Pill */}
            {spreadsheetConfig ? (
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900 bg-emerald-50/80 dark:bg-emerald-950/40 text-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span
                  className="font-medium text-emerald-800 dark:text-emerald-300 max-w-[120px] truncate"
                  title={spreadsheetConfig.title}
                >
                  {spreadsheetConfig.title}
                </span>
                <a
                  href={spreadsheetConfig.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:text-emerald-900 dark:text-emerald-400 p-0.5"
                  title="Buka Spreadsheet di Tab Baru"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={onOpenSheetConfig}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-[10px] underline ml-1"
                >
                  Ubah
                </button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenSheetConfig}
                className="text-xs h-8 gap-1.5 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950/60"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Hubungkan</span> Sheets
              </Button>
            )}

            {/* Sync State Status & Manual Sync Button */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={onManualSync}
                disabled={syncState === 'syncing'}
                className="h-8 px-2 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900"
                title={`Sinkronkan manual (${lastSyncedText})`}
              >
                <RefreshCw
                  className={`h-3.5 w-3.5 ${
                    syncState === 'syncing' ? 'animate-spin text-blue-600' : ''
                  }`}
                />
                <span className="hidden md:inline ml-1.5">
                  {syncState === 'syncing'
                    ? 'Sinkron...'
                    : syncState === 'synced'
                    ? 'Tersinkron'
                    : 'Sinkronkan'}
                </span>
              </Button>
            </div>

            {/* New Task Button */}
            <Button
              variant="default"
              size="sm"
              onClick={onOpenNewTaskModal}
              className="h-8 px-3 text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-xs font-semibold"
            >
              <Plus className="h-3.5 w-3.5 mr-1" />
              <span>Tugas Baru</span>
            </Button>

            {/* User Profile or Google Sign-In Button */}
            {user ? (
              <div className="flex items-center gap-2 pl-1 border-l border-slate-200 dark:border-slate-800">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600"
                  title={user.email || user.displayName || 'Pengguna'}
                >
                  {user.photoURL ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Akun'}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span>{(user.displayName || user.email || 'U').charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onSignOut}
                  className="h-8 w-8 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/60"
                  title="Keluar dari Akun"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={onSignIn}
                disabled={isLoggingIn}
                className="h-8 px-2.5 text-xs font-medium border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200"
              >
                <svg className="h-3.5 w-3.5 mr-1.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                  />
                </svg>
                <span>{isLoggingIn ? 'Memproses...' : 'Masuk Google'}</span>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Search Bar row */}
        <div className="lg:hidden pb-3 pt-1 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <Input
              type="text"
              placeholder="Cari tugas di proyek ini..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-8 h-8 text-xs w-full bg-slate-50 dark:bg-slate-800"
            />
          </div>
          <select
            value={priorityFilter}
            onChange={(e) => onPriorityFilterChange(e.target.value as TaskPriority | 'all')}
            className="h-8 px-2 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300"
          >
            <option value="all">Semua</option>
            <option value="urgent">Mendesak</option>
            <option value="high">Tinggi</option>
            <option value="medium">Menengah</option>
            <option value="low">Rendah</option>
          </select>
        </div>
      </div>
    </header>
  );
}

