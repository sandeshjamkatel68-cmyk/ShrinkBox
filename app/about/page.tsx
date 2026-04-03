import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ShrinkBox — Free High-Performance File Optimization",
  description: "Learn about the mission behind ShrinkBox — providing professional-grade file compression and conversion tools for free, with a focus on privacy and speed.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-10">
        <span className="text-xs font-bold text-brand uppercase tracking-widest bg-[var(--brand-light)] px-3 py-1 rounded-full border border-brand/10">Mission</span>
        <h1 className="text-4xl font-extrabold mt-6 mb-4 tracking-tight">The Fastest Way to a Leaner Digital Experience.</h1>
        <p className="text-muted text-lg leading-relaxed font-medium">
          ShrinkBox was born from a simple frustration: online tools are too often bloated with ads, hidden fees, or unnecessary account registrations. We built a streamlined, privacy-first platform that just works.
        </p>
      </div>

      <div className="space-y-12 text-muted leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">What is ShrinkBox?</h2>
          <p>
            ShrinkBox is a comprehensive suite of digital utilities designed for performance-minded creators. Whether you are a developer looking to **convert PNG to WebP** for better Core Web Vitals, or a student needing to **shrink a PDF** for an assignment, our tools provide professional-grade results in seconds.
          </p>
          <p className="mt-4">
            We leverage a hybrid architecture: data-sensitive utilities run **entirely in your browser**, while high-power media encoding is handled by secure, high-speed memory buffers that are wiped clean the moment your session ends.
          </p>
        </section>

        <section className="bg-surface-muted p-8 rounded-3xl border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Security Protocol</h2>
          <p>
            Your intellectual property is yours alone. Our commitment to privacy is absolute:
          </p>
          <ul className="mt-6 space-y-4 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-brand">✔</span>
              <span><strong>No Permanent Storage:</strong> We have zero interest in your content. Files are never indexed or saved.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand">✔</span>
              <span><strong>Instant Deletion:</strong> Our automated 'sweep' protocol permanently erases any trace of your files after download.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand">✔</span>
              <span><strong>Browser-Side Processing:</strong> For text and developer tools, your data never even touches our infrastructure.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Who This is Built For</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Developers", desc: "Optimizing web assets for lightning-fast lighthouse scores." },
              { title: "Designers", desc: "Formatting deliverables for social media and client review." },
              { title: "Students", desc: "Meeting strict file upload requirements for submissions." },
              { title: "Professionals", desc: "Managing PDF documents and high-res imagery securely." },
            ].map((p) => (
              <div key={p.title} className="p-4 rounded-xl border border-border bg-surface">
                <p className="font-bold text-foreground mb-1 text-sm">{p.title}</p>
                <p className="text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Global Access to Free Utilities</h2>
          <p>
            We believe that basic file optimization should be like a calculator — a fundamental utility that is free for everyone, anywhere. ShrinkBox will always maintain a free tier that is functional, fast, and honest. No fake percentages, no hidden watermarks, and no compromise on quality.
          </p>
        </section>
      </div>

      {/* Trust badges */}
      <div className="mt-16 grid grid-cols-3 gap-4 text-center">
        {[
          { icon: "🔒", label: "Zero Storage" },
          { icon: "🚫", label: "No Signup" },
          { icon: "⚡", label: "High Speed" },
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
