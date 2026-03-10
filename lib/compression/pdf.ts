import { PDFDocument } from "pdf-lib";
import type { CompressionOptions, CompressionResult } from "@/types/compression";
import type { CompressionEngine } from "./types";

export const pdfCompressionEngine: CompressionEngine = {
  async compress(
    input: Buffer,
    originalFileName: string,
    _mime,
    _options: CompressionOptions
  ): Promise<CompressionResult> {
    const startTime = Date.now();
    const originalSize = input.length;

    try {
      // Load the PDF
      const pdfDoc = await PDFDocument.load(input, {
        ignoreEncryption: false, // Don't silently accept encrypted PDFs
        updateMetadata: false,
      });

      // Strip metadata — often surprisingly large
      pdfDoc.setTitle("");
      pdfDoc.setAuthor("");
      pdfDoc.setSubject("");
      pdfDoc.setKeywords([]);
      pdfDoc.setProducer("");
      pdfDoc.setCreator("");
      pdfDoc.setCreationDate(new Date(0));
      pdfDoc.setModificationDate(new Date(0));

      // Save with maximum compression settings
      const outputBytes = await pdfDoc.save({
        useObjectStreams: true,  // Pack multiple objects into compressed streams
        addDefaultPage: false,
        objectsPerTick: 50,
      });

      const outputBuffer = Buffer.from(outputBytes);
      const compressedSize = outputBuffer.length;
      const processingTimeMs = Date.now() - startTime;

      // pdf-lib compression works best on metadata-heavy or unoptimized PDFs.
      // For image-heavy PDFs, the reduction will be small — we're honest about this.
      if (compressedSize >= originalSize) {
        return {
          success:          true,
          originalSize,
          compressedSize:   originalSize,
          reductionPercent: 0,
          processingTimeMs,
          outputMimeType:   "application/pdf",
          outputFileName:   originalFileName,
          outputBase64:     input.toString("base64"),
          error:            "PDF is already optimized. No further reduction possible with current engine.",
        };
      }

      const reductionPercent = parseFloat(
        (((originalSize - compressedSize) / originalSize) * 100).toFixed(1)
      );

      const baseName = stripExtension(originalFileName);

      return {
        success: true,
        originalSize,
        compressedSize,
        reductionPercent,
        processingTimeMs,
        outputMimeType:  "application/pdf",
        outputFileName:  `${baseName}_compressed.pdf`,
        outputBase64:    outputBuffer.toString("base64"),
      };

    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error.";

      // Specific error handling for common PDF issues
      if (message.includes("encrypted")) {
        return failResult(originalSize, "Cannot compress encrypted or password-protected PDFs.");
      }
      if (message.includes("Failed to parse")) {
        return failResult(originalSize, "PDF appears to be corrupted or invalid.");
      }

      return failResult(originalSize, `PDF compression failed: ${message}`);
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
    outputMimeType:   "application/pdf",
    outputFileName:   "",
    error,
  };
}
