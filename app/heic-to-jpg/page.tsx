import type { Metadata } from "next";
import HeicToJpgWidget from "./HeicToJpgWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

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
    canonical: `https://shrink-box.com/heic-to-jpg`,
  },
};

const FAQ_ITEMS = [
  { q: "What is a HEIC file?", a: "HEIC (High Efficiency Image Container) is Apple's modern image format that provides high quality at small file sizes. However, it often doesn't open on Windows or Android devices easily." },
  { q: "Will converting HEIC to JPG lose quality?", a: "We use high-quality transcoding parameters to ensure the resulting JPG looks practically identical to your original HEIC photo, while making it universally compatible." },
  { q: "Are my photos sent to a server?", a: "No. ShrinkBox uses WebAssembly to convert your HEIC photos directly inside your web browser. Your private photos never leave your device." },
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
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🍏" 
          title="Convert HEIC to JPG" 
          description="Instantly turn Apple iPhone HEIC/HEIF photos into standard JPG files. Fast, private, and zero upload." 
          badge="HEIC → JPG · Free" 
        />
        <HeicToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Open iPhone Photos Anywhere</h2>
        <p>
          HEIC files are great for saving storage on your iPhone, but they can be a nightmare to share with friends on Windows or upload to websites. Our HEIC to JPG converter removes the friction by transcoding these modern files into the universally supported JPG format.
        </p>
        <p>
          Unlike other converters that require you to upload your personal photos to their cloud, ShrinkBox runs entirely in your browser's RAM. We use safe, local WebAssembly modules to process the binary image data on your machine, ensuring your privacy is never compromised.
        </p>
      </section>

      <RelatedGuides tags={["Formats", "Images"]} />
    </>
  );
}
