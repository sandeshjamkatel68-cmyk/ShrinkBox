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
          "relative cursor-pointer rounded-2xl border-2 border-dashed p-10 md:p-16",
          "flex flex-col items-center justify-center gap-4 text-center",
          "transition-all duration-200",
          dragOver
            ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]"
            : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50",
          disabled ? "opacity-50 cursor-not-allowed" : "",
        ].join(" ")}
      >
        {/* Upload icon */}
        <div className={[
          "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl",
          "bg-[var(--surface-muted)] transition-colors duration-200",
          dragOver ? "bg-[rgba(34,197,94,0.12)] text-[var(--brand)]" : "text-[var(--text-muted)]",
        ].join(" ")}>
          {dragOver ? "⬇" : "⬆"}
        </div>

        <div>
          <p className="text-lg font-medium text-[var(--text)]">
            {dragOver ? "Drop your file here" : "Drag & drop your file here"}
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            or <span className="text-[var(--brand)] font-medium">click to browse</span>
          </p>
        </div>

        {/* Supported types */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {SUPPORTED_TYPE_LABELS.map((label) => (
            <span
              key={label}
              className="px-2.5 py-1 rounded-full bg-[var(--surface-muted)] text-xs font-mono text-[var(--text-muted)]"
            >
              {label}
            </span>
          ))}
          <span className="text-xs text-[var(--text-subtle)]">
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
