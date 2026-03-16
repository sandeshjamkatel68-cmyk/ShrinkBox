"use client";

import { useState } from "react";

// ── Trust Signals ─────────────────────────────────────────────────────────────

export function TrustSignals() {
  const items = [
    "Files deleted instantly",
    "No account needed",
    "Processed in seconds",
    "100% free",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {items.map((text) => (
        <span key={text} className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="7" fill="var(--brand-light)"/>
            <path d="M4.5 7l1.8 1.8 3-3.6" stroke="var(--brand)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] divide-y divide-[var(--border)] overflow-hidden" style={{ boxShadow: "var(--shadow-sm)" }}>
        {items.map((item, i) => (
          <div key={item.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-transparent border-none cursor-pointer font-[inherit] hover:bg-[var(--surface-muted)] transition-colors"
            >
              <span className="text-sm font-semibold text-[var(--text)]">{item.q}</span>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="shrink-0 transition-transform duration-200"
                style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="M4 6l4 4 4-4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4">
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
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
    <div className="text-center mb-8">
      {badge && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-3 py-1 mb-4">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="5" fill="var(--brand)"/>
            <path d="M3 5l1.5 1.5L7 3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          {badge}
        </span>
      )}
      <div className="text-4xl mb-3 leading-none">{icon}</div>
      <h1 className="text-3xl md:text-[38px] font-bold mb-3 tracking-tight">{title}</h1>
      <p className="text-[var(--text-muted)] max-w-md mx-auto text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
