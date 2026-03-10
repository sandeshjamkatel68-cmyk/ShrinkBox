import { v4 as uuidv4 } from "uuid";

/**
 * Generates a short, collision-resistant ID for temp file naming.
 * Uses UUID v4 but trims to first 12 chars for shorter filenames.
 */
export function generateFileId(): string {
  return uuidv4().replace(/-/g, "").substring(0, 12);
}
