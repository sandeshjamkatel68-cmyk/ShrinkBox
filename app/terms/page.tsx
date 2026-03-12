import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ShrinkBox",
  description:
    "Read the ShrinkBox Terms of Service for the rules, limits, disclaimers, and conditions that apply when using our online file tools.",
  keywords: [
    "ShrinkBox terms of service",
    "ShrinkBox terms",
    "file tool terms of service",
    "online compressor terms",
    "pdf tool terms",
  ],
  alternates: {
    canonical: "https://shrink-box.com/terms",
  },
  openGraph: {
    title: "Terms of Service — ShrinkBox",
    description:
      "Read the rules and conditions for using ShrinkBox online file tools.",
    url: "https://shrink-box.com/terms",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — ShrinkBox",
    description:
      "Review the rules, disclaimers, and usage conditions for ShrinkBox.",
  },
};

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const prohibitedUses = [
    "Upload files containing malware, viruses, or malicious code",
    "Upload files that infringe copyright, trademark, or other intellectual property rights",
    "Attempt to overload the service through automated uploads, bots, scraping, or denial-of-service activity",
    "Attempt to probe, reverse engineer, bypass, or exploit any part of the service",
    "Use the service to process or distribute illegal content",
    "Use the service in a way that interferes with other users or harms our systems",
    "Resell, mirror, or redistribute the service without written permission where required",
  ];

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <section className="mb-10">
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">
          Terms
        </span>

        <h1 className="text-4xl font-bold mt-4 mb-3">Terms of Service</h1>

        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
          These Terms of Service explain the rules and conditions for using ShrinkBox.
          By accessing or using the service, you agree to these terms.
        </p>

        <p className="text-sm text-[var(--text-muted)] mt-4">
          Last updated: {lastUpdated}
        </p>
      </section>

      <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            1. Acceptance of terms
          </h2>
          <p>
            By accessing or using ShrinkBox ("the Service"), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use the
            service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            2. Description of service
          </h2>
          <p>
            ShrinkBox provides online tools for compressing, converting, resizing, merging,
            splitting, and otherwise processing supported image and PDF files. The service
            may be offered for free, with limits, and may change over time.
          </p>
          <p className="mt-3">
            We may modify, suspend, restrict, or discontinue any part of the service at any
            time, with or without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            3. Acceptable use
          </h2>
          <p>You agree to use ShrinkBox only for lawful and proper purposes. You must not:</p>

          <ul className="mt-3 space-y-2">
            {prohibitedUses.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-red-400 shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            4. Your files and responsibility
          </h2>
          <p>
            You retain ownership of the files you upload. By uploading or processing a file
            through ShrinkBox, you represent that you have the right to use that file and
            request the action you are performing.
          </p>

          <ul className="mt-3 space-y-2">
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>You own the file or have permission to use and process it.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>The file does not contain unlawful or prohibited content.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--brand)] shrink-0">→</span>
              <span>
                You are responsible for the legality, accuracy, and suitability of the file
                and its contents.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            5. Limits and fair use
          </h2>
          <p>
            ShrinkBox may apply file limits, rate limits, page limits, batch limits, or
            other restrictions to keep the service reliable and prevent abuse. These limits
            may change at any time.
          </p>
          <p className="mt-3">
            Where specific free-tier limits are shown on the site or inside a tool, those
            operational limits apply at that time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            6. No guarantee of results
          </h2>
          <p>
            ShrinkBox does not guarantee any specific compression ratio, conversion outcome,
            file size reduction, or compatibility result. Outcomes vary depending on file
            type, file quality, source structure, prior optimization, and other technical
            factors.
          </p>
          <p className="mt-3">
            Some files may show minimal improvement, and some operations may not be available
            for certain files.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            7. Availability and service changes
          </h2>
          <p>
            We do not guarantee that the service will always be available, uninterrupted,
            secure, or error-free. Features may be changed, paused, removed, or limited at
            any time for maintenance, security, legal, or business reasons.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            8. Disclaimer of warranties
          </h2>
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY
            KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT,
            TO THE MAXIMUM EXTENT PERMITTED BY LAW.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            9. Limitation of liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHRINKBOX AND ITS OPERATORS SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
            PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, FILES, PROFITS, REVENUE, GOODWILL, OR
            BUSINESS OPPORTUNITY ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE.
          </p>
          <p className="mt-3">
            Always keep backups of important files before uploading, compressing, converting,
            merging, splitting, or otherwise processing them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            10. Termination or restriction
          </h2>
          <p>
            We may suspend, restrict, or block access to the service if we reasonably believe
            you are violating these terms, abusing the platform, creating risk, or causing
            harm to the service or other users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            11. Changes to these terms
          </h2>
          <p>
            We may update these Terms of Service from time to time. When we do, we will
            revise the “Last updated” date at the top of this page. Continued use of the
            service after changes take effect means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            12. Related policies
          </h2>
          <p>
            Your use of ShrinkBox may also be subject to our{" "}
            <Link href="/privacy" className="text-[var(--brand)] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">
            13. Contact
          </h2>
          <p>
            If you have questions about these Terms of Service, contact us at{" "}
            <a
              href="mailto:legal@shrinkbox.io"
              className="text-[var(--brand)] hover:underline"
            >
              legal@shrinkbox.io
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}