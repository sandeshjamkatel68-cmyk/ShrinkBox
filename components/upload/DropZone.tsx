"use client";

import { useCallback, useRef, useState } from "react";
import { validateFileClient } from "@/lib/validation/fileValidator";
import { SUPPORTED_TYPE_LABELS, MAX_FILE_SIZE_LABEL } from "@/lib/validation/constants";

interface DropZoneProps {
  onFile: (file: File) => void;
  disabled?: boolean;
}

export default function DropZone({ onFile, disabled }: DropZoneProps) {
  const [dragOver, setDragOver]   = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      setLocalError(null);
      const validation = validateFileClient(file);
      if (!validation.valid) {
        setLocalError(validation.error ?? "Invalid file.");
        return;
      }
      onFile(file);
    },
    [onFile]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (disabled) return;
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [disabled, handleFile]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      e.target.value = "";
    },
    [handleFile]
  );

  return (
    <div className="w-full">
      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={`
          relative cursor-pointer rounded-[2.5rem] border-2 border-dashed p-10 md:p-16
          flex flex-col items-center justify-center gap-6 text-center
          transition-all duration-500 overflow-hidden
          ${dragOver 
            ? "border-brand bg-brand-light/50 scale-[1.02] shadow-glow" 
            : "border-border bg-surface hover:border-brand/40 hover:shadow-lg"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        {/* Animated Background Pulse for drag over */}
        {dragOver && (
          <div className="absolute inset-0 bg-brand/5 animate-pulse" />
        )}

        {/* Upload icon logic */}
        <div className={`
          w-16 h-16 rounded-2xl flex items-center justify-center text-2xl
          transition-all duration-500 shadow-sm z-10
          ${dragOver ? "bg-brand text-white rotate-12 scale-110" : "bg-brand-light text-brand"}
        `}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>

        <div className="z-10">
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {dragOver ? "Drop to optimize" : "Drag & drop files"}
          </p>
          <p className="text-sm text-muted mt-1.5 font-medium">
            or <span className="text-brand hover:underline decoration-2 underline-offset-4">click to browse</span>
          </p>
        </div>

        {/* Supported types */}
        <div className="flex items-center gap-2 flex-wrap justify-center z-10">
          {SUPPORTED_TYPE_LABELS.map((label) => (
            <span
              key={label}
              className="px-2.5 py-1 rounded-full bg-surface-muted text-2xs font-bold text-muted border border-border"
            >
              {label}
            </span>
          ))}
          <span className="text-2xs font-bold text-subtle uppercase tracking-wider ml-1">
            Max {MAX_FILE_SIZE_LABEL}
          </span>
        </div>

        {/* Hidden file input */}
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.pdf"
          onChange={onInputChange}
          className="sr-only"
          aria-label="Upload file for compression"
        />
      </div>

      {/* Inline validation error */}
      {localError && (
        <div className="mt-4 p-3 rounded-xl border border-error/20 bg-error/5 text-error text-xs font-semibold flex items-center gap-2 animate-fade-in">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {localError}
        </div>
      )}
    </div>
  );
}
