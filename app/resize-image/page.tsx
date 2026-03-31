import type { Metadata } from "next";
import ResizeImageWidget from "@/components/tools/ResizeImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["resize-image"].title,
  description: TOOL_META["resize-image"].description,
  keywords:    TOOL_META["resize-image"].keywords,
  openGraph: {
    title:       TOOL_META["resize-image"].title,
    description: TOOL_META["resize-image"].description,
    url:         "https://shrink-box.com/resize-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["resize-image"].title,
    description: TOOL_META["resize-image"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/resize-image`,
  },
};

const FAQ_ITEMS = [
  { q: "Can I resize without losing quality?", a: "For minor resizing, quality loss is minimal. For significant downscaling, quality is preserved. We never upscale images, as that would add no real detail." },
  { q: "What fit modes are available?", a: "Fit Inside keeps your image within the bounds without cropping. Cover fills the exact size but may crop edges. Contain adds padding to fit exactly. Stretch forces the exact size but may distort." },
  { q: "Does resizing change the file format?", a: "No. A JPG stays a JPG, a PNG stays a PNG. If you want to change format, use our Convert tool." },
];

export default function ResizeImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["resize-image"].title}
        description={TOOL_META["resize-image"].description}
        url={TOOL_META["resize-image"].url}
        category={TOOL_META["resize-image"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="📐" title="Resize Image Online" description="Set exact pixel dimensions or scale by percentage. Choose your fit mode and download instantly — no signup." badge="Free · Instant · Private" />
        <ResizeImageWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How to Resize Images Correctly</h2>
        <p>
          Resizing an image isn't just about changing the pixel count. When shrinking an image for the web, social media, or email, preserving the original aspect ratio is crucial to prevent distortion. Our resize tool allows you to specify exact pixel dimensions (width or height) or scale the image by a clean percentage.
        </p>
        <p>
          We employ advanced interpolation algorithms running directly in your browser. This ensures that downscaling artifacts are minimized and edges remain crisp. Whether you need a 1080x1080 square for Instagram, a 1200x630 banner for a blog post, or a tiny thumbnail, our local-processing engine ensures zero data is sent to a server, guaranteeing complete privacy.
        </p>
      </section>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
