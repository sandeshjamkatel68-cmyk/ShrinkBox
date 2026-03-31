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
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 animate-fade-up">
      {items.map((text) => (
        <span key={text} className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default group">
          <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M4.5 7l1.8 1.8 3-3.6" stroke="hsl(var(--brand))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
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
    <section className="max-w-2xl mx-auto py-12">
      <h2 className="text-[28px] font-bold mb-10 text-center tracking-tight text-foreground">Frequently Asked Questions</h2>
      <div className="rounded-2xl border border-border bg-surface divide-y divide-border overflow-hidden shadow-md">
        {items.map((item, i) => (
          <div key={item.q} className="group/faq">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-transparent border-none cursor-pointer font-[inherit] hover:bg-surface-muted/50 transition-colors"
            >
              <span className="text-[15px] font-semibold text-foreground group-hover/faq:text-brand transition-colors">{item.q}</span>
              <div className={`shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-brand border-brand rotate-180' : 'bg-transparent'}`}>
                <svg
                  width="12" height="12" viewBox="0 0 16 16" fill="none"
                  className="transition-colors"
                >
                  <path d="M4 6l4 4 4-4" stroke={open === i ? "white" : "hsl(var(--text-muted))"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-6 pt-1">
                <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">{item.a}</p>
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
    <div className="text-center mb-12 animate-fade-up">
      {badge && (
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand bg-brand-light rounded-full px-4 py-1.5 mb-6 border border-brand/10">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          {badge}
        </span>
      )}
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-light flex items-center justify-center text-3xl shadow-sm rotate-3 group-hover:rotate-0 transition-transform">
        {icon}
      </div>
      <h1 className="text-[34px] md:text-[48px] font-extrabold mb-4 tracking-tight leading-[1.1] text-foreground">{title}</h1>
      <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
