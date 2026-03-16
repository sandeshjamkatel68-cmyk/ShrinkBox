import { NextRequest, NextResponse } from "next/server";
import { grayscaleImage } from "@/lib/tools/grayscaleImage";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file || !(file instanceof File)) return err("No file provided.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 10 * 1024 * 1024) return err("File too large (max 10 MB).", 413);

    const result = await grayscaleImage(buffer, file.name);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch (e) {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, originalSize: 0, outputSize: 0, processingTimeMs: 0, outputFileName: "", error }, { status });
}
