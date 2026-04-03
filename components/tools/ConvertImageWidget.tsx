"use client";

import { useState, useRef } from "react";
import { useToolOperation } from "@/hooks/useToolOperation";
import ToolResultCard from "./ToolResultCard";
import { formatBytes } from "@/lib/utils/formatBytes";
import type { ConvertTargetFormat } from "@/types/compression";

interface Props {
  defaultTarget?: ConvertTargetFormat;
  allowedSources?: string; // e.g. ".jpg,.jpeg" to lock the file picker
  label?: string;
}

const FORMAT_OPTIONS: { value: ConvertTargetFormat; label: string; desc: string }[] = [
  { value: "jpeg", label: "JPG",  desc: "Best for photos" },
  { value: "png",  label: "PNG",  desc: "Lossless, transparent" },
  { value: "webp", label: "WebP", desc: "Smallest size" },
];

export default function ConvertImageWidget({ defaultTarget = "webp", allowedSources = ".jpg,.jpeg,.png,.webp", label }: Props) {
  const { state, run, reset } = useToolOperation("/api/convert/image");
  const [file, setFile]         = useState<File | null>(null);
  const [target, setTarget]     = useState<ConvertTargetFormat>(defaultTarget);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(f: File) { setFile(f); }

  async function handleConvert() {
    if (!file) return;
    await run(() => {
      const form = new FormData();
      form.append("file", file);
      form.append("format", target);
      return form;
    });
  }

  if (state.status === "done" && state.result) {
    return <ToolResultCard result={state.result} onReset={() => { reset(); setFile(null); }} label={label ?? "Converted"} />;
  }

  const isProcessing = state.status === "uploading" || state.status === "processing";

  return (
    <div className="flex flex-col gap-4">
      {/* Drop zone */}
      <div
        onClick={() => !isProcessing && inputRef.current?.click()}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={[
          "cursor-pointer rounded-2xl border-2 border-dashed p-10 flex flex-col items-center gap-3 text-center transition-all",
          dragOver ? "border-brand bg-[rgba(34,197,94,0.05)]"
                   : "border-border bg-surface hover:border-brand/50",
          isProcessing ? "opacity-50 pointer-events-none" : "",
        ].join(" ")}
      >
        <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center text-2xl">
          {dragOver ? "⬇" : "🔄"}
        </div>
        <div>
          <p className="font-medium">{file ? file.name : "Drop your image here"}</p>
          <p className="text-sm text-muted mt-1">
            {file ? formatBytes(file.size) : <span>or <span className="text-brand">click to browse</span></span>}
          </p>
        </div>
        <input ref={inputRef} type="file" accept={allowedSources} className="sr-only"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
      </div>

      {file && !isProcessing && (
        <div className="rounded-2xl border border-border bg-surface px-5 py-4 flex flex-col gap-4">
          {/* Target format */}
          <div>
            <p className="text-sm font-medium text-muted mb-2">Convert to</p>
            <div className="flex gap-2">
              {FORMAT_OPTIONS.map((f) => (
                <button key={f.value} onClick={() => setTarget(f.value)}
                  className={[
                    "flex-1 rounded-xl border px-3 py-2.5 text-sm text-left transition-all",
                    target === f.value
                      ? "border-brand bg-[var(--brand-light)] text-brand"
                      : "border-border bg-surface text-muted hover:border-brand/30",
                  ].join(" ")}>
                  <div className="font-medium">{f.label}</div>
                  <div className="text-xs opacity-70">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>
          <button onClick={handleConvert}
            className="w-full bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-3 text-sm transition-colors">
            Convert to {target.toUpperCase()}
          </button>
        </div>
      )}

      {isProcessing && (
        <div className="rounded-2xl border border-border bg-surface px-6 py-5">
          <p className="text-sm font-medium mb-2">Converting...</p>
          <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
            <div className="h-full rounded-full shimmer" style={{ width: `${state.progress}%` }} />
          </div>
        </div>
      )}

      {state.status === "error" && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 flex items-start gap-3">
          <span className="text-red-400">⚠</span>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-400">Conversion failed</p>
            <p className="text-xs text-red-400/70 mt-1">{state.error}</p>
          </div>
          <button onClick={() => { reset(); setFile(null); }} className="text-xs text-muted hover:text-foreground">Retry</button>
        </div>
      )}
    </div>
  );
}
