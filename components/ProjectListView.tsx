'use client';

import React, { useState } from 'react';
import { User } from 'firebase/auth';
import {
  FolderPlus,
  FolderGit2,
  Search,
  ExternalLink,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  ArrowRight,
  Edit,
  Trash2,
  Layers,
  Sparkles,
  Columns3,
  LogOut,
  X,
} from 'lucide-react';
import { Project } from '@/lib/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ProjectListViewProps {
  projects: Project[];
  user: User | null;
  onSelectProject: (projectId: string) => void;
  onCreateProjectClick: () => void;
  onEditProjectClick: (project: Project) => void;
  onDeleteProjectClick: (project: Project) => void;
  onConfigureSheetsClick: (project: Project) => void;
  onSignIn: () => void;
  onSignOut: () => void;
  isLoggingIn?: boolean;
}

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/50',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/50',
    text: 'text-amber-700 dark:text-amber-300',
    border: 'border-amber-200 dark:border-amber-800',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/50',
    text: 'text-rose-700 dark:text-rose-300',
    border: 'border-rose-200 dark:border-rose-800',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-200 dark:border-indigo-800',
  },
};

export function ProjectListView({
  projects,
  user,
  onSelectProject,
  onCreateProjectClick,
  onEditProjectClick,
  onDeleteProjectClick,
  onConfigureSheetsClick,
  onSignIn,
  onSignOut,
  isLoggingIn = false,
}: ProjectListViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                <Columns3 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Kanban Sheet Flow
                </span>
                <span className="ml-2 text-[11px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 px-2 py-0.5 rounded-full">
                  Multi-Proyek
                </span>
              </div>
            </div>

            {/* Actions on right */}
            <div className="flex items-center gap-3">
              <Button
                variant="default"
                size="sm"
                onClick={onCreateProjectClick}
                className="h-8 px-3 text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xs"
              >
                <FolderPlus className="h-4 w-4 mr-1.5" />
                <span>Proyek Baru</span>
              </Button>

              {user ? (
                <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
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
                    title="Keluar Akun"
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
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Pilihan Proyek
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Pilih salah satu proyek untuk membuka papan kanban dan mengelola tugas tim Anda.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Cari proyek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-xs bg-white dark:bg-slate-900"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const colorStyle = COLOR_MAP[project.color] || COLOR_MAP.blue;
              const totalTasks = project.tasks.length;
              const completedTasks = project.tasks.filter((t) => t.status === 'done').length;
              const inProgressTasks = project.tasks.filter((t) => t.status === 'in_progress').length;
              const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Color Badge & Actions */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${colorStyle.bg} ${colorStyle.text} ${colorStyle.border}`}
                      >
                        {project.tasks.length} Tugas
                      </span>

                      <div className="flex items-center gap-1 text-slate-400">
                        <button
                          type="button"
                          onClick={() => onEditProjectClick(project)}
                          className="p-1 rounded hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
                          title="Ubah Nama Proyek"
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteProjectClick(project)}
                          className="p-1 rounded hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/60 dark:hover:text-red-400 transition-colors"
                          title="Hapus Proyek"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h2
                      onClick={() => onSelectProject(project.id)}
                      className="text-base font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors leading-snug mb-1.5"
                    >
                      {project.name}
                    </h2>

                    {/* Project Description */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description || 'Tidak ada keterangan tambahan untuk proyek ini.'}
                    </p>

                    {/* Task Progress Bar */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        <span>Penyelesaian</span>
                        <span>{progressPercent}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Metrics Breakdown */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-lg bg-slate-50/80 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80 text-[11px] mb-4">
                      <div>
                        <div className="text-slate-400">Total</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">{totalTasks}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Berjalan</div>
                        <div className="font-semibold text-amber-600 dark:text-amber-400">{inProgressTasks}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Selesai</div>
                        <div className="font-semibold text-emerald-600 dark:text-emerald-400">{completedTasks}</div>
                      </div>
                    </div>

                    {/* Google Sheets Status */}
                    <div className="flex items-center justify-between text-xs pt-1 mb-4">
                      {project.spreadsheetConfig ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
                          <FileSpreadsheet className="h-4 w-4 shrink-0" />
                          <span className="truncate max-w-[170px]" title={project.spreadsheetConfig.title}>
                            {project.spreadsheetConfig.title}
                          </span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onConfigureSheetsClick(project)}
                          className="flex items-center gap-1.5 text-slate-500 hover:text-emerald-600 transition-colors text-xs"
                        >
                          <FileSpreadsheet className="h-3.5 w-3.5" />
                          <span>Hubungkan Sheets</span>
                        </button>
                      )}

                      {project.spreadsheetConfig && (
                        <a
                          href={project.spreadsheetConfig.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-emerald-600"
                          title="Buka Spreadsheet di Tab Baru"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Open Kanban Button */}
                  <Button
                    type="button"
                    onClick={() => onSelectProject(project.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs h-9 justify-center font-semibold"
                  >
                    <span>Buka Papan Kanban</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-12 text-center max-w-md mx-auto my-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 mx-auto mb-4">
              <FolderGit2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {searchQuery ? 'Tidak Ada Proyek yang Cocok' : 'Belum Ada Proyek'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
              {searchQuery
                ? `Tidak ditemukan proyek dengan kata kunci "${searchQuery}". Coba kata kunci lain.`
                : 'Mulai dengan membuat proyek pertama untuk membagi tugas dan menyinkronkannya dengan Google Sheets.'}
            </p>
            <Button
              type="button"
              onClick={onCreateProjectClick}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
            >
              <FolderPlus className="h-4 w-4 mr-1.5" />
              <span>Buat Proyek Baru</span>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
