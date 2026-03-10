import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ShrinkBox",
  description: "Get in touch with the ShrinkBox team. Report issues, ask questions, or send feedback.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-10">
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">Contact</span>
        <h1 className="text-4xl font-bold mt-4 mb-3">Get in touch</h1>
        <p className="text-[var(--text-muted)] text-lg">
          Something not working? Have feedback? We read every message.
        </p>
      </div>

      {/* Contact options */}
      <div className="grid gap-4 mb-12">
        {[
          {
            icon: "🐛",
            title: "Report a bug",
            desc: "Something broken or not compressing correctly?",
            email: "bugs@shrinkbox.io",
            subject: "Bug Report",
          },
          {
            icon: "💡",
            title: "Feature request",
            desc: "Want us to support a new file type or feature?",
            email: "hello@shrinkbox.io",
            subject: "Feature Request",
          },
          {
            icon: "🤝",
            title: "Business or partnership",
            desc: "API access, white-label, or advertising enquiries.",
            email: "business@shrinkbox.io",
            subject: "Business Enquiry",
          },
          {
            icon: "🔒",
            title: "Privacy or legal",
            desc: "Data concerns, DMCA, or legal questions.",
            email: "legal@shrinkbox.io",
            subject: "Legal / Privacy",
          },
        ].map((item) => (
          <a
            key={item.title}
            href={`mailto:${item.email}?subject=${encodeURIComponent(item.subject)}`}
            className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 hover:border-[var(--brand)]/40 transition-colors"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <span className="text-2xl mt-0.5">{item.icon}</span>
            <div>
              <p className="font-medium text-[var(--text)]">{item.title}</p>
              <p className="text-sm text-[var(--text-muted)] mt-0.5">{item.desc}</p>
              <p className="text-xs text-[var(--brand)] mt-1">{item.email}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Response time note */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-5 py-4 text-sm text-[var(--text-muted)]">
        <p className="font-medium text-[var(--text)] mb-1">Response time</p>
        <p>We typically respond within 1–2 business days. For urgent issues, include as much detail as possible — file type, file size, browser, and what you expected to happen.</p>
      </div>
    </div>
  );
}
