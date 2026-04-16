import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ShrinkBox",
  description:
    "Read the ShrinkBox privacy policy to learn how we handle uploaded files, analytics, cookies, and website security.",
  keywords: [
    "ShrinkBox privacy policy",
    "ShrinkBox file privacy",
    "file upload privacy",
    "online file tool privacy policy",
    "image compressor privacy",
    "pdf tool privacy policy",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — ShrinkBox",
    description:
      "Learn how ShrinkBox handles uploaded files, analytics, cookies, and security.",
    url: "/privacy",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — ShrinkBox",
    description:
      "Read the ShrinkBox privacy policy and learn how your files and basic usage data are handled.",
  },
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <section className="mb-10">
        <span className="text-xs font-medium text-brand border border-brand/30 rounded-full px-3 py-1">
          Privacy
        </span>
        <h1 className="text-4xl font-bold mt-4 mb-3">Privacy Policy</h1>
        <p className="text-muted text-lg leading-relaxed">
          Your privacy matters to us. This page explains what ShrinkBox collects, how it is
          used, and how uploaded files are handled when you use our tools.
        </p>
        <p className="text-sm text-muted mt-4">
          Last updated: {lastUpdated}
        </p>
      </section>

      <div className="space-y-10 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Overview</h2>
          <p>
            ShrinkBox ("we", "our", or "us") is a free online platform providing file optimization tools. We are committed to digital transparency and the protection of your personal data. This policy outlines how we handle files, analytics, and advertising data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            2. File Privacy & Security
          </h2>
          <p>
            ShrinkBox uses a "Browser-First" architecture. Many of our tools process files entirely within your web browser using client-side JavaScript, meaning your files never leave your device.
          </p>

          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="text-brand shrink-0 font-bold">✓</span>
              <span><strong className="text-foreground">Zero Retention:</strong> For tools requiring server-side processing, files are moved via encrypted HTTPS and automatically deleted from our servers within 60 minutes of processing.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand shrink-0 font-bold">✓</span>
              <span><strong className="text-foreground">No File Access:</strong> We do not manually review, index, or share your file contents with any third party.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand shrink-0 font-bold">✓</span>
              <span><strong className="text-foreground">No Model Training:</strong> Your files are never used to train AI or machine learning models.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            3. Information We Collect
          </h2>
          <p>
            We do not require user accounts. However, we collect limited technical data to maintain site performance and security:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="text-brand shrink-0 font-bold">→</span>
              <span><strong className="text-foreground">Log Data:</strong> IP addresses (anonymized), browser types, and timestamps are logged for security and rate-limiting purposes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand shrink-0 font-bold">→</span>
              <span><strong className="text-foreground">Usage Analytics:</strong> We use Google Analytics 4 (GA4) to understand which tools are popular and how users interact with our blog. This data is aggregated and does not identify individuals.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookie & Advertising Policy</h2>
          <p>
            ShrinkBox partners with third-party vendors, including Google, to serve ads based on a user&apos;s prior visits to this website or other websites.
          </p>
          <div className="bg-surface-muted/50 p-5 rounded-2xl mt-4 border border-border">
            <p className="text-sm font-bold text-foreground mb-2 italic">Important for Users:</p>
            <ul className="text-sm space-y-2">
              <li>• Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet.</li>
              <li>• Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand underline">Ads Settings</a>.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. GDPR Compliance (EEA Users)</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR), including:
          </p>
          <ul className="mt-3 space-y-1 text-sm list-disc pl-5">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object to our processing of your personal data.</li>
            <li>The right of restriction.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. CCPA Compliance (California Users)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California residents have the right to know what personal data is being collected, whether it is sold or disclosed, and to whom. ShrinkBox <strong className="text-foreground">does not sell</strong> personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Information</h2>
          <p>
            If you have any questions regarding this Privacy Policy or our data handling practices, please contact us:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a href="mailto:hello@shrink-box.com" className="text-brand font-bold hover:underline">
              hello@shrink-box.com
            </a>
            <Link href="/contact" className="text-muted hover:text-brand underline">
              Official Contact Form
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}