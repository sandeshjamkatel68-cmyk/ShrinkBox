import type { SupportedMimeType, FileCategory } from "@/types/compression";

// ─────────────────────────────────────────────
// File size limits
// ─────────────────────────────────────────────

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB free tier
export const MAX_FILE_SIZE_LABEL = "10 MB";

// ─────────────────────────────────────────────
// Allowed MIME types and their categories
// ─────────────────────────────────────────────

export const ALLOWED_MIME_TYPES: Record<SupportedMimeType, FileCategory> = {
  "image/jpeg":       "image",
  "image/png":        "image",
  "image/webp":       "image",
  "application/pdf":  "pdf",
};

export const ALLOWED_EXTENSIONS: Record<string, SupportedMimeType> = {
  jpg:  "image/jpeg",
  jpeg: "image/jpeg",
  png:  "image/png",
  webp: "image/webp",
  pdf:  "application/pdf",
};

export const SUPPORTED_TYPE_LABELS = ["JPG", "PNG", "WebP", "PDF"];

// ─────────────────────────────────────────────
// Magic bytes for each type (first bytes of file)
// Never trust client-provided MIME alone
// ─────────────────────────────────────────────

export const MAGIC_BYTES: Record<string, number[]> = {
  "image/jpeg": [0xff, 0xd8, 0xff],
  "image/png":  [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  "image/webp": [0x52, 0x49, 0x46, 0x46], // RIFF — then check bytes 8-11 for WEBP
  "application/pdf": [0x25, 0x50, 0x44, 0x46], // %PDF
};

// ─────────────────────────────────────────────
// Compression quality mappings for Sharp
// ─────────────────────────────────────────────

export const IMAGE_QUALITY: Record<"low" | "medium" | "high", number> = {
  low:    88, // Minimal quality loss — close to lossless feel
  medium: 78, // Balanced — visually fine for most use cases
  high:   65, // Aggressive — noticeable on close inspection
};

// ─────────────────────────────────────────────
// Temp file cleanup TTL
// ─────────────────────────────────────────────

export const TEMP_FILE_TTL_MS = 10 * 60 * 1000; // 10 minutes

// ─────────────────────────────────────────────
// Rate limiting (used in middleware)
// ─────────────────────────────────────────────

export const RATE_LIMIT_MAX_REQUESTS = 20;  // per window
export const RATE_LIMIT_WINDOW_MS    = 60 * 1000; // 1 minute
