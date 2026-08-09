"use client";

import { useCallback, useRef, useState } from "react";

interface DropZoneProps {
  accept: string;
  multiple?: boolean;
  onFiles: (files: File[]) => void;
  label: string;
  hint?: string;
}

export default function DropZone({ accept, multiple = true, onFiles, label, hint }: DropZoneProps) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      onFiles(Array.from(fileList));
    },
    [onFiles]
  );

  return (
    <div>
      {/* Touch devices: a real button, not a drag target */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="sm:hidden w-full min-h-[44px] py-3.5 px-4 bg-signal text-white font-sans font-medium text-sm rounded"
      >
        {label}
      </button>

      {/* Desktop: dashed drop zone */}
      <div
        className={`hidden sm:flex drop-zone flex-col items-center justify-center gap-3 px-6 py-14 text-center cursor-pointer transition-colors ${
          dragging ? "border-signal bg-[color-mix(in_srgb,var(--signal)_6%,transparent)]" : ""
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        role="button"
        tabIndex={0}
        aria-label={label}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M14 4v14M14 4l-5 5M14 4l5 5" stroke="var(--ink-dim)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20v2.5A1.5 1.5 0 0 0 6.5 24h15a1.5 1.5 0 0 0 1.5-1.5V20" stroke="var(--ink-dim)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <p className="font-sans text-sm text-ink">{label}</p>
        {hint && <p className="font-sans text-xs text-ink-dim">{hint}</p>}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
