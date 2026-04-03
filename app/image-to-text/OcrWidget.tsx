"use client";

import { useState, useRef } from "react";
import { createWorker } from "tesseract.js";

export default function OcrWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.type.startsWith("image/")) {
        setError("Please select an image file (JPG, PNG, or WebP).");
        return;
      }
      setFile(selected);
      setText(null);
      setError(null);
      setProgress(0);
    }
  };

  const runOcr = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);
    setProgress(0);

    try {
      const worker = await createWorker("eng", 1, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.floor(m.progress * 100));
          }
        },
      });

      const { data: { text: extractedText } } = await worker.recognize(file);
      setText(extractedText.trim());
      await worker.terminate();
    } catch (err) {
      setError("OCR failed. Try a high-contrast image with clear text.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 space-y-6">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className={`w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 
          ${file ? 'border-brand bg-[var(--brand-light)]/30' : 'border-border bg-surface hover:border-[var(--brand-muted)] hover:bg-surface-muted'}`}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept="image/*"
        />
        <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </div>
        <p className="text-sm font-medium text-foreground">
          {file ? file.name : "Select an image for OCR"}
        </p>
        <p className="text-xs text-muted">Clear screenshots or scans work best</p>
      </div>

      {file && !text && (
        <div className="bg-surface border border-border rounded-2xl p-6 text-center">
          <button 
            onClick={runOcr}
            disabled={isProcessing}
            className="w-full h-11 px-8 rounded-xl bg-brand text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all"
          >
            {isProcessing ? `Extracting... ${progress}%` : "Extract Text"}
          </button>
          {error && <p className="text-xs font-medium text-red-500 mt-4">{error}</p>}
        </div>
      )}

      {text && (
        <div className="bg-surface border border-border rounded-2xl p-6 space-y-4 animate-in fade-in duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <h4 className="text-xs font-bold text-subtle uppercase tracking-wider">Extracted Text</h4>
            <button 
              onClick={copyToClipboard}
              className={`text-xs font-bold transition-colors ${copied ? 'text-green-600' : 'text-brand hover:text-[var(--brand-dim)]'}`}
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <div className="max-h-[300px] overflow-y-auto pr-2 rounded-lg py-1">
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap font-sans selection:bg-[var(--brand-light)]">
              {text}
            </p>
          </div>
          <button 
            onClick={() => { setText(null); setFile(null); }}
            className="w-full text-xs font-medium text-muted hover:text-foreground pt-2"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
