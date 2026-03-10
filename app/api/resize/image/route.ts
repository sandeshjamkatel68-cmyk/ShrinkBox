import { NextRequest, NextResponse } from "next/server";
import { resizeImage } from "@/lib/tools/resizeImage";
import { validateFileBuffer } from "@/lib/validation/fileValidator";
import type { ResizeOptions, ToolApiResponse } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<ToolApiResponse>> {
  try {
    const formData = await req.formData();
    const file     = formData.get("file");
    const width    = formData.get("width")  ? Number(formData.get("width"))  : undefined;
    const height   = formData.get("height") ? Number(formData.get("height")) : undefined;
    const fit      = (formData.get("fit")  as ResizeOptions["fit"])  ?? "inside";
    const unit     = (formData.get("unit") as ResizeOptions["unit"]) ?? "px";

    if (!file || !(file instanceof File)) return err("No file provided.", 400);
    if (!width && !height) return err("Provide at least a width or height.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > MAX_FILE_SIZE_BYTES) return err("File too large (max 10 MB).", 413);

    const validation = validateFileBuffer(buffer, file.name, file.type);
    if (!validation.valid || validation.category !== "image") {
      return err(validation.error ?? "Only image files can be resized.", 422);
    }

    const result = await resizeImage(buffer, file.name, { width, height, fit, unit });
    return NextResponse.json(result, { status: result.success ? 200 : 422 });

  } catch (e) {
    console.error("[/api/resize/image]", e);
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
