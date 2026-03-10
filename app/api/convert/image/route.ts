import { NextRequest, NextResponse } from "next/server";
import { convertImage } from "@/lib/tools/convertImage";
import { validateFileBuffer } from "@/lib/validation/fileValidator";
import type { ConvertTargetFormat, ToolApiResponse } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<ToolApiResponse>> {
  try {
    const formData = await req.formData();
    const file     = formData.get("file");
    const format   = formData.get("format") as ConvertTargetFormat;

    if (!file || !(file instanceof File)) return err("No file provided.", 400);
    if (!["jpeg", "png", "webp"].includes(format)) return err("Invalid target format.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > MAX_FILE_SIZE_BYTES) return err("File too large (max 10 MB).", 413);

    const validation = validateFileBuffer(buffer, file.name, file.type);
    if (!validation.valid || validation.category !== "image") {
      return err(validation.error ?? "Only image files can be converted.", 422);
    }

    const result = await convertImage(buffer, file.name, format);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });

  } catch (e) {
    console.error("[/api/convert/image]", e);
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number): NextResponse<ToolApiResponse> {
  return NextResponse.json(
    { success: false, originalSize: 0, outputSize: 0, reductionPercent: 0,
      processingTimeMs: 0, outputMimeType: "", outputFileName: "", error },
    { status }
  );
}
