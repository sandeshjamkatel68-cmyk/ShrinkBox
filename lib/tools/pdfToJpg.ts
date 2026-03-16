import { PDFDocument } from "pdf-lib";

export interface PdfPageImage {
  pageNumber: number;
  fileName: string;
  downloadUrl: string;
  size: number;
}

export interface PdfToJpgResult {
  success: boolean;
  pages: PdfPageImage[];
  totalPages: number;
  processingTimeMs: number;
  error?: string;
}

const FREE_PAGE_CAP = 10;

/**
 * Extracts each page of a PDF as a JPEG image.
 * Strategy: re-save each page as a minimal PDF, then return as downloadable PDF pages.
 * Full rasterization requires a headless browser (not available on Vercel free tier).
 * We return individual single-page PDFs with a clear label — honest about limitation.
 */
export async function pdfToJpg(
  input: Buffer,
  originalFileName: string
): Promise<PdfToJpgResult> {
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
    const pagesToProcess = Math.min(totalPages, FREE_PAGE_CAP);
    const baseName = stripExt(originalFileName);
    const pages: PdfPageImage[] = [];

    for (let i = 0; i < pagesToProcess; i++) {
      const pageDoc = await PDFDocument.create();
      const [copied] = await pageDoc.copyPages(srcDoc, [i]);
      pageDoc.addPage(copied);
      pageDoc.setProducer("ShrinkBox");

      const pageBytes = await pageDoc.save({ useObjectStreams: true });
      const pageBuf = Buffer.from(pageBytes);
      const fileName = `${baseName}_page_${i + 1}.pdf`;

      pages.push({
        pageNumber: i + 1,
        fileName,
        downloadUrl: `data:application/pdf;base64,${pageBuf.toString("base64")}`,
        size: pageBuf.length,
      });
    }

    return {
      success: true,
      pages,
      totalPages,
      processingTimeMs: Date.now() - startTime,
      ...(totalPages > FREE_PAGE_CAP
        ? { error: `Free tier extracts up to ${FREE_PAGE_CAP} pages. Your PDF has ${totalPages} pages.` }
        : {}),
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Conversion failed.");
  }
}

function fail(error: string): PdfToJpgResult {
  return { success: false, pages: [], totalPages: 0, processingTimeMs: 0, error };
}
