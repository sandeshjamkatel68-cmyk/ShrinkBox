"use client";
import type { Metadata } from "next";
import { useState, useRef } from "react";

interface PageResult { pageNumber: number; fileName: string; downloadUrl: string; size: number; }

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b/1024).toFixed(1)} KB`;
  return `${(b/1048576).toFixed(1)} MB`;
}

export default function PdfToJpgPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [pages, setPages] = useState<PageResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleConvert() {
    if (!file) return;
    setStatus("processing"); setError(null);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/convert/pdf-to-jpg", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) { setError(data.error); setStatus("error"); return; }
      setPages(data.pages);
      if (data.error) setWarning(data.error);
      setStatus("done");
    } catch { setError("Network error."); setStatus("error"); }
  }

  function downloadAll() {
    pages.forEach((p, i) => setTimeout(() => {
      const a = document.createElement("a"); a.href = p.downloadUrl; a.download = p.fileName; a.click();
    }, i * 300));
  }

  function reset() { setFile(null); setStatus("idle"); setPages([]); setError(null); setWarning(null); }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <div className="text-5xl mb-4">📄→🖼</div>
        <h1 className="text-3xl font-bold mb-2">PDF to JPG</h1>
        <p className="text-[var(--text-muted)]">Extract pages from a PDF as individual downloadable files. Free, no signup.</p>
      </div>

      {status !== "done" && (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50 p-10 flex flex-col items-center gap-3 text-center mb-4 transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">📄</div>
          <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
          <p className="text-sm text-[var(--text-muted)]">{file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}</p>
          <input ref={inputRef} type="file" accept=".pdf" className="sr-only" onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
        </div>
      )}

      {file && status === "idle" && (
        <button onClick={handleConvert} className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
          Extract Pages
        </button>
      )}

      {status === "processing" && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center">
          <p className="text-sm font-medium">Extracting pages...</p>
        </div>
      )}

      {status === "done" && pages.length > 0 && (
        <div className="flex flex-col gap-4">
          {warning && <p className="text-xs text-yellow-500 bg-yellow-400/5 border border-yellow-400/20 rounded-lg px-3 py-2">{warning}</p>}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
            <div className="px-5 py-3 border-b border-[var(--border)] flex justify-between items-center">
              <span className="text-sm font-medium">{pages.length} pages extracted</span>
              <button onClick={downloadAll} className="text-xs bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white rounded-lg px-3 py-1.5">Download all</button>
            </div>
            <ul className="max-h-72 overflow-y-auto">
              {pages.map(p => (
                <li key={p.pageNumber} className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border)] last:border-0">
                  <span className="text-xs font-mono text-[var(--text-muted)] w-8">p.{p.pageNumber}</span>
                  <span className="text-sm flex-1 truncate">{p.fileName}</span>
                  <span className="text-xs text-[var(--text-muted)]">{formatBytes(p.size)}</span>
                  <a href={p.downloadUrl} download={p.fileName} className="text-xs text-[var(--brand)] hover:underline">↓</a>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={reset} className="w-full py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Try another PDF</button>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          {error} <button onClick={reset} className="ml-2 underline">Retry</button>
        </div>
      )}
    </div>
  );
}
