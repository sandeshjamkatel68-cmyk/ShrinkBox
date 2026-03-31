import type { Metadata } from "next";
import FaviconWidget from "./FaviconWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["favicon-generator"].title,
  description: TOOL_META["favicon-generator"].description,
  keywords:    TOOL_META["favicon-generator"].keywords,
  openGraph: {
    title:       TOOL_META["favicon-generator"].title,
    description: TOOL_META["favicon-generator"].description,
    url:         "https://shrink-box.com/favicon-generator",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["favicon-generator"].title,
    description: TOOL_META["favicon-generator"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/favicon-generator`,
  },
};

const FAQ_ITEMS = [
  { q: "What sizes are included in the ZIP?", a: "Our generator packages 16x16 (favicon.ico), 32x32 (standard PNG), 180x180 (Apple Touch Icon), and 512x512 (Android/Web Manifest) into one downloadable ZIP file." },
  { q: "Should I use a square image?", a: "Yes. For the best result, upload a square image. If your image isn't square, we will automatically crop it to the center to prevent distortion." },
  { q: "Can I use a transparent PNG?", a: "Absolutely. Transparent PNGs are recommended for favicons to ensure they look great on all browser tab colors and themes." },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["favicon-generator"].title}
        description={TOOL_META["favicon-generator"].description}
        url={TOOL_META["favicon-generator"].url}
        category={TOOL_META["favicon-generator"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="⭐" 
          title="Favicon Generator" 
          description="Create a full set of browser icons from your logo. Instantly generate .ico and .png sizes for your web project." 
          badge="Favicon · Free" 
        />
        <FaviconWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <RelatedGuides tags={["Design", "Tools"]} />
    </>
  );
}
