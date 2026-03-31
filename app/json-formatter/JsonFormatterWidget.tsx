"use client";

import { useState } from "react";

export default function JsonFormatterWidget() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleBeautify = () => {
    if (!input.trim()) return;
    try {
      const obj = JSON.parse(input);
      const formatted = JSON.stringify(obj, null, 2);
      setInput(formatted);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format. Please check for errors.");
      console.error(err);
    }
  };

  const handleMinify = () => {
    if (!input.trim()) return;
    try {
      const obj = JSON.parse(input);
      const minified = JSON.stringify(obj);
      setInput(minified);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format. Please check for errors.");
      console.error(err);
    }
  };

  const copyToClipboard = () => {
    if (!input) return;
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Paste JSON Here</label>
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-80 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-[11px] font-mono leading-normal focus:outline-none focus:border-[var(--brand)] transition-colors resize-none"
            placeholder='{"key": "value"}'
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button 
            onClick={handleBeautify}
            className="w-full sm:flex-1 h-11 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all"
          >
            Beautify (Pretty Print)
          </button>
          <button 
            onClick={handleMinify}
            className="w-full sm:flex-1 h-11 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] text-[var(--text)] text-sm font-bold hover:bg-[var(--surface)] transition-all"
          >
            Minify JSON
          </button>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
          <button 
            onClick={copyToClipboard}
            disabled={!input}
            className={`text-xs font-bold transition-colors disabled:opacity-50 ${copied ? 'text-green-600' : 'text-[var(--brand)] hover:text-[var(--brand-dim)]'}`}
          >
            {copied ? "Copied!" : "Copy Result"}
          </button>
          <button 
            onClick={() => { setInput(""); setError(null); }}
            className="text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Clear All
          </button>
        </div>

        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
      </div>
    </div>
  );
}
