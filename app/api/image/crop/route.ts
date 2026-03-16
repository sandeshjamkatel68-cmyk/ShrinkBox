import { NextRequest, NextResponse } from "next/server";
import { cropImage } from "@/lib/tools/cropImage";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const left   = Number(formData.get("left")   ?? 0);
    const top    = Number(formData.get("top")    ?? 0);
    const width  = Number(formData.get("width")  ?? 0);
    const height = Number(formData.get("height") ?? 0);

    if (!file || !(file instanceof File)) return err("No file provided.", 400);
    if (!width || !height) return err("Width and height are required.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 10 * 1024 * 1024) return err("File too large (max 10 MB).", 413);

    const result = await cropImage(buffer, file.name, { left, top, width, height });
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch (e) {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, originalSize: 0, outputSize: 0, processingTimeMs: 0, outputFileName: "", outputWidth: 0, outputHeight: 0, error }, { status });
}
