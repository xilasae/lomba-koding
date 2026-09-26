'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  ExternalLink,
  Plus,
  Link as LinkIcon,
  CheckCircle2,
  X,
  RefreshCw,
  FolderOpen,
} from 'lucide-react';
import { SpreadsheetConfig } from '@/lib/types';
import { extractSpreadsheetId, createSpreadsheet, getSpreadsheetDetails } from '@/lib/sheets';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface SheetConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  config: SpreadsheetConfig | null;
  accessToken: string | null;
  projectName?: string;
  onConfigChange: (newConfig: SpreadsheetConfig | null) => void;
}

export function SheetConfigDialog({
  isOpen,
  onClose,
  config,
  accessToken,
  projectName = 'Proyek Kanban',
  onConfigChange,
}: SheetConfigDialogProps) {
  const [tab, setTab] = useState<'existing' | 'create'>('create');
  const [spreadsheetInput, setSpreadsheetInput] = useState('');
  const [prevProjectName, setPrevProjectName] = useState(projectName);
  const [customTitle, setCustomTitle] = useState(`Kanban Sheet Flow - ${projectName}`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (prevProjectName !== projectName) {
    setPrevProjectName(projectName);
    setCustomTitle(`Kanban Sheet Flow - ${projectName}`);
  }

  if (!isOpen) return null;

  const handleCreateNew = async () => {
    if (!accessToken) {
      setError('Silakan masuk dengan akun Google terlebih dahulu.');
      return;
    }
    try {
      setIsLoading(true);
      setError(null);
      const newConfig = await createSpreadsheet(accessToken, customTitle.trim() || undefined);
      onConfigChange(newConfig);
      onClose();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal membuat spreadsheet baru.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnectExisting = async () => {
    if (!accessToken) {
      setError('Silakan masuk dengan akun Google terlebih dahulu.');
      return;
    }
    const cleanId = extractSpreadsheetId(spreadsheetInput);
    if (!cleanId) {
      setError('Format Spreadsheet ID atau URL tidak valid.');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const details = await getSpreadsheetDetails(accessToken, cleanId);
      const newConfig: SpreadsheetConfig = {
        id: cleanId,
        title: details.title,
        url: details.url,
        sheetName: details.sheetNames[0] || 'KanbanTasks',
        connectedAt: new Date().toISOString(),
        lastSyncedAt: new Date().toISOString(),
      };
      onConfigChange(newConfig);
      onClose();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal menghubungkan spreadsheet.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    onConfigChange(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                Pengaturan Google Sheets
              </h3>
              <p className="text-xs text-slate-500">
                Sinkronisasi otomatis tugas kanban dengan spreadsheet
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Current status display */}
        {config ? (
          <div className="my-5 p-4 rounded-lg border border-emerald-200 bg-emerald-50/70 dark:border-emerald-900/80 dark:bg-emerald-950/40 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                Terhubung ke Spreadsheet
              </div>
              <a
                href={config.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 underline"
              >
                <span>Buka di Google Sheets</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Judul:</span> {config.title}
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Sheet Tab:</span> {config.sheetName}
              </div>
              <div className="font-mono text-[11px] text-slate-500 truncate">
                ID: {config.id}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDisconnect}
                className="text-xs text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900/80 dark:hover:bg-red-950/50"
              >
                Putuskan Sambungan
              </Button>
            </div>
          </div>
        ) : (
          <div className="my-4 space-y-4">
            {/* Tabs for switching between create new or use existing */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => setTab('create')}
                className={`py-2 px-3 rounded-md transition-all ${
                  tab === 'create'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Buat Spreadsheet Baru
              </button>
              <button
                type="button"
                onClick={() => setTab('existing')}
                className={`py-2 px-3 rounded-md transition-all ${
                  tab === 'existing'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Sambungkan yang Ada
              </button>
            </div>

            {tab === 'create' ? (
              <div className="space-y-3 p-3 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-950/50">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Aplikasi akan membuat spreadsheet baru di akun Google Drive Anda lengkap dengan format kolom: ID, Judul, Deskripsi, Status, Prioritas, Penanggung Jawab, Tenggat Waktu, dan Label.
                </p>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Nama Spreadsheet
                  </label>
                  <Input
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="Kanban Sheet Flow - Task Tracker"
                    className="text-xs"
                  />
                </div>
                <Button
                  onClick={handleCreateNew}
                  disabled={isLoading || !accessToken}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-9"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                      Membuat Spreadsheet...
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5 mr-1.5" />
                      Buat & Sinkronkan Otomatis
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-3 p-3 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-950/50">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Tempel URL lengkap spreadsheet atau Spreadsheet ID dari Google Sheets Anda yang sudah memiliki izin akses.
                </p>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    URL atau ID Spreadsheet
                  </label>
                  <Input
                    value={spreadsheetInput}
                    onChange={(e) => setSpreadsheetInput(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/.../edit"
                    className="text-xs"
                  />
                </div>
                <Button
                  onClick={handleConnectExisting}
                  disabled={isLoading || !spreadsheetInput.trim() || !accessToken}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs h-9"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                      Menghubungkan...
                    </>
                  ) : (
                    <>
                      <LinkIcon className="h-3.5 w-3.5 mr-1.5" />
                      Hubungkan Spreadsheet
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="p-3 mb-4 rounded-md bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 leading-normal">
            {error}
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-slate-100 dark:border-slate-800">
          <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
}
