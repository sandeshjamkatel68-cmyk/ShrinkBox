"use client";

import { useState, useRef } from "react";

export default function HeicToJpgWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.name.toLowerCase().endsWith(".heic") && !selected.name.toLowerCase().endsWith(".heif")) {
        setError("Please select a .heic or .heif file.");
        return;
      }
      setFile(selected);
      setResult(null);
      setError(null);
    }
  };

  const convertHeic = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      // Dynamic import to avoid SSR errors
      const heic2any = (await import("heic2any")).default;

      // heic2any returns a blob or an array of blobs
      const convertedResult = await heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: 0.9,
      });

      const blob = Array.isArray(convertedResult) ? convertedResult[0] : convertedResult;
      const url = URL.createObjectURL(blob);
      setResult({ 
        blob, 
        url, 
        name: file.name.replace(/\.[^/.]+$/, "") + ".jpg" 
      });
    } catch (err) {
      setError("Failed to convert file. Make sure it is a valid HEIC image.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result.url;
    a.download = result.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
          accept=".heic,.heif"
        />
        <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </div>
        <p className="text-sm font-medium text-foreground">
          {file ? file.name : "Select a HEIC photo"}
        </p>
        <p className="text-xs text-muted">.heic or .heif only</p>
      </div>

      {file && (
        <div className="bg-surface border border-border rounded-2xl p-6 text-center">
          <button 
            onClick={convertHeic}
            disabled={isProcessing}
            className="w-full h-11 px-8 rounded-xl bg-brand text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all font-sans"
          >
            {isProcessing ? "Transcending..." : "Convert to JPG"}
          </button>

          {result && (
            <div className="mt-6 pt-6 border-t border-border max-w-sm mx-auto animate-in slide-in-from-bottom-2 duration-300">
              <div className="p-4 rounded-xl bg-[var(--brand-light)]/40 border border-[var(--brand-muted)] flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-[11px] font-bold text-green-600 uppercase tracking-widest leading-none">Ready for download</p>
                </div>
                <p className="text-xs font-medium text-subtle truncate w-full px-4">{result.name}</p>
                <button 
                  onClick={handleDownload}
                  className="w-full h-10 rounded-lg bg-brand text-white text-xs font-bold hover:bg-[var(--brand-dim)] transition-colors mt-1"
                >
                  Download JPG
                </button>
              </div>
            </div>
          )}

          {error && <p className="text-xs font-medium text-red-500 mt-4">{error}</p>}
        </div>
      )}
    </div>
  );
}
