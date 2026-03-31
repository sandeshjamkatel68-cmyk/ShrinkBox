"use client";

import { useState, useRef, useEffect } from "react";

export default function CompressSizeWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [targetSizeKb, setTargetSizeKb] = useState<number>(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string; size: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.type.startsWith("image/")) {
        setError("Please select an image file (JPG, PNG, or WebP).");
        return;
      }
      setFile(selected);
      setResult(null);
      setError(null);
    }
  };

  const compressToSize = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      const targetBytes = targetSizeKb * 1024;
      const img = new Image();
      img.src = URL.createObjectURL(file);

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context failed");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      let minQuality = 0.01;
      let maxQuality = 1.0;
      let bestBlob: Blob | null = null;
      let iterations = 0;

      // Binary search for the best quality under target size
      while (iterations < 8) {
        const midQuality = (minQuality + maxQuality) / 2;
        const blob: Blob = await new Promise((resolve, reject) => 
          canvas.toBlob((b) => {
            if (b) resolve(b);
            else reject(new Error("Canvas toBlob failed"));
          }, "image/jpeg", midQuality)
        );

        if (blob.size <= targetBytes) {
          bestBlob = blob;
          minQuality = midQuality;
        } else {
          maxQuality = midQuality;
        }
        iterations++;
      }

      if (!bestBlob) {
        // If even lowest quality is too big, try extreme low
        bestBlob = await new Promise((resolve, reject) => 
          canvas.toBlob((b) => {
            if (b) resolve(b);
            else reject(new Error("Final canvas toBlob failed"));
          }, "image/jpeg", 0.01)
        );
      }

      if (!bestBlob) throw new Error("Could not compress to target size");

      const url = URL.createObjectURL(bestBlob);
      setResult({ blob: bestBlob, url, size: bestBlob.size });
    } catch (err) {
      setError("Failed to compress image. Try a different file.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!result || !file) return;
    const a = document.createElement("a");
    a.href = result.url;
    a.download = `shrinkbox_${targetSizeKb}kb_${file.name.replace(/\.[^/.]+$/, "")}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-8 space-y-6">
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
          accept="image/jpeg,image/png,image/webp"
        />
        <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--brand)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </div>
        <p className="text-sm font-medium text-[var(--text)]">
          {file ? file.name : "Select an image to compress"}
        </p>
        <p className="text-xs text-[var(--text-muted)]">JPG, PNG, or WebP</p>
      </div>

      {file && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Target Size (KB)</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={targetSizeKb}
                  onChange={(e) => setTargetSizeKb(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full h-11 px-4 pr-12 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-sm font-bold focus:outline-none focus:border-[var(--brand)] transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--text-muted)]">KB</span>
              </div>
            </div>
            <button 
              onClick={compressToSize}
              disabled={isProcessing}
              className="h-11 px-8 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all mt-6"
            >
              {isProcessing ? "Optimizing..." : "Compress"}
            </button>
          </div>

          {result && (
            <div className="pt-4 border-t border-[var(--border)] fade-in">
              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--brand-light)]/40 border border-[var(--brand-muted)]">
                <div>
                  <p className="text-xs font-bold text-[var(--brand)] uppercase tracking-tight">Optimized Size</p>
                  <p className="text-lg font-bold text-[var(--text)]">{(result.size / 1024).toFixed(1)} KB</p>
                </div>
                <button 
                  onClick={handleDownload}
                  className="px-6 py-2.5 rounded-lg bg-[var(--brand)] text-white text-xs font-bold hover:bg-[var(--brand-dim)] transition-colors"
                >
                  Download Result
                </button>
              </div>
            </div>
          )}

          {error && <p className="text-xs font-medium text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
}
