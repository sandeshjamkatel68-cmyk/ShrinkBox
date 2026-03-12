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
    canonical: "https://shrink-box.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy — ShrinkBox",
    description:
      "Learn how ShrinkBox handles uploaded files, analytics, cookies, and security.",
    url: "https://shrink-box.com/privacy",
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
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">
          Privacy
        </span>
        <h1 className="text-4xl font-bold mt-4 mb-3">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
          Your privacy matters to us. This page explains what ShrinkBox collects, how it is
          used, and how uploaded files are handled when you use our tools.
        </p>
        <p className="text-sm text-[var(--text-muted)] mt-4">
          Last updated: {lastUpdated}
        </p>
      </section>

      <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Overview</h2>
          <p>
            ShrinkBox ("we", "our", or "us") is committed to protecting your privacy. This
            Privacy Policy explains what information we may collect, how we use it, and how
            we handle files uploaded to our tools. By using ShrinkBox, you agree to this
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            Files you upload
          </h2>
          <p>
            When you upload a file for compression, conversion, merging, or other supported
            processing, the file is transmitted to our systems over a secure connection and
            processed temporarily in order to provide the requested result.
          </p>

          <ul className="mt-3 space-y-2">
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>Your file is sent securely using HTTPS.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                Files are processed only for the purpose of completing the requested tool
                action.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                Uploaded files and generated outputs are stored only temporarily and are
                automatically removed after processing or after a limited retention period.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                We do not use your files to train models, build profiles, or analyze file
                contents for advertising purposes.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                We do not intentionally share uploaded file contents with third parties
                except where needed to operate the service, comply with law, or protect the
                service from abuse.
              </span>
            </li>
          </ul>

          <p className="mt-3">
            If you want the policy to state an exact deletion time such as “within 10
            minutes,” only include that if your infrastructure reliably follows that rule in
            practice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            Information we collect automatically
          </h2>
          <p>
            Like most websites, ShrinkBox may collect limited technical information
            automatically when you visit or use the service.
          </p>

          <ul className="mt-3 space-y-2">
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                <strong className="text-[var(--text)]">IP address</strong> — used for
                security, rate limiting, abuse prevention, and basic operational logging.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                <strong className="text-[var(--text)]">Browser and device data</strong> —
                such as browser type, operating system, screen size, and device category.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                <strong className="text-[var(--text)]">Usage data</strong> — such as pages
                visited, tools used, and general interaction events.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                <strong className="text-[var(--text)]">Referral data</strong> — such as the
                page or source that led you to ShrinkBox.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Cookies and local storage</h2>
          <p>
            ShrinkBox may use a limited number of cookies or browser storage technologies to
            keep the service working properly and improve user experience.
          </p>

          <ul className="mt-3 space-y-2">
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                <strong className="text-[var(--text)]">Preference storage</strong> — such as
                theme selection or interface preferences.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                <strong className="text-[var(--text)]">Analytics technologies</strong> — if
                enabled, these help us understand how the website is used and which tools are
                most useful.
              </span>
            </li>
          </ul>

          <p className="mt-3">
            We do not use cookies to read your uploaded files or personal documents.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Analytics</h2>
          <p>
            We may use analytics tools to understand overall traffic, popular pages, tool
            usage, device types, and general performance of the service. Analytics data helps
            us improve ShrinkBox, fix issues, and prioritize features.
          </p>
          <p className="mt-3">
            Analytics information is generally used in aggregated form and is not intended to
            identify you personally.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Advertising</h2>
          <p>
            ShrinkBox may display ads through third-party advertising providers such as
            Google AdSense or similar services. These providers may use cookies or related
            technologies to deliver ads, measure ad performance, or personalize content based
            on their own policies.
          </p>
          <p className="mt-3">
            You can manage ad personalization settings through your Google ad settings or the
            relevant controls provided by the advertising platform you use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Data security</h2>
          <p>
            We use reasonable technical and organizational measures to protect ShrinkBox and
            the data processed through it. This includes HTTPS encryption and access controls
            designed to reduce unauthorized access, misuse, or abuse.
          </p>
          <p className="mt-3">
            No system can guarantee absolute security, but we work to keep the service as
            safe and reliable as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Third-party services</h2>
          <p>
            ShrinkBox may rely on third-party infrastructure or service providers for
            hosting, analytics, advertising, monitoring, or other operational needs. These
            providers may process limited technical data as necessary to operate the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            Children&apos;s privacy
          </h2>
          <p>
            ShrinkBox is not intended for children under 13, and we do not knowingly collect
            personal information from children. If you believe a child has provided personal
            information through the service, please contact us so we can review and address
            the issue.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Your choices</h2>
          <p>
            You can stop using the service at any time, avoid uploading sensitive files if
            you are uncomfortable, and control certain browser-level settings such as cookies,
            storage, and ad personalization.
          </p>
          <p className="mt-3">
            If you contact us with a privacy concern, we will review it and respond within a
            reasonable time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            Changes to this policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise
            the “Last updated” date at the top of this page. Continued use of ShrinkBox after
            changes take effect means you accept the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us by email at{" "}
            <a
              href="mailto:privacy@shrinkbox.io"
              className="text-[var(--brand)] hover:underline"
            >
              privacy@shrinkbox.io
            </a>{" "}
            or through our{" "}
            <Link href="/contact" className="text-[var(--brand)] hover:underline">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}