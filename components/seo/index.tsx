"use client";

import { useState } from "react";

export * from "./SEOContent";

// ── Trust Signals ─────────────────────────────────────────────────────────────

export function TrustSignals() {
  const items = [
    { icon: "🔒", text: "Files deleted instantly" },
    { icon: "⚡", text: "Processed in seconds" },
    { icon: "🚫", text: "No account needed" },
    { icon: "✨", text: "100% free" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
      {items.map(({ icon, text }) => (
        <span key={text} className="flex items-center gap-2 text-xs font-medium text-subtle hover:text-muted transition-colors cursor-default">
          <span className="text-sm">{icon}</span>
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
      <h2 className="heading-section text-2xl sm:text-[28px] mb-8 text-center text-foreground">
        Frequently Asked Questions
      </h2>
      <div className="rounded-2xl border border-border bg-surface divide-y divide-border overflow-hidden shadow-sm">
        {items.map((item, i) => (
          <div key={item.q} className="group/faq">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left bg-transparent border-none cursor-pointer font-[inherit] hover:bg-surface-muted/40 transition-colors touch-target"
            >
              <span className="text-sm sm:text-[15px] font-semibold text-foreground group-hover/faq:text-brand transition-colors">{item.q}</span>
              <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                open === i
                  ? "bg-brand rotate-180"
                  : "bg-surface-muted"
              }`}>
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke={open === i ? "white" : "hsl(var(--text-subtle))"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            </div>
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
    <div className="text-center mb-10 animate-fade-up">
      {badge && (
        <span className="badge badge-surface mb-5 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          {badge}
        </span>
      )}
      <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
        {icon}
      </div>
      <h1 className="heading-display text-[26px] sm:text-[34px] md:text-[42px] mb-4 text-foreground">{title}</h1>
      <p className="text-muted max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
