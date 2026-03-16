import { NextRequest, NextResponse } from "next/server";
import { removePdfPages } from "@/lib/tools/removePdfPages";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const pagesRaw = formData.get("pages") as string;
    if (!file || !(file instanceof File)) return err("No file provided.", 400);
    if (!pagesRaw) return err("No pages specified.", 400);

    const pagesToRemove = pagesRaw.split(",").map(Number).filter((n) => !isNaN(n));
    if (pagesToRemove.length === 0) return err("Invalid page numbers.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 10 * 1024 * 1024) return err("File too large (max 10 MB).", 413);
    if (!buffer.slice(0, 4).toString().startsWith("%PDF")) return err("Not a valid PDF.", 422);

    const result = await removePdfPages(buffer, file.name, pagesToRemove);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch (e) {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, outputSize: 0, originalPages: 0, remainingPages: 0, processingTimeMs: 0, error }, { status });
}
