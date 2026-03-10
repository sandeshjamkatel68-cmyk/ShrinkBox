"use client";

import { useState, useCallback } from "react";
import type { CompressionLevel } from "@/types/compression";
import type { BulkApiResponse } from "@/lib/tools/bulkCompress";

export type BulkStatus = "idle" | "uploading" | "processing" | "done" | "error";

interface BulkState {
  status:   BulkStatus;
  files:    File[];
  result:   BulkApiResponse | null;
  error:    string | null;
  progress: number;
}

const INITIAL: BulkState = {
  status: "idle", files: [], result: null, error: null, progress: 0,
};

export function useBulkCompress() {
  const [state, setState] = useState<BulkState>(INITIAL);

  const run = useCallback(async (files: File[], level: CompressionLevel) => {
    if (files.length === 0) return;
    setState({ ...INITIAL, status: "uploading", files, progress: 15 });

    try {
      const form = new FormData();
      files.forEach((f) => form.append("files", f));
      form.append("level", level);

      setState((s) => ({ ...s, status: "processing", progress: 40 }));
      const res  = await fetch("/api/compress/bulk", { method: "POST", body: form });
      setState((s) => ({ ...s, progress: 85 }));
      const data: BulkApiResponse = await res.json();

      if (!res.ok || !data.success) {
        setState((s) => ({ ...s, status: "error", error: data.error ?? "Bulk compression failed." }));
        return;
      }
      setState((s) => ({ ...s, status: "done", result: data, progress: 100 }));
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Network error.";
      setState((s) => ({ ...s, status: "error", error: msg }));
    }
  }, []);

  const reset = useCallback(() => setState(INITIAL), []);
  return { state, run, reset };
}
