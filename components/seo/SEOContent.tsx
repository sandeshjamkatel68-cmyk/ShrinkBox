import { ReactNode } from "react";
import { TrustSignals } from "./index";

interface SEOContentProps {
  title: string;
  toolName: string;
  howToSteps: string[];
  description?: string;
  children?: ReactNode;
}

export function SEOContent({ title, toolName, howToSteps, description, children }: SEOContentProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 border-t border-border mt-20 bg-surface/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[32px] font-bold text-foreground mb-8 tracking-tight text-center leading-[1.2]">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center font-medium">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-3xl bg-surface border border-border shadow-xl hover:shadow-2xl transition-all duration-500 group/card">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-light flex items-center justify-center text-brand text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              How to use {toolName}
            </h3>
            <ul className="space-y-4">
              {howToSteps.map((step, i) => (
                <li key={i} className="flex gap-4 group/item">
                  <span className="w-6 h-6 rounded-full bg-brand-light text-brand text-xs font-bold flex items-center justify-center shrink-0 border border-brand/10 transition-colors group-hover/item:bg-brand group-hover/item:text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-border shadow-xl hover:shadow-2xl transition-all duration-500 group/card">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-light flex items-center justify-center text-brand text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              100% Private & Secure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
              At ShrinkBox, we prioritize your data security above everything else. Unlike many online tools that upload your files to their servers, our platform processes everything **locally in your browser**.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                No file uploads to any cloud
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                Zero server-side data retention
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                Bank-level file privacy
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-sm prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">The ultimate free alternative to paid PDF and Image software</h2>
          <p>
            ShrinkBox is designed to be the fastest, most secure alternative to complex desktop software and paid online services like iLovePDF, SmallPDF, or Adobe Acrobat. We've optimized every {toolName} operation to ensure it works seamlessly on any device, from mobile phones to high-end workstations.
          </p>
          <p>
            Whether you're a student trying to combine assignments, a professional managing confidential financial documents, or a designer optimizing images for the web, our range of free tools ensures you get the job done in seconds. By executing the processing logic directly in your browser using modern WebAssembly and JavaScript, we provide desktop-level performance without the privacy risks of traditional software.
          </p>
          <p>
            Explore our continuous commitment to open, free, and secure web tools. ShrinkBox remains completely free with no hidden subscriptions, no account registration, and no file quantity limits for most of our standard tools.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <TrustSignals />
        </div>
      </div>
    </section>
  );
}
