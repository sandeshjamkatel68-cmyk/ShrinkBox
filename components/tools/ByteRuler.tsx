"use client";

import { useEffect, useState } from "react";
import { formatBytes, formatReduction } from "@/lib/utils/formatBytes";

interface ByteRulerProps {
  originalBytes: number;
  compressedBytes: number;
  /** Label above the original row, e.g. the filename */
  label?: string;
}

/**
 * The signature ShrinkBox element: a horizontal scale bar showing the
 * original file, cut down to the compressed size, with the eliminated
 * span rendered in --removed. Animates once on mount, then holds.
 */
export default function ByteRuler({ originalBytes, compressedBytes, label }: ByteRulerProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const keptPercent = originalBytes > 0 ? Math.min(100, (compressedBytes / originalBytes) * 100) : 0;
  const removedBytes = Math.max(0, originalBytes - compressedBytes);

  return (
    <div className="w-full" role="group" aria-label={label ? `Compression result for ${label}` : "Compression result"}>
      {label && (
        <p className="text-xs text-ink-dim mb-2 truncate font-sans">{label}</p>
      )}

      <div className="flex items-center gap-3 mb-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-ink-dim w-24 shrink-0 font-sans">
          Original
        </span>
        <div className="flex-1 h-3 bg-[color-mix(in_srgb,var(--ink-dim)_18%,transparent)]" />
        <span className="font-data text-xs text-ink-dim tabular-nums w-20 text-right shrink-0">
          {formatBytes(originalBytes)}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-ink-dim w-24 shrink-0 font-sans">
          Compressed
        </span>
        <div className="flex-1 h-3 relative overflow-hidden bg-[color-mix(in_srgb,var(--removed)_12%,transparent)]">
          <div
            className="h-full bg-signal transition-[width] duration-[600ms] ease-out"
            style={{ width: ready ? `${keptPercent}%` : "100%" }}
            aria-hidden="true"
          />
        </div>
        <span className="font-data text-xs text-ink tabular-nums w-20 text-right shrink-0 font-semibold">
          {formatBytes(compressedBytes)}
        </span>
      </div>

      <p className="mt-2 text-xs font-data tabular-nums text-removed" aria-live="polite">
        −{formatBytes(removedBytes)} removed ({formatReduction(originalBytes, compressedBytes)} smaller)
      </p>
    </div>
  );
}
