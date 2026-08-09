"use client";

import { useCallback, useState } from "react";
import ImageTool, { ProcessResult } from "@/components/tools/ImageTool";
import { transformImage, decodeHeic, isHeic } from "@/lib/imaging/engine";

export default function CompressImageTool() {
  const [quality, setQuality] = useState(75);

  const process = useCallback(
    async (file: File): Promise<ProcessResult> => {
      const source = isHeic(file) ? await decodeHeic(file) : file;
      const outMime = file.type === "image/png" && !isHeic(file) ? "image/png" : "image/jpeg";
      const { blob } = await transformImage(source, { mimeType: outMime, quality: quality / 100 });
      const base = file.name.replace(/\.[^.]+$/, "");
      const ext = outMime === "image/png" ? "png" : "jpg";
      return { blob, outputName: `${base}-compressed.${ext}` };
    },
    [quality]
  );

  return (
    <ImageTool
      accept="image/*,.heic,.heif"
      multiple
      dropLabel="Drop images here, or choose files"
      dropHint="JPG, PNG, WebP, HEIC — up to 5 files, 25MB each"
      process={process}
      controls={
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="quality" className="font-sans text-xs text-ink-dim shrink-0">
            Quality — lower is smaller
          </label>
          <div className="flex items-center gap-3 flex-1 max-w-[220px]">
            <input
              id="quality"
              type="range"
              min={30}
              max={95}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="flex-1 accent-signal"
            />
            <span className="font-data text-xs text-ink tabular-nums w-9 text-right">{quality}%</span>
          </div>
        </div>
      }
    />
  );
}
