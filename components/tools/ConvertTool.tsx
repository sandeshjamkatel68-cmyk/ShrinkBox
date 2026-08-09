"use client";

import { useCallback } from "react";
import ImageTool, { ProcessResult } from "@/components/tools/ImageTool";
import { transformImage, decodeHeic, isHeic } from "@/lib/imaging/engine";

interface ConvertToolProps {
  accept: string;
  outputMime: string;
  outputExt: string;
  quality?: number;
  dropLabel: string;
  dropHint?: string;
}

export default function ConvertTool({ accept, outputMime, outputExt, quality = 0.9, dropLabel, dropHint }: ConvertToolProps) {
  const process = useCallback(
    async (file: File): Promise<ProcessResult> => {
      const source = isHeic(file) ? await decodeHeic(file) : file;
      const { blob } = await transformImage(source, { mimeType: outputMime, quality });
      const base = file.name.replace(/\.[^.]+$/, "");
      return { blob, outputName: `${base}.${outputExt}` };
    },
    [outputMime, outputExt, quality]
  );

  return <ImageTool accept={accept} multiple dropLabel={dropLabel} dropHint={dropHint} process={process} />;
}
