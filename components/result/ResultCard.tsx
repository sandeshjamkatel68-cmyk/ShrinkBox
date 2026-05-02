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
    <div className="w-full card-base overflow-hidden animate-scale-in">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-surface-muted/30">
        <div className="flex items-center gap-2.5">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
            isAlreadyOptimized ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
          }`}>
            {isAlreadyOptimized ? "⚠️" : "✓"}
          </div>
          <span className="font-bold text-sm text-foreground">
            {isAlreadyOptimized ? "Already Optimized" : "Successfully Compressed"}
          </span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-subtle bg-surface px-2 py-1 rounded-md border border-border">
          {formatDuration(result.processingTimeMs)}
        </span>
      </div>

      {/* Stats */}
      <div className="px-6 py-7">
        {/* Size comparison */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-subtle mb-1">Original</div>
            <div className="text-xl font-black tabular-nums text-foreground">
              {formatBytes(result.originalSize)}
            </div>
          </div>

          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-surface shrink-0 group">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-subtle group-hover:text-brand transition-colors"><polyline points="13 17 18 12 13 7"/><line x1="6" y1="17" x2="6" y2="7"/></svg>
          </div>

          <div className="flex-1 text-right">
            <div className="text-[10px] font-bold uppercase tracking-wider text-subtle mb-1">Compressed</div>
            <div className={`text-xl font-black tabular-nums ${
              isAlreadyOptimized ? "text-muted" : "text-brand"
            }`}>
              {formatBytes(result.compressedSize)}
            </div>
          </div>
        </div>

        {/* Reduction pill & chart */}
        {!isAlreadyOptimized && (
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2.5">
              <span className="text-xs font-bold text-foreground">Optimization Result</span>
              <span className="text-sm font-black text-brand bg-brand-light px-2 py-0.5 rounded-md border border-brand/10">
                -{result.reductionPercent}%
              </span>
            </div>
            <div className="h-3 rounded-full bg-surface-muted overflow-hidden p-0.5 border border-border/50">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-brand-vibrant shadow-brand transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(result.reductionPercent, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Warning message for already-optimized */}
        {result.error && (
          <div className="mb-6 p-3 rounded-xl border border-warning/20 bg-warning/5 text-xs text-warning leading-relaxed flex gap-2">
            <span className="shrink-0">⚠️</span>
            {result.error}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {result.downloadUrl && (
            <button
              onClick={handleDownload}
              className="flex-[2] btn-primary py-3.5 shadow-brand text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Result
            </button>
          )}
          <button
            onClick={onReset}
            className="flex-1 rounded-xl border border-border bg-surface text-sm font-bold text-muted hover:text-foreground hover:border-brand/30 hover:bg-surface-muted/30 transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
