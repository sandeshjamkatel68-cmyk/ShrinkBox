import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import ProtectPdfWidget from "./ProtectPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["protect-pdf"].title,
  description: TOOL_META["protect-pdf"].description,
  keywords:    TOOL_META["protect-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["protect-pdf"].title,
    description: TOOL_META["protect-pdf"].description,
    url:         "https://shrink-box.com/protect-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["protect-pdf"].title,
    description: TOOL_META["protect-pdf"].description,
  },
  alternates: {
    canonical: "/protect-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "What kind of protection does this tool add to my PDF?", a: "Currently, our tool adds a high-visibility 'CONFIDENTIAL' watermark and protection marker to every page of your document. This is ideal for visually marking sensitive files before sharing them in a corporate or legal environment." },
  { q: "Is this the same as 256-bit AES encryption?", a: "No. This tool provides 'Soft Protection' through visual marking and metadata tagging. For full hardware-level encryption that requires a password to even open the file, we recommend professional software like Adobe Acrobat Pro." },
  { q: "Can I choose my own custom watermark text?", a: "This specific security tool uses a standardized 'Confidential' stamp for speed and compliance. If you need custom text (like your name or business), please use our 'Watermark Image' or 'Add Text to PDF' tools." },
  { q: "Is my sensitive document uploaded to a server?", a: "Absolutely not. ShrinkBox processes your PDFs **locally in your web browser**. Your sensitive financial, legal, or personal documents never leave your machine, ensuring 100% data sovereignty." },
];

export default function ProtectPdfPage() {
  return (
    <>
      <ToolSchema 
        name={TOOL_META["protect-pdf"].title} 
        description={TOOL_META["protect-pdf"].description} 
        url={TOOL_META["protect-pdf"].url} 
        category={TOOL_META["protect-pdf"].category} 
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Protect PDF", url: "/protect-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Protect PDF", url: "/protect-pdf" }]} />
        <ToolHero 
          icon="🔒" 
          title="Protect PDF Online Free — Secure Confidential Marking" 
          description="Add a high-visibility 'Confidential' watermark and protection markers to your PDF instantly. 100% private processing—your sensitive files never leave your device." 
          badge="Free · Secure · Private" 
        />
        <ProtectPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Protect PDF"
        title="Protect PDF Online Free — Secure Visual Branding and Security Marking"
        description="Establishing document confidentiality shouldn't require complex software. ShrinkBox provides a fast, browser-based way to mark your sensitive PDFs as protected before they travel across the web."
        howToSteps={[
          "Select or drag & drop your sensitive PDF into the secure local processing zone.",
          "Our system will instantly analyze the page structure and prepare the security overlay.",
          "Check the processing status as we embed binary 'Confidential' markers into every page.",
          "Download your protected, high-fidelity PDF instantly with zero server latency."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why visual protection is essential for modern businesses</h3>
            <p>
              In a world where documents are frequently screenshotted or printed, digital-only password protection isn't always enough. Adding a persistent visual 'Confidential' watermark ensures that if a document is ever leaked or shared improperly, its sensitive status is immediately apparent to any viewer. ShrinkBox automates this process, stamping your legal, financial, and strategy documents with professional security markers in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Total Data Sovereignty: Local PDF Engineering</h3>
            <p>
              Your sensitive documents are your most valuable business intelligence. 'Cloud' PDF tools require you to hand over your data to an external server, which can be a massive compliance risk. ShrinkBox uses **advanced local PDF-lib technology** to perform all document engineering directly on your computer. Your files never touch our servers, fulfilling even the strictest IT security requirements.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use Before Sending to Clients</h3>
            <p className="text-sm">
              Before sending a draft proposal or a sensitive invoice, run it through this tool. The visual 'Confidential' marker signals professionalism and reminds the recipient that the contents are restricted and have a high level of priority.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
