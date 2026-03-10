/**
 * Converts a byte count into a human-readable string.
 * e.g. 1234567 → "1.2 MB"
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);

  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}

/**
 * Returns a reduction percentage string, e.g. "42.3%"
 * Clamps to 0–100 and returns "0%" if output is larger than input.
 */
export function formatReduction(original: number, compressed: number): string {
  if (original <= 0) return "0%";
  const percent = ((original - compressed) / original) * 100;
  const clamped = Math.max(0, Math.min(100, percent));
  return `${clamped.toFixed(1)}%`;
}

/**
 * Returns a reduction as a 0–100 number for progress bars.
 */
export function reductionPercent(original: number, compressed: number): number {
  if (original <= 0) return 0;
  const percent = ((original - compressed) / original) * 100;
  return Math.max(0, Math.min(100, parseFloat(percent.toFixed(1))));
}

/**
 * Formats milliseconds into a readable time string.
 * e.g. 1234 → "1.2s", 450 → "450ms"
 */
export function formatDuration(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

/**
 * Merges class names — thin wrapper around clsx for conditional classes.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
