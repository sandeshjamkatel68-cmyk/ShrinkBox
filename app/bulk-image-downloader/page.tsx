import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { TOOL_META, ToolSchema, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BulkUrlPacker from "@/components/upload/BulkUrlPacker";

export const metadata: Metadata = {
  title:       TOOL_META["bulk-image-downloader"].title,
  description: TOOL_META["bulk-image-downloader"].description,
  keywords:    TOOL_META["bulk-image-downloader"].keywords,
  openGraph: {
    title:       TOOL_META["bulk-image-downloader"].title,
    description: TOOL_META["bulk-image-downloader"].description,
    url:         "https://shrink-box.com/bulk-image-downloader",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["bulk-image-downloader"].title,
    description: TOOL_META["bulk-image-downloader"].description,
  },
  alternates: {
    canonical: "/bulk-image-downloader",
  },
};

const BULK_FAQ = [
  { 
    q: "How does the Bulk Image Downloader work?", 
    a: "You simply paste a list of image URLs (one per line). Our engine then fetches each image directly in your browser, bundles them into a single ZIP file, and generates a credits list for you. It replaces the tedious task of right-clicking and saving dozens of images manually." 
  },
  { 
    q: "Why does it include a credits.txt file?", 
    a: "We believe in ethical downloading. The credits.txt file automatically logs the source URL of every image in your ZIP collection. This makes it easy for you to attribute the original creators when using the images for research, mood boards, or development." 
  },
  { 
    q: "Can I download videos with this tool?", 
    a: "Currently, this tool is optimized for images and static files. We prioritize high-speed, browser-based processing to ensure your downloads are fast and your privacy is 100% protected." 
  },
  { 
    q: "Is there a limit to how many URLs I can paste?", 
    a: "While there is no hard limit, we recommend batches of 50-100 URLs for the best performance. Since processing happens entirely in your browser's memory, extremely large batches may depend on your device's available RAM." 
  },
];

export default function BulkDownloaderPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["bulk-image-downloader"].title}
        description={TOOL_META["bulk-image-downloader"].description}
        url={TOOL_META["bulk-image-downloader"].url}
        category="DeveloperApplication"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Bulk Image Downloader", url: "/bulk-image-downloader" },
        ]}
      />
      <section className="max-w-4xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Bulk Image Downloader", url: "/bulk-image-downloader" }]} />
        <ToolHero
          icon="📦"
          title="Bulk Image Downloader — Extract URLs to ZIP"
          description="Stop downloading images one by one. Paste your list of links and instantly bundle them into a professional ZIP collection with automated source credits."
          badge="Unique · Ethical · Free"
        />
        
        <div className="mt-12">
          <BulkUrlPacker />
        </div>

        <div className="mt-16">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={BULK_FAQ} />
      </section>
      
      <SEOContent
        toolName="Bulk Image Downloader"
        title="The Professional Way to Collect & Pack Web Assets"
        description="Whether you are a researcher, designer, or developer, collecting image assets from multiple sources is a time-consuming chore. ShrinkBox solves this with a high-performance, browser-side downloader that respects copyright and saves hours of manual work."
        howToSteps={[
          "Gather your list of image or file URLs from your project or research notes.",
          "Paste the full list into our secure downloader zone (one URL per line).",
          "Click 'Pack All into ZIP' to initiate the high-speed browser fetching process.",
          "Download your organized ZIP file, complete with an automated credits.txt list."
        ]}
      >
        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">🚀 Solve the 'One-by-One' Struggle</h3>
              <p>
                In the modern web, high-res imagery is everywhere, but saving it for offline research or mood-boarding often requires hundreds of repetitive clicks. ShrinkBox's Bulk Image Downloader acts as your personal digital assistant, automating the fetching and zipping process so you can stay focused on your creative or development work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">🛡️ Ethical & Responsible Downloading</h3>
              <p>
                We believe that ease of access should come with accountability. Our tool is built to assist in the ethical collection of public assets. By automatically generating a `credits.txt` file inside every ZIP, we ensure that you always have a trail back to the original source, making transparency and attribution a standard part of your workflow.
              </p>
            </div>
          </div>

          <div className="bg-brand-light/20 p-8 rounded-3xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-3">Note on CORS & Security</h3>
            <p className="text-sm">
              ShrinkBox operates entirely in your browser to maintain the highest level of privacy. This means that for a download to succeed, the source website must allow "Cross-Origin" requests. While most public image CDNs and hosting services (like Unsplash, Imgur, etc.) are fully compatible, some protected platforms may block automated fetching to prevent scraping.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Tools", "Images", "Developer"]} />
    </>
  );
}
