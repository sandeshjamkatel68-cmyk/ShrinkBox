import { compressFile } from "@/lib/compression";
import type { CompressionLevel, ToolApiResponse } from "@/types/compression";

export interface BulkFile {
  buffer:   Buffer;
  fileName: string;
  mimeType: string;
}

export interface BulkResult {
  fileName:         string;
  success:          boolean;
  originalSize:     number;
  outputSize:       number;
  reductionPercent: number;
  downloadUrl?:     string;
  outputFileName?:  string;
  error?:           string;
}

export interface BulkApiResponse {
  success:          boolean;
  totalOriginal:    number;
  totalOutput:      number;
  totalReduction:   number;
  processingTimeMs: number;
  results:          BulkResult[];
  error?:           string;
}

const BULK_MAX_FILES = 10;

/**
 * Compresses multiple image files in parallel.
 * Returns individual results for each file.
 */
export async function bulkCompress(
  files: BulkFile[],
  level: CompressionLevel
): Promise<BulkApiResponse> {
  const startTime = Date.now();

  if (files.length === 0) {
    return bulkFail("No files provided.");
  }

  if (files.length > BULK_MAX_FILES) {
    return bulkFail(`Maximum ${BULK_MAX_FILES} files per batch. You uploaded ${files.length}.`);
  }

  // Process all files in parallel
  const settled = await Promise.allSettled(
    files.map((f) =>
      compressFile(f.buffer, f.fileName, f.mimeType, { level })
    )
  );

  const results: BulkResult[] = settled.map((outcome, i) => {
    const f = files[i];

    if (outcome.status === "rejected") {
      return {
        fileName:     f.fileName,
        success:      false,
        originalSize: f.buffer.length,
        outputSize:   f.buffer.length,
        reductionPercent: 0,
        error:        "Processing failed.",
      };
    }

    const r = outcome.value;
    return {
      fileName:         f.fileName,
      success:          r.success,
      originalSize:     r.originalSize,
      outputSize:       r.compressedSize,
      reductionPercent: r.reductionPercent,
      outputFileName:   r.outputFileName,
      downloadUrl:      r.outputBase64
        ? `data:${r.outputMimeType};base64,${r.outputBase64}`
        : undefined,
      error: r.error,
    };
  });

  const totalOriginal = results.reduce((s, r) => s + r.originalSize, 0);
  const totalOutput   = results.reduce((s, r) => s + r.outputSize, 0);
  const totalReduction = totalOriginal > 0
    ? parseFloat((((totalOriginal - totalOutput) / totalOriginal) * 100).toFixed(1))
    : 0;

  return {
    success:          true,
    totalOriginal,
    totalOutput,
    totalReduction,
    processingTimeMs: Date.now() - startTime,
    results,
  };
}

function bulkFail(error: string): BulkApiResponse {
  return {
    success: false, totalOriginal: 0, totalOutput: 0,
    totalReduction: 0, processingTimeMs: 0, results: [], error,
  };
}
