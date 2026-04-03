import { Metadata } from "next";
import MemeWidget from "./MemeWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["meme-generator"].title,
  description: TOOL_META["meme-generator"].description,
  keywords:    TOOL_META["meme-generator"].keywords,
  openGraph: {
    title:       TOOL_META["meme-generator"].title,
    description: TOOL_META["meme-generator"].description,
    url:         "https://shrink-box.com/meme-generator",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["meme-generator"].title,
    description: TOOL_META["meme-generator"].description,
  },
  alternates: {
    canonical: "/meme-generator",
  },
};

const FAQ_ITEMS = [
  { q: "How do I create a professional-looking meme?", a: "Simply upload your template image, type your desired text for the top and bottom fields, and our generator will automatically style it with the classic, high-visibility Impact font. You can then download your creation instantly and watermark-free." },
  { q: "Will my memes have a ShrinkBox watermark?", a: "No. Unlike other generators, ShrinkBox believes in total creative freedom. All memes generated are 100% clean and free of any watermarks, logos, or branding. They are yours to own and share." },
  { q: "What image formats can I use as templates?", a: "Our generator is compatible with all standard web formats, including JPG, PNG, and WebP. Whether it's a high-resolution photo or a quick screenshot, we'll handle the text layering perfectly." },
  { q: "Are my private photos uploaded during the meme creation?", a: "Absolutely not. ShrinkBox processes your images **locally in your web browser**. Your creative ideas, private photos, and meme templates never leave your machine, ensuring 100% privacy." },
];

export default function MemeGeneratorPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["meme-generator"].title}
        description={TOOL_META["meme-generator"].description}
        url={TOOL_META["meme-generator"].url}
        category={TOOL_META["meme-generator"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Meme Generator", url: "/meme-generator" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Meme Generator", url: "/meme-generator" }]} />
        <ToolHero 
          icon="🤡" 
          title="Meme Generator Online Free — Watermark-Free & Private" 
          description="Create viral-ready memes in seconds. Add professional text templates to any image without signups, watermarks, or third-party uploads." 
          badge="Meme · Free · Private" 
        />
        <MemeWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Meme Generator"
        title="Meme Generator Online Free — The Ultimate Creator Toolkit"
        description="Dominate social media with perfectly formatted memes. ShrinkBox provides a fast, browser-based way to caption your images with zero watermarks and total data privacy."
        howToSteps={[
          "Select or drag & drop your base image into the secure local generator zone.",
          "Type your captions into the 'Top Text' and 'Bottom Text' input fields.",
          "Our system instantly renders the text overlay using professional-grade Impact fonts.",
          "Download your polished, high-resolution meme instantly to your device."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why local meme generation is the future of content creation</h3>
            <p>
              Most online meme generators are bloated with ads and require you to upload your files to their cloud, which can be slow and invasive. ShrinkBox uses **advanced client-side technology** to perform the entire image processing operation directly in your browser. This means zero server latency, zero data mining, and total control over your creative outputs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Your Humor Stays Private</h3>
            <p>
              Your jokes and private photos should stay between you and your audience. ShrinkBox performs all text layering and image rendering locally. We never store, analyze, or share your creative assets, providing a safe sandbox for your brand-building or private humor.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use High-Resolution Templates</h3>
            <p className="text-sm">
              For the best result on platforms like Instagram and Twitter, use high-resolution source images. Our generator preserves the original pixel count of your upload, ensuring your text is sharp and your pixels are crisp when the meme goes viral.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
