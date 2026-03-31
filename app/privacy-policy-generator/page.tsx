import type { Metadata } from "next";
import LegalGeneratorWidget from "@/app/privacy-policy-generator/LegalGeneratorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

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
    canonical: `https://shrink-box.com/privacy-policy-generator`,
  },
};

const FAQ_ITEMS = [
  { q: "Is this legal document binding?", a: "Our generator provide standard templates based on common web practices. While they cover the requirements for most small websites and apps, we recommend having a legal professional review them if you handle sensitive financial or health data." },
  { q: "Is the generator free?", a: "Yes. ShrinkBox provides these legal templates 100% for free with no forced attribution or hidden costs." },
  { q: "Can I generate Terms of Service too?", a: "Yes. Our tool allows you to toggle between a Privacy Policy and Terms of Service (TOS) instantly using the same business information." },
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
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🛡️" 
          title="Free Legal Document Generator" 
          description="Protect your website and comply with GDPR/CCPA. Generate custom Privacy Policies and Terms of Service in seconds." 
          badge="Legal · Free" 
        />
        <LegalGeneratorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Compliance Made Simple</h2>
        <p>
          Creating a privacy policy is a legal requirement in many jurisdictions (like the EU and California) if your website collects any data—even just basic cookies or analytics. Hiring a lawyer to draft these documents can cost hundreds of dollars, which is a barrier for new creators and startups.
        </p>
        <p>
          ShrinkBox offers a fast, accessible alternative. By inputting your basic website information, our generator assembles a robust legal template that covers data collection, user rights, and liability protections. It's safe, private, and helps you stay compliant from day one.
        </p>
      </section>

      <RelatedGuides tags={["Tools", "Business"]} />
    </>
  );
}
