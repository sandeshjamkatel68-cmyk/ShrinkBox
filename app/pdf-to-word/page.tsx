"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(1)} MB`;
}

export default function PdfToWordPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleConvert() {
    if (!file) return;
    setStatus("processing"); setError(null);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/convert/pdf-to-word", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) { setError(data.error); setStatus("error"); return; }
      setResult(data); setStatus("done");
    } catch { setError("Network error."); setStatus("error"); }
  }

  function reset() { setFile(null); setStatus("idle"); setResult(null); setError(null); }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <div className="text-5xl mb-4">📄→📝</div>
        <h1 className="text-3xl font-bold mb-2">PDF to Word</h1>
        <p className="text-[var(--text-muted)]">Convert PDF to an editable text file. Free, instant, no signup required.</p>
      </div>

      {/* Honest warning */}
      <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/5 px-4 py-3 text-sm text-yellow-600 dark:text-yellow-400 mb-6">
        <p className="font-medium mb-1">⚠️ Basic text extraction only</p>
        <p className="text-xs opacity-80">This free tool extracts document structure and metadata. Formatting, tables, and images are not preserved. For full Word formatting, use Adobe Acrobat or CloudConvert.</p>
      </div>

      {status !== "done" && (
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          className={["cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center mb-4 transition-all",
            dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50"].join(" ")}>
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">📄</div>
          <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
          <p className="text-sm text-[var(--text-muted)]">{file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}</p>
          <input ref={inputRef} type="file" accept=".pdf" className="sr-only"
            onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
        </div>
      )}

      {file && status === "idle" && (
        <button onClick={handleConvert}
          className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
          Convert PDF to Text
        </button>
      )}

      {status === "processing" && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center">
          <p className="text-sm font-medium">Converting...</p>
        </div>
      )}

      {status === "done" && result && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[var(--brand)]">✓</span>
              <span className="font-medium text-sm">Converted — {result.pageCount} pages</span>
            </div>
            {result.warning && (
              <p className="text-xs text-yellow-500 bg-yellow-400/5 border border-yellow-400/20 rounded-lg px-3 py-2 mb-3">{result.warning}</p>
            )}
            <div className="flex gap-3">
              <a href={result.downloadUrl} download={result.outputFileName}
                className="flex-1 text-center bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-4 text-sm transition-colors">
                ↓ Download .txt file
              </a>
              <button onClick={reset} className="px-4 py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                Try another
              </button>
            </div>
          </div>
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
