"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) { if (b < 1024) return `${b} B`; if (b < 1048576) return `${(b/1024).toFixed(1)} KB`; return `${(b/1048576).toFixed(1)} MB`; }

export default function RotatePdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState<90|180|270>(90);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleRotate() {
    if (!file) return; setStatus("processing"); setError(null);
    const form = new FormData(); form.append("file", file); form.append("angle", String(angle));
    try { const res = await fetch("/api/pdf/rotate", { method: "POST", body: form }); const data = await res.json(); if (!data.success) { setError(data.error); setStatus("error"); return; } setResult(data); setStatus("done"); } catch { setError("Network error."); setStatus("error"); }
  }
  function reset() { setFile(null); setStatus("idle"); setResult(null); setError(null); }

  if (status === "done" && result) {
    return (<div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center"><div className="text-4xl mb-3">✅</div><p className="font-semibold mb-1">PDF rotated {angle}°</p><p className="text-sm text-[var(--text-muted)] mb-5">{formatBytes(result.outputSize)}</p><a href={result.downloadUrl} download="rotated.pdf" className="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors">↓ Download PDF</a><button onClick={reset} className="block mx-auto mt-3 text-sm text-[var(--text-muted)] hover:text-[var(--text)]">Try another</button></div>);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div onClick={() => inputRef.current?.click()} className="cursor-pointer rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50 p-10 flex flex-col items-center gap-3 text-center transition-all">
        <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">📄</div>
        <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
        <p className="text-sm text-[var(--text-muted)]">{file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}</p>
        <input ref={inputRef} type="file" accept=".pdf" className="sr-only" onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>
      {file && status === "idle" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
            <p className="text-sm font-medium mb-3">Rotate by</p>
            <div className="flex gap-2">
              {([90, 180, 270] as const).map(a => (<button key={a} onClick={() => setAngle(a)} className={["flex-1 rounded-xl border py-2.5 text-sm font-medium transition-all", angle === a ? "border-[var(--brand)] bg-[var(--brand-light)] text-[var(--brand)]" : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand)]/30"].join(" ")}>{a}°</button>))}
            </div>
          </div>
          <button onClick={handleRotate} className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">Rotate PDF {angle}°</button>
        </div>
      )}
      {status === "processing" && (<div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center"><p className="text-sm font-medium">Rotating...</p></div>)}
      {status === "error" && (<div className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">{error} <button onClick={reset} className="ml-2 underline">Retry</button></div>)}
    </div>
  );
}
