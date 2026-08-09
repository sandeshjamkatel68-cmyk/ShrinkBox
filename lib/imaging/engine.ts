export interface TransformOptions {
  /** Output MIME type, e.g. "image/jpeg" */
  mimeType: string;
  /** 0–1, only relevant for lossy formats */
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export interface TransformResult {
  blob: Blob;
  width: number;
  height: number;
}

/**
 * Decodes, optionally resizes, and re-encodes an image entirely in the
 * browser via Canvas. No network round trip — the file never leaves the tab.
 */
export async function transformImage(file: File | Blob, opts: TransformOptions): Promise<TransformResult> {
  const bitmap = await createImageBitmap(file);

  let { width, height } = bitmap;
  if (opts.maxWidth && width > opts.maxWidth) {
    height = Math.round((height * opts.maxWidth) / width);
    width = opts.maxWidth;
  }
  if (opts.maxHeight && height > opts.maxHeight) {
    width = Math.round((width * opts.maxHeight) / height);
    height = opts.maxHeight;
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D context unavailable");

  // Flatten transparency onto white for formats without an alpha channel
  if (opts.mimeType === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, opts.mimeType, opts.quality)
  );
  if (!blob) throw new Error("Encoding failed — this browser may not support that output format");

  return { blob, width, height };
}

export async function decodeHeic(file: File | Blob): Promise<Blob> {
  const heic2any = (await import("heic2any")).default;
  const result = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.92 });
  return Array.isArray(result) ? result[0] : result;
}

export const SUPPORTED_INPUT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/bmp",
  "image/gif",
];

export function isHeic(file: File): boolean {
  const name = file.name.toLowerCase();
  return file.type === "image/heic" || file.type === "image/heif" || name.endsWith(".heic") || name.endsWith(".heif");
}
