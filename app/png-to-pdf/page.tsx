import { Metadata } from "next";
import ImagesToPdfWidget from "@/app/images-to-pdf/ImagesToPdfWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["png-to-pdf"].title,
  description: TOOL_META["png-to-pdf"].description,
  keywords:    TOOL_META["png-to-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["png-to-pdf"].title,
    description: TOOL_META["png-to-pdf"].description,
    url:         "https://shrink-box.com/png-to-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["png-to-pdf"].title,
    description: TOOL_META["png-to-pdf"].description,
  },
  alternates: {
    canonical: "/png-to-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "Will the PDF output preserve the transparency from my PNGs?", a: "Yes. Our professional converter supports PNG transparency during the PDF creation process. Any transparent backgrounds will be perfectly rendered in the final document." },
  { q: "Can I combine multiple PNG files into one PDF?", a: "Absolutely. You can upload and merge up to 20 PNG images in a single batch, making it easy to create portfolios, portfolios, and multi-page reports." },
  { q: "Is there any limit on the file size of my PNGs?", a: "For the best performance in your browser, we support individual PNG files up to 10MB each. For larger projects, we recommend ensuring your files are optimized before conversion." },
  { q: "Are my PNGs stored on your servers?", a: "No. Your privacy is our priority. ShrinkBox uses advanced browser-side technology to convert your PNGs to PDF entirely on your own device." },
];

export default function PngToPdfPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "PNG to PDF", url: "/png-to-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "PNG to PDF", url: "/png-to-pdf" }]} />
        <ToolHero
          icon="🖼️"
          title="Convert PNG to PDF Online Free — Pixel-Perfect Results"
          description="Transform your PNG graphics into high-quality PDF documents instantly. Maintain your transparency and sharpness while creating a professional document."
          badge="Free · Instant · Secure"
        />
        <ImagesToPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="PNG to PDF"
        title="Convert PNG to PDF Online Free — Pixel-Perfect Document Creation"
        description="Need to combine your logos, screenshots, or design assets into a single professional document? ShrinkBox provides the most reliable way to convert your PNG files to PDF while preserving every detail and transparency. Our client-side high-speed engine ensures your files never leave your device."
        howToSteps={[
          "Select or drag & drop your PNG files into the secure local converter area.",
          "Arrange the images in the desired order by dragging and dropping them freely.",
          "Customize the page orientation (Portrait/Landscape) and fit settings.",
          "Download your perfectly rendered, high-quality PDF document instantly."
        ]}
      >
        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[0.95rem]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🎨</span> The Designer's Choice for PDF
              </h3>
              <p>
                PNG is the gold standard for high-quality web graphics, but PDF is the universal standard for portfolios, client deliverables, and professional presentations. By converting your PNGs to PDF, you ensure your work is presented in a stable, cross-platform format that looks identical on every screen.
              </p>
              <p className="mt-4">
                Whether you're sending a single flyer concept or a 20-page brand identity lookbook, a single PDF file is far more professional and easier to manage than a zipped folder of separate image files. ShrinkBox handles the conversion with zero loss in sharpness.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🛡️</span> Privacy-First Architecture
              </h3>
              <p>
                Your design work and personal screenshots are your intellectual property. ShrinkBox respects this by performing all conversion **locally in your web browser**. We utilize modern browser APIs to process your pixels entirely on your own CPU and RAM.
              </p>
              <p className="mt-4">
                No data is ever transmitted to our servers for storage or analysis. This provides 100% security for your creative assets, confidential mockups, and sensitive document scans.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Handling Transparency and Alpha Channels</h3>
            <p>
              One of the biggest challenges in PNG to PDF conversion is maintaining transparency. Many basic converters flatten your images against a white background, destroying your carefully crafted soft shadows and transparent layers. ShrinkBox preserves the Alpha channel of your PNGs during the containerization process, ensuring that if you place your PDF into another design tool, those transparent elements remain functional and clean.
            </p>
          </div>

          <div className="bg-brand-light/20 p-8 rounded-3xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-3 italic">Pro Tip: Use for Presentation Mockups</h3>
            <p className="text-sm">
              If you have several UI/UX screens or logo concepts as PNGs, converting them to a single PDF is the fastest way to create a multi-page presentation mockup. This format is easier for clients to review, annotate with comments, and provide final sign-offs on, compared to individual image files.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Branding Files</p>
              <p className="text-xs">Combine logo variants into a single 'Brand Sheet' PDF for your client style guides.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">UI/UX Handoff</p>
              <p className="text-xs">Convert mobile app screens into a logical, paginated walkthrough for developer briefings.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Portfolio Merge</p>
              <p className="text-xs">Turn separate project screenshots into a single, high-fidelity PDF portfolio for job applications.</p>
            </div>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Conversion","Tools"]} />
    </>
  );
}
