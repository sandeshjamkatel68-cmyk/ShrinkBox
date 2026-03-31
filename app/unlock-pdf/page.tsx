import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import UnlockPdfWidget from "./UnlockPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["unlock-pdf"].title, description: TOOL_META["unlock-pdf"].description, keywords: TOOL_META["unlock-pdf"].keywords,
  openGraph: { title: TOOL_META["unlock-pdf"].title, description: TOOL_META["unlock-pdf"].description, url: "https://shrink-box.com/unlock-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["unlock-pdf"].title, description: TOOL_META["unlock-pdf"].description },
  alternates: { canonical: "https://shrink-box.com/unlock-pdf" },
};

const FAQ_ITEMS = [
  { q: "Do I need the password to unlock a PDF?", a: "If the PDF requires a password to open (user password), yes. If it only has printing/editing restrictions (owner password), our tool may be able to remove those restrictions without a password." },
  { q: "Is this legal?", a: "Yes, as long as you own the PDF or have permission from the owner. Removing password protection from files you don't own may violate copyright law." },
  { q: "Will unlocking change the content?", a: "No. The content, formatting, and images remain exactly the same. Only the password restriction is removed." },
];

export default function UnlockPdfPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["unlock-pdf"].title} description={TOOL_META["unlock-pdf"].description} url={TOOL_META["unlock-pdf"].url} category={TOOL_META["unlock-pdf"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🔓" title="Unlock PDF Online" description="Remove restrictions from a password-protected PDF. If it has an open password, enter it below to unlock." badge="Free · Instant · Secure" />
        <UnlockPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How PDF unlocking works</h2>
        <p>PDF files can have two types of passwords: a user password (required to open the file) and an owner password (restricts editing, printing, and copying). Our tool handles both scenarios — enter the password if required, and we'll create an unrestricted copy.</p>
        <p>The unlocked PDF retains all original content, formatting, and embedded media. Your file is processed server-side and deleted immediately after download.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
