import { Metadata } from "next";
import HeicToJpgWidget from "./HeicToJpgWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["heic-to-jpg"].title,
  description: TOOL_META["heic-to-jpg"].description,
  keywords:    TOOL_META["heic-to-jpg"].keywords,
  openGraph: {
    title:       TOOL_META["heic-to-jpg"].title,
    description: TOOL_META["heic-to-jpg"].description,
    url:         "https://shrink-box.com/heic-to-jpg",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["heic-to-jpg"].title,
    description: TOOL_META["heic-to-jpg"].description,
  },
  alternates: {
    canonical: "/heic-to-jpg",
  },
};

const FAQ_ITEMS = [
  { q: "What is a HEIC file and why do I need to convert it?", a: "HEIC (High Efficiency Image Container) is Apple's modern image format for iPhone photos. While it saves space, it often won't open on Windows, Android, or many web platforms. Converting to JPG ensures your photos are universally viewable and ready for sharing." },
  { q: "Is there any quality loss when converting from HEIC to JPG?", a: "Transcoding from one compressed format to another always involves a tiny change, but our professional transcoder uses high-bitrate parameters locally in your browser to ensure the resulting JPG looks indistinguishable from your original iPhone photo." },
  { q: "Can I convert multiple HEIC photos at once?", a: "Currently, our tool supports single-image processing to ensure maximum stability and speed in the web browser. For large libraries, we recommend processing your essential shots one by one for the highest fidelity." },
  { q: "Are my private iPhone photos uploaded to a server?", a: "No. Your privacy is paramount. ShrinkBox uses advanced WebAssembly modules to perform the conversion **entirely inside your web browser**. Your photos never leave your device, ensuring total security for your personal memories." },
];

export default function HeicToJpgPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["heic-to-jpg"].title}
        description={TOOL_META["heic-to-jpg"].description}
        url={TOOL_META["heic-to-jpg"].url}
        category={TOOL_META["heic-to-jpg"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "HEIC to JPG", url: "/heic-to-jpg" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "HEIC to JPG", url: "/heic-to-jpg" }]} />
        <ToolHero 
          icon="🍏" 
          title="Convert HEIC to JPG Online Free — iPhone Photo Transcoder" 
          description="Instantly turn your Apple iPhone HEIC/HEIF photos into standard, universally compatible JPG files. Fast, 100% private, and zero uploads required." 
          badge="HEIC → JPG · Free · Private" 
        />
        <HeicToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="HEIC to JPG"
        title="Convert HEIC to JPG Online Free — Universal Compatibility for iPhone Photos"
        description="Don't let modern formats slow you down. ShrinkBox provides the most secure way to convert your Apple HEIC files into high-quality JPEGs directly in your browser."
        howToSteps={[
          "Select or drag & drop your Apple HEIC photo into the secure local converter.",
          "Our system will instantly initialize the local WebAssembly transcoding engine.",
          "Check the processing status as we transform the high-efficiency data into a standard JPG.",
          "Download your universally compatible, high-fidelity JPG file instantly."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">The challenge of the HEIC format</h3>
            <p>
              Apple's adoption of the HEIC format was a major step forward for mobile storage, allowing iPhones to capture high-quality photos at half the file size of a JPG. However, the rest of the world hasn't caught up. Whether you're trying to view a photo on a Windows PC, edit it in legacy software, or upload it to a web portal, 'File format not supported' is a common frustration. Our HEIC to JPG tool removes this friction instantly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Security: Local Browser-Based Transcoding</h3>
            <p>
              Your personal photos are private. Traditional 'cloud' converters require you to send your data to an external server, which can be slow and poses a massive privacy risk. ShrinkBox utilizes **cutting-edge WebAssembly technology** to perform the heavy transcoding math directly on your own computer. Your photos never touch our servers, giving you total peace of mind.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Social Media Uploads</h3>
            <p className="text-sm">
              While some major social media apps now support HEIC, many web versions and smaller platforms still struggle with it. Converting to a standard 90% quality JPG ensures your photo looks exactly as intended no matter where you post it.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats", "Images"]} />
    </>
  );
}
