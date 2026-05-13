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

export function SEOContent({
  title,
  toolName,
  howToSteps,
  description,
  children,
  isServerProcessed = true,
}: SEOContentProps) {
  return (
    <section className="max-w-3xl mx-auto px-5 py-14 border-t border-[hsl(var(--border))] mt-10">

      <h2 className="heading-section text-lg sm:text-xl text-[hsl(var(--text))] mb-2">
        {title}
      </h2>

      {description && (
        <p className="text-sm text-[hsl(var(--text-muted))] mb-8 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-6 mb-10">

        {/* How to use */}
        <div className="border border-[hsl(var(--border))] rounded-lg p-5 bg-[hsl(var(--surface))]">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[hsl(var(--text-subtle))] mb-4">
            How to use {toolName}
          </h3>
          <ol className="space-y-3">
            {howToSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="w-5 h-5 rounded text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: "hsl(var(--brand))",
                    color: "white",
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Privacy */}
        <div className="border border-[hsl(var(--border))] rounded-lg p-5 bg-[hsl(var(--surface))]">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[hsl(var(--text-subtle))] mb-4">
            Privacy & security
          </h3>
          <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed mb-4">
            {isServerProcessed
              ? `${toolName} processes your file in isolated server memory and deletes it the moment your download is complete. Nothing is stored, logged, or accessible to anyone.`
              : `${toolName} runs entirely in your browser. Your file never leaves your device — no upload, no server contact, complete privacy.`
            }
          </p>
          <ul className="space-y-2">
            {(isServerProcessed
              ? ["Processed in isolated server memory", "Deleted immediately on download", "No retention, no logging"]
              : ["Runs 100% in your browser", "File never sent to any server", "No network requests for your data"]
            ).map(text => (
              <li key={text} className="flex items-center gap-2 text-[12px] font-medium text-[hsl(var(--text-secondary))]">
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ background: "hsl(var(--brand))" }}
                  aria-hidden="true"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {children}

      <div className="mt-10 pt-8 border-t border-[hsl(var(--border))]">
        <TrustSignals />
      </div>
    </section>
  );
}
