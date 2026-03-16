"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) {
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(1)} MB`;
}

export default function WatermarkPdfPage() {
  const [file, setFile]       = useState<File | null>(null);
  const [text, setText]       = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.3);
  const [fontSize, setFontSize] = useState(48);
  const [angle, setAngle]     = useState(45);
  const [color, setColor]     = useState<"gray"|"red"|"blue"|"black">("gray");
  const [position, setPosition] = useState<"center"|"tile">("center");
  const [status, setStatus]   = useState<"idle"|"processing"|"done"|"error">("idle");
  const [result, setResult]   = useState<any>(null);
  const [error, setError]     = useState<string|null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleWatermark() {
    if (!file || !text.trim()) return;
    setStatus("processing"); setError(null);
    const form = new FormData();
    form.append("file", file);
    form.append("text", text);
    form.append("opacity", String(opacity));
    form.append("fontSize", String(fontSize));
    form.append("angle", String(angle));
    form.append("color", color);
    form.append("position", position);
    try {
      const res = await fetch("/api/pdf/watermark", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) { setError(data.error); setStatus("error"); return; }
      setResult(data); setStatus("done");
    } catch { setError("Network error."); setStatus("error"); }
  }

  function reset() { setFile(null); setStatus("idle"); setResult(null); setError(null); }

  const btnClass = (active: boolean) =>
    `flex-1 rounded-xl border py-2 text-sm font-medium transition-all ${active
      ? "border-[var(--brand)] bg-[var(--brand-light)] text-[var(--brand)]"
      : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand)]/30"}`;

  if (status === "done" && result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-semibold mb-1">Watermark added — {result.pageCount} pages</p>
          <p className="text-sm text-[var(--text-muted)] mb-5">{formatBytes(result.outputSize)}</p>
          <a href={result.downloadUrl} download="watermarked.pdf"
            className="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors">
            ↓ Download PDF
          </a>
          <button onClick={reset} className="block mx-auto mt-3 text-sm text-[var(--text-muted)] hover:text-[var(--text)]">Try another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <div className="text-5xl mb-4">💧</div>
        <h1 className="text-3xl font-bold mb-2">Add Watermark to PDF</h1>
        <p className="text-[var(--text-muted)]">Add custom text watermark to every page of your PDF. Free, instant, no signup.</p>
      </div>

      {/* Drop zone */}
      <div onClick={() => inputRef.current?.click()}
        onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-8 flex flex-col items-center gap-3 text-center mb-4 transition-all ${
          dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50"
        }`}>
        <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">📄</div>
        <p className="font-medium">{file ? file.name : "Drop your PDF here"}</p>
        <p className="text-sm text-[var(--text-muted)]">{file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}</p>
        <input ref={inputRef} type="file" accept=".pdf" className="sr-only"
          onChange={e => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>

      {file && status === "idle" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 flex flex-col gap-4">

            {/* Watermark text */}
            <div>
              <label className="text-sm font-medium block mb-1.5">Watermark text</label>
              <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="e.g. CONFIDENTIAL, DRAFT"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--brand)]" />
            </div>

            {/* Position */}
            <div>
              <label className="text-sm font-medium block mb-1.5">Position</label>
              <div className="flex gap-2">
                <button onClick={() => setPosition("center")} className={btnClass(position === "center")}>Center</button>
                <button onClick={() => setPosition("tile")} className={btnClass(position === "tile")}>Tiled</button>
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="text-sm font-medium block mb-1.5">Color</label>
              <div className="flex gap-2">
                {(["gray","red","blue","black"] as const).map(c => (
                  <button key={c} onClick={() => setColor(c)} className={btnClass(color === c)}>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Opacity */}
            <div>
              <label className="text-sm font-medium block mb-1.5">Opacity: {Math.round(opacity * 100)}%</label>
              <input type="range" min={5} max={80} value={Math.round(opacity * 100)}
                onChange={e => setOpacity(Number(e.target.value) / 100)}
                className="w-full accent-[var(--brand)]" />
              <div className="flex justify-between text-xs text-[var(--text-muted)] mt-1"><span>Subtle</span><span>Bold</span></div>
            </div>

            {/* Angle */}
            <div>
              <label className="text-sm font-medium block mb-1.5">Angle: {angle}°</label>
              <div className="flex gap-2">
                {[0, 30, 45, 90].map(a => (
                  <button key={a} onClick={() => setAngle(a)} className={btnClass(angle === a)}>{a}°</button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={handleWatermark} disabled={!text.trim()}
            className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] disabled:opacity-40 text-white font-semibold rounded-xl py-3 text-sm transition-colors">
            Add Watermark
          </button>
        </div>
      )}

      {status === "processing" && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center">
          <p className="text-sm font-medium">Adding watermark...</p>
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
