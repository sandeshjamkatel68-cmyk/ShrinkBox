import { NextRequest, NextResponse } from "next/server";
import { splitPdf } from "@/lib/tools/splitPdf";
import type { ToolApiResponse } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<ToolApiResponse>> {
  try {
    const formData = await req.formData();
    const file     = formData.get("file");

    if (!file || !(file instanceof File)) return err("No file provided.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > MAX_FILE_SIZE_BYTES) return err("File too large (max 10 MB).", 413);
    if (!buffer.slice(0, 4).toString().startsWith("%PDF")) {
      return err("File is not a valid PDF.", 422);
    }

    const result = await splitPdf(buffer, file.name);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });

  } catch (e) {
    console.error("[/api/convert/pdf-split]", e);
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number): NextResponse<ToolApiResponse> {
  return NextResponse.json(
    { success: false, originalSize: 0, outputSize: 0, reductionPercent: 0,
      processingTimeMs: 0, outputMimeType: "application/pdf", outputFileName: "", error },
    { status }
  );
}
