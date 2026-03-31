import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["reduce-png-size"].title,
  description: TOOL_META["reduce-png-size"].description,
  keywords:    TOOL_META["reduce-png-size"].keywords,
  openGraph: {
    title:       TOOL_META["reduce-png-size"].title,
    description: TOOL_META["reduce-png-size"].description,
    url:         "https://shrink-box.com/reduce-png-size",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["reduce-png-size"].title,
    description: TOOL_META["reduce-png-size"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/reduce-png-size`,
  },
};

const PNG_FAQ = [
  {
    q: "Why are PNG files so large?",
    a: "PNG uses lossless compression by default, preserving every pixel. This makes PNGs larger than JPEGs for photos, but ideal for screenshots, logos, and images with transparency.",
  },
  {
    q: "How does PNG compression work?",
    a: "We strip metadata and apply maximum zlib compression. For 'High' mode, we also convert to an indexed color palette when possible, which dramatically reduces size for images with limited colors.",
  },
  {
    q: "Should I use PNG or WebP?",
    a: "WebP typically achieves better compression than PNG for similar quality. If your use case supports WebP (most modern browsers do), it's often the better choice.",
  },
];

export default function ReducePngPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["reduce-png-size"].title}
        description={TOOL_META["reduce-png-size"].description}
        url={TOOL_META["reduce-png-size"].url}
        category={TOOL_META["reduce-png-size"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="🎨"
          title="Reduce PNG File Size"
          description="Compress PNG images online for free. Strip metadata, optimize compression, and reduce size without losing transparency or sharpness."
          badge="PNG · Free · Instant"
        />
        <CompressorWidget />
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={PNG_FAQ} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How to reduce PNG size securely</h2>
        <p>
          PNG files are famous for their lossless quality and support for transparent backgrounds, making them essential for logos, web design, and digital art. The tradeoff is that their file sizes can be massive compared to JPEGs. ShrinkBox tackles this by using advanced <a href="https://en.wikipedia.org/wiki/PNG" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">zlib compression techniques</a> directly in your browser.
        </p>
        <p>
          When you upload a PNG, our local engine strips unnecessary metadata (like software creator tags) and re-compresses the image data without dropping a single pixel of visual fidelity. Because the processing happens on your device, your images are never sent to a cloud server — ensuring maximum privacy and zero upload waiting time.
        </p>
      </section>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
