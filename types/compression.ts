// ─────────────────────────────────────────────
// Supported file types
// ─────────────────────────────────────────────

export type SupportedImageType = "image/jpeg" | "image/png" | "image/webp";
export type SupportedPdfType   = "application/pdf";
export type SupportedMimeType  = SupportedImageType | SupportedPdfType;

export type FileCategory = "image" | "pdf" | "unsupported";

// ─────────────────────────────────────────────
// Tool operation types
// ─────────────────────────────────────────────

export type ToolOperation =
  | "compress-image"
  | "compress-pdf"
  | "compress-webp"
  | "resize-image"
  | "convert-image"   // jpg↔png↔webp
  | "merge-pdf"
  | "split-pdf"
  | "bulk-compress";

// Convert: what format should the output be?
export type ConvertTargetFormat = "jpeg" | "png" | "webp";

// Resize options
export interface ResizeOptions {
  width?:  number;
  height?: number;
  fit:     "cover" | "contain" | "fill" | "inside" | "outside";
  unit:    "px" | "percent";
}

// Generic API response — covers compress, convert, resize, merge, split
export interface ToolApiResponse {
  success:          boolean;
  originalSize:     number;
  outputSize:       number;
  reductionPercent: number;
  processingTimeMs: number;
  outputMimeType:   string;
  outputFileName:   string;
  downloadUrl?:     string;
  // For split-pdf: multiple pages as separate files
  pages?:           SplitPage[];
  error?:           string;
}

export interface SplitPage {
  pageNumber:   number;
  fileName:     string;
  downloadUrl:  string;
  size:         number;
}

// ─────────────────────────────────────────────
// Compression levels exposed to the user
// ─────────────────────────────────────────────

export type CompressionLevel = "low" | "medium" | "high";

export interface CompressionOptions {
  level: CompressionLevel;
}

// ─────────────────────────────────────────────
// What the compression engine returns
// ─────────────────────────────────────────────

export interface CompressionResult {
  success:          boolean;
  originalSize:     number;   // bytes
  compressedSize:   number;   // bytes
  reductionPercent: number;   // 0–100
  processingTimeMs: number;
  outputMimeType:   SupportedMimeType;
  outputFileName:   string;
  // Only set on success — base64 encoded output for download
  outputBase64?:    string;
  // Only set on failure
  error?:           string;
}

// ─────────────────────────────────────────────
// API request / response shapes
// ─────────────────────────────────────────────

export interface CompressApiResponse {
  success:          boolean;
  originalSize:     number;
  compressedSize:   number;
  reductionPercent: number;
  processingTimeMs: number;
  outputMimeType:   string;
  outputFileName:   string;
  downloadUrl?:     string;  // signed temp URL or base64 data URI
  error?:           string;
}

// ─────────────────────────────────────────────
// File validation
// ─────────────────────────────────────────────

export interface ValidationResult {
  valid:   boolean;
  error?:  string;
  mime?:   SupportedMimeType;
  category?: FileCategory;
}

// ─────────────────────────────────────────────
// Upload state machine used in the UI
// ─────────────────────────────────────────────

export type UploadStatus =
  | "idle"
  | "validating"
  | "uploading"
  | "compressing"
  | "done"
  | "error";

export interface UploadState {
  status:   UploadStatus;
  file:     File | null;
  result:   CompressApiResponse | null;
  error:    string | null;
  progress: number; // 0–100 for progress bar
}
