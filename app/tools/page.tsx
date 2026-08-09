import type { Metadata } from "next";
import Link from "next/link";
import { FILE_TOOLS } from "@/lib/data/fileTools";

export const metadata: Metadata = {
  title: "All Tools — ShrinkBox",
  description: `${FILE_TOOLS.length} free file tools that run entirely in your browser. No upload, no signup.`,
  alternates: { canonical: "https://shrink-box.com/tools" },
};

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <div className="mb-10">
        <h1 className="heading-display text-2xl text-ink mb-2">All Tools</h1>
        <p className="font-sans text-sm text-ink-dim">
          {FILE_TOOLS.length} tools, all running locally in your browser. Nothing is uploaded.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
        {FILE_TOOLS.map((tool) => (
          <Link key={tool.slug} href={`/${tool.slug}`} className="panel p-4 hover:border-signal transition-colors">
            <p className="font-sans text-sm font-medium text-ink mb-1">{tool.name}</p>
            <p className="font-sans text-xs text-ink-dim leading-relaxed">{tool.description}</p>
          </Link>
        ))}
      </div>

      <div className="panel p-5">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-dim mb-2">Coming next</p>
        <p className="font-sans text-sm text-ink-dim leading-relaxed">
          PDF compression, merging, and conversion tools are in progress — the same rule applies: your files stay in the browser, nothing is uploaded.
        </p>
      </div>
    </div>
  );
}
