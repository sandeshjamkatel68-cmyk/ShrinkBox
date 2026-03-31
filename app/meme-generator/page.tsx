import type { Metadata } from "next";
import MemeWidget from "./MemeWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

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
    canonical: `https://shrink-box.com/meme-generator`,
  },
};

const FAQ_ITEMS = [
  { q: "How do I make a meme?", a: "Simply upload your image, type your desired text for the top and bottom, and our generator will automatically style it with the classic Impact font. Download your creation instantly." },
  { q: "Is there a watermark on my memes?", a: "No. ShrinkBox memes are completely clean and watermark-free. You have full ownership of the images you create." },
  { q: "Can I use any image?", a: "Yes. You can upload any JPG, PNG, or WebP image to use as your meme template. The processing happens entirely in your browser." },
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
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🤡" 
          title="Meme Generator" 
          description="Create classic memes in seconds. Add text to any image without signups, watermarks, or uploads." 
          badge="Meme · Free" 
        />
        <MemeWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
