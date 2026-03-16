import sharp from "sharp";

export interface ConvertToJpgResult {
  success: boolean;
  originalSize: number;
  outputSize: number;
  reductionPercent: number;
  processingTimeMs: number;
  outputFileName: string;
  downloadUrl?: string;
  error?: string;
}

/**
 * Converts PNG or WebP to JPEG. Flattens transparency with white background.
 */
export async function convertToJpg(
  input: Buffer,
  originalFileName: string,
  quality = 90
): Promise<ConvertToJpgResult> {
  const startTime = Date.now();
  const originalSize = input.length;

  function stripExt(f: string) {
    const i = f.lastIndexOf(".");
    return i === -1 ? f : f.substring(0, i);
  }

  try {
    const outputBuffer = await sharp(input)
      .rotate()
      .flatten({ background: { r: 255, g: 255, b: 255 } }) // white bg for transparency
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toBuffer();

    const outputSize = outputBuffer.length;
    const processingTimeMs = Date.now() - startTime;
    const reductionPercent = originalSize > outputSize
      ? parseFloat((((originalSize - outputSize) / originalSize) * 100).toFixed(1))
      : 0;

    return {
      success: true,
      originalSize,
      outputSize,
      reductionPercent,
      processingTimeMs,
      outputFileName: `${stripExt(originalFileName)}.jpg`,
      downloadUrl: `data:image/jpeg;base64,${outputBuffer.toString("base64")}`,
    };
  } catch (err) {
    return fail(originalSize, err instanceof Error ? err.message : "Conversion failed.");
  }
}

function fail(originalSize: number, error: string): ConvertToJpgResult {
  return { success: false, originalSize, outputSize: originalSize, reductionPercent: 0, processingTimeMs: 0, outputFileName: "", error };
}
