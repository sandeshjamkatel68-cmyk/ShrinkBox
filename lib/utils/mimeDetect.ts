import {
  MAGIC_BYTES,
  ALLOWED_MIME_TYPES,
  ALLOWED_EXTENSIONS,
} from "@/lib/validation/constants";
import type { SupportedMimeType } from "@/types/compression";

/**
 * Reads the first N bytes of a Buffer and checks against known magic byte signatures.
 * Returns the detected MIME type or null if unrecognized.
 */
export function detectMimeFromBytes(buffer: Buffer): SupportedMimeType | null {
  // JPEG: FF D8 FF
  if (matchesSignature(buffer, MAGIC_BYTES["image/jpeg"])) {
    return "image/jpeg";
  }

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (matchesSignature(buffer, MAGIC_BYTES["image/png"])) {
    return "image/png";
  }

  // WebP: RIFF????WEBP — bytes 0-3 are RIFF, bytes 8-11 are WEBP
  if (
    matchesSignature(buffer, MAGIC_BYTES["image/webp"]) &&
    buffer.length >= 12 &&
    buffer[8] === 0x57 && // W
    buffer[9] === 0x45 && // E
    buffer[10] === 0x42 && // B
    buffer[11] === 0x50    // P
  ) {
    return "image/webp";
  }

  // PDF: %PDF
  if (matchesSignature(buffer, MAGIC_BYTES["application/pdf"])) {
    return "application/pdf";
  }

  return null;
}

/**
 * Checks if the start of a buffer matches a byte sequence.
 */
function matchesSignature(buffer: Buffer, signature: number[]): boolean {
  if (buffer.length < signature.length) return false;
  return signature.every((byte, i) => buffer[i] === byte);
}

/**
 * Extracts and normalizes the file extension from a filename.
 * Returns lowercase extension without the dot, or null.
 */
export function getExtension(filename: string): string | null {
  const parts = filename.trim().toLowerCase().split(".");
  if (parts.length < 2) return null;
  return parts[parts.length - 1] ?? null;
}

/**
 * Returns the expected MIME type from a file extension.
 * Use as a first-pass check before reading magic bytes.
 */
export function mimeFromExtension(filename: string): SupportedMimeType | null {
  const ext = getExtension(filename);
  if (!ext) return null;
  return ALLOWED_EXTENSIONS[ext] ?? null;
}

/**
 * Validates that a detected MIME type is in our supported list.
 */
export function isSupportedMime(mime: string): mime is SupportedMimeType {
  return mime in ALLOWED_MIME_TYPES;
}

/**
 * Sanitizes a filename: strips path traversal, special characters,
 * and limits length. Safe to use as a temp file name component.
 */
export function sanitizeFileName(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "_") // Only safe chars
    .replace(/\.{2,}/g, ".")           // No double dots (path traversal)
    .replace(/^[._-]+/, "")            // No leading dots/dashes
    .substring(0, 100);                // Max 100 chars
}
