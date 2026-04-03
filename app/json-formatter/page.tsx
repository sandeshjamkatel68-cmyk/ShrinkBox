import { Metadata } from "next";
import JsonFormatterWidget from "./JsonFormatterWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["json-formatter"].title,
  description: TOOL_META["json-formatter"].description,
  keywords:    TOOL_META["json-formatter"].keywords,
  openGraph: {
    title:       TOOL_META["json-formatter"].title,
    description: TOOL_META["json-formatter"].description,
    url:         "https://shrink-box.com/json-formatter",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["json-formatter"].title,
    description: TOOL_META["json-formatter"].description,
  },
  alternates: {
    canonical: "/json-formatter",
  },
};

const FAQ_ITEMS = [
  { q: "How do I beautify a messy JSON string?", a: "Simply paste your raw, minified, or unformatted JSON data into the input field and click 'Beautify'. Our engine will instantly add hierarchical indentation and syntax highlighting to make the structure perfectly readable." },
  { q: "Can I use this tool to minify JSON for production?", a: "Yes. ShrinkBox supports both beautification and minification. Use the minify option to remove all unnecessary whitespace and line breaks, reducing the file size of your configuration or data files for faster network transfers." },
  { q: "Does the formatter check for syntax errors?", a: "Absolutely. Our validator will flag any missing commas, mismatched brackets, or trailing commas in real-time, helping you debug your API responses or config files before they cause issues in your application." },
  { q: "Is it safe to paste sensitive API keys or data into the formatter?", a: "Yes. Your data privacy is our priority. ShrinkBox performs all JSON parsing and formatting **locally in your web browser**. Your sensitive data is never transmitted to our servers or stored anywhere, ensuring 100% confidentiality." },
];

export default function JsonFormatterPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["json-formatter"].title}
        description={TOOL_META["json-formatter"].description}
        url={TOOL_META["json-formatter"].url}
        category={TOOL_META["json-formatter"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "JSON Formatter", url: "/json-formatter" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "JSON Formatter", url: "/json-formatter" }]} />
        <ToolHero 
          icon="📦" 
          title="JSON Formatter & Validator Online Free — Developer Toolkit" 
          description="Beautify, minify, and validate JSON data instantly. A secure, browser-based tool for debugging API responses and optimizing nested data structures." 
          badge="Developer · Free · Private" 
        />
        <JsonFormatterWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="JSON Formatter"
        title="JSON Formatter Online Free — The Faster Way to Debug Data"
        description="Stop struggling with unreadable API responses. ShrinkBox's JSON Formatter provides a high-speed, secure environment to transform messy data into clean, hierarchical structures instantly."
        howToSteps={[
          "Paste your raw JSON string or file content into the secure input area.",
          "Our system instantly performs a syntax check to ensure valid data structure.",
          "Select 'Beautify' for readability or 'Minify' for production optimization.",
          "Copy the polished, formatted result instantly to your clipboard with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why every developer needs a browser-side data validator</h3>
            <p>
              When dealing with nested API responses or complex configuration files, a single missing bracket can halt an entire deployment. ShrinkBox provides a lightweight, ad-free environment to quickly inspect and validate your JSON data. Unlike cloud-based formatters that may log your queries, our tool runs entirely on your local machine, making it safe for handling production keys and sensitive user data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Security: Local Data Processing</h3>
            <p>
              Your JSON data stays with you. ShrinkBox respects your privacy by performing the entire formatting and validation process **within your own browser**. No data is ever sent to a server, fulfilling the strictest security requirements for professional software development and system administration.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Large Config Files</h3>
            <p className="text-sm">
              If you're managing large `package.json` or `.env` files, run them through our beautifier to identify redundant keys or structural inconsistencies. A well-formatted JSON file is easier to maintain and dramatically reduces the risk of merge conflicts in collaborative environments.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Tools", "Design"]} />
    </>
  );
}
