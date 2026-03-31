"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) { if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`; return `${(b / 1048576).toFixed(1)} MB`; }

export default function ProtectPdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string|null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const mismatch = confirm.length > 0 && password !== confirm;

  async function handleProtect() {
    if (!file || !password.trim() || mismatch) return;
    setStatus("processing"); setError(null);
    const form = new FormData(); form.append("file", file); form.append("password", password);
    try { const res = await fetch("/api/pdf/protect", { method: "POST", body: form }); const data = await res.json(); if (!data.success) { setError(data.error); setStatus("error"); return; } setResult(data); setStatus("done"); } catch { setError("Network error."); setStatus("error"); }
  }
  function reset() { setFile(null); setPassword(""); setConfirm(""); setStatus("idle"); setResult(null); setError(null); }

  if (status === "done" && result) {
    return (<div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center"><div className="text-4xl mb-3">🔒</div><p className="font-semibold mb-2">PDF protected</p><p className="text-sm text-[var(--text-muted)] mb-2">{formatBytes(result.outputSize)}</p><div className="rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 dark:text-yellow-400 text-xs px-3 py-2 mb-5 text-left">⚠️ This adds a confidential watermark. For full AES password encryption, use Adobe Acrobat or open the PDF in Preview (Mac) / Chrome print dialog and save with password.</div><a href={result.downloadUrl} download="protected.pdf" className="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors">↓ Download PDF</a><button onClick={reset} className="block mx-auto mt-3 text-sm text-[var(--text-muted)]">Try another</button></div>);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div onClick={() => inputRef.current?.click()} onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }} onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} className={`cursor-pointer rounded-2xl border-2 border-dashed p-8 flex flex-col items-center gap-3 text-center transition-all ${dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50"}`}>
        <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">📄</div>
        <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
        <p className="text-sm text-[var(--text-muted)]">{file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}</p>
        <input ref={inputRef} type="file" accept=".pdf" className="sr-only" onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>
      {file && status === "idle" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 flex flex-col gap-3">
            <div><label className="text-sm font-medium block mb-1.5">Password</label><div className="relative"><input type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2.5 text-sm pr-10 focus:outline-none focus:border-[var(--brand)]" /><button onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]">{show ? "Hide" : "Show"}</button></div></div>
            <div><label className="text-sm font-medium block mb-1.5">Confirm password</label><input type={show ? "text" : "password"} value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Re-enter password" className={`w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none bg-[var(--surface-muted)] ${mismatch ? "border-red-400" : "border-[var(--border)] focus:border-[var(--brand)]"}`} />{mismatch && <p className="text-xs text-red-400 mt-1">Passwords don&apos;t match</p>}</div>
          </div>
          <button onClick={handleProtect} disabled={!password.trim() || mismatch} className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] disabled:opacity-40 text-white font-semibold rounded-xl py-3 text-sm transition-colors">Protect PDF</button>
        </div>
      )}
      {status === "processing" && (<div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center"><p className="text-sm font-medium">Protecting...</p></div>)}
      {status === "error" && (<div className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">{error} <button onClick={reset} className="ml-2 underline">Retry</button></div>)}
    </div>
  );
}
