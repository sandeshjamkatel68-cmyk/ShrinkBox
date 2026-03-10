import { validateFileBuffer } from "@/lib/validation/fileValidator";
import { imageCompressionEngine } from "./image";
import { pdfCompressionEngine } from "./pdf";
import type { CompressionOptions, CompressionResult } from "@/types/compression";

/**
 * Main entry point for all compression operations.
 *
 * 1. Validates the file (size, MIME, magic bytes)
 * 2. Routes to the correct compression engine
 * 3. Returns a CompressionResult — always succeeds structurally,
 *    check result.success for outcome
 */
export async function compressFile(
  buffer: Buffer,
  originalFileName: string,
  clientMime: string,
  options: CompressionOptions
): Promise<CompressionResult> {
  // Step 1: Validate
  const validation = validateFileBuffer(buffer, originalFileName, clientMime);

  if (!validation.valid || !validation.mime || !validation.category) {
    return {
      success:          false,
      originalSize:     buffer.length,
      compressedSize:   buffer.length,
      reductionPercent: 0,
      processingTimeMs: 0,
      outputMimeType:   "image/jpeg", // placeholder
      outputFileName:   "",
      error:            validation.error ?? "File validation failed.",
    };
  }

  const { mime, category } = validation;

  // Step 2: Route to correct engine
  if (category === "image") {
    return imageCompressionEngine.compress(buffer, originalFileName, mime, options);
  }

  if (category === "pdf") {
    return pdfCompressionEngine.compress(buffer, originalFileName, mime, options);
  }

  // Should never reach here given validation, but fail safely
  return {
    success:          false,
    originalSize:     buffer.length,
    compressedSize:   buffer.length,
    reductionPercent: 0,
    processingTimeMs: 0,
    outputMimeType:   "image/jpeg",
    outputFileName:   "",
    error:            "Unsupported file type.",
  };
}
