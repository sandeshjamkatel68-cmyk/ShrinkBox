"use client";

import { useState } from "react";
import DropZone from "@/components/upload/DropZone";
import CompressionOptions from "@/components/upload/CompressionOptions";
import ProgressBar from "@/components/ui/ProgressBar";
import ResultCard from "@/components/result/ResultCard";
import { useCompression } from "@/hooks/useCompression";
import { formatBytes } from "@/lib/utils/formatBytes";
import { mimeFromExtension, getExtension } from "@/lib/utils/mimeDetect";
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
      <ResultCard
        result={state.result}
        fileName={state.file?.name ?? "compressed-file"}
        onReset={reset}
      />
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Drop zone — hide while processing */}
      {!isProcessing && state.status !== "done" && (
        <>
          <DropZone onFile={handleFile} disabled={isProcessing} />

          {/* Show selected file info + options before compression starts */}
          {state.file && state.status === "idle" && (
            <div className="rounded-2xl border border-border bg-surface px-5 py-4 flex flex-col gap-4">
              {/* File preview row */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center text-lg">
                  {isPdf ? "📄" : "🖼"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{state.file.name}</p>
                  <p className="text-xs text-muted">{formatBytes(state.file.size)}</p>
                </div>
                <button
                  onClick={reset}
                  className="text-xs text-muted hover:text-red-400 transition-colors px-2 py-1"
                >
                  Remove
                </button>
              </div>

              {/* Compression options */}
              <CompressionOptions
                value={level}
                onChange={setLevel}
                showForPdf={isPdf}
              />

              {/* Compress button */}
              <button
                onClick={() => state.file && compress(state.file, level)}
                className="w-full bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors duration-150"
              >
                Compress now
              </button>
            </div>
          )}
        </>
      )}

      {/* Progress */}
      {isProcessing && state.file && (
        <ProgressBar
          status={state.status}
          progress={state.progress}
          fileName={state.file.name}
        />
      )}

      {/* Error state */}
      {state.status === "error" && state.error && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-0.5">⚠</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-red-400">Compression failed</p>
              <p className="text-xs text-red-400/70 mt-1">{state.error}</p>
            </div>
            <button
              onClick={reset}
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
