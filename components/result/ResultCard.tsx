"use client";

import { formatBytes, formatDuration } from "@/lib/utils/formatBytes";
import type { CompressApiResponse } from "@/types/compression";

interface ResultCardProps {
  result:   CompressApiResponse;
  fileName: string;
  onReset:  () => void;
}

export default function ResultCard({ result, fileName, onReset }: ResultCardProps) {
  const isAlreadyOptimized = result.reductionPercent === 0;

  function handleDownload() {
    if (!result.downloadUrl) return;
    const a = document.createElement("a");
    a.href = result.downloadUrl;
    a.download = result.outputFileName || fileName;
    a.click();
  }

  return (
    <div className="w-full rounded-2xl border border-border bg-surface overflow-hidden animate-fade-up">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={isAlreadyOptimized ? "text-yellow-400" : "text-brand"}>
            {isAlreadyOptimized ? "⚠" : "✓"}
          </span>
          <span className="font-medium text-sm">
            {isAlreadyOptimized ? "Already optimized" : "Compression complete"}
          </span>
        </div>
        <span className="text-xs text-muted">
          {formatDuration(result.processingTimeMs)}
        </span>
      </div>

      {/* Stats */}
      <div className="px-6 py-5">
        {/* Size comparison */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <div className="text-xs text-muted mb-1">Original</div>
            <div className="text-xl font-semibold tabular-nums">
              {formatBytes(result.originalSize)}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-subtle">→</div>
          </div>

          <div>
            <div className="text-xs text-muted mb-1">Compressed</div>
            <div className={[
              "text-xl font-semibold tabular-nums",
              isAlreadyOptimized ? "text-muted" : "text-brand",
            ].join(" ")}>
              {formatBytes(result.compressedSize)}
            </div>
          </div>
        </div>

        {/* Reduction bar */}
        {!isAlreadyOptimized && (
          <div className="mb-5">
            <div className="flex justify-between text-xs text-muted mb-1.5">
              <span>Size reduction</span>
              <span className="text-brand font-medium">
                -{result.reductionPercent}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-surface-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-brand transition-all duration-700"
                style={{ width: `${Math.min(result.reductionPercent, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Warning message for already-optimized */}
        {result.error && (
          <div className="mb-4 text-xs text-yellow-400/80 bg-yellow-400/5 border border-yellow-400/20 rounded-lg px-3 py-2">
            {result.error}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {result.downloadUrl && (
            <button
              onClick={handleDownload}
              className="flex-1 bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-4 text-sm transition-colors duration-150"
            >
              ↓ Download {result.outputFileName ? result.outputFileName.split(".").pop()?.toUpperCase() : "File"}
            </button>
          )}
          <button
            onClick={onReset}
            className="px-4 py-2.5 rounded-xl border border-border text-sm text-muted hover:text-foreground hover:border-brand/30 transition-colors duration-150"
          >
            Compress another
          </button>
        </div>
      </div>
    </div>
  );
}
