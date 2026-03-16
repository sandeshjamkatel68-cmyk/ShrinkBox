import { PDFDocument, rgb, degrees, StandardFonts } from "pdf-lib";

export interface WatermarkResult {
  success: boolean;
  outputSize: number;
  pageCount: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

export interface WatermarkOptions {
  text: string;
  opacity: number;      // 0.0 - 1.0
  fontSize: number;     // e.g. 48
  angle: number;        // degrees, e.g. 45
  color: "gray" | "red" | "blue" | "black";
  position: "center" | "tile";
}

const COLOR_MAP = {
  gray:  rgb(0.5, 0.5, 0.5),
  red:   rgb(0.8, 0.1, 0.1),
  blue:  rgb(0.1, 0.2, 0.8),
  black: rgb(0.0, 0.0, 0.0),
};

export async function watermarkPdf(
  input: Buffer,
  originalFileName: string,
  opts: WatermarkOptions
): Promise<WatermarkResult> {
  const startTime = Date.now();

  if (!opts.text.trim()) return fail("Watermark text cannot be empty.");

  try {
    let doc: PDFDocument;
    try {
      doc = await PDFDocument.load(input, { ignoreEncryption: false });
    } catch {
      return fail("PDF is invalid or password-protected.");
    }

    const font = await doc.embedFont(StandardFonts.HelveticaBold);
    const pages = doc.getPages();
    const color = COLOR_MAP[opts.color] ?? COLOR_MAP.gray;

    for (const page of pages) {
      const { width, height } = page.getSize();
      const textWidth = font.widthOfTextAtSize(opts.text, opts.fontSize);

      if (opts.position === "tile") {
        // Tile watermark across page in a grid
        const cols = Math.ceil(width / (textWidth + 60)) + 1;
        const rows = Math.ceil(height / (opts.fontSize + 60)) + 1;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            page.drawText(opts.text, {
              x: c * (textWidth + 60) - 30,
              y: r * (opts.fontSize + 60) - 30,
              size: opts.fontSize,
              font,
              color,
              opacity: opts.opacity,
              rotate: degrees(opts.angle),
            });
          }
        }
      } else {
        // Center watermark
        page.drawText(opts.text, {
          x: width / 2 - textWidth / 2,
          y: height / 2 - opts.fontSize / 2,
          size: opts.fontSize,
          font,
          color,
          opacity: opts.opacity,
          rotate: degrees(opts.angle),
        });
      }
    }

    doc.setProducer("ShrinkBox");
    const outBytes = await doc.save({ useObjectStreams: true });
    const buf = Buffer.from(outBytes);

    return {
      success: true,
      outputSize: buf.length,
      pageCount: pages.length,
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Watermark failed.");
  }
}

function fail(error: string): WatermarkResult {
  return { success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, error };
}
