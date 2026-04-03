"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) { if (b < 1024) return `${b} B`; if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`; return `${(b / 1048576).toFixed(1)} MB`; }

export default function WebpToJpgWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(90);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleConvert() {
    if (!file) return; setStatus("processing"); setError(null);
    const form = new FormData(); form.append("file", file); form.append("quality", String(quality));
    try { const res = await fetch("/api/image/convert-to-jpg", { method: "POST", body: form }); const data = await res.json(); if (!data.success) { setError(data.error); setStatus("error"); return; } setResult(data); setStatus("done"); } catch { setError("Network error."); setStatus("error"); }
  }
  function reset() { setFile(null); setStatus("idle"); setResult(null); setError(null); }

  if (status === "done" && result) {
    return (<div className="rounded-2xl border border-border bg-surface overflow-hidden"><div className="px-6 py-4 border-b border-border flex items-center gap-2"><span className="text-brand">✓</span><span className="font-medium text-sm">Converted to JPG</span></div><div className="px-6 py-5"><div className="grid grid-cols-3 gap-4 mb-5"><div><div className="text-xs text-muted mb-1">Original WebP</div><div className="text-xl font-semibold">{formatBytes(result.originalSize)}</div></div><div className="flex items-center justify-center text-subtle">→</div><div><div className="text-xs text-muted mb-1">JPG output</div><div className="text-xl font-semibold text-brand">{formatBytes(result.outputSize)}</div></div></div><div className="flex gap-3"><a href={result.downloadUrl} download={result.outputFileName} className="flex-1 text-center bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-4 text-sm transition-colors">↓ Download JPG</a><button onClick={reset} className="px-4 py-2.5 rounded-xl border border-border text-sm text-muted hover:text-foreground transition-colors">Try another</button></div></div></div>);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div onClick={() => inputRef.current?.click()} onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }} onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} className={["cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center transition-all", dragOver ? "border-brand bg-[rgba(34,197,94,0.05)]" : "border-border bg-surface hover:border-brand/50"].join(" ")}>
        <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center text-2xl">⚡</div>
        <p className="font-medium">{file ? file.name : "Drop your WebP here"}</p>
        <p className="text-sm text-muted">{file ? formatBytes(file.size) : <span>or <span className="text-brand">click to browse</span></span>}</p>
        <input ref={inputRef} type="file" accept=".webp" className="sr-only" onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>
      {file && status === "idle" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-surface px-5 py-4"><label className="text-sm font-medium block mb-2">Quality: {quality}%</label><input type="range" min={60} max={100} value={quality} onChange={e => setQuality(Number(e.target.value))} className="w-full accent-brand" /><div className="flex justify-between text-xs text-muted mt-1"><span>Smaller file</span><span>Higher quality</span></div></div>
          <button onClick={handleConvert} className="w-full bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">Convert to JPG</button>
        </div>
      )}
      {status === "processing" && (<div className="rounded-2xl border border-border bg-surface px-6 py-5 text-center"><p className="text-sm font-medium">Converting...</p></div>)}
      {status === "error" && (<div className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">{error} <button onClick={reset} className="ml-2 underline">Retry</button></div>)}
    </div>
  );
}
