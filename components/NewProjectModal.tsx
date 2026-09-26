'use client';

import React, { useState } from 'react';
import { FolderPlus, X, Palette, AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; description: string; color: string }) => void;
  initialData?: { name: string; description: string; color: string } | null;
  isEditing?: boolean;
}

const COLOR_OPTIONS = [
  { id: 'blue', label: 'Biru', class: 'bg-blue-500', border: 'border-blue-500' },
  { id: 'emerald', label: 'Hijau', class: 'bg-emerald-500', border: 'border-emerald-500' },
  { id: 'purple', label: 'Ungu', class: 'bg-purple-500', border: 'border-purple-500' },
  { id: 'amber', label: 'Kuning', class: 'bg-amber-500', border: 'border-amber-500' },
  { id: 'rose', label: 'Merah Muda', class: 'bg-rose-500', border: 'border-rose-500' },
  { id: 'indigo', label: 'Indigo', class: 'bg-indigo-500', border: 'border-indigo-500' },
];

export function NewProjectModal({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
  isEditing = false,
}: NewProjectModalProps) {
  const [prevInitialData, setPrevInitialData] = useState(initialData);
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [color, setColor] = useState(initialData?.color || 'blue');

  if (prevInitialData !== initialData) {
    setPrevInitialData(initialData);
    setName(initialData?.name || '');
    setDescription(initialData?.description || '');
    setColor(initialData?.color || 'blue');
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSubmit({
      name: name.trim(),
      description: description.trim(),
      color,
    });
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FolderPlus className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {isEditing ? 'Ubah Informasi Proyek' : 'Buat Proyek Baru'}
              </h3>
              <p className="text-xs text-slate-500">
                {isEditing
                  ? 'Perbarui judul atau keterangan proyek'
                  : 'Siapkan ruang kerja baru untuk papan kanban tim Anda'}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Nama Proyek <span className="text-red-500">*</span>
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Peluncuran Website Produk 2.0"
              className="text-sm"
              required
              autoFocus
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <AlignLeft className="h-3.5 w-3.5" />
              Keterangan / Deskripsi Singkat
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi target atau tujuan dari proyek ini..."
              rows={3}
              className="text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Palette className="h-3.5 w-3.5" />
              Warna Tema Proyek
            </label>
            <div className="flex items-center gap-2 pt-1">
              {COLOR_OPTIONS.map((c) => {
                const isSelected = color === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setColor(c.id)}
                    className={`h-7 w-7 rounded-full ${c.class} transition-all cursor-pointer flex items-center justify-center ${
                      isSelected
                        ? 'ring-2 ring-offset-2 ring-slate-900 dark:ring-slate-100 scale-110'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    title={c.label}
                  />
                );
              })}
            </div>
          </div>

          {/* Footer buttons */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
            <Button type="button" variant="outline" size="sm" onClick={onClose} className="text-xs">
              Batal
            </Button>
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
            >
              {isEditing ? 'Simpan Perubahan' : 'Buat Proyek'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
