import type { Metadata } from "next";
import DynamicCompressorWidget from "@/components/upload/DynamicCompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { HowToSchema } from "@/components/seo/HowToSchema";

export const metadata: Metadata = {
  title:       TOOL_META["compress-image"].title,
  description: TOOL_META["compress-image"].description,
  keywords:    TOOL_META["compress-image"].keywords,
  openGraph: {
    title:       TOOL_META["compress-image"].title,
    description: TOOL_META["compress-image"].description,
    url:         "https://shrink-box.com/compress-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-image"].title,
    description: TOOL_META["compress-image"].description,
  },
  alternates: {
    canonical: "/compress-image",
  },
};

const IMAGE_FAQ = [
  {
    q: "Does compressing an image actually reduce its visual quality?",
    a: "It depends on the setting. At 'Low' and 'Medium' compression, quality loss is mathematically present but typically invisible to the human eye. 'High' compression produces the smallest possible file but may show subtle artifacts (blurring or noise) on high-resolution displays.",
  },
  {
    q: "What is the difference between JPG, PNG, and WebP compression?",
    a: "JPG uses lossy compression (permanent data removal) and is best for complex photos. PNG is lossless (no data removal) but we optimize its internal zlib structure to save space. WebP is a modern format that supports both and usually offers the best balance of quality and size.",
  },
  {
    q: "Will stretching or resizing happen during compression?",
    a: "No. ShrinkBox only optimizes the underlying data of the file to reduce its weight. Your image dimensions (width and height in pixels) will remain exactly as they were in the original file.",
  },
  {
    q: "How many images can I compress at once?",
    a: "Our specialized compressor currently focuses on high-performance single-image optimization. For multiple files, we recommend our 'Bulk Compressor' tool which can handle up to 10 images in a single batch operation.",
  },
];

export default function CompressImagePage() {
  const SCHEMA_STEPS = [
    { name: "Upload Images", text: "Drag and drop your JPG, PNG, or WebP files into the compressor." },
    { name: "Select Quality", text: "Choose a compression level that balances file size and visual quality." },
    { name: "Compress", text: "Process your images with our high-speed optimization engine." },
    { name: "Download", text: "Get your compressed files instantly." },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-12 sm:py-20 animate-fade-in">
      <HowToSchema 
        name="How to Compress Images Online"
        description="Learn how to quickly reduce the file size of your JPG, PNG, and WebP images using ShrinkBox."
        steps={SCHEMA_STEPS}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress Image", url: "/compress-image" },
        ]}
      />

      <div className="mb-12">
        <Breadcrumbs items={[{ name: "Compress Image", url: "/compress-image" }]} />
        <ToolHero
          icon="🖼️"
          title="Compress Image Online"
          description="Reduce image file size instantly in your browser without sacrificing clarity. Our smart optimization engine supports all major formats with zero quality loss for 'Low' and 'Medium' modes."
        />
      </div>

      <div className="animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
        <DynamicCompressorWidget />
        <div className="mt-12">
          <TrustSignals />
        </div>
      </div>

      <SEOContent
        toolName="Compress Image"
        title="Professional-Grade Image Compression"
        description="Speed up your website, improve SEO rankings, and save storage space by optimizing your images. ShrinkBox handles all the heavy lifting directly in your browser with bank-level privacy."
        isServerProcessed={true}
        howToSteps={[
          "Upload your JPG, PNG, or WebP image from your computer or mobile device.",
          "Select the desired compression level: Low (Best Quality), Medium (Balanced), or High (Smallest File).",
          "Our engine instantly analyzes the pixel density and strips unnecessary metadata.",
          "Download your optimized, web-ready image file immediately with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed text-sm">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why image compression is critical for search engine rankings</h3>
            <p>
              Google's Core Web Vitals prioritize 'Largest Contentful Paint' (LCP) as a key ranking factor. If your website loads massive, unoptimized images, your page speed suffers, and your SEO ranking drops. By using an online image compressor like ShrinkBox, you can reduce your image weight by up to 80% without your users ever noticing a difference in quality. Faster pages mean better user experience and higher conversion rates.
            </p>
          </div>
        </div>
      </SEOContent>

      <section className="max-w-[720px] mx-auto py-12 sm:py-16">
        <FAQ items={IMAGE_FAQ} />
      </section>
    </div>
  );
}
