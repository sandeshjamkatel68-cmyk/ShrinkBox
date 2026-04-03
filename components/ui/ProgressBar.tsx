"use client";

import type { UploadStatus } from "@/types/compression";

const STATUS_LABELS: Record<UploadStatus, string> = {
  idle:        "",
  validating:  "Checking file...",
  uploading:   "Uploading...",
  compressing: "Compressing...",
  done:        "Done",
  error:       "Error",
};

interface ProgressBarProps {
  status:   UploadStatus;
  progress: number;
  fileName: string;
}

export default function ProgressBar({ status, progress, fileName }: ProgressBarProps) {
  if (status === "idle" || status === "done" || status === "error") return null;

  return (
    <div className="w-full rounded-2xl border border-border bg-surface px-6 py-5 animate-fade-up">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-medium">{STATUS_LABELS[status]}</p>
          <p className="text-xs text-muted mt-0.5 truncate max-w-[240px]">{fileName}</p>
        </div>
        <span className="text-sm font-mono text-brand">{progress}%</span>
      </div>

      <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
        <div
          className={[
            "h-full rounded-full transition-all duration-500",
            progress < 100 ? "shimmer" : "bg-brand",
          ].join(" ")}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
