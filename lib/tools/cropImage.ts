import sharp from "sharp";

export interface CropResult {
  success: boolean;
  originalSize: number;
  outputSize: number;
  processingTimeMs: number;
  outputFileName: string;
  outputWidth: number;
  outputHeight: number;
  downloadUrl?: string;
  error?: string;
}

export interface CropOptions {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Crops an image to the given rectangle.
 * All values are in pixels.
 */
export async function cropImage(
  input: Buffer,
  originalFileName: string,
  opts: CropOptions
): Promise<CropResult> {
  const startTime = Date.now();
  const originalSize = input.length;

  function stripExt(f: string) { const i = f.lastIndexOf("."); return i === -1 ? f : f.substring(0, i); }
  function getExt(f: string) { const i = f.lastIndexOf("."); return i === -1 ? "jpg" : f.substring(i + 1).toLowerCase(); }

  try {
    const meta = await sharp(input).metadata();
    const imgW = meta.width ?? 0;
    const imgH = meta.height ?? 0;

    if (opts.left < 0 || opts.top < 0 || opts.width <= 0 || opts.height <= 0) {
      return fail(originalSize, "Invalid crop dimensions.");
    }
    if (opts.left + opts.width > imgW || opts.top + opts.height > imgH) {
      return fail(originalSize, `Crop area exceeds image bounds (${imgW}×${imgH}px).`);
    }

    const ext = getExt(originalFileName);
    const pipeline = sharp(input).rotate().extract({
      left: Math.round(opts.left),
      top: Math.round(opts.top),
      width: Math.round(opts.width),
      height: Math.round(opts.height),
    });

    let outputBuffer: Buffer;
    let outputMime: string;

    if (ext === "jpg" || ext === "jpeg") {
      outputBuffer = await pipeline.jpeg({ quality: 92, mozjpeg: true }).toBuffer();
      outputMime = "image/jpeg";
    } else if (ext === "png") {
      outputBuffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
      outputMime = "image/png";
    } else {
      outputBuffer = await pipeline.webp({ quality: 90 }).toBuffer();
      outputMime = "image/webp";
    }

    const outMeta = await sharp(outputBuffer).metadata();

    return {
      success: true,
      originalSize,
      outputSize: outputBuffer.length,
      processingTimeMs: Date.now() - startTime,
      outputFileName: `${stripExt(originalFileName)}_cropped.${ext}`,
      outputWidth: outMeta.width ?? opts.width,
      outputHeight: outMeta.height ?? opts.height,
      downloadUrl: `data:${outputMime};base64,${outputBuffer.toString("base64")}`,
    };
  } catch (err) {
    return fail(originalSize, err instanceof Error ? err.message : "Crop failed.");
  }
}

function fail(originalSize: number, error: string): CropResult {
  return { success: false, originalSize, outputSize: originalSize, processingTimeMs: 0, outputFileName: "", outputWidth: 0, outputHeight: 0, error };
}
