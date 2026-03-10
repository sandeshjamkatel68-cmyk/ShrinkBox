// Trust signals strip — shown on every tool page
export function TrustSignals() {
  const signals = [
    { icon: "🔒", text: "Files auto-deleted after processing" },
    { icon: "🚫", text: "No account required" },
    { icon: "⚡", text: "Processed in seconds" },
    { icon: "📱", text: "Works on mobile" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--text-muted)]">
      {signals.map((s) => (
        <span key={s.text} className="flex items-center gap-1.5">
          <span>{s.icon}</span>
          <span>{s.text}</span>
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
          >
            <p className="font-medium text-sm mb-1.5">{item.q}</p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────

// Reusable hero block for tool landing pages
interface ToolHeroProps {
  icon:        string;
  title:       string;
  description: string;
  badge?:      string;
}

export function ToolHero({ icon, title, description, badge }: ToolHeroProps) {
  return (
    <div className="text-center mb-10">
      {badge && (
        <span className="inline-block text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1 mb-4">
          {badge}
        </span>
      )}
      <div className="text-5xl mb-4">{icon}</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
