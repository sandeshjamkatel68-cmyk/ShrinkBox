import { Metadata } from "next";
import BulkCompressWidget from "@/components/tools/BulkCompressWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["bulk-compress"].title,
  description: TOOL_META["bulk-compress"].description,
  keywords:    TOOL_META["bulk-compress"].keywords,
  openGraph: {
    title:       TOOL_META["bulk-compress"].title,
    description: TOOL_META["bulk-compress"].description,
    url:         "https://shrink-box.com/bulk-compress",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["bulk-compress"].title,
    description: TOOL_META["bulk-compress"].description,
  },
  alternates: {
    canonical: "/bulk-compress",
  },
};

const FAQ_ITEMS = [
  { q: "How many images can I compress at once?", a: "Our bulk compressor currently supports up to 10 images in a single operation. This ensures high-speed performance and stability without overwhelming your browser's memory." },
  { q: "Can I download all compressed images as a single ZIP file?", a: "Currently, our tool initiates individual downloads for each optimized file in rapid succession. A 'Download as ZIP' feature is currently in development to make large batches even easier to handle." },
  { q: "Does every image in the batch use the same settings?", a: "Yes. To ensure consistency across your project, the quality setting you select is applied to every JPG, PNG, and WebP file in the batch. You can preview the individual savings for each file in the results list." },
  { q: "Is batch processing slower than single-image compression?", a: "Because ShrinkBox uses parallel processing in your browser, compressing 10 images is nearly as fast as compressing one. You'll save significant time by avoiding repeated uploads and downloads." },
];

export default function BulkCompressPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["bulk-compress"].title}
        description={TOOL_META["bulk-compress"].description}
        url={TOOL_META["bulk-compress"].url}
        category={TOOL_META["bulk-compress"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Bulk Compress", url: "/bulk-compress" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Bulk Compress", url: "/bulk-compress" }]} />
        <ToolHero icon="🗂️" title="Bulk Image Compressor Online Free — Batch Size Reducer" description="Save hours of time by compressing up to 10 images simultaneously. Combine JPG, PNG, and WebP files in a single batch with professional results and zero wait time." badge="Up to 10 files · Free" />
        <BulkCompressWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="Bulk Image Compressor"
        title="Bulk Image Compressor Online Free — The Ultimate Tool for Batch Optimization"
        description="Compressing dozens of images one by one is a thing of the past. ShrinkBox's bulk compressor is built for photographers, developers, and content creators who need to optimize entire galleries in seconds."
        howToSteps={[
          "Select or drag & drop up to 10 images (JPG, PNG, or WebP) into the batch processor.",
          "Choose your desired compression level to apply to the entire collection.",
          "Watch as our engine optimizes every file in parallel directly in your browser.",
          "Click 'Download All' to instantly save your optimized images to your device."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why batch image optimization is a productivity game-changer</h3>
            <p>
              Whether you're prepping product photos for an e-commerce store or optimizing screenshots for a technical blog, doing it one by one is a bottleneck. Our bulk compressor allows you to maintain professional-grade quality across multiple files simultaneously. By reducing the weight of an entire set of assets, you ensure your project remains fast, responsive, and SEO-friendly without the manual labor.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">100% Privacy: Local Parallel Processing</h3>
            <p>
              Most online 'batch' tools require you to upload your sensitive content to a cloud server, which can be slow and risky. ShrinkBox utilizes modern **multithreaded WebAssembly** to process your images directly on your computer. This means your files never leave your machine, providing the ultimate level of security for your visual assets.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Standardize Your Settings</h3>
            <p className="text-sm">
              When creating images for a specific platform (like a web carousel or a social media feed), using the same compression level for the entire batch ensures that every image has a consistent 'feel' and loading behavior, providing a more polished experience for your users.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
