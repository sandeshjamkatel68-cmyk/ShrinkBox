import { NextRequest, NextResponse } from "next/server";
import { imagesToPdf } from "@/lib/tools/imagesToPdf";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];
    if (!files.length) return err("No files provided.", 400);
    if (files.length > 20) return err("Maximum 20 images.", 400);

    const images = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      if (buffer.length > 10 * 1024 * 1024) return err(`"${file.name}" exceeds 10 MB.`, 413);
      images.push({ buffer, mimeType: file.type, fileName: file.name });
    }

    const result = await imagesToPdf(images);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch (e) {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, outputSize: 0, pageCount: 0, processingTimeMs: 0, error }, { status });
}
