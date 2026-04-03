"use client";

import { useCallback, useRef, useState } from "react";
import { validateFileClient } from "@/lib/validation/fileValidator";
import { formatBytes } from "@/lib/utils/formatBytes";
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
      // Reset so same file can be re-selected
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
        className={[
          "relative cursor-pointer rounded-[2rem] border-2 border-dashed p-12 md:p-20",
          "flex flex-col items-center justify-center gap-6 text-center",
          "transition-all duration-500 shadow-sm glow-hover",
          dragOver
            ? "border-brand bg-brand-light shadow-premium scale-[1.01]"
            : "border-border bg-surface hover:border-brand/40 hover:shadow-md",
          disabled ? "opacity-50 cursor-not-allowed" : "",
        ].join(" ")}
      >
        {/* Upload icon */}
        <div className={[
          "w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-4xl",
          "bg-gradient-to-br from-brand-light to-surface-muted shadow-sm",
          "transition-all duration-500",
          dragOver ? "from-brand to-brand-vibrant text-white scale-110 rotate-12" : "text-brand",
        ].join(" ")}>
          {dragOver ? "⬇" : "⬆"}
        </div>

        <div>
          <p className="text-2xl font-bold tracking-tight text-foreground">
            {dragOver ? "Drop to optimize" : "Drag & drop files"}
          </p>
          <p className="text-sm text-muted mt-1.5 font-medium">
            or <span className="text-brand hover:underline decoration-2 underline-offset-4">click to browse</span>
          </p>
        </div>

        {/* Supported types */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {SUPPORTED_TYPE_LABELS.map((label) => (
            <span
              key={label}
              className="px-2.5 py-1 rounded-full bg-surface-muted text-xs font-mono text-muted"
            >
              {label}
            </span>
          ))}
          <span className="text-xs text-subtle">
            · Max {MAX_FILE_SIZE_LABEL}
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
        <p className="mt-3 text-sm text-red-400 flex items-start gap-2">
          <span className="mt-0.5">⚠</span>
          <span>{localError}</span>
        </p>
      )}
    </div>
  );
}
