import { NextRequest, NextResponse } from "next/server";
import { mergePdfs } from "@/lib/tools/mergePdf";
import type { ToolApiResponse } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<ToolApiResponse>> {
  try {
    const formData = await req.formData();
    const files    = formData.getAll("files") as File[];

    if (!files.length) return err("No files provided.", 400);
    if (files.length < 2) return err("Upload at least 2 PDFs to merge.", 400);
    if (files.length > 10) return err("Maximum 10 PDFs allowed.", 400);

    const buffers: Buffer[] = [];
    for (const file of files) {
      const buf = Buffer.from(await file.arrayBuffer());
      if (buf.length > MAX_FILE_SIZE_BYTES) {
        return err(`File "${file.name}" exceeds 10 MB limit.`, 413);
      }
      // Basic PDF check
      if (!buf.slice(0, 4).toString().startsWith("%PDF")) {
        return err(`File "${file.name}" is not a valid PDF.`, 422);
      }
      buffers.push(buf);
    }

    const result = await mergePdfs(buffers, "merged.pdf");
    return NextResponse.json(result, { status: result.success ? 200 : 422 });

  } catch (e) {
    console.error("[/api/convert/pdf-merge]", e);
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
