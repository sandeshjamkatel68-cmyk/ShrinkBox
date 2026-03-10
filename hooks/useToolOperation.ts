"use client";

import { useState, useCallback } from "react";
import type { ToolApiResponse } from "@/types/compression";

export type ToolStatus = "idle" | "uploading" | "processing" | "done" | "error";

export interface ToolState {
  status:   ToolStatus;
  result:   ToolApiResponse | null;
  error:    string | null;
  progress: number;
}

const INITIAL: ToolState = { status: "idle", result: null, error: null, progress: 0 };

/**
 * Generic hook for single-file tool operations (convert, resize).
 * Pass the endpoint and a FormData builder function.
 */
export function useToolOperation(endpoint: string) {
  const [state, setState] = useState<ToolState>(INITIAL);

  const run = useCallback(async (buildForm: () => FormData) => {
    setState({ ...INITIAL, status: "uploading", progress: 20 });
    try {
      setState((s) => ({ ...s, status: "processing", progress: 50 }));
      const response = await fetch(endpoint, { method: "POST", body: buildForm() });
      setState((s) => ({ ...s, progress: 85 }));

      const data: ToolApiResponse = await response.json();

      if (!response.ok || !data.success) {
        setState({ ...INITIAL, status: "error", error: data.error ?? "Operation failed." });
        return;
      }
      setState({ status: "done", result: data, error: null, progress: 100 });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Network error.";
      setState({ ...INITIAL, status: "error", error: msg });
    }
  }, [endpoint]);

  const reset = useCallback(() => setState(INITIAL), []);
  return { state, run, reset };
}
