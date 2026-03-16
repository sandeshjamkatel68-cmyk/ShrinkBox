import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export interface PageNumbersResult {
  success: boolean;
  outputSize: number;
  pageCount: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

export interface PageNumberOptions {
  position: "bottom-center" | "bottom-right" | "bottom-left" | "top-center" | "top-right";
  startFrom: number;       // e.g. 1
  fontSize: number;        // e.g. 11
  format: "number" | "page-of-total";  // "3" vs "3 / 10"
  color: "black" | "gray";
}

export async function addPageNumbers(
  input: Buffer,
  originalFileName: string,
  opts: PageNumberOptions
): Promise<PageNumbersResult> {
  const startTime = Date.now();

  try {
    let doc: PDFDocument;
    try {
      doc = await PDFDocument.load(input, { ignoreEncryption: false });
    } catch {
      return fail("PDF is invalid or password-protected.");
    }

    const font = await doc.embedFont(StandardFonts.Helvetica);
    const pages = doc.getPages();
    const total = pages.length;
    const textColor = opts.color === "gray" ? rgb(0.5, 0.5, 0.5) : rgb(0, 0, 0);
    const margin = 24;

    pages.forEach((page, i) => {
      const { width, height } = page.getSize();
      const pageNum = i + opts.startFrom;
      const label = opts.format === "page-of-total"
        ? `${pageNum} / ${total + opts.startFrom - 1}`
        : `${pageNum}`;

      const textWidth = font.widthOfTextAtSize(label, opts.fontSize);

      let x: number;
      let y: number;

      switch (opts.position) {
        case "bottom-center":
          x = width / 2 - textWidth / 2;
          y = margin;
          break;
        case "bottom-right":
          x = width - textWidth - margin;
          y = margin;
          break;
        case "bottom-left":
          x = margin;
          y = margin;
          break;
        case "top-center":
          x = width / 2 - textWidth / 2;
          y = height - margin - opts.fontSize;
          break;
        case "top-right":
          x = width - textWidth - margin;
          y = height - margin - opts.fontSize;
          break;
        default:
          x = width / 2 - textWidth / 2;
          y = margin;
      }

      page.drawText(label, {
        x,
        y,
        size: opts.fontSize,
        font,
        color: textColor,
        opacity: 0.85,
      });
    });

    doc.setProducer("ShrinkBox");
    const outBytes = await doc.save({ useObjectStreams: true });
    const buf = Buffer.from(outBytes);

    return {
      success: true,
      outputSize: buf.length,
      pageCount: total,
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Failed to add page numbers.");
  }
}

function fail(error: string): PageNumbersResult {
  return { success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, error };
}
