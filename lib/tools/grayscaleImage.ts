import sharp from "sharp";

export interface GrayscaleResult {
  success: boolean;
  originalSize: number;
  outputSize: number;
  processingTimeMs: number;
  outputFileName: string;
  downloadUrl?: string;
  error?: string;
}

/**
 * Converts an image to grayscale (black & white).
 * Preserves original format.
 */
export async function grayscaleImage(
  input: Buffer,
  originalFileName: string
): Promise<GrayscaleResult> {
  const startTime = Date.now();
  const originalSize = input.length;

  function stripExt(f: string) { const i = f.lastIndexOf("."); return i === -1 ? f : f.substring(0, i); }
  function getExt(f: string) { const i = f.lastIndexOf("."); return i === -1 ? "jpg" : f.substring(i + 1).toLowerCase(); }

  try {
    const ext = getExt(originalFileName);
    const pipeline = sharp(input).rotate().grayscale();

    let outputBuffer: Buffer;
    let outputMime: string;

    if (ext === "jpg" || ext === "jpeg") {
      outputBuffer = await pipeline.jpeg({ quality: 90, mozjpeg: true }).toBuffer();
      outputMime = "image/jpeg";
    } else if (ext === "png") {
      outputBuffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
      outputMime = "image/png";
    } else {
      outputBuffer = await pipeline.webp({ quality: 90 }).toBuffer();
      outputMime = "image/webp";
    }

    return {
      success: true,
      originalSize,
      outputSize: outputBuffer.length,
      processingTimeMs: Date.now() - startTime,
      outputFileName: `${stripExt(originalFileName)}_bw.${ext}`,
      downloadUrl: `data:${outputMime};base64,${outputBuffer.toString("base64")}`,
    };
  } catch (err) {
    return fail(originalSize, err instanceof Error ? err.message : "Grayscale conversion failed.");
  }
}

function fail(originalSize: number, error: string): GrayscaleResult {
  return { success: false, originalSize, outputSize: originalSize, processingTimeMs: 0, outputFileName: "", error };
}
