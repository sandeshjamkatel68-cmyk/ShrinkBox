"use client";

import { useCallback, useState } from "react";
import DropZone from "./DropZone";
import ByteRuler from "./ByteRuler";
import { formatBytes } from "@/lib/utils/formatBytes";

export interface ProcessResult {
  blob: Blob;
  outputName: string;
}

interface QueueItem {
  id: string;
  file: File;
  status: "processing" | "done" | "error";
  result?: ProcessResult;
  error?: string;
}

interface ImageToolProps {
  accept: string;
  multiple?: boolean;
  dropLabel: string;
  dropHint?: string;
  process: (file: File) => Promise<ProcessResult>;
  /** Optional controls (quality slider, target size, etc.) rendered above the drop zone */
  controls?: React.ReactNode;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function ImageTool({ accept, multiple = true, dropLabel, dropHint, process, controls }: ImageToolProps) {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [zipping, setZipping] = useState(false);

  const handleFiles = useCallback(
    (files: File[]) => {
      const items: QueueItem[] = files.map((file) => ({ id: makeId(), file, status: "processing" }));
      setQueue((prev) => [...items, ...prev]);

      items.forEach((item) => {
        process(item.file)
          .then((result) => {
            setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, status: "done", result } : q)));
          })
          .catch((err: Error) => {
            setQueue((prev) =>
              prev.map((q) => (q.id === item.id ? { ...q, status: "error", error: err.message || "Couldn't process this file" } : q))
            );
          });
      });
    },
    [process]
  );

  const downloadOne = (item: QueueItem) => {
    if (!item.result) return;
    const url = URL.createObjectURL(item.result.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = item.result.outputName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAll = async () => {
    const done = queue.filter((q) => q.status === "done" && q.result);
    if (done.length === 0) return;
    setZipping(true);
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      done.forEach((q) => zip.file(q.result!.outputName, q.result!.blob));
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "shrinkbox.zip";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setZipping(false);
    }
  };

  const doneCount = queue.filter((q) => q.status === "done").length;

  return (
    <div>
      {controls && <div className="mb-4">{controls}</div>}

      <DropZone accept={accept} multiple={multiple} onFiles={handleFiles} label={dropLabel} hint={dropHint} />

      {queue.length > 0 && (
        <div className="mt-6 space-y-3" aria-live="polite">
          {queue.length > 1 && doneCount > 1 && (
            <button
              onClick={downloadAll}
              disabled={zipping}
              className="w-full sm:w-auto min-h-[44px] px-5 rounded bg-signal text-white font-sans text-sm font-medium disabled:opacity-60"
            >
              {zipping ? "Zipping…" : `Download all ${doneCount} as ZIP`}
            </button>
          )}

          {queue.map((item) => (
            <div key={item.id} className="panel p-4">
              {item.status === "processing" && (
                <p className="font-sans text-sm text-ink-dim">
                  Compressing <span className="text-ink">{item.file.name}</span>… ({formatBytes(item.file.size)})
                </p>
              )}
              {item.status === "error" && (
                <p className="font-sans text-sm text-removed">
                  {item.file.name}: {item.error}
                </p>
              )}
              {item.status === "done" && item.result && (
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <div className="flex-1">
                    <ByteRuler originalBytes={item.file.size} compressedBytes={item.result.blob.size} label={item.file.name} />
                  </div>
                  <button
                    onClick={() => downloadOne(item)}
                    className="min-h-[44px] px-4 rounded border border-[var(--border-strong)] font-sans text-sm font-medium text-ink hover:border-signal transition-colors shrink-0"
                  >
                    Download
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
