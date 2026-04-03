"use client";

import { useState } from "react";
import { useToolOperation } from "@/hooks/useToolOperation";
import ToolResultCard from "./ToolResultCard";
import { formatBytes } from "@/lib/utils/formatBytes";

export default function MergePdfWidget() {
  const { state, run, reset } = useToolOperation("/api/convert/pdf-merge");
  const [files, setFiles] = useState<File[]>([]);
  const isProcessing = state.status === "uploading" || state.status === "processing";

  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    const pdfs = Array.from(incoming).filter((f) => f.name.toLowerCase().endsWith(".pdf"));
    setFiles((prev) => {
      const combined = [...prev, ...pdfs];
      return combined.slice(0, 10); // max 10
    });
  }

  function removeFile(index: number) {
    setFiles((f) => f.filter((_, i) => i !== index));
  }

  function moveUp(index: number) {
    if (index === 0) return;
    setFiles((f) => { const a = [...f]; [a[index - 1], a[index]] = [a[index], a[index - 1]]; return a; });
  }

  function moveDown(index: number) {
    setFiles((f) => { if (index >= f.length - 1) return f; const a = [...f]; [a[index], a[index + 1]] = [a[index + 1], a[index]]; return a; });
  }

  async function handleMerge() {
    if (files.length < 2) return;
    await run(() => {
      const form = new FormData();
      files.forEach((f) => form.append("files", f));
      return form;
    });
  }

  if (state.status === "done" && state.result) {
    return <ToolResultCard result={state.result} onReset={() => { reset(); setFiles([]); }} label="Merged" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Drop zone */}
      <label
        onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
        onDragOver={(e) => e.preventDefault()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-border bg-surface hover:border-brand/50 p-10 flex flex-col items-center gap-3 text-center transition-all"
      >
        <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center text-2xl">📎</div>
        <div>
          <p className="font-medium">Drop PDF files here</p>
          <p className="text-sm text-muted mt-1">or <span className="text-brand">click to browse</span> · Max 10 files</p>
        </div>
        <input type="file" accept=".pdf" multiple className="sr-only" onChange={(e) => addFiles(e.target.files)} />
      </label>

      {/* File list */}
      {files.length > 0 && (
        <div className="rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <span className="text-sm font-medium">{files.length} file{files.length > 1 ? "s" : ""} · Drag to reorder</span>
            <span className="text-xs text-muted">
              {formatBytes(files.reduce((s, f) => s + f.size, 0))} total
            </span>
          </div>
          <ul>
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-0">
                <span className="text-subtle text-xs font-mono w-5 text-center">{i + 1}</span>
                <span className="text-sm flex-1 truncate">{f.name}</span>
                <span className="text-xs text-muted">{formatBytes(f.size)}</span>
                <div className="flex gap-1">
                  <button onClick={() => moveUp(i)} disabled={i === 0} className="text-xs text-muted hover:text-foreground disabled:opacity-30 px-1">↑</button>
                  <button onClick={() => moveDown(i)} disabled={i === files.length - 1} className="text-xs text-muted hover:text-foreground disabled:opacity-30 px-1">↓</button>
                  <button onClick={() => removeFile(i)} className="text-xs text-red-400 hover:text-red-300 px-1">✕</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {files.length >= 2 && !isProcessing && (
        <button onClick={handleMerge}
          className="w-full bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
          Merge {files.length} PDFs into one
        </button>
      )}

      {files.length === 1 && (
        <p className="text-center text-sm text-muted">Add at least one more PDF to merge.</p>
      )}

      {isProcessing && (
        <div className="rounded-2xl border border-border bg-surface px-6 py-5">
          <p className="text-sm font-medium mb-2">Merging PDFs...</p>
          <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
            <div className="h-full rounded-full shimmer" style={{ width: `${state.progress}%` }} />
          </div>
        </div>
      )}

      {state.status === "error" && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 flex items-start gap-3">
          <span className="text-red-400">⚠</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-400">Merge failed</p>
            <p className="text-xs text-red-400/70 mt-1">{state.error}</p>
          </div>
          <button onClick={() => { reset(); setFiles([]); }} className="text-xs text-muted">Retry</button>
        </div>
      )}
    </div>
  );
}
