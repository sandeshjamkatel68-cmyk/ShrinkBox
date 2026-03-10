import sharp from "sharp";
import type { ResizeOptions, ToolApiResponse } from "@/types/compression";

function stripExtension(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i === -1 ? filename : filename.substring(0, i);
}

function getExtension(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i === -1 ? "jpg" : filename.substring(i + 1).toLowerCase();
}

/**
 * Resizes an image to given dimensions, preserving format.
 * Supports px or percent-based resizing.
 */
export async function resizeImage(
  input: Buffer,
  originalFileName: string,
  opts: ResizeOptions
): Promise<ToolApiResponse> {
  const startTime   = Date.now();
  const originalSize = input.length;
  const baseName    = stripExtension(originalFileName);
  const ext         = getExtension(originalFileName);

  try {
    // Get original dimensions for percent-based resize
    const meta = await sharp(input).metadata();
    const origW = meta.width  ?? 1000;
    const origH = meta.height ?? 1000;

    let targetW = opts.width;
    let targetH = opts.height;

    if (opts.unit === "percent") {
      if (opts.width)  targetW = Math.round(origW * (opts.width  / 100));
      if (opts.height) targetH = Math.round(origH * (opts.height / 100));
    }

    // Must provide at least one dimension
    if (!targetW && !targetH) {
      return fail(originalSize, "Provide at least a width or height.");
    }

    const pipeline = sharp(input)
      .rotate()
      .resize({
        width:  targetW,
        height: targetH,
        fit:    opts.fit,
        withoutEnlargement: true, // Never upscale
      })
      .withMetadata({ exif: {} });

    let outputBuffer: Buffer;
    let outputMime:   string;

    // Keep the same format as input
    if (ext === "jpg" || ext === "jpeg") {
      outputBuffer = await pipeline.jpeg({ quality: 90, mozjpeg: true }).toBuffer();
      outputMime = "image/jpeg";
    } else if (ext === "png") {
      outputBuffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
      outputMime = "image/png";
    } else if (ext === "webp") {
      outputBuffer = await pipeline.webp({ quality: 85 }).toBuffer();
      outputMime = "image/webp";
    } else {
      // Default fallback
      outputBuffer = await pipeline.jpeg({ quality: 90 }).toBuffer();
      outputMime = "image/jpeg";
    }

    const outputSize       = outputBuffer.length;
    const processingTimeMs = Date.now() - startTime;
    const reductionPercent = originalSize > outputSize
      ? parseFloat((((originalSize - outputSize) / originalSize) * 100).toFixed(1))
      : 0;

    // Get output dimensions for the filename
    const outMeta = await sharp(outputBuffer).metadata();
    const suffix  = `${outMeta.width ?? targetW}x${outMeta.height ?? targetH}`;

    return {
      success: true,
      originalSize,
      outputSize,
      reductionPercent,
      processingTimeMs,
      outputMimeType: outputMime,
      outputFileName: `${baseName}_${suffix}.${ext}`,
      downloadUrl:    `data:${outputMime};base64,${outputBuffer.toString("base64")}`,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Resize failed.";
    return fail(originalSize, msg);
  }
}

function fail(originalSize: number, error: string): ToolApiResponse {
  return {
    success: false, originalSize, outputSize: originalSize,
    reductionPercent: 0, processingTimeMs: 0,
    outputMimeType: "", outputFileName: "", error,
  };
}
