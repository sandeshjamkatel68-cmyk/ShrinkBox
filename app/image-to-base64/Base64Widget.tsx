"use client";

import { useState, useRef } from "react";

export default function Base64Widget() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [base64, setBase64] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }
      setFile(selected);
      setBase64(null);
      setError(null);
    }
  };

  const convertToBase64 = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    const reader = new FileReader();
    reader.onload = () => {
      setBase64(reader.result as string);
      setIsProcessing(false);
    };
    reader.onerror = () => {
      setError("Failed to read image file.");
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    if (!base64) return;
    navigator.clipboard.writeText(base64);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 space-y-6">
      {!base64 ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className={`w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 
            ${file ? 'border-[var(--brand)] bg-[var(--brand-light)]/30' : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand-muted)] hover:bg-[var(--surface-muted)]'}`}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
          <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--brand)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <p className="text-sm font-medium text-[var(--text)]">
            {file ? file.name : "Select an image to encode"}
          </p>
        </div>
      ) : (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-4 animate-in fade-in duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
            <h4 className="text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider">Base64 String</h4>
            <div className="flex items-center gap-3">
              <button 
                onClick={copyToClipboard}
                className={`text-xs font-bold transition-colors ${copied ? 'text-green-600' : 'text-[var(--brand)] hover:text-[var(--brand-dim)]'}`}
              >
                {copied ? "Copied!" : "Copy String"}
              </button>
              <button 
                onClick={() => { setBase64(null); setFile(null); }}
                className="text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="max-h-[300px] overflow-y-auto pr-2 rounded-lg py-1 border border-[var(--border)] bg-[var(--surface-muted)] p-3">
            <p className="text-[10px] text-[var(--text-muted)] break-all font-mono leading-normal">
              {base64}
            </p>
          </div>
        </div>
      )}

      {file && !base64 && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 text-center">
          <button 
            onClick={convertToBase64}
            disabled={isProcessing}
            className="w-full h-11 px-8 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all"
          >
            {isProcessing ? "Encoding..." : "Convert to Base64"}
          </button>
          {error && <p className="text-xs font-medium text-red-500 mt-4">{error}</p>}
        </div>
      )}
    </div>
  );
}
