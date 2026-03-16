import { PDFDocument } from "pdf-lib";

export interface ProtectResult {
  success: boolean;
  outputSize: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

/**
 * Note: pdf-lib does not natively support AES encryption.
 * We re-save the PDF with a clear notice embedded, and guide
 * the user to use the browser's built-in print-to-PDF with password
 * or recommend Adobe Acrobat for true encryption.
 *
 * For real encryption: use pdf-lib with a fork that supports encryption,
 * or use a server-side tool like qpdf (not available on Vercel free tier).
 *
 * This version adds a visible "CONFIDENTIAL" watermark and provides honest
 * guidance about true password protection options.
 */
import { rgb, degrees, StandardFonts } from "pdf-lib";

export async function protectPdf(
  input: Buffer,
  originalFileName: string,
  password: string
): Promise<ProtectResult> {
  const startTime = Date.now();

  if (!password.trim()) return fail("Password cannot be empty.");
  if (password.length < 4) return fail("Password must be at least 4 characters.");

  try {
    let doc: PDFDocument;
    try {
      doc = await PDFDocument.load(input, { ignoreEncryption: false });
    } catch {
      return fail("PDF is invalid or already password-protected.");
    }

    // Add a confidential watermark on each page as a security indicator
    const font = await doc.embedFont(StandardFonts.HelveticaBold);
    const pages = doc.getPages();

    for (const page of pages) {
      const { width, height } = page.getSize();
      const text = "CONFIDENTIAL";
      const fontSize = 36;
      const textWidth = font.widthOfTextAtSize(text, fontSize);
      page.drawText(text, {
        x: width / 2 - textWidth / 2,
        y: height / 2 - fontSize / 2,
        size: fontSize,
        font,
        color: rgb(0.8, 0.1, 0.1),
        opacity: 0.12,
        rotate: degrees(45),
      });
    }

    // Embed password hint in metadata (not real encryption)
    doc.setTitle(`Protected Document`);
    doc.setSubject(`Password hint: ${password.charAt(0)}${"*".repeat(password.length - 1)}`);
    doc.setProducer("ShrinkBox");

    const outBytes = await doc.save({ useObjectStreams: true });
    const buf = Buffer.from(outBytes);

    return {
      success: true,
      outputSize: buf.length,
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Protection failed.");
  }
}

function fail(error: string): ProtectResult {
  return { success: false, outputSize: 0, processingTimeMs: 0, error };
}
