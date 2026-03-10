import { NextResponse } from "next/server";
import { sweepOldTempFiles } from "@/lib/storage/tempFiles";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
}

// Cron endpoint — call this every 5 minutes via Vercel Cron or external service
export async function POST() {
  const deleted = await sweepOldTempFiles();
  return NextResponse.json({ swept: deleted, timestamp: new Date().toISOString() });
}
