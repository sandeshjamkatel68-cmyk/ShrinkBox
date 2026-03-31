import type { Metadata } from "next";
import WatermarkWidget from "./WatermarkWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["watermark-image"].title,
  description: TOOL_META["watermark-image"].description,
  keywords:    TOOL_META["watermark-image"].keywords,
  openGraph: {
    title:       TOOL_META["watermark-image"].title,
    description: TOOL_META["watermark-image"].description,
    url:         "https://shrink-box.com/watermark-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["watermark-image"].title,
    description: TOOL_META["watermark-image"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/watermark-image`,
  },
};

const FAQ_ITEMS = [
  { q: "Can I add my logo as a watermark?", a: "Currently, our tool supports adding custom text watermarks with control over font size, color, opacity, and position. Logo watermark support is coming soon!" },
  { q: "Is the watermark permanent?", a: "Yes. Once you download the watermarked image, the text is flattened into the pixels and cannot be easily removed without sophisticated editing software." },
  { q: "Do you store my original images?", a: "No. Your images are watermarked locally in your browser and never uploaded to any server. Your original files stay on your machine." },
];

export default function WatermarkImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["watermark-image"].title}
        description={TOOL_META["watermark-image"].description}
        url={TOOL_META["watermark-image"].url}
        category={TOOL_META["watermark-image"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🛡️" 
          title="Watermark Photos Online" 
          description="Protect your creative work. Add custom text watermarks to your images instantly, privately, and for free." 
          badge="Watermark · Free" 
        />
        <WatermarkWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Protect Your Photography</h2>
        <p>
          Sharing your photography or digital art on social media can be risky. Without a watermark, your work can be easily stolen or used without credit. ShrinkBox's Watermark tool lets you quickly stamp your brand, website, or name onto your photos before you post them.
        </p>
        <p>
          Because privacy is our core mission, the watermarking happens entirely offline within your web browser. This means you don't have to wait for slow uploads and your high-resolution original files never reach anyone else's server.
        </p>
      </section>

      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
