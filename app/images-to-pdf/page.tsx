"use client";
import { useState } from "react";

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b/1024).toFixed(1)} KB`;
  return `${(b/1048576).toFixed(1)} MB`;
}

export default function ImagesToPdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    const valid = Array.from(list).filter(f => /\.(jpe?g|png|webp)$/i.test(f.name));
    setFiles(prev => [...prev, ...valid].slice(0, 20));
  }

  function removeFile(i: number) { setFiles(f => f.filter((_, idx) => idx !== i)); }

  async function handleConvert() {
    if (!files.length) return;
    setStatus("processing"); setError(null);
    const form = new FormData();
    files.forEach(f => form.append("files", f));
    try {
      const res = await fetch("/api/convert/images-to-pdf", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) { setError(data.error); setStatus("error"); return; }
      setResult(data); setStatus("done");
    } catch { setError("Network error."); setStatus("error"); }
  }

  function reset() { setFiles([]); setStatus("idle"); setResult(null); setError(null); }

  if (status === "done" && result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-semibold text-lg mb-1">PDF created — {result.pageCount} pages</p>
          <p className="text-sm text-[var(--text-muted)] mb-5">{formatBytes(result.outputSize)}</p>
          <a href={result.downloadUrl} download="images.pdf"
            className="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors">
            ↓ Download PDF
          </a>
          <button onClick={reset} className="block mx-auto mt-3 text-sm text-[var(--text-muted)] hover:text-[var(--text)]">Convert more</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <div className="text-5xl mb-4">🖼→📄</div>
        <h1 className="text-3xl font-bold mb-2">Images to PDF</h1>
        <p className="text-[var(--text-muted)]">Combine JPG, PNG or WebP images into one PDF. Up to 20 images free.</p>
      </div>

      <label onDrop={e => { e.preventDefault(); addFiles(e.dataTransfer.files); }} onDragOver={e => e.preventDefault()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50 p-10 flex flex-col items-center gap-3 text-center mb-4 transition-all block">
        <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">🖼</div>
        <p className="font-medium">Drop images here</p>
        <p className="text-sm text-[var(--text-muted)]">JPG · PNG · WebP · or <span className="text-[var(--brand)]">click to browse</span> · Max 20</p>
        <input type="file" accept=".jpg,.jpeg,.png,.webp" multiple className="sr-only" onChange={e => addFiles(e.target.files)} />
      </label>

      {files.length > 0 && status === "idle" && (
        <>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden mb-4">
            <div className="px-4 py-3 border-b border-[var(--border)] flex justify-between">
              <span className="text-sm font-medium">{files.length} images selected</span>
              <span className="text-xs text-[var(--text-muted)]">{formatBytes(files.reduce((s,f)=>s+f.size,0))}</span>
            </div>
            <ul>{files.map((f,i) => (
              <li key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-[var(--border)] last:border-0">
                <span className="text-sm flex-1 truncate">{f.name}</span>
                <span className="text-xs text-[var(--text-muted)]">{formatBytes(f.size)}</span>
                <button onClick={() => removeFile(i)} className="text-xs text-red-400 hover:text-red-300 px-1">✕</button>
              </li>
            ))}</ul>
          </div>
          <button onClick={handleConvert} className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
            Create PDF from {files.length} images
          </button>
        </>
      )}

      {status === "processing" && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center">
          <p className="text-sm font-medium">Creating PDF...</p>
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
