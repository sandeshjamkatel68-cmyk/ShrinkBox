"use client";

import { useState, useCallback } from "react";
import ImageTool, { ProcessResult } from "@/components/tools/ImageTool";
import { transformImage, decodeHeic, isHeic } from "@/lib/imaging/engine";

export default function HomeHero() {
  const [quality, setQuality] = useState(75);

  const process = useCallback(
    async (file: File): Promise<ProcessResult> => {
      const source = isHeic(file) ? await decodeHeic(file) : file;
      const { blob } = await transformImage(source, { mimeType: "image/jpeg", quality: quality / 100 });
      const base = file.name.replace(/\.[^.]+$/, "");
      return { blob, outputName: `${base}-shrunk.jpg` };
    },
    [quality]
  );

  return (
    <div className="panel p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 gap-4">
        <label htmlFor="quality" className="font-sans text-xs text-ink-dim">
          Quality
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

      <ImageTool
        accept="image/*,.heic,.heif"
        multiple
        dropLabel="Drop images here, or choose files"
        dropHint="JPG, PNG, WebP, HEIC — up to 25MB each, 5 at a time"
        process={process}
      />
    </div>
  );
}
