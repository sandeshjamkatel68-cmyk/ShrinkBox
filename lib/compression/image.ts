import sharp from "sharp";
import { IMAGE_QUALITY } from "@/lib/validation/constants";
import type { CompressionOptions, CompressionResult, SupportedMimeType } from "@/types/compression";
import type { CompressionEngine } from "./types";

export const imageCompressionEngine: CompressionEngine = {
  async compress(
    input: Buffer,
    originalFileName: string,
    mime: SupportedMimeType,
    options: CompressionOptions
  ): Promise<CompressionResult> {
    const startTime = Date.now();
    const originalSize = input.length;
    const quality = IMAGE_QUALITY[options.level];

    try {
      let pipeline = sharp(input)
        .rotate() // Auto-rotate based on EXIF orientation
        .withMetadata({ exif: {} }); // Strip EXIF but keep ICC profile

      let outputBuffer: Buffer;
      let outputMime: SupportedMimeType;
      let outputFileName: string;
      const baseName = stripExtension(originalFileName);

      if (mime === "image/jpeg") {
        outputBuffer = await pipeline
          .jpeg({
            quality,
            progressive: true,   // Progressive JPEG — loads faster in browser
            mozjpeg: true,        // Use MozJPEG encoder for better compression
          })
          .toBuffer();
        outputMime = "image/jpeg";
        outputFileName = `${baseName}_compressed.jpg`;

      } else if (mime === "image/png") {
        outputBuffer = await pipeline
          .png({
            quality,
            compressionLevel: 9,   // Max zlib compression (lossless)
            palette: quality < 80, // Convert to palette (lossy) for high compression
            effort: 10,            // Max effort for better compression
          })
          .toBuffer();
        outputMime = "image/png";
        outputFileName = `${baseName}_compressed.png`;

      } else if (mime === "image/webp") {
        outputBuffer = await pipeline
          .webp({
            quality,
            effort: 6,         // 0–6, higher = smaller file but slower
            smartSubsample: true,
          })
          .toBuffer();
        outputMime = "image/webp";
        outputFileName = `${baseName}_compressed.webp`;

      } else {
        return failResult(originalSize, "Unsupported image format.");
      }

      const compressedSize = outputBuffer.length;
      const processingTimeMs = Date.now() - startTime;

      // If compressed output is larger than input, return original
      // This can happen with already-optimized images
      if (compressedSize >= originalSize) {
        return {
          success:          true,
          originalSize,
          compressedSize:   originalSize,
          reductionPercent: 0,
          processingTimeMs,
          outputMimeType:   mime,
          outputFileName:   originalFileName,
          outputBase64:     input.toString("base64"),
          error:            "File is already well-optimized. No further reduction possible.",
        };
      }

      const reductionPercent = parseFloat(
        (((originalSize - compressedSize) / originalSize) * 100).toFixed(1)
      );

      return {
        success: true,
        originalSize,
        compressedSize,
        reductionPercent,
        processingTimeMs,
        outputMimeType:  outputMime,
        outputFileName,
        outputBase64:    outputBuffer.toString("base64"),
      };

    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error during image compression.";
      return failResult(originalSize, `Image compression failed: ${message}`);
    }
  },
};

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function stripExtension(filename: string): string {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) return filename;
  return filename.substring(0, lastDot);
}

function failResult(originalSize: number, error: string): CompressionResult {
  return {
    success:          false,
    originalSize,
    compressedSize:   originalSize,
    reductionPercent: 0,
    processingTimeMs: 0,
    outputMimeType:   "image/jpeg",
    outputFileName:   "",
    error,
  };
}
