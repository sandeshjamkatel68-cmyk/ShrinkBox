"use client";

import { useState, useRef } from "react";
import { formatBytes } from "@/lib/utils/formatBytes";
import type { ToolApiResponse, SplitPage } from "@/types/compression";

type SplitStatus = "idle" | "processing" | "done" | "error";

export default function SplitPdfWidget() {
  const [file, setFile]     = useState<File | null>(null);
  const [status, setStatus] = useState<SplitStatus>("idle");
  const [result, setResult] = useState<ToolApiResponse | null>(null);
  const [error, setError]   = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function reset() { setFile(null); setStatus("idle"); setResult(null); setError(null); }

  async function handleSplit() {
    if (!file) return;
    setStatus("processing");
    try {
      const form = new FormData();
      form.append("file", file);
      const res  = await fetch("/api/convert/pdf-split", { method: "POST", body: form });
      const data: ToolApiResponse = await res.json();
      if (!res.ok || !data.success) { setError(data.error ?? "Split failed."); setStatus("error"); return; }
      setResult(data);
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error.");
      setStatus("error");
    }
  }

  function downloadPage(page: SplitPage) {
    const a = document.createElement("a");
    a.href = page.downloadUrl;
    a.download = page.fileName;
    a.click();
  }

  function downloadAll() {
    result?.pages?.forEach((p, i) => {
      setTimeout(() => downloadPage(p), i * 300); // stagger downloads
    });
  }

  if (status === "done" && result?.pages) {
    return (
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
          <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[var(--brand)]">✓</span>
              <span className="font-medium text-sm">Split into {result.pages.length} pages</span>
            </div>
            <button onClick={downloadAll}
              className="text-xs bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white rounded-lg px-3 py-1.5 transition-colors">
              Download all
            </button>
          </div>
          <ul className="max-h-72 overflow-y-auto">
            {result.pages.map((page) => (
              <li key={page.pageNumber} className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border)] last:border-0">
                <span className="text-xs font-mono text-[var(--text-muted)] w-8">p.{page.pageNumber}</span>
                <span className="text-sm flex-1 truncate">{page.fileName}</span>
                <span className="text-xs text-[var(--text-muted)]">{formatBytes(page.size)}</span>
                <button onClick={() => downloadPage(page)}
                  className="text-xs text-[var(--brand)] hover:underline ml-2">↓</button>
              </li>
            ))}
          </ul>
        </div>
        {result.error && (
          <p className="text-xs text-yellow-500 bg-yellow-400/5 border border-yellow-400/20 rounded-lg px-3 py-2">{result.error}</p>
        )}
        <button onClick={reset}
          className="w-full py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          Split another PDF
        </button>
      </div>
    );
  }

  const isProcessing = status === "processing";

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => !isProcessing && inputRef.current?.click()}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={[
          "cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center transition-all",
          dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]"
                   : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50",
          isProcessing ? "opacity-50 pointer-events-none" : "",
        ].join(" ")}
      >
        <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">✂️</div>
        <div>
          <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            {file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}
          </p>
        </div>
        <input ref={inputRef} type="file" accept=".pdf" className="sr-only"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>

      {file && !isProcessing && (
        <button onClick={handleSplit}
          className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
          Split PDF into pages
        </button>
      )}

      {isProcessing && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
          <p className="text-sm font-medium mb-2">Splitting PDF...</p>
          <div className="h-1.5 rounded-full bg-[var(--surface-muted)] overflow-hidden">
            <div className="h-full w-3/4 rounded-full shimmer" />
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 flex items-start gap-3">
          <span className="text-red-400">⚠</span>
          <div className="flex-1"><p className="text-sm font-medium text-red-400">Split failed</p>
            <p className="text-xs text-red-400/70 mt-1">{error}</p></div>
          <button onClick={reset} className="text-xs text-[var(--text-muted)]">Retry</button>
        </div>
      )}
    </div>
  );
}
