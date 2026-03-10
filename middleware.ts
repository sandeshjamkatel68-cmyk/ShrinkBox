import { NextRequest, NextResponse } from "next/server";
import {
  RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_WINDOW_MS,
} from "@/lib/validation/constants";

// In-memory store — fine for single-instance MVP.
// Swap with Redis (Upstash) when you scale horizontally.
const ipRequestMap = new Map<string, { count: number; windowStart: number }>();

export function middleware(req: NextRequest) {
  // Only rate limit compress API routes
  if (!req.nextUrl.pathname.startsWith("/api/compress")) {
    return NextResponse.next();
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const existing = ipRequestMap.get(ip);

  if (!existing || now - existing.windowStart > RATE_LIMIT_WINDOW_MS) {
    // New window
    ipRequestMap.set(ip, { count: 1, windowStart: now });
    return NextResponse.next();
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please wait a moment before trying again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
        },
      }
    );
  }

  existing.count++;
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/compress/:path*"],
};
