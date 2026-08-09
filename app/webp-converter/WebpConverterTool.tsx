"use client";

import { useCallback } from "react";
import ImageTool, { ProcessResult } from "@/components/tools/ImageTool";
import { transformImage } from "@/lib/imaging/engine";

export default function WebpConverterTool() {
  const process = useCallback(async (file: File): Promise<ProcessResult> => {
    const isWebp = file.type === "image/webp" || file.name.toLowerCase().endsWith(".webp");
    const mimeType = isWebp ? "image/jpeg" : "image/webp";
    const ext = isWebp ? "jpg" : "webp";
    const { blob } = await transformImage(file, { mimeType, quality: 0.85 });
    const base = file.name.replace(/\.[^.]+$/, "");
    return { blob, outputName: `${base}.${ext}` };
  }, []);

  return (
    <ImageTool
      accept="image/*,.webp"
      multiple
      dropLabel="Drop images here, or choose files"
      dropHint="WebP files convert to JPG; anything else converts to WebP"
      process={process}
    />
  );
}
