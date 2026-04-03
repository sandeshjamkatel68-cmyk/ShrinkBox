import { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["convert-jpg-to-webp"].title,
  description: TOOL_META["convert-jpg-to-webp"].description,
  keywords:    TOOL_META["convert-jpg-to-webp"].keywords,
  openGraph: {
    title:       TOOL_META["convert-jpg-to-webp"].title,
    description: TOOL_META["convert-jpg-to-webp"].description,
    url:         "https://shrink-box.com/convert-jpg-to-webp",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-jpg-to-webp"].title,
    description: TOOL_META["convert-jpg-to-webp"].description,
  },
  alternates: {
    canonical: "/convert-jpg-to-webp",
  },
};

const FAQ_ITEMS = [
  { q: "How much smaller is a WebP file compared to a standard JPG?", a: "WebP is a next-generation format developed by Google that typically provides 25–40% smaller file sizes than JPEG at identical visual quality. For website owners, this small change can lead to massive improvements in server bandwidth and page load speeds." },
  { q: "Should I replace all the JPG images on my website with WebP?", a: "Yes, for web use, WebP is superior in almost every metric. It supports better compression and faster decoding. However, keep a JPG backup if you need to support extremely old browsers or specific offline software that hasn't updated in over a decade." },
  { q: "Does converting to WebP introduce blurriness or artifacts?", a: "Our encoder uses a high-performance setting that prioritizes structural integrity. When converting from JPG to WebP at 80% quality or higher, the differences are mathematically present but visually indistinguishable from the original high-resolution photograph." },
  { q: "Is it secure to convert sensitive photos using this tool?", a: "100%. Unlike other converters that 'upload' your data to a cloud server, ShrinkBox performs the entire JPG to WebP transcoding **locally in your web browser**. Your sensitive photos and project assets never leave your computer, providing complete privacy." },
];

export default function JpgToWebpPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-jpg-to-webp"].title}
        description={TOOL_META["convert-jpg-to-webp"].description}
        url={TOOL_META["convert-jpg-to-webp"].url}
        category={TOOL_META["convert-jpg-to-webp"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "JPG to WebP", url: "/convert-jpg-to-webp" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "JPG to WebP", url: "/convert-jpg-to-webp" }]} />
        <ToolHero 
          icon="🚀" 
          title="Convert JPG to WebP Online Free — Fast Next-Gen Web Optimization" 
          description="Instantly transform your JPEG images into modern WebP format. Achieve smaller file sizes, faster loading pages, and improved SEO rankings with professional-grade local transcoding." 
          badge="JPG → WebP · Free · Private" 
        />
        <ConvertImageWidget defaultTarget="webp" allowedSources=".jpg,.jpeg" />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="JPG to WebP"
        title="JPG to WebP Online Free — The Future of High-Performance Media"
        description="Don't let legacy formats slow down your user experience. ShrinkBox provides a secure, browser-based gateway to the WebP format, ensuring your site meets modern Core Web Vitals standards instantly."
        howToSteps={[
          "Select or drag & drop your JPG/JPEG images into the secure local transcoder.",
          "Our system instantly initializes a high-fidelity WebP encoding engine.",
          "Adjust the quality target to find the perfect weight for your web presence.",
          "Download your optimized, next-gen WebP image files instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why Google prioritizes WebP for search rankings</h3>
            <p>
              Page speed is a confirmed ranking factor for both desktop and mobile search. Large, bloated JPEGs are often the primary cause of slow 'Largest Contentful Paint' (LCP) times. WebP (Web Picture) format was specifically engineered to solve this by using more efficient predictive coding. By converting your JPG collection to WebP using ShrinkBox, you are directly signaling to search engines that your site is built for modern performance and user retention.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Browser-Based Processing</h3>
            <p>
              Your graphics and private photos are your property. ShrinkBox respects your intellectual property by performing the entire transcoding process **within your own browser**. Your source files are never transmitted to our servers, making this the safest way to convert assets for upcoming product launches or confidential corporate projects.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Bulk Conversion for Projects</h3>
            <p className="text-sm">
              If you have an entire gallery of JPGs to convert, try our 'Bulk Compressor' which supports multi-file processing. For single, high-fidelity hero images where every pixel counts, this dedicated JPG to WebP tool provides the highest level of detail control.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
