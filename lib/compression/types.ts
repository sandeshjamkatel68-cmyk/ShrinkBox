import type { CompressionOptions, CompressionResult, SupportedMimeType } from "@/types/compression";

/**
 * Contract every compression engine must implement.
 * Input: raw file Buffer + options
 * Output: CompressionResult with the compressed bytes in outputBase64
 */
export interface CompressionEngine {
  compress(
    input: Buffer,
    originalFileName: string,
    mime: SupportedMimeType,
    options: CompressionOptions
  ): Promise<CompressionResult>;
}
