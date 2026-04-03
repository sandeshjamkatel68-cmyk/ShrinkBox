import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-image"].title}
        description={TOOL_META["compress-image"].description}
        url={TOOL_META["compress-image"].url}
        category={TOOL_META["compress-image"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress Image", url: "/compress-image" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Compress Image", url: "/compress-image" }]} />
        <ToolHero
          icon="🖼"
          title="Compress Image Online Free — Professional JPG PNG WebP Size Reducer"
          description="Reduce image file size instantly in your browser without sacrificing clarity. Our smart optimization engine supports all major formats with zero quality loss for 'Low' and 'Medium' modes."
          badge="Free · Instant · Private"
        />
        <CompressorWidget />
        <div className="mt-12">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={IMAGE_FAQ} />
      </section>

      <SEOContent
        toolName="Compress Image"
        title="Compress Image Online Free — The Ultimate Optimization for Modern Web Performance"
        description="Speed up your website, improve SEO rankings, and save storage space by optimizing your images. ShrinkBox handles all the heavy lifting directly in your browser with bank-level privacy."
        howToSteps={[
          "Upload your JPG, PNG, or WebP image from your computer or mobile device.",
          "Select the desired compression level: Low (Best Quality), Medium (Balanced), or High (Smallest File).",
          "Our engine instantly analyzes the pixel density and strips unnecessary metadata.",
          "Download your optimized, web-ready image file immediately with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why image compression is critical for search engine rankings</h3>
            <p>
              Google's Core Web Vitals prioritize 'Largest Contentful Paint' (LCP) as a key ranking factor. If your website loads massive, unoptimized images, your page speed suffers, and your SEO ranking drops. By using an online image compressor like ShrinkBox, you can reduce your image weight by up to 80% without your users ever noticing a difference in quality. Faster pages mean better user experience and higher conversion rates.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">100% Privacy: Local Browser-Based Optimization</h3>
            <p>
              Most 'free' compressors profit by collecting and storing your data on their remote servers. ShrinkBox is built differently. Every byte of compression happens **locally in your web browser** using advanced JavaScript and WebAssembly. Your photos, screenshots, and graphics never leave your device, ensuring your sensitive data remains completely private.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Choosing the Right Format</h3>
            <p className="text-sm">
              If you're compressing for a modern website, we recommend converting your images to WebP after optimization. WebP files are typically 30% smaller than JPEGs while maintaining the same visual quality. Check out our 'JPG to WebP' converter to shave even more bytes off your site's load time.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
