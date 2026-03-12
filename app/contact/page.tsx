import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ShrinkBox — Support, Feedback & Business Enquiries",
  description:
    "Contact ShrinkBox for support, bug reports, feature requests, business enquiries, or privacy questions. We read every message and aim to respond quickly.",
  keywords: [
    "contact ShrinkBox",
    "ShrinkBox support",
    "report bug ShrinkBox",
    "ShrinkBox feedback",
    "ShrinkBox contact page",
    "business enquiry ShrinkBox",
    "privacy questions ShrinkBox",
  ],
  alternates: {
    canonical: "https://shrink-box.com/contact",
  },
  openGraph: {
    title: "Contact ShrinkBox — Support, Feedback & Business Enquiries",
    description:
      "Get in touch with ShrinkBox for support, bug reports, feature requests, business enquiries, or privacy questions.",
    url: "https://shrink-box.com/contact",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ShrinkBox — Support, Feedback & Business Enquiries",
    description:
      "Contact the ShrinkBox team for help, feedback, partnerships, or privacy-related questions.",
  },
};

const CONTACT_OPTIONS = [
  {
    icon: "🐛",
    title: "Report a bug",
    desc: "Something is broken or a file is not processing correctly? Let us know what happened.",
    email: "sandeshjamkatel68@gmail.com",
    subject: "Bug Report",
  },
  {
    icon: "💡",
    title: "Feature request",
    desc: "Want a new file type, converter, or tool added to ShrinkBox?",
    email: "sandeshjamkatel68@gmail.com",
    subject: "Feature Request",
  },
  {
    icon: "🤝",
    title: "Business or partnership",
    desc: "Reach out for API access, white-label use, partnerships, or advertising enquiries.",
    email: "sandeshjamkatel68@gmail.com",
    subject: "Business Enquiry",
  },
  {
    icon: "🔒",
    title: "Privacy or legal",
    desc: "For data concerns, legal issues, takedown requests, or privacy-related questions.",
    email: "sandeshjamkatel68@gmail.com",
    subject: "Legal / Privacy",
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <section className="mb-10">
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">
          Contact
        </span>

        <h1 className="text-4xl font-bold mt-4 mb-3">Get in touch</h1>

        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
          Have a question, found a bug, or want to suggest a new feature? You can contact
          the ShrinkBox team here. We read every message and use feedback to keep improving
          the tools.
        </p>
      </section>

      <section className="mb-8">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
          <h2 className="text-lg font-semibold text-[var(--text)] mb-2">
            What you can contact us about
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox support includes bug reports, file-processing issues, feature
            requests, partnership opportunities, and privacy or legal questions. Choose
            the contact option below that best matches your message.
          </p>
        </div>
      </section>

      <section className="grid gap-4 mb-12" aria-label="Contact options">
        {CONTACT_OPTIONS.map((item) => (
          <a
            key={item.title}
            href={`mailto:${item.email}?subject=${encodeURIComponent(item.subject)}`}
            className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 hover:border-[var(--brand)]/40 transition-colors"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <span className="text-2xl mt-0.5" aria-hidden="true">
              {item.icon}
            </span>

            <div>
              <p className="font-medium text-[var(--text)]">{item.title}</p>
              <p className="text-sm text-[var(--text-muted)] mt-0.5">{item.desc}</p>
              <p className="text-xs text-[var(--brand)] mt-1">{item.email}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-5 py-4 text-sm text-[var(--text-muted)]">
        <h2 className="font-medium text-[var(--text)] mb-1">Response time</h2>
        <p className="leading-relaxed">
          We typically respond within 1–2 business days. For faster help with technical
          issues, include useful details such as file type, approximate file size, browser,
          device, and what you expected to happen.
        </p>
      </section>
    </main>
  );
}