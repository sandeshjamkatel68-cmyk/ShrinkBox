import { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["convert-jpg-to-png"].title,
  description: TOOL_META["convert-jpg-to-png"].description,
  keywords:    TOOL_META["convert-jpg-to-png"].keywords,
  openGraph: {
    title:       TOOL_META["convert-jpg-to-png"].title,
    description: TOOL_META["convert-jpg-to-png"].description,
    url:         "https://shrink-box.com/convert-jpg-to-png",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-jpg-to-png"].title,
    description: TOOL_META["convert-jpg-to-png"].description,
  },
  alternates: {
    canonical: "/convert-jpg-to-png",
  },
};

const FAQ_ITEMS = [
  { q: "Why would I convert a JPG to a PNG format?", a: "JPG is a lossy format that can show artifacts over time. PNG is lossless and supports transparency. Converting to PNG is ideal for logos, screenshots, and graphics where you need to preserve crisp edges or if you plan to add a transparent background later." },
  { q: "Will converting a JPG to PNG improve its original quality?", a: "No. Since JPG already removed some data during its original compression, converting it to PNG won't 'restore' lost detail. However, it will prevent any *further* quality loss if you continue to edit or resave the image." },
  { q: "Is a PNG file always larger than a JPG?", a: "Yes, in almost all cases. Because PNG uses lossless compression, it stores more data than an equivalent JPEG. Use PNG when quality and transparency are the priority, and use JPG for photos where file size is the main concern." },
  { q: "Are my images kept private during the JPG to PNG conversion?", a: "Absolutely. ShrinkBox is built on a **local-first security model**. The entire conversion from JPG to PNG happens inside your web browser. Your images are never 'uploaded' to a server, ensuring your personal photos and project assets remain 100% private." },
];

export default function JpgToPngPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-jpg-to-png"].title}
        description={TOOL_META["convert-jpg-to-png"].description}
        url={TOOL_META["convert-jpg-to-png"].url}
        category={TOOL_META["convert-jpg-to-png"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "JPG to PNG", url: "/convert-jpg-to-png" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "JPG to PNG", url: "/convert-jpg-to-png" }]} />
        <ToolHero 
          icon="🔄" 
          title="Convert JPG to PNG Online Free — Instant Lossless Transcoding" 
          description="Transform your compressed JPEG images into high-fidelity PNG files instantly. A secure, professional-grade tool for designers and developers who need crisp edges and lossless quality." 
          badge="JPG → PNG · Free · Private" 
        />
        <ConvertImageWidget defaultTarget="png" allowedSources=".jpg,.jpeg" />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="JPG to PNG"
        title="JPG to PNG Online Free — Protect Your Visual Fidelity"
        description="JPEG artifacts can ruin a professional design. ShrinkBox provides a high-speed, secure way to stabilize your graphics by converting them into the lossless PNG format instantly."
        howToSteps={[
          "Select or drag & drop your JPG/JPEG image into the secure local converter.",
          "Our system instantly analyzes the pixel grid and prepares for lossless transcoding.",
          "Check the generated PNG preview for edge clarity and color accuracy.",
          "Download your high-fidelity, uncompressed PNG file instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">When to move from JPG to PNG</h3>
            <p>
              JPG is great for sharing photos quickly, but every time you save a JPG, it loses a little more detail. PNG (Portable Network Graphics) is a lossless format, meaning it preserves every single pixel exactly as it appears. If you've received a logo or a diagram in JPG format and you need to perform further edits, converting it to PNG first is a 'pro move' that stops any further compression rot and prepares the file for professional design environments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ultimate Privacy: Your Graphics Never Leave Your Side</h3>
            <p>
              Your project assets and personal screenshots are your business. Most online converters require you to 'upload' your files to their cloud, where they could be seen or stored. ShrinkBox performs the entire JPG to PNG transition **entirely within your browser**. This provides the ultimate level of security and bypasses the slow upload times of traditional tools.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Prepping for Transparency</h3>
            <p className="text-sm">
              While converting a JPG to PNG won't automatically make the background transparent, it is the necessary first step. Once you have your PNG file, you can easily use an image editor to remove the background, a process that isn't possible with the standard JPG format.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
