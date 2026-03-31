import type { Metadata } from "next";
import JsonFormatterWidget from "./JsonFormatterWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["json-formatter"].title,
  description: TOOL_META["json-formatter"].description,
  keywords:    TOOL_META["json-formatter"].keywords,
  openGraph: {
    title:       TOOL_META["json-formatter"].title,
    description: TOOL_META["json-formatter"].description,
    url:         "https://shrink-box.com/json-formatter",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["json-formatter"].title,
    description: TOOL_META["json-formatter"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/json-formatter`,
  },
};

const FAQ_ITEMS = [
  { q: "How do I format JSON?", a: "Simply paste your raw, unformatted JSON data into the text area and click 'Beautify'. Our tool will instantly add indentation and syntax highlighting for readability." },
  { q: "Can I minify JSON?", a: "Yes. Our tool also supports minification, which removes all whitespace and line breaks to minimize the file size for production environments." },
  { q: "Is the formatter secure?", a: "Yes. All processing happens locally in your browser. We never see or store the JSON data you paste." },
];

export default function JsonFormatterPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["json-formatter"].title}
        description={TOOL_META["json-formatter"].description}
        url={TOOL_META["json-formatter"].url}
        category={TOOL_META["json-formatter"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="📦" 
          title="JSON Formatter & Validator" 
          description="Beautify, minify, and validate JSON data instantly. A clean developer tool for debugging and optimizing JSON structures." 
          badge="Developer · Free" 
        />
        <JsonFormatterWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Essential Tool for Developers</h2>
        <p>
          Working with raw JSON data can be a headache, especially when it's returned as a single, unreadable line from an API. Our JSON Formatter allows you to transform that messy data into a clean, hierarchical structure with proper spacing and indentation.
        </p>
        <p>
          Whether you need to debug a server response or optimize a configuration file for production, ShrinkBox provides a fast, secure, and offline-ready solution that respects your data privacy.
        </p>
      </section>

      <RelatedGuides tags={["Tools", "Images"]} />
    </>
  );
}
