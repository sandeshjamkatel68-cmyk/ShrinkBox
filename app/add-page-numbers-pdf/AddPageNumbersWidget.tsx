"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) { if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`; return `${(b / 1048576).toFixed(1)} MB`; }

export default function AddPageNumbersWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<"bottom-center"|"bottom-right"|"bottom-left"|"top-center"|"top-right">("bottom-center");
  const [format, setFormat] = useState<"number"|"page-of-total">("number");
  const [startFrom, setStartFrom] = useState(1);
  const [fontSize, setFontSize] = useState(11);
  const [color, setColor] = useState<"black"|"gray">("black");
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string|null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const btnClass = (active: boolean) => `rounded-xl border py-2 px-3 text-sm font-medium transition-all ${active ? "border-brand bg-[var(--brand-light)] text-brand" : "border-border text-muted hover:border-brand/30"}`;

  async function handleAdd() {
    if (!file) return; setStatus("processing"); setError(null);
    const form = new FormData(); form.append("file", file); form.append("position", position); form.append("format", format); form.append("startFrom", String(startFrom)); form.append("fontSize", String(fontSize)); form.append("color", color);
    try { const res = await fetch("/api/pdf/page-numbers", { method: "POST", body: form }); const data = await res.json(); if (!data.success) { setError(data.error); setStatus("error"); return; } setResult(data); setStatus("done"); } catch { setError("Network error."); setStatus("error"); }
  }
  function reset() { setFile(null); setStatus("idle"); setResult(null); setError(null); }

  if (status === "done" && result) {
    return (<div className="rounded-2xl border border-border bg-surface p-6 text-center"><div className="text-4xl mb-3">✅</div><p className="font-semibold mb-1">Page numbers added — {result.pageCount} pages</p><p className="text-sm text-muted mb-5">{formatBytes(result.outputSize)}</p><a href={result.downloadUrl} download="numbered.pdf" className="inline-block bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors">↓ Download PDF</a><button onClick={reset} className="block mx-auto mt-3 text-sm text-muted">Try another</button></div>);
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div onClick={() => inputRef.current?.click()} onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }} onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} className={`cursor-pointer rounded-2xl border-2 border-dashed p-8 flex flex-col items-center gap-3 text-center transition-all ${dragOver ? "border-brand bg-[rgba(34,197,94,0.05)]" : "border-border bg-surface hover:border-brand/50"}`}>
        <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center text-2xl">📄</div>
        <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
        <p className="text-sm text-muted">{file ? formatBytes(file.size) : <span>or <span className="text-brand">click to browse</span></span>}</p>
        <input ref={inputRef} type="file" accept=".pdf" className="sr-only" onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>
      {file && status === "idle" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-surface px-5 py-4 flex flex-col gap-4">
            <div><label className="text-sm font-medium block mb-2">Position</label><div className="flex flex-wrap gap-2">{([{ v: "bottom-center", l: "Bottom Center" }, { v: "bottom-right", l: "Bottom Right" }, { v: "bottom-left", l: "Bottom Left" }, { v: "top-center", l: "Top Center" }, { v: "top-right", l: "Top Right" }] as const).map(({ v, l }) => (<button key={v} onClick={() => setPosition(v)} className={btnClass(position === v)}>{l}</button>))}</div></div>
            <div><label className="text-sm font-medium block mb-2">Format</label><div className="flex gap-2"><button onClick={() => setFormat("number")} className={btnClass(format === "number")}>1, 2, 3…</button><button onClick={() => setFormat("page-of-total")} className={btnClass(format === "page-of-total")}>1 / 10, 2 / 10…</button></div></div>
            <div><label className="text-sm font-medium block mb-2">Color</label><div className="flex gap-2"><button onClick={() => setColor("black")} className={btnClass(color === "black")}>Black</button><button onClick={() => setColor("gray")} className={btnClass(color === "gray")}>Gray</button></div></div>
            <div><label className="text-sm font-medium block mb-1.5">Start from page number</label><input type="number" value={startFrom} min={1} max={999} onChange={e => setStartFrom(Math.max(1, Number(e.target.value)))} className="w-24 rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm focus:outline-none focus:border-brand" /></div>
          </div>
          <button onClick={handleAdd} className="w-full bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">Add Page Numbers</button>
        </div>
      )}
      {status === "processing" && (<div className="rounded-2xl border border-border bg-surface px-6 py-5 text-center"><p className="text-sm font-medium">Adding page numbers...</p></div>)}
      {status === "error" && (<div className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">{error} <button onClick={reset} className="ml-2 underline">Retry</button></div>)}
    </div>
  );
}
