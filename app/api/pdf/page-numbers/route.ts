import { NextRequest, NextResponse } from "next/server";
import { addPageNumbers, type PageNumberOptions } from "@/lib/tools/addPageNumbers";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData  = await req.formData();
    const file      = formData.get("file");
    const position  = (formData.get("position") as PageNumberOptions["position"]) ?? "bottom-center";
    const startFrom = parseInt((formData.get("startFrom") as string) ?? "1");
    const fontSize  = parseInt((formData.get("fontSize") as string) ?? "11");
    const format    = (formData.get("format") as PageNumberOptions["format"]) ?? "number";
    const color     = (formData.get("color") as PageNumberOptions["color"]) ?? "black";

    if (!file || !(file instanceof File)) return err("No file provided.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 10 * 1024 * 1024) return err("File too large (max 10 MB).", 413);
    if (!buffer.slice(0, 4).toString().startsWith("%PDF")) return err("Not a valid PDF.", 422);

    const result = await addPageNumbers(buffer, file.name, { position, startFrom, fontSize, format, color });
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, error }, { status });
}
