import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import CompressSizeWidget from "./CompressSizeWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["compress-image-to-size"].title,
  description: TOOL_META["compress-image-to-size"].description,
  keywords:    TOOL_META["compress-image-to-size"].keywords,
  openGraph: {
    title:       TOOL_META["compress-image-to-size"].title,
    description: TOOL_META["compress-image-to-size"].description,
    url:         "https://shrink-box.com/compress-image-to-size",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-image-to-size"].title,
    description: TOOL_META["compress-image-to-size"].description,
  },
  alternates: {
    canonical: "/compress-image-to-size",
  },
};

const FAQ_ITEMS = [
  { q: "How do I compress an image to exactly 50KB or 100KB?", a: "Simply upload your image, enter your target size (e.g., '50' or '100') in the KB field, and click compress. Our system will automatically iterate through quality levels to find the perfect balance that stays just under your limit." },
  { q: "What image formats are supported for exact sizing?", a: "We support JPG, JPEG, and WebP for exact-size compression. PNG files are lossless and don't support target-size optimization as effectively; for PNGs, we recommend converting to JPG first if you have a strict limit." },
  { q: "Why is my resulting file a few KB smaller than the target?", a: "To ensure your upload is never rejected by strict automated systems, we aim for the highest quality that is *at or below* your target. We include a small safety margin to account for metadata variations." },
  { q: "Is my private data secure during the compression process?", a: "Yes. Unlike other tools that require an upload, ShrinkBox performs the binary-search optimization **locally in your browser**. Your sensitive documents and photos never leave your computer." },
];

export default function CompressToSizePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-image-to-size"].title}
        description={TOOL_META["compress-image-to-size"].description}
        url={TOOL_META["compress-image-to-size"].url}
        category={TOOL_META["compress-image-to-size"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress to Size", url: "/compress-image-to-size" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Compress to Size", url: "/compress-image-to-size" }]} />
        <ToolHero 
          icon="📉" 
          title="Compress Image to Exact KB Size Online Free" 
          description="The professional solution for government forms, visa applications, and student portals. Set your target file size in KB and our engine will find the perfect quality match instantly." 
          badge="Exact Size · Free · Private" 
        />
        <CompressSizeWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Compress Image to Size"
        title="Compress Image to Exact KB Online Free — No More Guesswork"
        description="Stop wasting time with trial-and-error compression. ShrinkBox uses an automated binary-search algorithm to hit your target file size with mathematical precision while preserving maximum clarity."
        howToSteps={[
          "Select or drag & drop your image (JPG, JPEG, or WebP) into the secure optimizer.",
          "Enter your required target file size in Kilobytes (e.g., 50 or 200).",
          "Our system will instantly run multiple local tests to find the ideal quality level.",
          "Download your perfectly sized, high-clarity image instantly with zero wait time."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why automated 'Exact Size' compression is essential</h3>
            <p>
              Most online portals for government services, job applications, and universities have strict automated filters that reject any file over a specific limit (often 50KB or 100KB). Manually adjusting quality sliders is frustrating and time-consuming. ShrinkBox automates this by testing dozens of quality combinations in milliseconds, ensuring you get the sharpest possible image that still fits within the portal's requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">100% Secure: Local Binary-Search Optimization</h3>
            <p>
              Your sensitive documents and personal photos should never be 'uploaded' to a random server just to be resized. ShrinkBox performs all optimization **directly on your computer** using your browser's processing power. This provides the ultimate level of security for your private data and bypasses the slow upload times of traditional tools.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Passports and Visas</h3>
            <p className="text-sm">
              If your application requires a photo under 50KB with specific dimensions, use our 'Resize Image' tool first to set the pixel dimensions, then use this 'Compress to Size' tool to nail the file weight requirement on the first try.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
