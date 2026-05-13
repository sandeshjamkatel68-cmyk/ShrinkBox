"use client";

import { useState } from "react";

export * from "./SEOContent";

// ── Trust Signals ─────────────────────────────────────────────────────────────

export function TrustSignals() {
  const items = [
    {
      icon: (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1.5L2 3.5v5c0 3.5 4.5 6 6 6s6-2.5 6-6v-5L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.5 8l1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Files deleted after download",
    },
    {
      icon: (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
      text: "Processed in seconds",
    },
    {
      icon: (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M11 3l2 2M11 5l2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ),
      text: "No account required",
    },
    {
      icon: (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2L10 6h4.5L11 8.5l1.5 4.5L8 10.5l-4.5 2.5 1.5-4.5L1.5 6H6z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "100% free, always",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
      {items.map(({ icon, text }) => (
        <span
          key={text}
          className="flex items-center gap-1.5 text-[12px] font-medium text-[hsl(var(--text-subtle))]"
        >
          <span className="text-[hsl(var(--brand))]">{icon}</span>
          {text}
        </span>
      ))}
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────

interface FAQItem { q: string; a: string; }

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="border border-[hsl(var(--border))] rounded-lg overflow-hidden bg-[hsl(var(--surface))] hover:border-[hsl(var(--border-hover))] transition-colors"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left bg-transparent border-none cursor-pointer font-[inherit]"
            aria-expanded={open === i}
          >
            <span className="text-[13px] sm:text-[14px] font-semibold text-[hsl(var(--text))]">
              {item.q}
            </span>
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className={`shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="hsl(var(--text-subtle))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              open === i ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 pt-0 border-t border-[hsl(var(--border))]">
              <p className="text-[13px] text-[hsl(var(--text-muted))] leading-relaxed pt-3">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Tool Hero ─────────────────────────────────────────────────────────────────

interface ToolHeroProps {
  icon:        string;
  title:       string;
  description: string;
  badge?:      string;
}

export function ToolHero({ icon, title, description, badge }: ToolHeroProps) {
  return (
    <div className="text-center mb-8 animate-fade-up">
      {badge && (
        <span className="badge badge-surface mb-4 inline-flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand))] inline-block" aria-hidden="true" />
          {badge}
        </span>
      )}
      <div
        className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center text-xl"
        style={{ background: "hsl(var(--surface-muted))", border: "1px solid hsl(var(--border))" }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h1 className="heading-display text-[24px] sm:text-[32px] md:text-[40px] mb-3 text-[hsl(var(--text))]">
        {title}
      </h1>
      <p className="text-[hsl(var(--text-muted))] max-w-lg mx-auto text-sm sm:text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
