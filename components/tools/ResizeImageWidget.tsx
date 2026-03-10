"use client";

import { useState, useRef } from "react";
import { useToolOperation } from "@/hooks/useToolOperation";
import ToolResultCard from "./ToolResultCard";
import { formatBytes } from "@/lib/utils/formatBytes";

export default function ResizeImageWidget() {
  const { state, run, reset } = useToolOperation("/api/resize/image");
  const [file, setFile]   = useState<File | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit]   = useState<"px" | "percent">("px");
  const [fit, setFit]     = useState<"inside" | "cover" | "contain" | "fill">("inside");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isProcessing = state.status === "uploading" || state.status === "processing";

  async function handleResize() {
    if (!file || (!width && !height)) return;
    await run(() => {
      const form = new FormData();
      form.append("file", file);
      if (width)  form.append("width",  width);
      if (height) form.append("height", height);
      form.append("unit", unit);
      form.append("fit", fit);
      return form;
    });
  }

  if (state.status === "done" && state.result) {
    return <ToolResultCard result={state.result} onReset={() => { reset(); setFile(null); }} label="Resized" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Drop zone */}
      <div
        onClick={() => !isProcessing && inputRef.current?.click()}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={[
          "cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center transition-all",
          dragOver ? "border-[var(--brand)] bg-[rgba(34,197,94,0.05)]"
                   : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)]/50",
          isProcessing ? "opacity-50 pointer-events-none" : "",
        ].join(" ")}
      >
        <div className="w-14 h-14 rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center text-2xl">
          {dragOver ? "⬇" : "📐"}
        </div>
        <div>
          <p className="font-medium">{file ? file.name : "Drop your image here"}</p>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            {file ? formatBytes(file.size) : <span>or <span className="text-[var(--brand)]">click to browse</span></span>}
          </p>
        </div>
        <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.webp" className="sr-only"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setFile(f); e.target.value = ""; }} />
      </div>

      {file && !isProcessing && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 flex flex-col gap-4">
          {/* Unit toggle */}
          <div className="flex gap-2">
            {(["px", "percent"] as const).map((u) => (
              <button key={u} onClick={() => setUnit(u)}
                className={[
                  "flex-1 rounded-xl border py-2 text-sm font-medium transition-all",
                  unit === u
                    ? "border-[var(--brand)] bg-[var(--brand-light)] text-[var(--brand)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand)]/30",
                ].join(" ")}>
                {u === "px" ? "Pixels" : "Percent"}
              </button>
            ))}
          </div>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-[var(--text-muted)] block mb-1">
                Width {unit === "px" ? "(px)" : "(%)"}
              </label>
              <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Auto"
                min={1} max={unit === "percent" ? 100 : 10000}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--brand)]" />
            </div>
            <div>
              <label className="text-xs text-[var(--text-muted)] block mb-1">
                Height {unit === "px" ? "(px)" : "(%)"}
              </label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Auto"
                min={1} max={unit === "percent" ? 100 : 10000}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--brand)]" />
            </div>
          </div>

          {/* Fit mode */}
          <div>
            <label className="text-xs text-[var(--text-muted)] block mb-1.5">Fit mode</label>
            <div className="grid grid-cols-2 gap-2">
              {([
                { value: "inside",  label: "Fit inside",  desc: "No cropping, preserves ratio" },
                { value: "cover",   label: "Cover",       desc: "Fill dimensions, may crop" },
                { value: "contain", label: "Contain",     desc: "Letterbox to fit" },
                { value: "fill",    label: "Stretch",     desc: "Exact size, distorts" },
              ] as const).map((f) => (
                <button key={f.value} onClick={() => setFit(f.value)}
                  className={[
                    "rounded-xl border px-3 py-2 text-left text-xs transition-all",
                    fit === f.value
                      ? "border-[var(--brand)] bg-[var(--brand-light)] text-[var(--brand)]"
                      : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand)]/30",
                  ].join(" ")}>
                  <div className="font-medium">{f.label}</div>
                  <div className="opacity-70 mt-0.5">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleResize} disabled={!width && !height}
            className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dim)] disabled:opacity-40 text-white font-semibold rounded-xl py-3 text-sm transition-colors">
            Resize Image
          </button>
        </div>
      )}

      {isProcessing && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
          <p className="text-sm font-medium mb-2">Resizing...</p>
          <div className="h-1.5 rounded-full bg-[var(--surface-muted)] overflow-hidden">
            <div className="h-full rounded-full shimmer" style={{ width: `${state.progress}%` }} />
          </div>
        </div>
      )}

      {state.status === "error" && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 flex items-start gap-3">
          <span className="text-red-400">⚠</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-400">Resize failed</p>
            <p className="text-xs text-red-400/70 mt-1">{state.error}</p>
          </div>
          <button onClick={() => { reset(); setFile(null); }} className="text-xs text-[var(--text-muted)]">Retry</button>
        </div>
      )}
    </div>
  );
}
