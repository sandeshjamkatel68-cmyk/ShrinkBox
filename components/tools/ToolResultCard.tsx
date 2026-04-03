"use client";

import { formatBytes, formatDuration } from "@/lib/utils/formatBytes";
import type { ToolApiResponse } from "@/types/compression";

interface ToolResultCardProps {
  result:  ToolApiResponse;
  onReset: () => void;
  label?:  string; // e.g. "Converted", "Resized", "Merged"
}

export default function ToolResultCard({ result, onReset, label = "Done" }: ToolResultCardProps) {
  function handleDownload() {
    if (!result.downloadUrl) return;
    const a = document.createElement("a");
    a.href = result.downloadUrl;
    a.download = result.outputFileName || "output";
    a.click();
  }

  const ext = result.outputFileName.split(".").pop()?.toUpperCase() ?? "FILE";

  return (
    <div className="w-full rounded-2xl border border-border bg-surface overflow-hidden animate-fade-up" style={{ boxShadow: "var(--shadow-md)" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-brand">✓</span>
          <span className="font-medium text-sm">{label}</span>
        </div>
        <span className="text-xs text-muted">{formatDuration(result.processingTimeMs)}</span>
      </div>

      <div className="px-6 py-5">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <div className="text-xs text-muted mb-1">Original</div>
            <div className="text-xl font-semibold tabular-nums">{formatBytes(result.originalSize)}</div>
          </div>
          <div className="flex items-center justify-center text-subtle">→</div>
          <div>
            <div className="text-xs text-muted mb-1">Output</div>
            <div className="text-xl font-semibold tabular-nums text-brand">
              {formatBytes(result.outputSize)}
            </div>
          </div>
        </div>

        {/* Reduction bar — only when there's actual reduction */}
        {result.reductionPercent > 0 && (
          <div className="mb-5">
            <div className="flex justify-between text-xs text-muted mb-1.5">
              <span>Size reduction</span>
              <span className="text-brand font-medium">-{result.reductionPercent}%</span>
            </div>
            <div className="h-2 rounded-full bg-surface-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-brand transition-all duration-700"
                style={{ width: `${Math.min(result.reductionPercent, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Soft warning */}
        {result.error && (
          <div className="mb-4 text-xs text-yellow-500/90 bg-yellow-400/5 border border-yellow-400/20 rounded-lg px-3 py-2">
            {result.error}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {result.downloadUrl && (
            <button
              onClick={handleDownload}
              className="flex-1 bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-4 text-sm transition-colors"
            >
              ↓ Download {ext}
            </button>
          )}
          <button
            onClick={onReset}
            className="px-4 py-2.5 rounded-xl border border-border text-sm text-muted hover:text-foreground hover:border-brand/30 transition-colors"
          >
            Try another
          </button>
        </div>
      </div>
    </div>
  );
}
