import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import AddPageNumbersWidget from "./AddPageNumbersWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["add-page-numbers-pdf"].title,
  description: TOOL_META["add-page-numbers-pdf"].description,
  keywords:    TOOL_META["add-page-numbers-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["add-page-numbers-pdf"].title,
    description: TOOL_META["add-page-numbers-pdf"].description,
    url:         "https://shrink-box.com/add-page-numbers-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["add-page-numbers-pdf"].title,
    description: TOOL_META["add-page-numbers-pdf"].description,
  },
  alternates: {
    canonical: "/add-page-numbers-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "Can I choose where the page numbers appear on the PDF?", a: "Yes. Our tool provides six standard positions: bottom center, bottom right, bottom left, top center, top right, and top left. You can also adjust the font color and size to match your document's branding." },
  { q: "Can I start numbering from a page other than 1?", a: "Definitely. If your PDF is part of a larger series, you can set the starting number to any value (e.g., start at page 15). The system will then increment automatically from that point." },
  { q: "What number formats are supported by the tool?", a: "We support simple integers (1, 2, 3...) as well as 'Page X of Y' formats (e.g., 1 of 20, 2 of 20), which is highly recommended for legal and professional reports." },
  { q: "Are my documents uploaded to a server for numbering?", a: "No. ShrinkBox uses advanced local PDF processing technology. Your documents are numbered **entirely in your web browser**, ensuring that your private information never leaves your computer." },
];

export default function AddPageNumbersPage() {
  return (
    <>
      <ToolSchema 
        name={TOOL_META["add-page-numbers-pdf"].title} 
        description={TOOL_META["add-page-numbers-pdf"].description} 
        url={TOOL_META["add-page-numbers-pdf"].url} 
        category={TOOL_META["add-page-numbers-pdf"].category} 
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Add Page Numbers", url: "/add-page-numbers-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Add Page Numbers", url: "/add-page-numbers-pdf" }]} />
        <ToolHero 
          icon="🔢" 
          title="Add Page Numbers to PDF Online Free — Professional Formatting" 
          description="Instantly number every page of your PDF with total control. Choose positions, formats, and starting numbers—100% private and zero uploads required." 
          badge="Free · Instant · Private" 
        />
        <AddPageNumbersWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Add Page Numbers to PDF"
        title="Add Page Numbers to PDF Online Free — Professional Document Organization"
        description="Navigation is the key to professional documentation. ShrinkBox provides the fastest way to add clear, consistent page numbers to your PDFs directly in your browser."
        howToSteps={[
          "Select or drag & drop your PDF document into the secure local numbering area.",
          "Choose your preferred position (e.g., Bottom Right) and numbering format.",
          "Optionally set a custom starting number if this file is part of a larger series.",
          "Download your perfectly numbered, high-fidelity PDF instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why page numbering is essential for professional PDFs</h3>
            <p>
              Whether you're submitting a legal contract, a corporate report, or a university thesis, page numbers are a non-negotiable requirement. They prevent confusion during physical printing and make it significantly easier for multiple collaborators to reference specific sections during a meeting or review. ShrinkBox automates this tedious task, ensuring that your numbering is perfectly aligned and consistent across every single page.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ultimate Privacy: Your Intellectual Property Stays Local</h3>
            <p>
              Your research papers and business reports should never be 'uploaded' to a third-party server just to be numbered. ShrinkBox utilizes **advanced client-side PDF-lib technology** to perform all numbering logic directly on yourOwn computer. Your files never touch our servers, providing the privacy of a desktop application with the speed of a web tool.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use 'Page X of Y' for Accountability</h3>
            <p className="text-sm">
              For legal documents or contracts, always use the 'Page X of Y' format. This ensures that anyone reading the document knows exactly how many pages are supposed to be there, preventing any accidental loss or removal of critical information.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
