"use client";

import { useState, useCallback } from "react";
import { validateFileClient } from "@/lib/validation/fileValidator";
import type {
  UploadState,
  CompressionLevel,
  CompressApiResponse,
} from "@/types/compression";

const INITIAL_STATE: UploadState = {
  status:   "idle",
  file:     null,
  result:   null,
  error:    null,
  progress: 0,
};

export function useCompression() {
  const [state, setState] = useState<UploadState>(INITIAL_STATE);

  const compress = useCallback(async (file: File, level: CompressionLevel) => {
    // Step 1: Client-side pre-validation (instant feedback)
    setState({ ...INITIAL_STATE, status: "validating", file });

    const validation = validateFileClient(file);
    if (!validation.valid) {
      setState({
        ...INITIAL_STATE,
        status: "error",
        file,
        error: validation.error ?? "Invalid file.",
      });
      return;
    }

    // Step 2: Determine which API endpoint to hit
    const endpoint =
      validation.category === "pdf"
        ? "/api/compress/pdf"
        : "/api/compress/image";

    // Step 3: Upload
    setState((s) => ({ ...s, status: "uploading", progress: 10 }));

    try {
      const form = new FormData();
      form.append("file", file);
      form.append("level", level);

      setState((s) => ({ ...s, status: "compressing", progress: 40 }));

      const response = await fetch(endpoint, {
        method: "POST",
        body: form,
      });

      setState((s) => ({ ...s, progress: 80 }));

      const data: CompressApiResponse = await response.json();

      if (!response.ok || !data.success) {
        setState((s) => ({
          ...s,
          status: "error",
          progress: 0,
          error: data.error ?? "Compression failed. Please try again.",
        }));
        return;
      }

      setState((s) => ({
        ...s,
        status: "done",
        progress: 100,
        result: data,
      }));

    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Network error. Please check your connection.";
      setState((s) => ({
        ...s,
        status: "error",
        progress: 0,
        error: message,
      }));
    }
  }, []);

  const reset = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  return { state, compress, reset };
}
