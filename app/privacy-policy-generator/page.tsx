import { Metadata } from "next";
import LegalGeneratorWidget from "@/app/privacy-policy-generator/LegalGeneratorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["privacy-policy-generator"].title,
  description: TOOL_META["privacy-policy-generator"].description,
  keywords:    TOOL_META["privacy-policy-generator"].keywords,
  openGraph: {
    title:       TOOL_META["privacy-policy-generator"].title,
    description: TOOL_META["privacy-policy-generator"].description,
    url:         "https://shrink-box.com/privacy-policy-generator",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["privacy-policy-generator"].title,
    description: TOOL_META["privacy-policy-generator"].description,
  },
  alternates: {
    canonical: "/privacy-policy-generator",
  },
};

const FAQ_ITEMS = [
  { q: "Is this legal document legally binding?", a: "Our generator provides standard legal templates based on global data protection patterns (GDPR/CCPA). While they cover the requirements for most standard websites, blogs, and apps, we strongly recommend having a legal professional review the final output if you handle complex financial, health, or adult-only content." },
  { q: "Do I have to pay to use these legal templates?", a: "No. ShrinkBox provides high-quality, professional-grade legal templates 100% for free. We do not require signups, credit cards, or forced attribution links to use the generated policies on your own platforms." },
  { q: "Can I generate Terms of Service (TOS) as well?", a: "Yes. Our integrated generator allows you to switch between a Privacy Policy and Terms of Service (TOS) instantly. All of your business information is preserved between the two, making it easy to create a complete legal suite in minutes." },
  { q: "Is the information I provide for my policy private?", a: "Yes. Your privacy is our priority. ShrinkBox performs the entire text assembly process **locally in your browser**. We never store, sell, or analyze the business names or email addresses you input, ensuring full confidentiality." },
];

export default function PrivacyGeneratorPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["privacy-policy-generator"].title}
        description={TOOL_META["privacy-policy-generator"].description}
        url={TOOL_META["privacy-policy-generator"].url}
        category={TOOL_META["privacy-policy-generator"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy Generator", url: "/privacy-policy-generator" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Privacy Policy Generator", url: "/privacy-policy-generator" }]} />
        <ToolHero 
          icon="🛡️" 
          title="Free Legal Policy Generator Online — GDPR & CCPA Ready" 
          description="Protect your brand and comply with international data laws instantly. Generate professional Privacy Policies and Terms of Service for your website without expensive legal fees." 
          badge="Legal · Free · Secure" 
        />
        <LegalGeneratorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Privacy Policy Generator"
        title="Privacy Policy & TOS Generator Online Free — Start Your Business Safely"
        description="Stop risking your brand's reputation with generic, copied policies. ShrinkBox provides a fast, browser-based way to assemble custom legal documents that protect your liability."
        howToSteps={[
          "Select the type of document you need (Privacy Policy or Terms of Service).",
          "Input your basic business information into the secure local generator fields.",
          "Our system instantly assembles a robust template based on modern web standards.",
          "Copy the polished, HTML or plain-text document instantly to your clipboard."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why every modern website needs custom legal documentation</h3>
            <p>
              In an era of strict data protection laws like GDPR and CCPA, having a clear and accurate privacy policy is no longer optional—it's a legal requirement. Whether you use basic analytics or a contact form, you are collecting user data. ShrinkBox provides an accessible way to bridge the legal gap, giving you a professional-grade starting point that informs your users about their rights and protects your business from unnecessary liability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Legal Assembly</h3>
            <p>
              Your business configurations and legal requirements are sensitive. ShrinkBox respects your privacy by performing the entire document generation process **within your own browser**. Your internal emails and business addresses are never transmitted to our servers, making this the safest way to generate legal templates for new ventures and confidential side projects.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Keep Your Policies Updated</h3>
            <p className="text-sm">
              As you add new tracking pixels, payment processors, or marketing tools to your site, ensure you re-generate your policy to include these third-party processors. Maintaining an up-to-date policy is critical for building trust with your audience and maintaining long-term compliance.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Tools", "Business"]} />
    </>
  );
}
