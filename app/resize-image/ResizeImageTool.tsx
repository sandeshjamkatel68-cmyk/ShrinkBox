"use client";

import { useCallback, useState } from "react";
import ImageTool, { ProcessResult } from "@/components/tools/ImageTool";
import { transformImage, decodeHeic, isHeic } from "@/lib/imaging/engine";

export default function ResizeImageTool() {
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1080);

  const process = useCallback(
    async (file: File): Promise<ProcessResult> => {
      const source = isHeic(file) ? await decodeHeic(file) : file;
      const outMime = file.type === "image/png" && !isHeic(file) ? "image/png" : "image/jpeg";
      const { blob } = await transformImage(source, { mimeType: outMime, quality: 0.85, maxWidth, maxHeight });
      const base = file.name.replace(/\.[^.]+$/, "");
      const ext = outMime === "image/png" ? "png" : "jpg";
      return { blob, outputName: `${base}-resized.${ext}` };
    },
    [maxWidth, maxHeight]
  );

  return (
    <ImageTool
      accept="image/*,.heic,.heif"
      multiple
      dropLabel="Drop images here, or choose files"
      dropHint="Resized to fit within the dimensions below, aspect ratio kept"
      process={process}
      controls={
        <div className="flex items-center gap-4">
          <label className="font-sans text-xs text-ink-dim shrink-0">Max size</label>
          <input
            type="number"
            value={maxWidth}
            onChange={(e) => setMaxWidth(Number(e.target.value) || 1)}
            className="font-data text-sm w-20 px-2 py-1.5 border border-[var(--border)] rounded bg-panel text-ink"
            aria-label="Max width in pixels"
          />
          <span className="font-sans text-xs text-ink-dim">×</span>
          <input
            type="number"
            value={maxHeight}
            onChange={(e) => setMaxHeight(Number(e.target.value) || 1)}
            className="font-data text-sm w-20 px-2 py-1.5 border border-[var(--border)] rounded bg-panel text-ink"
            aria-label="Max height in pixels"
          />
          <span className="font-sans text-xs text-ink-dim">px</span>
        </div>
      }
    />
  );
}
