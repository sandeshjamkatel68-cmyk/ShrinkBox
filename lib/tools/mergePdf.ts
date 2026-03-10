import { PDFDocument } from "pdf-lib";
import type { ToolApiResponse } from "@/types/compression";

/**
 * Merges multiple PDF buffers into a single PDF.
 * Preserves all pages from each input in order.
 */
export async function mergePdfs(
  inputs: Buffer[],
  outputFileName = "merged.pdf"
): Promise<ToolApiResponse> {
  const startTime   = Date.now();
  const originalSize = inputs.reduce((sum, b) => sum + b.length, 0);

  if (inputs.length < 2) {
    return fail(originalSize, "Please upload at least 2 PDF files to merge.");
  }

  if (inputs.length > 10) {
    return fail(originalSize, "Maximum 10 PDFs can be merged at once.");
  }

  try {
    const mergedDoc = await PDFDocument.create();

    for (let i = 0; i < inputs.length; i++) {
      let srcDoc: PDFDocument;
      try {
        srcDoc = await PDFDocument.load(inputs[i], { ignoreEncryption: false });
      } catch {
        return fail(originalSize, `File ${i + 1} is invalid or password-protected.`);
      }

      const pages = await mergedDoc.copyPages(srcDoc, srcDoc.getPageIndices());
      pages.forEach((page) => mergedDoc.addPage(page));
    }

    // Strip metadata from merged output
    mergedDoc.setTitle("");
    mergedDoc.setAuthor("");
    mergedDoc.setProducer("ShrinkBox");
    mergedDoc.setCreator("ShrinkBox");

    const outputBytes = await mergedDoc.save({ useObjectStreams: true });
    const outputBuffer = Buffer.from(outputBytes);
    const outputSize   = outputBuffer.length;
    const processingTimeMs = Date.now() - startTime;

    return {
      success: true,
      originalSize,
      outputSize,
      reductionPercent: 0, // Merge doesn't reduce — it combines
      processingTimeMs,
      outputMimeType: "application/pdf",
      outputFileName: outputFileName.endsWith(".pdf") ? outputFileName : `${outputFileName}.pdf`,
      downloadUrl:    `data:application/pdf;base64,${outputBuffer.toString("base64")}`,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Merge failed.";
    return fail(originalSize, msg);
  }
}

function fail(originalSize: number, error: string): ToolApiResponse {
  return {
    success: false, originalSize, outputSize: originalSize,
    reductionPercent: 0, processingTimeMs: 0,
    outputMimeType: "application/pdf", outputFileName: "", error,
  };
}
