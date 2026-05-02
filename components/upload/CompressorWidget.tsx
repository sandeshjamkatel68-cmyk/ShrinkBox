"use client";

import { useState } from "react";
import DropZone from "@/components/upload/DropZone";
import CompressionOptions from "@/components/upload/CompressionOptions";
import ProgressBar from "@/components/ui/ProgressBar";
import ResultCard from "@/components/result/ResultCard";
import { useCompression } from "@/hooks/useCompression";
import { formatBytes } from "@/lib/utils/formatBytes";
import { getExtension } from "@/lib/utils/mimeDetect";
import type { CompressionLevel } from "@/types/compression";

export default function CompressorWidget() {
  const { state, compress, reset } = useCompression();
  const [level, setLevel] = useState<CompressionLevel>("medium");

  const isProcessing =
    state.status === "validating" ||
    state.status === "uploading"  ||
    state.status === "compressing";

  const isPdf = state.file
    ? getExtension(state.file.name) === "pdf"
    : false;

  async function handleFile(file: File) {
    await compress(file, level);
  }

  // Show result
  if (state.status === "done" && state.result) {
    return (
      <div className="animate-scale-in">
        <ResultCard
          result={state.result}
          fileName={state.file?.name ?? "compressed-file"}
          onReset={reset}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Drop zone — hide while processing */}
      {!isProcessing && state.status !== "done" && (
        <>
          <DropZone onFile={handleFile} disabled={isProcessing} />

          {/* Show selected file info + options before compression starts */}
          {state.file && state.status === "idle" && (
            <div className="card-base p-6 flex flex-col gap-6 animate-fade-up">
              {/* File preview row */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-muted flex items-center justify-center text-xl shadow-inner">
                  {isPdf ? "📄" : "🖼️"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-bold truncate text-foreground">{state.file.name}</p>
                  <p className="text-xs text-muted font-medium">{formatBytes(state.file.size)}</p>
                </div>
                <button
                  onClick={reset}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-error hover:bg-error/5 transition-all"
                  title="Remove file"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Compression options */}
              <div className="pt-2">
                <CompressionOptions
                  value={level}
                  onChange={setLevel}
                  showForPdf={isPdf}
                />
              </div>

              {/* Compress button */}
              <button
                onClick={() => state.file && compress(state.file, level)}
                className="w-full btn-primary py-4 text-[15px]"
              >
                Start Optimization
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          )}
        </>
      )}

      {/* Progress */}
      {isProcessing && state.file && (
        <div className="animate-fade-in">
          <ProgressBar
            status={state.status}
            progress={state.progress}
            fileName={state.file.name}
          />
        </div>
      )}

      {/* Error state */}
      {state.status === "error" && state.error && (
        <div className="rounded-2xl border border-error/20 bg-error/5 px-6 py-5 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center text-error">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold text-foreground">Optimization failed</p>
              <p className="text-xs text-muted mt-1 leading-relaxed">{state.error}</p>
              <button
                onClick={reset}
                className="mt-4 text-xs font-bold text-brand hover:text-brand-dim flex items-center gap-1.5 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M21.5 22v-6h-6"/><path d="M22 11.5A10 10 0 003.2 7.2M2 12.5a10 10 0 0018.8 4.3"/></svg>
                Return to upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
