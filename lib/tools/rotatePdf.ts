import { PDFDocument, degrees } from "pdf-lib";

export interface RotatePdfResult {
  success: boolean;
  outputSize: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

/**
 * Rotates all pages in a PDF by the given angle (90, 180, 270).
 */
export async function rotatePdf(
  input: Buffer,
  originalFileName: string,
  angle: 90 | 180 | 270
): Promise<RotatePdfResult> {
  const startTime = Date.now();

  function stripExt(f: string) {
    const i = f.lastIndexOf(".");
    return i === -1 ? f : f.substring(0, i);
  }

  try {
    let doc: PDFDocument;
    try {
      doc = await PDFDocument.load(input, { ignoreEncryption: false });
    } catch {
      return fail("PDF is invalid or password-protected.");
    }

    const pages = doc.getPages();
    for (const page of pages) {
      const current = page.getRotation().angle;
      page.setRotation(degrees((current + angle) % 360));
    }

    doc.setProducer("ShrinkBox");
    const outBytes = await doc.save({ useObjectStreams: true });
    const buf = Buffer.from(outBytes);
    const baseName = stripExt(originalFileName);

    return {
      success: true,
      outputSize: buf.length,
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Rotation failed.");
  }
}

function fail(error: string): RotatePdfResult {
  return { success: false, outputSize: 0, processingTimeMs: 0, error };
}
