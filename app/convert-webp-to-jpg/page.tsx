import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import WebpToJpgWidget from "./WebpToJpgWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["convert-webp-to-jpg"].title, description: TOOL_META["convert-webp-to-jpg"].description, keywords: TOOL_META["convert-webp-to-jpg"].keywords,
  openGraph: { title: TOOL_META["convert-webp-to-jpg"].title, description: TOOL_META["convert-webp-to-jpg"].description, url: "https://shrink-box.com/convert-webp-to-jpg", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["convert-webp-to-jpg"].title, description: TOOL_META["convert-webp-to-jpg"].description },
  alternates: { canonical: "https://shrink-box.com/convert-webp-to-jpg" },
};

const FAQ_ITEMS = [
  { q: "Why convert WebP to JPG?", a: "Some older software, devices, and websites don't support WebP. Converting to JPG ensures maximum compatibility across all platforms." },
  { q: "Will the quality decrease?", a: "JPG uses lossy compression, so there may be a slight quality reduction vs the original WebP. Use 90-100% quality to minimize any loss." },
  { q: "Can I batch convert multiple WebP files?", a: "Currently this tool handles one file at a time. Upload each file separately to convert." },
];

export default function WebpToJpgPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["convert-webp-to-jpg"].title} description={TOOL_META["convert-webp-to-jpg"].description} url={TOOL_META["convert-webp-to-jpg"].url} category={TOOL_META["convert-webp-to-jpg"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="⚡→📸" title="WebP to JPG Converter" description="Convert WebP images to JPG for maximum compatibility with older software and devices. Adjust quality and download instantly." badge="Free · Instant · No Signup" />
        <WebpToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">When to convert WebP to JPG</h2>
        <p>WebP is Google's modern image format that offers excellent compression, but it's not universally supported. Some image editors, older email clients, and printing services may not accept WebP files — converting to JPG solves this compatibility issue.</p>
        <p>Our converter uses Sharp for fast, high-quality conversion. The output retains the original dimensions while using JPG's widely-compatible format.</p>
      </section>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
