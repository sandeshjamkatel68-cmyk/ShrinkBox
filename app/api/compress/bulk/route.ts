import { NextRequest, NextResponse } from "next/server";
import { bulkCompress, type BulkApiResponse } from "@/lib/tools/bulkCompress";
import type { CompressionLevel } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<BulkApiResponse>> {
  try {
    const formData = await req.formData();
    const files    = formData.getAll("files") as File[];
    const level    = (formData.get("level") as CompressionLevel) ?? "medium";

    if (!files.length) return err("No files provided.", 400);
    if (files.length > 10) return err("Maximum 10 files per batch.", 400);
    if (!["low", "medium", "high"].includes(level)) return err("Invalid level.", 400);

    const prepared = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      if (buffer.length > MAX_FILE_SIZE_BYTES) {
        return err(`"${file.name}" exceeds 10 MB limit.`, 413);
      }
      prepared.push({ buffer, fileName: file.name, mimeType: file.type });
    }

    const result = await bulkCompress(prepared, level);
    return NextResponse.json(result, { status: 200 });

  } catch (e) {
    console.error("[/api/compress/bulk]", e);
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number): NextResponse<BulkApiResponse> {
  return NextResponse.json(
    { success: false, totalOriginal: 0, totalOutput: 0,
      totalReduction: 0, processingTimeMs: 0, results: [], error },
    { status }
  );
}
