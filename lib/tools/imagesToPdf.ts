import { PDFDocument } from "pdf-lib";
import sharp from "sharp";

export interface ImagesToPdfResult {
  success: boolean;
  outputSize: number;
  pageCount: number;
  processingTimeMs: number;
  downloadUrl?: string;
  error?: string;
}

/**
 * Combines multiple image buffers (JPG/PNG/WebP) into a single PDF.
 * Each image becomes one page, sized to fit the image dimensions.
 */
export async function imagesToPdf(
  images: { buffer: Buffer; mimeType: string; fileName: string }[],
  outputFileName = "images.pdf"
): Promise<ImagesToPdfResult> {
  const startTime = Date.now();

  if (images.length === 0) return fail("No images provided.");
  if (images.length > 20) return fail("Maximum 20 images per PDF.");

  try {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.setProducer("ShrinkBox");
    pdfDoc.setTitle(outputFileName.replace(".pdf", ""));

    for (const img of images) {
      // Convert everything to JPEG first via Sharp for consistent handling
      let jpegBuffer: Buffer;
      try {
        jpegBuffer = await sharp(img.buffer)
          .rotate()
          .jpeg({ quality: 90 })
          .toBuffer();
      } catch {
        return fail(`Could not process image: ${img.fileName}`);
      }

      const meta = await sharp(jpegBuffer).metadata();
      const w = meta.width ?? 800;
      const h = meta.height ?? 600;

      const embeddedImg = await pdfDoc.embedJpg(jpegBuffer);
      const page = pdfDoc.addPage([w, h]);
      page.drawImage(embeddedImg, { x: 0, y: 0, width: w, height: h });
    }

    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const buf = Buffer.from(pdfBytes);

    return {
      success: true,
      outputSize: buf.length,
      pageCount: images.length,
      processingTimeMs: Date.now() - startTime,
      downloadUrl: `data:application/pdf;base64,${buf.toString("base64")}`,
    };
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Conversion failed.");
  }
}

function fail(error: string): ImagesToPdfResult {
  return { success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, error };
}
