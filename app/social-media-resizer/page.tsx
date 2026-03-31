import type { Metadata } from "next";
import SocialResizerWidget from "@/app/social-media-resizer/SocialResizerWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["social-media-resizer"].title,
  description: TOOL_META["social-media-resizer"].description,
  keywords:    TOOL_META["social-media-resizer"].keywords,
  openGraph: {
    title:       TOOL_META["social-media-resizer"].title,
    description: TOOL_META["social-media-resizer"].description,
    url:         "https://shrink-box.com/social-media-resizer",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["social-media-resizer"].title,
    description: TOOL_META["social-media-resizer"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/social-media-resizer`,
  },
};

const FAQ_ITEMS = [
  { q: "What social media sizes are supported?", a: "We provide one-click presets for Instagram Posts (1080x1080), Instagram Stories (1080x1920), Facebook Covers, Twitter Headers, and YouTube Thumbnails." },
  { q: "What's the difference between Cover and Contain?", a: "Cover fills the entire canvas for the social media post (which may crop some edges), while Contain preserves the full image and adds padding if necessary." },
  { q: "Do you store my social media photos?", a: "No. All resizing happens on your device in your web browser. We never see or store your private images." },
];

export default function SocialResizerPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["social-media-resizer"].title}
        description={TOOL_META["social-media-resizer"].description}
        url={TOOL_META["social-media-resizer"].url}
        category={TOOL_META["social-media-resizer"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="📱" 
          title="Social Media Image Resizer" 
          description="Instant one-click presets to resize photos for Instagram, Facebook, TikTok, and YouTube. No math, just results." 
          badge="Creator · Free" 
        />
        <SocialResizerWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Perfect Aspect Ratios Every Time</h2>
        <p>
          Each social platform has its own complex and frequently changing requirements for image dimensions. Memorizing them is impossible, and manual resizing is a pain. Our Social Media Resizer does the hard work for you.
        </p>
        <p>
          By selecting a preset, our tool automatically calculates the correct crop and aspect ratio for the platform. Whether you're building an Instagram brand, a YouTube channel, or a LinkedIn professional profile, ShrinkBox ensures your visual content looks perfect without ever leaving your browser.
        </p>
      </section>

      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
