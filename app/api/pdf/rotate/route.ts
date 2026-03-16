import { NextRequest, NextResponse } from "next/server";
import { rotatePdf } from "@/lib/tools/rotatePdf";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const angle = Number(formData.get("angle") ?? 90) as 90 | 180 | 270;
    if (!file || !(file instanceof File)) return err("No file provided.", 400);
    if (![90, 180, 270].includes(angle)) return err("Angle must be 90, 180, or 270.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 10 * 1024 * 1024) return err("File too large (max 10 MB).", 413);
    if (!buffer.slice(0, 4).toString().startsWith("%PDF")) return err("Not a valid PDF.", 422);

    const result = await rotatePdf(buffer, file.name, angle);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch (e) {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, outputSize: 0, processingTimeMs: 0, error }, { status });
}
