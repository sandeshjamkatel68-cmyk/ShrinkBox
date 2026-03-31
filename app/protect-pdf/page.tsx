import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import ProtectPdfWidget from "./ProtectPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["protect-pdf"].title, description: TOOL_META["protect-pdf"].description, keywords: TOOL_META["protect-pdf"].keywords,
  openGraph: { title: TOOL_META["protect-pdf"].title, description: TOOL_META["protect-pdf"].description, url: "https://shrink-box.com/protect-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["protect-pdf"].title, description: TOOL_META["protect-pdf"].description },
  alternates: { canonical: "https://shrink-box.com/protect-pdf" },
};

const FAQ_ITEMS = [
  { q: "What type of protection does this add?", a: "This tool adds a CONFIDENTIAL watermark to every page of your PDF. For full AES-256 password encryption, use Adobe Acrobat Pro." },
  { q: "Can someone remove the watermark?", a: "The watermark is embedded into the PDF pages directly. While it's not encryption-level security, it clearly marks the document as protected." },
  { q: "What makes a strong PDF password?", a: "Use at least 8 characters with a mix of letters, numbers, and symbols. Avoid obvious words like 'password123'." },
  { q: "Can I unlock the PDF later?", a: "Yes — use our Unlock PDF tool at shrink-box.com/unlock-pdf with the password you set." },
];

export default function ProtectPdfPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["protect-pdf"].title} description={TOOL_META["protect-pdf"].description} url={TOOL_META["protect-pdf"].url} category={TOOL_META["protect-pdf"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🔒" title="Protect PDF with Password" description="Add a confidential watermark and protection marker to your PDF. Enter a password and download the protected file instantly." badge="Free · Secure · No Signup" />
        <ProtectPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How PDF protection works</h2>
        <p>Our protect tool uses pdf-lib to add a CONFIDENTIAL watermark to every page of your PDF document. This visually marks the document as protected and indicates that it should not be shared without authorization.</p>
        <p>For enterprise-level security requiring AES-256 encryption, we recommend using Adobe Acrobat Pro or similar professional PDF software. Our tool is ideal for quickly marking documents as confidential before sharing.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
