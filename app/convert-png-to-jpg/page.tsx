import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import PngToJpgWidget from "@/app/convert-png-to-jpg/PngToJpgWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["convert-png-to-jpg"].title, description: TOOL_META["convert-png-to-jpg"].description, keywords: TOOL_META["convert-png-to-jpg"].keywords,
  openGraph: { title: TOOL_META["convert-png-to-jpg"].title, description: TOOL_META["convert-png-to-jpg"].description, url: "https://shrink-box.com/convert-png-to-jpg", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["convert-png-to-jpg"].title, description: TOOL_META["convert-png-to-jpg"].description },
  alternates: { canonical: "https://shrink-box.com/convert-png-to-jpg" },
};

const FAQ_ITEMS = [
  { q: "What happens to transparency?", a: "PNG images with transparent backgrounds will have transparency replaced with a white background in the JPG output." },
  { q: "Will the file size decrease?", a: "Usually yes. JPG uses lossy compression which produces much smaller file sizes than PNG, especially for photographs." },
  { q: "What quality should I choose?", a: "90% is recommended for most uses. Lower values produce smaller files; higher values preserve more detail." },
];

export default function PngToJpgPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["convert-png-to-jpg"].title} description={TOOL_META["convert-png-to-jpg"].description} url={TOOL_META["convert-png-to-jpg"].url} category={TOOL_META["convert-png-to-jpg"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🔄" title="PNG to JPG Converter" description="Convert PNG images to JPG format quickly. Transparency is replaced with a white background. Adjust quality and download instantly." badge="Free · Instant · No Signup" />
        <PngToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">When to convert PNG to JPG</h2>
        <p>PNG to JPG conversion is useful when you need smaller file sizes for web uploads, email attachments, or social media. JPG files are typically 50-80% smaller than PNGs for photographic content.</p>
        <p>Note: If your image relies on transparency (logos, icons, overlays), keep it as PNG. JPG does not support transparency — any transparent areas will become white.</p>
      </section>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
