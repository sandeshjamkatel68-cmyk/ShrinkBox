"use client";

import { useCallback } from "react";
import ImageTool, { ProcessResult } from "@/components/tools/ImageTool";
import { decodeHeic } from "@/lib/imaging/engine";

export default function HeicToJpgTool() {
  const process = useCallback(async (file: File): Promise<ProcessResult> => {
    const blob = await decodeHeic(file);
    const base = file.name.replace(/\.[^.]+$/, "");
    return { blob, outputName: `${base}.jpg` };
  }, []);

  return (
    <ImageTool
      accept=".heic,.heif,image/heic,image/heif"
      multiple
      dropLabel="Drop HEIC photos here, or choose files"
      dropHint="Up to 5 files at a time, 25MB each"
      process={process}
    />
  );
}
