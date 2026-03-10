import { NextRequest, NextResponse } from "next/server";
import { compressFile } from "@/lib/compression";
import type { CompressionLevel, CompressApiResponse } from "@/types/compression";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation/constants";

export const runtime = "nodejs"; // Sharp requires Node.js runtime, not Edge

export async function POST(req: NextRequest): Promise<NextResponse<CompressApiResponse>> {
  try {
    // Parse multipart form
    const formData = await req.formData();
    const file     = formData.get("file");
    const level    = (formData.get("level") as CompressionLevel) ?? "medium";

    // Basic input checks
    if (!file || !(file instanceof File)) {
      return errorResponse("No file provided.", 400);
    }

    if (!["low", "medium", "high"].includes(level)) {
      return errorResponse("Invalid compression level. Use: low, medium, or high.", 400);
    }

    // Convert File to Buffer for server-side processing
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Guard against huge uploads at the route level too
    if (buffer.length > MAX_FILE_SIZE_BYTES) {
      return errorResponse("File exceeds maximum allowed size (10 MB).", 413);
    }

    // Run compression pipeline
    const result = await compressFile(
      buffer,
      file.name,
      file.type,
      { level }
    );

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

    // Build download data URI from base64 output
    const downloadUrl = result.outputBase64
      ? `data:${result.outputMimeType};base64,${result.outputBase64}`
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
        error:            result.error, // May contain a soft warning (e.g. already optimized)
      } satisfies CompressApiResponse,
      { status: 200 }
    );

  } catch (err) {
    console.error("[/api/compress/image] Unexpected error:", err);
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
      outputMimeType:   "image/jpeg",
      outputFileName:   "",
      error,
    } satisfies CompressApiResponse,
    { status }
  );
}
