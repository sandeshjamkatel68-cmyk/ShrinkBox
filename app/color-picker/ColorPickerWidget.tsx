"use client";

import { useState, useRef } from "react";

export default function ColorPickerWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [palette, setPalette] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }
      setFile(selected);
      setPalette(null);
      setError(null);
    }
  };

  const extractPalette = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas context failed");

      // Shrink to performance-friendly size for analysis
      canvas.width = 100;
      canvas.height = 100;
      ctx.drawImage(img, 0, 0, 100, 100);

      const imageData = ctx.getImageData(0, 0, 100, 100);
      const data = imageData.data;
      const colorCounts: Record<string, number> = {};

      for (let i = 0; i < data.length; i += 4) {
        const r = Math.round(data[i] / 10) * 10;
        const g = Math.round(data[i+1] / 10) * 10;
        const b = Math.round(data[i+2] / 10) * 10;
        const hex = rgbToHex(r, g, b);
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      }

      const sortedColors = Object.entries(colorCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([hex]) => hex);

      setPalette(sortedColors);
    } catch (err) {
      setError("Failed to analyze image colors.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    const componentToHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 1 0-18c2.2 0 4.1.8 5.7 2.1l2.3-2.1V9h-6l2.1-2.1C14.1 5.9 12.1 5 10 5a7 7 0 1 0 7 7"/></svg>
        </div>
        <p className="text-sm font-medium text-foreground">
          {file ? file.name : "Select an image for palette extraction"}
        </p>
      </div>

      {file && (
        <div className="bg-surface border border-border rounded-2xl p-6 text-center space-y-6">
          <button 
            onClick={extractPalette}
            disabled={isProcessing}
            className="w-full h-11 rounded-xl bg-brand text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all"
          >
            {isProcessing ? "Analyzing Colors..." : "Extract Palette"}
          </button>

          {palette && (
            <div className="space-y-4 animate-in slide-in-from-bottom-3 duration-500">
              <p className="text-xs font-bold text-subtle uppercase tracking-widest">Extracted Palette</p>
              <div className="flex w-full h-24 rounded-2xl overflow-hidden border border-border shadow-sm">
                {palette.map((hex) => (
                  <div 
                    key={hex}
                    onClick={() => copyToClipboard(hex)}
                    className="flex-1 relative group cursor-pointer"
                    style={{ backgroundColor: hex }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center text-white/0 group-hover:text-white/100 text-[10px] font-bold uppercase tracking-tight">
                      Copy
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full px-1">
                {palette.map((hex) => (
                  <button 
                    key={hex}
                    onClick={() => copyToClipboard(hex)}
                    className="text-[10px] font-mono font-bold text-muted hover:text-brand transition-colors"
                  >
                    {copiedColor === hex ? "Copied!" : hex.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
}
