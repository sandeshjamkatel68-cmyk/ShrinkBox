import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import UnlockPdfWidget from "./UnlockPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: TOOL_META["unlock-pdf"].title, description: TOOL_META["unlock-pdf"].description, keywords: TOOL_META["unlock-pdf"].keywords,
  openGraph: { title: TOOL_META["unlock-pdf"].title, description: TOOL_META["unlock-pdf"].description, url: "https://shrink-box.com/unlock-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["unlock-pdf"].title, description: TOOL_META["unlock-pdf"].description },
  alternates: {
    canonical: "/unlock-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "Do I need the original password to unlock a PDF?", a: "If the PDF has an 'Open Password' (user password), you must provide it to unlock the file. If it only has 'Permissions' restrictions (owner password) for printing or editing, our tool can often remove those without needing the password." },
  { q: "Is it legal to remove password protection from a PDF?", a: "Removing protection from your own files or documents you have explicit permission to access is perfectly legal. However, bypassing security on files you don't own may violate copyright or privacy laws." },
  { q: "Will the formatting of my PDF change after unlocking?", a: "No. Our unlocking process is non-destructive. It only modifies the security metadata of the file. Your text, high-resolution images, and internal document structure will remain exactly as they were." },
  { q: "Are my unlocked files stored on your servers?", a: "No. For your security, all files processed through our specialized PDF tools are deleted immediately after you download them, ensuring zero data retention." },
];

export default function UnlockPdfPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["unlock-pdf"].title} description={TOOL_META["unlock-pdf"].description} url={TOOL_META["unlock-pdf"].url} category={TOOL_META["unlock-pdf"].category} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Unlock PDF", url: "/unlock-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Unlock PDF", url: "/unlock-pdf" }]} />
        <ToolHero icon="🔓" title="Unlock PDF Online Free — Remove Document Restrictions" description="Gain full access to your secured PDF files. Remove passwords and restrictions on printing, editing, or copying instantly and securely." badge="Free · Instant · Private" />
        <UnlockPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      
      <SEOContent
        toolName="Unlock PDF"
        title="Unlock PDF Online Free — The Secure Way to Access Your Documents"
        description="Stop being locked out of your own files. Our professional-grade PDF unlocking tool provides a fast, reliable way to remove passwords and restrictions directly in your browser."
        howToSteps={[
          "Select or drag & drop your secured PDF file into our encrypted processing area.",
          "If an 'Open Password' is required, enter it into the secure password field.",
          "Our engine will analyze the encryption and generate an unrestricted copy of the file.",
          "Download your unlocked, fully editable PDF document instantly with zero wait time."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Understanding the two types of PDF password protection</h3>
            <p>
              PDF files typically use two levels of security. A **User Password** (Open Password) prevents anyone from even viewing the document. An **Owner Password** (Permissions Password) allows viewing but restricts actions like printing, high-res extraction, or text editing. ShrinkBox is designed to handle both efficiently—once you provide the open password, we strip away all secondary restrictions, giving you full control over your document.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Bank-Level Privacy: Why security matters for unlocked files</h3>
            <p>
              When you're unlocking sensitive documents like bank statements, legal contracts, or medical records, privacy is paramount. Unlike 'cloud' services that might store copies of your unlocked files, ShrinkBox ensures your data is only transient. While some of our advanced logic requires server-side assistance for complex encryption, we never retain your data or passwords. Every trace of your transaction is purged the moment you finish your download.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Check Document Integrity</h3>
            <p className="text-sm">
              Some older PDF viewers might still show 'Secured' in the title bar after unlocking if they rely on cached file metadata. For the best result, open your new unlocked file in a modern browser like Chrome or Edge—you'll see that all printing and editing menus are now fully active.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
