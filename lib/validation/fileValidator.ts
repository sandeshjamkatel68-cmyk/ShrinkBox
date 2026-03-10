import {
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_LABEL,
  ALLOWED_MIME_TYPES,
} from "@/lib/validation/constants";
import {
  detectMimeFromBytes,
  mimeFromExtension,
  isSupportedMime,
  sanitizeFileName,
} from "@/lib/utils/mimeDetect";
import { formatBytes } from "@/lib/utils/formatBytes";
import type { ValidationResult, SupportedMimeType } from "@/types/compression";

/**
 * Server-side validation for an uploaded file buffer.
 *
 * Checks in order:
 * 1. File size within limits
 * 2. Extension is in allowed list
 * 3. Magic bytes match expected signature
 * 4. Extension-declared MIME matches magic-byte-detected MIME (prevents disguised files)
 *
 * Never trusts client-provided Content-Type header alone.
 */
export function validateFileBuffer(
  buffer: Buffer,
  originalFileName: string,
  clientMime: string
): ValidationResult {
  // 1. Size check
  if (buffer.length === 0) {
    return { valid: false, error: "File is empty." };
  }

  if (buffer.length > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File too large. Maximum size is ${MAX_FILE_SIZE_LABEL}. Your file is ${formatBytes(buffer.length)}.`,
    };
  }

  // 2. Sanitize filename and check extension
  const safeName = sanitizeFileName(originalFileName);
  const extensionMime = mimeFromExtension(safeName);

  if (!extensionMime) {
    return {
      valid: false,
      error: "Unsupported file type. We support JPG, PNG, WebP, and PDF files.",
    };
  }

  // 3. Read magic bytes — the only trustworthy check
  const detectedMime = detectMimeFromBytes(buffer);

  if (!detectedMime) {
    return {
      valid: false,
      error: "Could not verify file type. The file may be corrupted or unsupported.",
    };
  }

  // 4. Extension must match what the bytes say
  // Prevents: renaming a .exe to .jpg and uploading it
  if (extensionMime !== detectedMime) {
    return {
      valid: false,
      error: "File extension does not match file content. Please use the correct file.",
    };
  }

  // 5. Final check — is this MIME in our supported list?
  if (!isSupportedMime(detectedMime)) {
    return {
      valid: false,
      error: "Unsupported file type. We support JPG, PNG, WebP, and PDF files.",
    };
  }

  const category = ALLOWED_MIME_TYPES[detectedMime as SupportedMimeType];

  return {
    valid: true,
    mime: detectedMime as SupportedMimeType,
    category,
  };
}

/**
 * Client-side pre-validation (runs in browser before upload starts).
 * Less strict — we can't read magic bytes in the browser easily.
 * This just gives immediate feedback to the user before they wait for an upload.
 */
export function validateFileClient(file: File): ValidationResult {
  if (file.size === 0) {
    return { valid: false, error: "File is empty." };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File too large. Maximum is ${MAX_FILE_SIZE_LABEL}. Your file is ${formatBytes(file.size)}.`,
    };
  }

  const extensionMime = mimeFromExtension(file.name);
  if (!extensionMime) {
    return {
      valid: false,
      error: "Unsupported file type. We support JPG, PNG, WebP, and PDF.",
    };
  }

  // Trust the browser MIME here (client-side only, server re-validates anyway)
  const category = ALLOWED_MIME_TYPES[extensionMime];

  return {
    valid: true,
    mime: extensionMime,
    category,
  };
}
