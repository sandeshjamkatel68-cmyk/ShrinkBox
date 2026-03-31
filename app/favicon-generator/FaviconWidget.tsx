"use client";

import { useState, useRef } from "react";
import JSZip from "jszip";

const SIZES = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 48, name: "favicon-48x48.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "android-chrome-192x192.png" },
  { size: 512, name: "android-chrome-512x512.png" }
];

export default function FaviconWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [zipBlob, setZipBlob] = useState<Blob | null>(null);
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
      setZipBlob(null);
      setError(null);
    }
  };

  const generateIcons = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    const zip = new JSZip();

    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context failed");

      // Square crop dimensions
      const minDim = Math.min(img.width, img.height);
      const startX = (img.width - minDim) / 2;
      const startY = (img.height - minDim) / 2;

      for (const { size, name } of SIZES) {
        canvas.width = size;
        canvas.height = size;
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, startX, startY, minDim, minDim, 0, 0, size, size);

        // Convert canvas back to a blob
        const blob: Blob = await new Promise((resolve) => 
          canvas.toBlob((b) => resolve(b!), "image/png")
        );
        zip.file(name, blob);
      }

      // Special addition: an actual favicon.ico using the 32x32 blob
      const icoBlob: Blob = await new Promise((resolve) => {
        canvas.width = 32;
        canvas.height = 32;
        ctx.clearRect(0, 0, 32, 32);
        ctx.drawImage(img, startX, startY, minDim, minDim, 0, 0, 32, 32);
        canvas.toBlob((b) => resolve(b!), "image/x-icon"); // Note: most browsers will actually handle png as ico if the header matches
      });
      zip.file("favicon.ico", icoBlob);

      const content = await zip.generateAsync({ type: "blob" });
      setZipBlob(content);
    } catch (err) {
      setError("Failed to generate icons. Try a different image.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!zipBlob) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipBlob);
    a.download = "shrinkbox_favicons.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-8 space-y-6 text-center">
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
          {file ? file.name : "Select your logo (square image works best)"}
        </p>
      </div>

      {file && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 text-center">
          <button 
            onClick={generateIcons}
            disabled={isProcessing}
            className="w-full h-11 px-8 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all"
          >
            {isProcessing ? "Building Package..." : "Generate Favicon ZIP"}
          </button>

          {zipBlob && (
            <div className="mt-6 pt-6 border-t border-[var(--border)] animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-[var(--brand-light)]/40 border border-[var(--brand-muted)] flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-[11px] font-bold text-green-600 uppercase tracking-widest">Complete Package Ready</p>
                </div>
                <button 
                  onClick={handleDownload}
                  className="w-full h-10 rounded-lg bg-[var(--brand)] text-white text-xs font-bold hover:bg-[var(--brand-dim)] transition-colors mt-1"
                >
                  Download Favicon ZIP
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
