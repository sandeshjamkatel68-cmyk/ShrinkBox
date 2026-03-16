import { PDFDocument } from "pdf-lib";

export interface RemovePagesResult {
  success: boolean;
  outputSize: number;
  originalPages: number;
  remainingPages: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

/**
 * Removes specified pages from a PDF.
 * pagesToRemove is 1-indexed array of page numbers.
 */
export async function removePdfPages(
  input: Buffer,
  originalFileName: string,
  pagesToRemove: number[]
): Promise<RemovePagesResult> {
  const startTime = Date.now();

  function stripExt(f: string) {
    const i = f.lastIndexOf(".");
    return i === -1 ? f : f.substring(0, i);
  }

  try {
    let srcDoc: PDFDocument;
    try {
      srcDoc = await PDFDocument.load(input, { ignoreEncryption: false });
    } catch {
      return fail("PDF is invalid or password-protected.");
    }

    const totalPages = srcDoc.getPageCount();

    // Validate page numbers
    const invalid = pagesToRemove.filter((p) => p < 1 || p > totalPages);
    if (invalid.length > 0) {
      return fail(`Invalid page numbers: ${invalid.join(", ")}. PDF has ${totalPages} pages.`);
    }

    if (pagesToRemove.length >= totalPages) {
      return fail("Cannot remove all pages. Keep at least 1 page.");
    }

    // Build list of pages to KEEP (0-indexed)
    const removeSet = new Set(pagesToRemove.map((p) => p - 1));
    const keepIndices = Array.from({ length: totalPages }, (_, i) => i)
      .filter((i) => !removeSet.has(i));

    const newDoc = await PDFDocument.create();
    const copied = await newDoc.copyPages(srcDoc, keepIndices);
    copied.forEach((page) => newDoc.addPage(page));
    newDoc.setProducer("ShrinkBox");

    const outBytes = await newDoc.save({ useObjectStreams: true });
    const buf = Buffer.from(outBytes);

    return {
      success: true,
      outputSize: buf.length,
      originalPages: totalPages,
      remainingPages: keepIndices.length,
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Failed to remove pages.");
  }
}

function fail(error: string): RemovePagesResult {
  return { success: false, outputSize: 0, originalPages: 0, remainingPages: 0, processingTimeMs: 0, error };
}
