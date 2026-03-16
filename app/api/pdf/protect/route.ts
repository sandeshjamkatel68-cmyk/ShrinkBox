import { NextRequest, NextResponse } from "next/server";
import { protectPdf } from "@/lib/tools/protectPdf";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file     = formData.get("file");
    const password = (formData.get("password") as string) ?? "";

    if (!file || !(file instanceof File)) return err("No file provided.", 400);
    if (!password.trim()) return err("Password is required.", 400);

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 10 * 1024 * 1024) return err("File too large (max 10 MB).", 413);
    if (!buffer.slice(0, 4).toString().startsWith("%PDF")) return err("Not a valid PDF.", 422);

    const result = await protectPdf(buffer, file.name, password);
    return NextResponse.json(result, { status: result.success ? 200 : 422 });
  } catch {
    return err("Internal error.", 500);
  }
}

function err(error: string, status: number) {
  return NextResponse.json({ success: false, outputSize: 0, processingTimeMs: 0, error }, { status });
}
