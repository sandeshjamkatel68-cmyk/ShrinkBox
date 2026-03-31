"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(1)} MB`;
}

export default function GrayscaleWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileSelect(f: File) { setFile(f); setPreview(URL.createObjectURL(f)); }

  async function handleConvert() {
    if (!file) return;
    setStatus("processing"); setError(null);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/image/grayscale", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) { setError(data.error); setStatus("error"); return; }
      setResult(data); setStatus("done");
    } catch { setError("Network error."); setStatus("error"); }
  }

  function reset() { setFile(null); setPreview(null); setStatus("idle"); setResult(null); setError(null); }

  return (
    <div className="w-full flex flex-col gap-4">
      {!file && (
        <div onClick={() => inputRef.current?.click()}
          onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFileSelect(f); }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
          className={["cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center transition-all",
            dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50"].join(" ")}>
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">🖼</div>
          <p className="font-medium">Drop your image here</p>
          <p className="text-sm text-[var(--text-muted)]">JPG · PNG · WebP · or <span className="text-[var(--brand)]">click to browse</span></p>
          <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.webp" className="sr-only"
            onChange={e => { const f = e.target.files?.[0]; if (f) handleFileSelect(f); e.target.value = ""; }} />
        </div>
      )}

      {(preview || (status === "done" && result)) && (
        <div className="grid grid-cols-2 gap-3">
          {preview && (<div className="rounded-xl border border-[var(--border)] overflow-hidden"><div className="px-3 py-2 text-xs text-[var(--text-muted)] border-b border-[var(--border)]">Original</div><img src={preview} alt="Original" className="w-full object-cover max-h-40" /></div>)}
          {status === "done" && result?.downloadUrl && (<div className="rounded-xl border border-[var(--border)] overflow-hidden"><div className="px-3 py-2 text-xs text-[var(--brand)] border-b border-[var(--border)]">Black & White</div><img src={result.downloadUrl} alt="Grayscale" className="w-full object-cover max-h-40" /></div>)}
        </div>
      )}

      {file && status === "idle" && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm">
            <span className="truncate">{file.name}</span>
            <span className="text-[var(--text-muted)] ml-3 shrink-0">{formatBytes(file.size)}</span>
          </div>
          <button onClick={handleConvert} className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">Convert to Black & White</button>
          <button onClick={reset} className="text-sm text-center text-[var(--text-muted)] hover:text-[var(--text)]">Choose different image</button>
        </div>
      )}

      {status === "processing" && (<div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center"><p className="text-sm font-medium">Converting...</p></div>)}
      {status === "done" && result && (
        <div className="flex gap-3 mt-2">
          <a href={result.downloadUrl} download={result.outputFileName} className="flex-1 text-center bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-4 text-sm transition-colors">↓ Download B&W Image</a>
          <button onClick={reset} className="px-4 py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Try another</button>
        </div>
      )}
      {status === "error" && (<div className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">{error} <button onClick={reset} className="ml-2 underline">Retry</button></div>)}
    </div>
  );
}
