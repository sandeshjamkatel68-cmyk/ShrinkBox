import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface Faq {
  q: string;
  a: string;
}

interface RelatedTool {
  href: string;
  label: string;
}

interface ToolPageShellProps {
  title: string;
  subhead: string;
  breadcrumbLabel: string;
  tool: React.ReactNode;
  howItWorks: string[];
  technicalHeading: string;
  technicalParagraphs: string[];
  comparisonTable?: { headers: string[]; rows: string[][] };
  faqs: Faq[];
  relatedTools: RelatedTool[];
  schemaName: string;
  schemaUrl: string;
}

export default function ToolPageShell({
  title,
  subhead,
  breadcrumbLabel,
  tool,
  howItWorks,
  technicalHeading,
  technicalParagraphs,
  comparisonTable,
  faqs,
  relatedTools,
  schemaName,
  schemaUrl,
}: ToolPageShellProps) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: schemaName,
    url: schemaUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="max-w-[720px] mx-auto px-5 py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: breadcrumbLabel }]} />

      <h1 className="heading-display text-2xl sm:text-3xl text-ink mb-3">{title}</h1>
      <p className="font-sans text-base text-ink-dim mb-8 max-w-[52ch]">{subhead}</p>

      <div className="panel p-4 sm:p-6 mb-10">{tool}</div>

      {/* Trust panel */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          "Your file never leaves this tab — processed with WebAssembly in the browser.",
          "Nothing is uploaded. There is no server round trip to wait on or trust.",
          "Works offline after the first load. Close the tab and the file is gone.",
        ].map((point) => (
          <p key={point} className="font-sans text-xs text-ink-dim leading-relaxed">
            {point}
          </p>
        ))}
      </div>

      {/* How it works */}
      <section className="mb-10">
        <h2 className="heading-display text-lg text-ink mb-4">How it works</h2>
        <ol className="space-y-2">
          {howItWorks.map((step, i) => (
            <li key={i} className="font-sans text-sm text-ink-dim flex gap-3">
              <span className="font-data text-signal shrink-0">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Technical explainer */}
      <section className="mb-10">
        <h2 className="heading-display text-lg text-ink mb-4">{technicalHeading}</h2>
        <div className="space-y-4">
          {technicalParagraphs.map((p, i) => (
            <p key={i} className="font-sans text-sm text-ink-dim leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      {comparisonTable && (
        <section className="mb-10 overflow-x-auto">
          <h2 className="heading-display text-lg text-ink mb-4">Measured results</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {comparisonTable.headers.map((h) => (
                  <th key={h} className="text-left font-sans text-[11px] uppercase tracking-wider text-ink-dim border-b border-[var(--border)] pb-2 pr-4">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="font-data text-ink border-b border-[var(--border)] py-2 pr-4 tabular-nums">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="heading-display text-lg text-ink mb-4">Frequently asked questions</h2>
        <div className="space-y-5">
          {faqs.map((f) => (
            <div key={f.q}>
              <p className="font-sans text-sm font-medium text-ink mb-1">{f.q}</p>
              <p className="font-sans text-sm text-ink-dim leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related tools */}
      <section>
        <h2 className="heading-display text-lg text-ink mb-4">Related tools</h2>
        <div className="flex flex-wrap gap-2">
          {relatedTools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="px-3.5 py-2 min-h-[44px] flex items-center text-sm font-sans border border-[var(--border)] rounded text-ink-dim hover:text-ink hover:border-signal transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
