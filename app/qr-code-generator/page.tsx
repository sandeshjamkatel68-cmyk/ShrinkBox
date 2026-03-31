import type { Metadata } from "next";
import QrGeneratorWidget from "./QrGeneratorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["qr-code-generator"].title,
  description: TOOL_META["qr-code-generator"].description,
  keywords:    TOOL_META["qr-code-generator"].keywords,
  openGraph: {
    title:       TOOL_META["qr-code-generator"].title,
    description: TOOL_META["qr-code-generator"].description,
    url:         "https://shrink-box.com/qr-code-generator",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["qr-code-generator"].title,
    description: TOOL_META["qr-code-generator"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/qr-code-generator`,
  },
};

const FAQ_ITEMS = [
  { q: "Are the QR codes permanent?", a: "Yes. Once generated, the QR code is static and will work forever as long as the destination URL or text remains valid." },
  { q: "Can I customize the colors?", a: "Yes. You can change the foreground and background colors of the QR code to match your brand directly in our tool." },
  { q: "Does this tool store my URLs?", a: "No. The QR code generation happens entirely in your browser. We never see or store the data you encode." },
];

export default function QrGeneratorPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["qr-code-generator"].title}
        description={TOOL_META["qr-code-generator"].description}
        url={TOOL_META["qr-code-generator"].url}
        category={TOOL_META["qr-code-generator"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🔳" 
          title="Free QR Code Generator" 
          description="Create custom, high-resolution QR codes for websites, WiFi, or plain text instantly. 100% free with no watermarks." 
          badge="QR Creator · Free" 
        />
        <QrGeneratorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Custom QR Codes for Your Business</h2>
        <p>
          QR codes are essential for modern marketing, allowing users to bridge the gap between physical items and digital content. Whether you need a code for your business card, a restaurant menu, or a social media profile, our tool makes it simple and fast.
        </p>
        <p>
          ShrinkBox stands apart by offering a private, browser-based generator. No tracking, no landing pages, and no expiring links. Just a pure, high-quality image file that you can use anywhere immediately.
        </p>
      </section>

      <RelatedGuides tags={["Design", "Tools"]} />
    </>
  );
}
