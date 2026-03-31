"use client";
import { useState, useRef } from "react";

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(1)} MB`;
}

export default function CropImageWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [imgDims, setImgDims] = useState<{ w: number; h: number } | null>(null);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileSelect(f: File) {
    setFile(f);
    const img = new Image();
    const url = URL.createObjectURL(f);
    img.onload = () => {
      setImgDims({ w: img.naturalWidth, h: img.naturalHeight });
      setLeft(0); setTop(0);
      setWidth(img.naturalWidth); setHeight(img.naturalHeight);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  async function handleCrop() {
    if (!file) return;
    setStatus("processing"); setError(null);
    const form = new FormData();
    form.append("file", file);
    form.append("left", String(left));
    form.append("top", String(top));
    form.append("width", String(width));
    form.append("height", String(height));
    try {
      const res = await fetch("/api/image/crop", { method: "POST", body: form });
      const data = await res.json();
      if (!data.success) { setError(data.error); setStatus("error"); return; }
      setResult(data); setStatus("done");
    } catch { setError("Network error."); setStatus("error"); }
  }

  function reset() { setFile(null); setImgDims(null); setStatus("idle"); setResult(null); setError(null); }

  if (status === "done" && result) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-semibold mb-1">Cropped to {result.outputWidth}×{result.outputHeight}px</p>
        <p className="text-sm text-[var(--text-muted)] mb-5">{formatBytes(result.outputSize)}</p>
        <a href={result.downloadUrl} download={result.outputFileName}
          className="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors">
          ↓ Download Image
        </a>
        <button onClick={reset} className="block mx-auto mt-3 text-sm text-[var(--text-muted)] hover:text-[var(--text)]">Crop another</button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {!file && (
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFileSelect(f); }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          className={["cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center transition-all",
            dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]" : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50"].join(" ")}>
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">🖼</div>
          <p className="font-medium">Drop your image here</p>
          <p className="text-sm text-[var(--text-muted)]">JPG · PNG · WebP · or <span className="text-[var(--brand)]">click to browse</span></p>
          <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.webp" className="sr-only"
            onChange={e => { const f = e.target.files?.[0]; if (f) handleFileSelect(f); e.target.value = ""; }} />
        </div>
      )}

      {file && imgDims && status === "idle" && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-[var(--text-muted)]">{imgDims.w}×{imgDims.h}px · {formatBytes(file.size)}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Left (X)", value: left, set: setLeft, max: imgDims.w - 1 },
                { label: "Top (Y)", value: top, set: setTop, max: imgDims.h - 1 },
                { label: "Width (px)", value: width, set: setWidth, max: imgDims.w },
                { label: "Height (px)", value: height, set: setHeight, max: imgDims.h },
              ].map(({ label, value, set, max }) => (
                <div key={label}>
                  <label className="text-xs text-[var(--text-muted)] block mb-1">{label}</label>
                  <input type="number" value={value} min={0} max={max}
                    onChange={e => set(Math.max(0, Math.min(max, Number(e.target.value))))}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--brand)]" />
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-3">
              Output: {width}×{height}px starting at ({left}, {top})
            </p>
          </div>
          <button onClick={handleCrop} disabled={!width || !height}
            className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] disabled:opacity-40 text-white font-semibold rounded-xl py-3 text-sm transition-colors">
            Crop Image
          </button>
          <button onClick={reset} className="text-sm text-center text-[var(--text-muted)] hover:text-[var(--text)]">Choose different image</button>
        </div>
      )}

      {status === "processing" && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-center">
          <p className="text-sm font-medium">Cropping...</p>
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
