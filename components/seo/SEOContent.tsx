import { ReactNode } from "react";
import { TrustSignals } from "./index";

interface SEOContentProps {
  title: string;
  toolName: string;
  howToSteps: string[];
  description?: string;
  children?: ReactNode;
  isServerProcessed?: boolean;
}

export function SEOContent({ title, toolName, howToSteps, description, children, isServerProcessed = true }: SEOContentProps) {
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-6 py-16 sm:py-20 border-t border-border mt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-section text-xl sm:text-2xl md:text-[28px] text-foreground mb-6 text-center">
          {title}
        </h2>

        {description && (
          <p className="text-sm sm:text-base text-muted mb-10 leading-relaxed text-center font-medium">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="card-base p-6 sm:p-7">
            <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-brand-light flex items-center justify-center text-brand">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              How to use {toolName}
            </h3>
            <ul className="space-y-3">
              {howToSteps.map((step, i) => (
                <li key={i} className="flex gap-3 group/item">
                  <span className="w-5 h-5 rounded-md bg-brand-light text-brand text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base p-6 sm:p-7">
            <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-brand-light flex items-center justify-center text-brand">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              Privacy & Security
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              {isServerProcessed
                ? `Files uploaded to ${toolName} are processed in secure, encrypted memory on our servers and permanently deleted immediately after your download completes. We do not store, log, or analyze your files.`
                : `${toolName} runs entirely in your browser using JavaScript. Your files never leave your device or touch our servers, ensuring complete privacy.`
              }
            </p>
            <ul className="space-y-2.5">
              {(isServerProcessed
                ? [
                  "Encrypted upload & processing",
                  "Immediate file deletion after download",
                  "No server-side data retention",
                ]
                : [
                  "100% browser-side processing",
                  "Files never leave your device",
                  "Zero data transmission to servers",
                ]
              ).map(text => (
                <li key={text} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tool-specific content injected via children */}
        {children}

        <div className="mt-12 pt-10 border-t border-border">
          <TrustSignals />
        </div>
      </div>
    </section>
  );
}
