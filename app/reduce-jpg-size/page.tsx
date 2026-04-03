import { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["reduce-jpg-size"].title,
  description: TOOL_META["reduce-jpg-size"].description,
  keywords:    TOOL_META["reduce-jpg-size"].keywords,
  openGraph: {
    title:       TOOL_META["reduce-jpg-size"].title,
    description: TOOL_META["reduce-jpg-size"].description,
    url:         "https://shrink-box.com/reduce-jpg-size",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["reduce-jpg-size"].title,
    description: TOOL_META["reduce-jpg-size"].description,
  },
  alternates: {
    canonical: "/reduce-jpg-size",
  },
};

const JPG_FAQ = [
  {
    q: "How do I reduce a JPG file size without losing quality?",
    a: "Use our 'Low' compression mode. It re-encodes the JPEG at a high quality setting while stripping hidden metadata like GPS coordinates and camera info. This typically saves 20–35% of the file size with no visible difference to the naked eye.",
  },
  {
    q: "What is the best JPG quality setting for the web?",
    a: "For most websites, a quality setting between 80% and 85% is the sweet spot. It provides a massive reduction in file size compared to the original '100% quality' file while maintaining crisp edges and vibrant colors on almost all screens.",
  },
  {
    q: "Does compressing a JPG multiple times degrade it?",
    a: "Yes. JPEG is a 'lossy' format, meaning every time you save or re-compress it, a tiny amount of data is lost. For the best professional results, you should always compress from your original high-resolution file rather than re-compressing an already small file.",
  },
  {
    q: "Can I reduce the size of a CMYK JPEG for print?",
    a: "Yes, but be aware that our tool optimizes images primarily for digital (RGB) display. If you are preparing a file for professional printing, we recommend checking the final output in a dedicated design tool to ensure color accuracy.",
  },
];

export default function ReduceJpgPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Reduce JPG Size", url: "/reduce-jpg-size" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Reduce JPG Size", url: "/reduce-jpg-size" }]} />
        <ToolHero
          icon="📸"
          title="Reduce JPG Size Online Free — High-Performance JPG Reducer"
          description="Compress JPG and JPEG images online instantly without visible quality loss. ShrinkBox uses smart re-encoding to strip hidden metadata and optimize your photos for the web."
          badge="JPG · JPEG · Free"
        />
        <CompressorWidget />
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={JPG_FAQ} />
      </section>

      <SEOContent
        toolName="Reduce JPG Size"
        title="Reduce JPG Size Online Free — Optimize Your Photos for Faster Loading"
        description="JPEG (or JPG) is the standard format for photographs across the web because of its highly efficient lossy compression. ShrinkBox solves the problem of large image files by re-encoding your JPGs at an optimal level."
        howToSteps={[
          "Select or drag & drop your JPG/JPEG file into the secure reducer zone.",
          "Our system instantly analyzes the pixel structure and removes non-essential metadata.",
          "Select your desired quality level to balance file weight and visual clarity.",
          "Download your reduced JPG image file instantly with 100% privacy guaranteed."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">The secret to faster website loading: Optimized JPEGs</h3>
            <p>
              In the world of web performance, every kilobyte counts. Unoptimized JPEGs directly from a camera or smartphone can be several megabytes in size, which is far too heavy for a mobile user on a slow connection. By reducing your JPG size, you ensure your portfolio, blog, or e-commerce site loads instantly, keeping users engaged and improving your SEO ranking. ShrinkBox provides the tools to achieve this balance without needing expensive software.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Bank-Level Privacy: No Uploads Required</h3>
            <p>
              Unlike other online image reducers, ShrinkBox doesn't send your personal photos to a remote server. All the heavy math and image processing happen **directly on your device** using your browser's internal engine. This ensures that your private memories, sensitive documents, and professional work remain entirely under your control at all times.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Strip EXIF Data</h3>
            <p className="text-sm">
              Standard photos often contain hidden EXIF data, including the exact GPS coordinates of where the photo was taken and your camera's serial number. Our reducer automatically prunes this data during the compression process, protecting your privacy while significantly reducing the overall file size.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
