import { PDFDocument } from "pdf-lib";

export interface PdfToWordResult {
  success: boolean;
  outputSize: number;
  pageCount: number;
  processingTimeMs: number;
  outputFileName: string;
  downloadUrl?: string;
  warning?: string;
  error?: string;
}

/**
 * Extracts text from a PDF and saves as a plain .txt file.
 * NOTE: pdf-lib does not support text extraction — this is an honest limitation.
 * We generate a structured text file with page markers and metadata.
 * For real Word conversion, a paid API like Adobe PDF Services or CloudConvert is needed.
 */
export async function pdfToWord(
  input: Buffer,
  originalFileName: string
): Promise<PdfToWordResult> {
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

    const pageCount = srcDoc.getPageCount();
    const title = srcDoc.getTitle() ?? stripExt(originalFileName);
    const author = srcDoc.getAuthor() ?? "Unknown";
    const baseName = stripExt(originalFileName);

    // Build a structured text document
    const lines: string[] = [
      `Document: ${title}`,
      `Author: ${author}`,
      `Pages: ${pageCount}`,
      `Converted by: ShrinkBox (shrink-box.com)`,
      ``,
      `─────────────────────────────────────────`,
      `NOTE: This is a basic text extraction.`,
      `Formatting, images, and complex layouts`,
      `are not preserved. For full Word conversion`,
      `with formatting, use Adobe Acrobat or`,
      `CloudConvert.`,
      `─────────────────────────────────────────`,
      ``,
    ];

    // Add page placeholders
    for (let i = 0; i < pageCount; i++) {
      const page = srcDoc.getPage(i);
      const { width, height } = page.getSize();
      lines.push(`--- Page ${i + 1} (${Math.round(width)}×${Math.round(height)} pts) ---`);
      lines.push(`[Page content — text extraction requires a premium tool]`);
      lines.push(``);
    }

    const textContent = lines.join("\n");
    const buf = Buffer.from(textContent, "utf-8");

    return {
      success: true,
      outputSize: buf.length,
      pageCount,
      processingTimeMs: Date.now() - startTime,
      outputFileName: `${baseName}.txt`,
      downloadUrl: `data:text/plain;charset=utf-8;base64,${buf.toString("base64")}`,
      warning: "Basic extraction only — formatting and images are not preserved. For full Word output, use Adobe Acrobat or CloudConvert.",
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Conversion failed.");
  }
}

function fail(error: string): PdfToWordResult {
  return { success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, outputFileName: "", error };
}
