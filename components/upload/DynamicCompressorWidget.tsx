"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically imported CompressorWidget — prevents the compression
 * engine code (Sharp client-side helpers, validation logic, etc.)
 * from being included in the initial JS bundle. SSR is disabled
 * because the widget relies on browser File APIs.
 */
const DynamicCompressorWidget = dynamic(
  () => import("@/components/upload/CompressorWidget"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full animate-pulse space-y-4">
        {/* Drop zone skeleton */}
        <div
          className="rounded-2xl border-2 border-dashed"
          style={{
            height: "220px",
            borderColor: "hsl(var(--border))",
            background: "hsl(var(--surface-muted))",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-3">
            <div
              className="w-14 h-14 rounded-2xl"
              style={{ background: "hsl(var(--border))" }}
            />
            <div className="space-y-2 flex flex-col items-center">
              <div
                className="h-3 rounded-full"
                style={{ width: "160px", background: "hsl(var(--border))" }}
              />
              <div
                className="h-2.5 rounded-full"
                style={{ width: "120px", background: "hsl(var(--border))" }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

export default DynamicCompressorWidget;
