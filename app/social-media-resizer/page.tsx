import { Metadata } from "next";
import SocialResizerWidget from "@/app/social-media-resizer/SocialResizerWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/social-media-resizer",
  },
};

const FAQ_ITEMS = [
  { q: "What social media platforms and sizes are supported?", a: "We provide instant, one-click presets for all major platforms, including Instagram (Posts, Stories, Reels), TikTok, YouTube Thumbnails, Twitter Headers, LinkedIn Covers, and Facebook Posts. Our presets are always updated to match current platform requirements." },
  { q: "What is the difference between the 'Cover' and 'Contain' modes?", a: "In 'Cover' mode, your photo is scaled to fill the entire frame (which may slightly crop the edges). In 'Contain' mode, the entire photo is kept visible, and we add professional letterboxing or padding to ensure it fits the required aspect ratio perfectly." },
  { q: "Will resizing my photo for social media reduce its quality?", a: "No. ShrinkBox uses high-performance browser-side rendering to ensure your pixels remain crisp and clear. We export using professional-grade parameters to ensure your content looks stunning on high-resolution smartphone screens." },
  { q: "Is my private content safe during the social resizing process?", a: "Absolutely. Your photos are never 'uploaded' to any server. All cropping, scaling, and formatting happens **locally in your web browser**. Your creative assets and personal memories stay entirely on your machine." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Social Media Resizer", url: "/social-media-resizer" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Social Media Resizer", url: "/social-media-resizer" }]} />
        <ToolHero 
          icon="📱" 
          title="Social Media Image Resizer Online Free — Instant Presets" 
          description="Resize your photos for Instagram, TikTok, LinkedIn, and YouTube with a single click. No math, no guesswork—just perfectly formatted content for every social platform." 
          badge="Creator · Free · Private" 
        />
        <SocialResizerWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Social Media Resizer"
        title="Social Media Image Resizer Online Free — The Ultimate Content Creator Toolkit"
        description="Stop memorizing aspect ratios and pixel counts. ShrinkBox automates the entire formatting process, giving you perfectly sized visuals for every major social network in seconds."
        howToSteps={[
          "Select or drag & drop your original photo into the secure converter zone.",
          "Choose your target platform preset (e.g., Instagram Story or YouTube Thumbnail).",
          "Toggle between 'Cover' or 'Contain' to dial in the perfect visual framing.",
          "Download your perfectly formatted, high-resolution social media asset instantly."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why correct aspect ratios are critical for social engagement</h3>
            <p>
              Platforms like Instagram and TikTok prioritize 'native' content that fits their full-screen or square formats. When you upload a photo with incorrect dimensions, the algorithm might' letterbox' it or crop out important details, leading to lower engagement and a less professional brand aesthetic. ShrinkBox ensures your content is natively formatted, filling the screen correctly and maximizing your reach and impact.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Content Formatting</h3>
            <p>
              Your graphics and private photos are your property. Most 'online' resizers require you to upload your files to their cloud, pose a privacy risk and slowing down your workflow. ShrinkBox performs all scaling and cropping calculations **locally in your web browser**. No uploads required, and zero risk of your data being stored or misused by anyone else.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use 'Contain' for Complex Art</h3>
            <p className="text-sm">
              If your photo has important details near the edges that shouldn't be cropped, use the 'Contain' mode. This will preserve your entire image and add professional padding to meet the ratio requirement, ensuring you don't lose any of your hard work.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
