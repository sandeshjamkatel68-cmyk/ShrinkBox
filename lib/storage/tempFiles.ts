import fs from "fs/promises";
import path from "path";
import os from "os";
import { generateFileId } from "@/lib/utils/generateId";
import { sanitizeFileName } from "@/lib/utils/mimeDetect";
import { TEMP_FILE_TTL_MS } from "@/lib/validation/constants";

/**
 * Returns the OS temp directory path.
 * On Vercel: /tmp (512MB ephemeral, cleared between invocations).
 * Locally: whatever os.tmpdir() returns.
 */
function getTempDir(): string {
  return os.tmpdir();
}

/**
 * Builds a safe, unique temp file path.
 * Format: /tmp/shrinkbox_{id}_{safeName}
 */
export function buildTempPath(originalFileName: string, suffix = ""): string {
  const id = generateFileId();
  const safeName = sanitizeFileName(originalFileName);
  const fileName = `shrinkbox_${id}_${suffix ? suffix + "_" : ""}${safeName}`;
  return path.join(getTempDir(), fileName);
}

/**
 * Writes a Buffer to a temp file and returns the path.
 * Throws if the write fails.
 */
export async function writeTempFile(
  buffer: Buffer,
  originalFileName: string,
  suffix?: string
): Promise<string> {
  const filePath = buildTempPath(originalFileName, suffix);
  await fs.writeFile(filePath, buffer);
  return filePath;
}

/**
 * Reads a temp file and returns its Buffer.
 * Throws if the file doesn't exist.
 */
export async function readTempFile(filePath: string): Promise<Buffer> {
  return fs.readFile(filePath);
}

/**
 * Deletes a temp file. Fails silently — cleanup should never crash the app.
 */
export async function deleteTempFile(filePath: string): Promise<void> {
  try {
    await fs.unlink(filePath);
  } catch {
    // Ignore — file may already be gone
  }
}

/**
 * Deletes multiple temp files. Use in finally blocks after compression.
 */
export async function cleanupTempFiles(...filePaths: string[]): Promise<void> {
  await Promise.allSettled(filePaths.map(deleteTempFile));
}

/**
 * Sweeps the temp directory and removes any shrinkbox_ files
 * older than TEMP_FILE_TTL_MS. Call this from a cron route.
 */
export async function sweepOldTempFiles(): Promise<number> {
  const tempDir = getTempDir();
  let deleted = 0;

  try {
    const files = await fs.readdir(tempDir);
    const now = Date.now();

    await Promise.allSettled(
      files
        .filter((f) => f.startsWith("shrinkbox_"))
        .map(async (file) => {
          const filePath = path.join(tempDir, file);
          try {
            const stat = await fs.stat(filePath);
            if (now - stat.mtimeMs > TEMP_FILE_TTL_MS) {
              await fs.unlink(filePath);
              deleted++;
            }
          } catch {
            // File already gone or inaccessible — skip
          }
        })
    );
  } catch {
    // tempDir not accessible — not critical
  }

  return deleted;
}
