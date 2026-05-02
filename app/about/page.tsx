import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ShrinkBox — Free File Compression & Conversion Tools",
  description:
    "Learn who built ShrinkBox, why it exists, and how it works. A privacy-first, no-signup toolkit for compressing images and PDFs — built by developers who understand web performance.",
  alternates: {
    canonical: "/about",
  },
};

const STATS = [
  { num: "30+",  label: "Free Tools" },
  { num: "0",    label: "Required Signups" },
  { num: "100%", label: "Browser-Safe Processing" },
  { num: "0s",   label: "File Retention After Download" },
];

const TEAM = [
  {
    name:  "Sandesh Jamkatel",
    role:  "Founder & Developer",
    bio:   "Full-stack developer with a focus on web performance. Built ShrinkBox after getting frustrated with slow, ad-heavy file tools that required accounts just to compress an image. When I'm not coding, I write about web optimization, core web vitals, and developer productivity.",
    expertise: ["Next.js", "Web Performance", "Image Optimization", "PDF Processing"],
    initials: "SJ",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-bold text-brand uppercase tracking-widest bg-[var(--brand-light)] px-3 py-1 rounded-full border border-brand/10">
          About ShrinkBox
        </span>
        <h1 className="text-4xl font-extrabold mt-6 mb-5 tracking-tight leading-tight">
          Professional file tools.<br />
          <span className="text-brand">No signup. No friction. No cost.</span>
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          ShrinkBox was born from a simple frustration: the best file compression tools were either behind paywalls, required creating accounts, or buried under layers of ads. We built the toolkit we always wanted — fast, private, and genuinely free.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {STATS.map(({ num, label }) => (
          <div key={label} className="rounded-2xl border border-border bg-surface-muted p-5 text-center">
            <div className="text-3xl font-black text-brand mb-1">{num}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted">{label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-14 text-muted leading-relaxed">

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p>
            Basic file optimization should be like a calculator — a fundamental utility that is free for everyone, everywhere, always. ShrinkBox provides professional-grade image compression, PDF tools, and file converters at no cost and with no account required.
          </p>
          <p className="mt-4">
            We believe that whether you're a student compressing a paper for submission, a blogger optimizing images for WordPress, or a developer converting image formats for web performance — you deserve tools that respect your time and your privacy.
          </p>
        </section>

        {/* What We Build */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">What ShrinkBox Does</h2>
          <p>
            ShrinkBox is a comprehensive suite of 30+ digital utilities covering three main areas:
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "🖼️",
                title: "Image Tools",
                desc: "Compress JPG, PNG, WebP. Resize, crop, convert formats. Bulk compress up to 10 images. Add watermarks. Convert to grayscale.",
              },
              {
                icon: "📄",
                title: "PDF Tools",
                desc: "Compress, merge, split, rotate, protect, unlock. Add watermarks and page numbers. Convert PDF to JPG or Word.",
              },
              {
                icon: "💻",
                title: "Developer Utilities",
                desc: "OCR text extraction, QR code generator, favicon generator, JSON formatter, Base64 encoder/decoder, color palette picker.",
              },
            ].map((cat) => (
              <div key={cat.title} className="p-5 rounded-2xl border border-border bg-surface">
                <div className="text-2xl mb-3">{cat.icon}</div>
                <p className="font-bold text-foreground mb-2 text-sm">{cat.title}</p>
                <p className="text-xs leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Uses It */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Who This Is Built For</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Bloggers & Content Creators",
                desc: "Optimize images for WordPress, ghost, or any CMS. Faster pages mean better Google rankings and lower bounce rates.",
              },
              {
                title: "Students & Job Seekers",
                desc: "Convert assignments to PDF, compress files under email size limits, prepare portfolios, and meet strict upload requirements.",
              },
              {
                title: "Web Developers & Designers",
                desc: "Convert to WebP for Core Web Vitals gains. Generate favicons, encode Base64, format JSON, and batch compress assets.",
              },
              {
                title: "Small Business Owners",
                desc: "Compress PDFs for email, protect documents with passwords, add watermarks to files, and create QR codes for cards and menus.",
              },
            ].map((p) => (
              <div key={p.title} className="p-5 rounded-2xl border border-border bg-surface">
                <p className="font-bold text-foreground mb-2 text-sm">{p.title}</p>
                <p className="text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Technical Architecture */}
        <section className="bg-surface-muted p-8 rounded-3xl border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Privacy & Security Architecture</h2>
          <p className="mb-6">
            Your files are your property. We've designed ShrinkBox from the ground up to ensure your data remains private and is never misused.
          </p>
          <ul className="space-y-5">
            {[
              {
                title: "Browser-Side Processing for Sensitive Tools",
                desc: "Tools like the JSON Formatter, QR Code Generator, Base64 Encoder, and Color Picker run entirely in your browser. Your data never leaves your device or touches our servers.",
              },
              {
                title: "Instant Deletion for Server-Side Tools",
                desc: "For tools requiring server processing (image compression, PDF operations), files are processed in secure in-memory buffers and permanently deleted immediately after your download. We do not log, store, index, or analyze your files.",
              },
              {
                title: "No User Tracking",
                desc: "We do not require accounts or cookies for tool use. We use aggregate analytics (page views, not personal data) to understand which tools are most useful.",
              },
              {
                title: "HTTPS Everywhere",
                desc: "All connections to ShrinkBox are encrypted via HTTPS/TLS. Data transmitted between your browser and our servers is always encrypted in transit.",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="text-brand text-lg mt-0.5 shrink-0">✔</span>
                <div>
                  <p className="font-bold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-xs leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Team / Author */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Who We Are</h2>
          {TEAM.map((member) => (
            <div key={member.name} className="flex gap-5 items-start p-6 rounded-2xl border border-border bg-surface">
              <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center text-white font-black text-lg shrink-0">
                {member.initials}
              </div>
              <div>
                <p className="font-bold text-foreground">{member.name}</p>
                <p className="text-xs text-brand font-medium mb-3">{member.role}</p>
                <p className="text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="text-xs font-medium bg-[var(--brand-light)] text-brand px-3 py-1 rounded-full border border-brand/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Why We Built This / E-E-A-T */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Why ShrinkBox Exists</h2>
          <p>
            Web performance became a ranking factor in Google's 2021 Core Web Vitals update. Since then, image optimization has moved from "nice to have" to "essential for SEO." Yet most free tools are frustrating to use — pop-ups, daily limits, mandatory accounts, and aggressive upselling.
          </p>
          <p className="mt-4">
            After building websites for years and watching clients struggle with basic tasks like "how do I make this PDF smaller?", the need for a genuinely straightforward toolkit was clear. ShrinkBox is the answer to that need.
          </p>
          <p className="mt-4">
            Every tool on ShrinkBox is backed by an educational article that explains <em>why</em> the task matters, not just how to click the button. We want users to understand web performance and file optimization — not just get quick results.
          </p>
        </section>

        {/* Contact + Trust */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact & Transparency</h2>
          <p>
            Have a question, found a bug, or want to suggest a new tool? We read every message.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dim text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors"
            >
              Contact Us →
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-border hover:border-brand/40 bg-surface text-foreground font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors"
            >
              Read Our Blog →
            </Link>
          </div>
        </section>

      </div>

      {/* Trust Badges */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {[
          { icon: "🔒", label: "Zero File Storage" },
          { icon: "🚫", label: "No Signup Ever" },
          { icon: "⚡", label: "Sub-Second Processing" },
          { icon: "🌐", label: "Works in Any Browser" },
        ].map((b) => (
          <div key={b.label} className="rounded-2xl border border-border bg-surface-muted p-5">
            <div className="text-3xl mb-3">{b.icon}</div>
            <div className="text-foreground text-[10px] font-bold uppercase tracking-widest">{b.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
