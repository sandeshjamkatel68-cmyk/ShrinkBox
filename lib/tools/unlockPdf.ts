import { PDFDocument } from "pdf-lib";

export interface UnlockResult {
  success: boolean;
  outputSize: number;
  pageCount: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

/**
 * Attempts to unlock / remove restrictions from a PDF.
 * pdf-lib can load PDFs that have copy/print restrictions but no open password.
 * If the PDF has an open password, the user must provide it.
 */
export async function unlockPdf(
  input: Buffer,
  originalFileName: string,
  password?: string
): Promise<UnlockResult> {
  const startTime = Date.now();

  function stripExt(f: string) {
    const i = f.lastIndexOf(".");
    return i === -1 ? f : f.substring(0, i);
  }

  try {
    let doc: PDFDocument;

    // Try loading with password if provided
    try {
      doc = await PDFDocument.load(input, {
        ignoreEncryption: true,
        ...(password ? { password } : {}),
      });
    } catch {
      return fail("Could not open PDF. If it has a password, make sure you entered the correct one.");
    }

    // Re-save without encryption flags
    doc.setProducer("ShrinkBox");
    doc.setTitle("");
    doc.setAuthor("");

    const outBytes = await doc.save({ useObjectStreams: true });
    const buf = Buffer.from(outBytes);
    const baseName = stripExt(originalFileName);

    return {
      success: true,
      outputSize: buf.length,
      pageCount: doc.getPageCount(),
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Unlock failed.");
  }
}

function fail(error: string): UnlockResult {
  return { success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, error };
}
