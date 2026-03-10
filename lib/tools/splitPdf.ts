import { PDFDocument } from "pdf-lib";
import type { ToolApiResponse, SplitPage } from "@/types/compression";

/**
 * Splits a PDF into individual single-page PDFs.
 * Returns each page as a separate downloadable file.
 * Capped at 20 pages for free tier.
 */
export async function splitPdf(
  input: Buffer,
  originalFileName: string
): Promise<ToolApiResponse> {
  const startTime   = Date.now();
  const originalSize = input.length;

  const FREE_PAGE_CAP = 20;

  function stripExtension(f: string) {
    const i = f.lastIndexOf(".");
    return i === -1 ? f : f.substring(0, i);
  }

  try {
    let srcDoc: PDFDocument;
    try {
      srcDoc = await PDFDocument.load(input, { ignoreEncryption: false });
    } catch {
      return fail(originalSize, "PDF is invalid or password-protected.");
    }

    const totalPages = srcDoc.getPageCount();

    if (totalPages < 2) {
      return fail(originalSize, "PDF has only 1 page. Nothing to split.");
    }

    const pagesToProcess = Math.min(totalPages, FREE_PAGE_CAP);
    const baseName = stripExtension(originalFileName);
    const pages: SplitPage[] = [];

    for (let i = 0; i < pagesToProcess; i++) {
      const pageDoc = await PDFDocument.create();
      const [copied] = await pageDoc.copyPages(srcDoc, [i]);
      pageDoc.addPage(copied);
      pageDoc.setProducer("ShrinkBox");

      const pageBytes  = await pageDoc.save({ useObjectStreams: true });
      const pageBuf    = Buffer.from(pageBytes);
      const fileName   = `${baseName}_page_${i + 1}.pdf`;

      pages.push({
        pageNumber:  i + 1,
        fileName,
        downloadUrl: `data:application/pdf;base64,${pageBuf.toString("base64")}`,
        size:        pageBuf.length,
      });
    }

    const processingTimeMs = Date.now() - startTime;

    return {
      success:          true,
      originalSize,
      outputSize:       pages.reduce((s, p) => s + p.size, 0),
      reductionPercent: 0,
      processingTimeMs,
      outputMimeType:   "application/pdf",
      outputFileName:   `${baseName}_split.zip`, // Informational label
      pages,
      ...(totalPages > FREE_PAGE_CAP
        ? { error: `Free tier processes up to ${FREE_PAGE_CAP} pages. Your PDF has ${totalPages} pages.` }
        : {}),
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Split failed.";
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
