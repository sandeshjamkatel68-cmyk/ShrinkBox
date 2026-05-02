"use client";

import type { CompressionLevel } from "@/types/compression";

interface CompressionOptionsProps {
  value:    CompressionLevel;
  onChange: (level: CompressionLevel) => void;
  disabled?: boolean;
  showForPdf?: boolean;
}

const LEVELS: { value: CompressionLevel; label: string; hint: string; icon: string }[] = [
  { value: "low",    label: "Low",    hint: "Max Quality", icon: "💎" },
  { value: "medium", label: "Medium", hint: "Balanced",    icon: "⚖️" },
  { value: "high",   label: "High",   hint: "Smallest",    icon: "🎈" },
];

export default function CompressionOptions({
  value,
  onChange,
  disabled,
  showForPdf = false,
}: CompressionOptionsProps) {
  if (showForPdf) {
    return (
      <div className="text-xs font-semibold text-brand bg-brand-light border border-brand/10 rounded-xl px-4 py-3 flex items-center gap-3">
        <span className="text-lg">🛡️</span>
        PDF compression automatically strips metadata and optimizes structure for the web.
      </div>
    );
  }

  return (
    <div>
      <p className="text-2xs font-bold uppercase tracking-wider text-subtle mb-3">Compression Level</p>
      <div className="grid grid-cols-3 gap-2">
        {LEVELS.map((level) => (
          <button
            key={level.value}
            onClick={() => !disabled && onChange(level.value)}
            disabled={disabled}
            className={`
              flex-1 rounded-xl border p-3 text-left transition-all duration-300
              ${value === level.value
                ? "border-brand bg-brand-light shadow-sm"
                : "border-border bg-surface text-muted hover:border-brand/30 hover:bg-surface-muted/30"}
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-foreground">{level.label}</span>
              <span className={`text-xs transition-opacity duration-300 ${value === level.value ? "opacity-100" : "opacity-40"}`}>
                {level.icon}
              </span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-tight text-subtle truncate">
              {level.hint}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
