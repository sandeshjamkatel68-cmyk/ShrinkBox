"use client";

import { useState } from "react";
import { useBulkCompress } from "@/hooks/useBulkCompress";
import { formatBytes } from "@/lib/utils/formatBytes";
import type { CompressionLevel } from "@/types/compression";

const ACCEPTED = ".jpg,.jpeg,.png,.webp";

export default function BulkCompressWidget() {
  const { state, run, reset } = useBulkCompress();
  const [files, setFiles]     = useState<File[]>([]);
  const [level, setLevel]     = useState<CompressionLevel>("medium");

  const isProcessing = state.status === "uploading" || state.status === "processing";

  function addFiles(list: FileList | null) {
    if (!list) return;
    const valid = Array.from(list).filter((f) =>
      /\.(jpe?g|png|webp)$/i.test(f.name)
    );
    setFiles((prev) => [...prev, ...valid].slice(0, 10));
  }

  function removeFile(i: number) { setFiles((f) => f.filter((_, idx) => idx !== i)); }

  function downloadFile(url: string, name: string) {
    const a = document.createElement("a"); a.href = url; a.download = name; a.click();
  }

  function downloadAll() {
    state.result?.results.forEach((r, i) => {
      if (r.downloadUrl && r.outputFileName) {
        setTimeout(() => downloadFile(r.downloadUrl!, r.outputFileName!), i * 250);
      }
    });
  }

  if (state.status === "done" && state.result) {
    const { totalOriginal, totalOutput, totalReduction, results } = state.result;
    return (
      <div className="flex flex-col gap-4">
        {/* Summary */}
        <div className="rounded-2xl border border-border bg-surface px-6 py-5 grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-muted mb-1">Total before</div>
            <div className="text-xl font-semibold">{formatBytes(totalOriginal)}</div>
          </div>
          <div className="flex items-center justify-center text-subtle">→</div>
          <div>
            <div className="text-xs text-muted mb-1">Total after</div>
            <div className="text-xl font-semibold text-brand">{formatBytes(totalOutput)}</div>
          </div>
        </div>

        {/* Per-file results */}
        <div className="rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="px-5 py-3 border-b border-border flex justify-between items-center">
            <span className="text-sm font-medium">{results.length} files · -{totalReduction}% total</span>
            <button onClick={downloadAll}
              className="text-xs bg-brand hover:bg-[var(--brand-dim)] text-white rounded-lg px-3 py-1.5 transition-colors">
              Download all
            </button>
          </div>
          <ul>
            {results.map((r, i) => (
              <li key={i} className="flex items-center gap-3 px-5 py-3 border-b border-border last:border-0">
                <span className={`text-lg ${r.success ? "text-brand" : "text-red-400"}`}>
                  {r.success ? "✓" : "✕"}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{r.fileName}</p>
                  {r.success ? (
                    <p className="text-xs text-muted">
                      {formatBytes(r.originalSize)} → {formatBytes(r.outputSize)}
                      <span className="text-brand ml-1">-{r.reductionPercent}%</span>
                    </p>
                  ) : (
                    <p className="text-xs text-red-400">{r.error}</p>
                  )}
                </div>
                {r.downloadUrl && r.outputFileName && (
                  <button onClick={() => downloadFile(r.downloadUrl!, r.outputFileName!)}
                    className="text-xs text-brand hover:underline shrink-0">↓</button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={() => { reset(); setFiles([]); }}
          className="w-full py-2.5 rounded-xl border border-border text-sm text-muted hover:text-foreground transition-colors">
          Compress more files
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <label
        onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
        onDragOver={(e) => e.preventDefault()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-border bg-surface hover:border-brand/50 p-10 flex flex-col items-center gap-3 text-center transition-all"
      >
        <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center text-2xl">🗂</div>
        <div>
          <p className="font-medium">Drop up to 10 images here</p>
          <p className="text-sm text-muted mt-1">JPG · PNG · WebP · or <span className="text-brand">click to browse</span></p>
        </div>
        <input type="file" accept={ACCEPTED} multiple className="sr-only" onChange={(e) => addFiles(e.target.files)} />
      </label>

      {files.length > 0 && !isProcessing && (
        <>
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex justify-between items-center">
              <span className="text-sm font-medium">{files.length} file{files.length > 1 ? "s" : ""} selected</span>
              <span className="text-xs text-muted">{formatBytes(files.reduce((s, f) => s + f.size, 0))}</span>
            </div>
            <ul>
              {files.map((f, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-border last:border-0">
                  <span className="text-sm flex-1 truncate">{f.name}</span>
                  <span className="text-xs text-muted">{formatBytes(f.size)}</span>
                  <button onClick={() => removeFile(i)} className="text-xs text-red-400 hover:text-red-300 px-1">✕</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Level */}
          <div className="flex gap-2">
            {(["low", "medium", "high"] as CompressionLevel[]).map((l) => (
              <button key={l} onClick={() => setLevel(l)}
                className={[
                  "flex-1 rounded-xl border py-2 text-sm font-medium capitalize transition-all",
                  level === l
                    ? "border-brand bg-[var(--brand-light)] text-brand"
                    : "border-border text-muted hover:border-brand/30",
                ].join(" ")}>
                {l}
              </button>
            ))}
          </div>

          <button onClick={() => run(files, level)}
            className="w-full bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
            Compress {files.length} file{files.length > 1 ? "s" : ""}
          </button>
        </>
      )}

      {isProcessing && (
        <div className="rounded-2xl border border-border bg-surface px-6 py-5">
          <p className="text-sm font-medium mb-2">Compressing {state.files.length} files...</p>
          <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
            <div className="h-full rounded-full shimmer" style={{ width: `${state.progress}%` }} />
          </div>
        </div>
      )}

      {state.status === "error" && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 flex items-start gap-3">
          <span className="text-red-400">⚠</span>
          <div className="flex-1"><p className="text-sm font-medium text-red-400">Bulk compression failed</p>
            <p className="text-xs text-red-400/70 mt-1">{state.error}</p></div>
          <button onClick={() => { reset(); setFiles([]); }} className="text-xs text-muted">Retry</button>
        </div>
      )}
    </div>
  );
}
