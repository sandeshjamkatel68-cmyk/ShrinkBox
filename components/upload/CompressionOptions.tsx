"use client";

import type { CompressionLevel } from "@/types/compression";

interface CompressionOptionsProps {
  value:    CompressionLevel;
  onChange: (level: CompressionLevel) => void;
  disabled?: boolean;
  showForPdf?: boolean; // PDFs don't expose levels in MVP
}

const LEVELS: { value: CompressionLevel; label: string; hint: string }[] = [
  { value: "low",    label: "Low",    hint: "Minimal quality loss" },
  { value: "medium", label: "Medium", hint: "Best balance" },
  { value: "high",   label: "High",   hint: "Smallest file" },
];

export default function CompressionOptions({
  value,
  onChange,
  disabled,
  showForPdf = false,
}: CompressionOptionsProps) {
  if (showForPdf) {
    return (
      <div className="text-sm text-muted bg-surface-muted rounded-xl px-4 py-3">
        PDF compression automatically strips metadata and optimizes structure.
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-2">Compression level</p>
      <div className="flex gap-2">
        {LEVELS.map((level) => (
          <button
            key={level.value}
            onClick={() => !disabled && onChange(level.value)}
            disabled={disabled}
            className={[
              "flex-1 rounded-xl border px-3 py-2.5 text-sm transition-all duration-150 text-left",
              value === level.value
                ? "border-brand bg-[rgba(34,197,94,0.08)] text-brand"
                : "border-border bg-surface text-muted hover:border-brand/30",
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          >
            <div className="font-medium">{level.label}</div>
            <div className="text-xs opacity-70 mt-0.5">{level.hint}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
