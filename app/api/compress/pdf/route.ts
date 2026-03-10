import { NextRequest, NextResponse } from "next/server";
import { compressFile } from "@/lib/compression";
import type { CompressApiResponse } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse<CompressApiResponse>> {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return errorResponse("No file provided.", 400);
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.length > MAX_FILE_SIZE_BYTES) {
      return errorResponse("File exceeds maximum allowed size (10 MB).", 413);
    }

    // PDF compression level is not exposed to users in MVP
    // (pdf-lib doesn't have meaningful quality levels)
    const result = await compressFile(buffer, file.name, file.type, { level: "medium" });

    if (!result.success) {
      return NextResponse.json(
        {
          success:          false,
          originalSize:     result.originalSize,
          compressedSize:   result.compressedSize,
          reductionPercent: result.reductionPercent,
          processingTimeMs: result.processingTimeMs,
          outputMimeType:   result.outputMimeType,
          outputFileName:   result.outputFileName,
          error:            result.error,
        } satisfies CompressApiResponse,
        { status: 422 }
      );
    }

    const downloadUrl = result.outputBase64
      ? `data:application/pdf;base64,${result.outputBase64}`
      : undefined;

    return NextResponse.json(
      {
        success:          true,
        originalSize:     result.originalSize,
        compressedSize:   result.compressedSize,
        reductionPercent: result.reductionPercent,
        processingTimeMs: result.processingTimeMs,
        outputMimeType:   result.outputMimeType,
        outputFileName:   result.outputFileName,
        downloadUrl,
        error:            result.error,
      } satisfies CompressApiResponse,
      { status: 200 }
    );

  } catch (err) {
    console.error("[/api/compress/pdf] Unexpected error:", err);
    return errorResponse("Internal server error. Please try again.", 500);
  }
}

function errorResponse(error: string, status: number): NextResponse<CompressApiResponse> {
  return NextResponse.json(
    {
      success:          false,
      originalSize:     0,
      compressedSize:   0,
      reductionPercent: 0,
      processingTimeMs: 0,
      outputMimeType:   "application/pdf",
      outputFileName:   "",
      error,
    } satisfies CompressApiResponse,
    { status }
  );
}
