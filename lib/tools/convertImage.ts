import sharp from "sharp";
import type { ConvertTargetFormat, ToolApiResponse } from "@/types/compression";

function stripExtension(filename: string): string {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) return filename;
  return filename.substring(0, lastDot);
}

/**
 * Converts an image buffer to a target format.
 * Supports: jpeg, png, webp
 */
export async function convertImage(
  input: Buffer,
  originalFileName: string,
  targetFormat: ConvertTargetFormat
): Promise<ToolApiResponse> {
  const startTime = Date.now();
  const originalSize = input.length;
  const baseName = stripExtension(originalFileName);

  try {
    const pipeline = sharp(input).rotate().withMetadata({ exif: {} });

    let outputBuffer: Buffer;
    let outputMime:   string;
    let outputExt:    string;

    if (targetFormat === "jpeg") {
      outputBuffer = await pipeline.jpeg({ quality: 90, progressive: true, mozjpeg: true }).toBuffer();
      outputMime = "image/jpeg";
      outputExt  = "jpg";
    } else if (targetFormat === "png") {
      outputBuffer = await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer();
      outputMime = "image/png";
      outputExt  = "png";
    } else if (targetFormat === "webp") {
      outputBuffer = await pipeline.webp({ quality: 85, effort: 6 }).toBuffer();
      outputMime = "image/webp";
      outputExt  = "webp";
    } else {
      return fail(originalSize, "Unsupported target format.");
    }

    const outputSize       = outputBuffer.length;
    const processingTimeMs = Date.now() - startTime;
    const reductionPercent = originalSize > outputSize
      ? parseFloat((((originalSize - outputSize) / originalSize) * 100).toFixed(1))
      : 0;

    return {
      success: true,
      originalSize,
      outputSize,
      reductionPercent,
      processingTimeMs,
      outputMimeType: outputMime,
      outputFileName: `${baseName}.${outputExt}`,
      downloadUrl:    `data:${outputMime};base64,${outputBuffer.toString("base64")}`,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Conversion failed.";
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
