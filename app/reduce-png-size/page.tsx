import { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/reduce-png-size",
  },
};

const PNG_FAQ = [
  {
    q: "Why are PNG files usually so much larger than JPEGs?",
    a: "PNG uses a lossless compression algorithm, meaning every single pixel is preserved with 100% accuracy. While this results in perfect quality and support for transparency, it often leads to much larger file weights, especially for complex images or photos.",
  },
  {
    q: "How does your PNG reducer work without losing quality?",
    a: "Our tool applies advanced zlib compression and strips non-essential 'chunks' of metadata (like creation dates or software tags) that aren't needed for web display. This reduces the file size significantly while keeping the actual image data completely untouched and lossless.",
  },
  {
    q: "Should I use PNG or WebP for my website?",
    a: "If your visitors are using modern browsers, WebP is almost always superior for file size. However, PNG remains the gold standard for compatibility and is still the best choice for images that require pixel-perfect transparency or where absolute fidelity is more important than file weight.",
  },
  {
    q: "Will my transparency (alpha channel) be preserved?",
    a: "Absolutely. ShrinkBox's PNG optimizer is designed specifically to respect and preserve various levels of transparency. Your logos and icons will remain crisp and clear against any background after compression.",
  },
];

export default function ReducePngPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Reduce PNG Size", url: "/reduce-png-size" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Reduce PNG Size", url: "/reduce-png-size" }]} />
        <ToolHero
          icon="🎨"
          title="Reduce PNG Size Online Free — Professional PNG Optimization Tool"
          description="Compress PNG images online instantly without losing transparency or sharpness. Our browser-based engine optimizes internal data structures for the smallest possible file footprint."
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

      <SEOContent
        toolName="Reduce PNG Size"
        title="Reduce PNG Size Online Free — Preserve Your Quality, Shrink Your Files"
        description="PNG files are essential for logos, web design, and digital art because of their lossless transparency. ShrinkBox tackles the problem of large PNGs by using advanced zlib compression directly in your browser."
        howToSteps={[
          "Select or drag & drop your PNG image file into the secure processing area.",
          "Our system instantly analyzes the color palette and internal data chunks.",
          "Select your optimization level: Low (Lossless), Medium, or High (Smallest).",
          "Download your reduced PNG image file instantly with zero wait time."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why PNG optimization is vital for web designers</h3>
            <p>
              When building modern websites, many designers reach for PNGs to handle logos and icons with transparent backgrounds. However, exported PNGs from tools like Photoshop or Figma often contain 'bloat'—extra data that isn't needed for the image to look good on screen. Reducing your PNG size before deployment can significantly lower your page's 'Time to Interactive,' providing a smoother experience for your users and a better score on performance audits.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ultimate Privacy: Your Graphics Stay on Your Machine</h3>
            <p>
              Your design assets and personal screenshots are your intellectual property. ShrinkBox respects this by performing all PNG compression **locally in your web browser**. We utilize a high-performance WebAssembly engine that runs directly on your computer's CPU. This means your files are never transmitted to our servers, providing 100% security and zero risk of data leakage.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Try Indexing for Massive Savings</h3>
            <p className="text-sm">
              If your PNG doesn't contain a full photographic range of colors (like a simple logo or a chart), our 'High' compression mode can often convert the image to an 'Indexed Color' palette. This can reduce the file size by up to 70% while maintaining a look that is virtually indistinguishable from the original high-color version.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
