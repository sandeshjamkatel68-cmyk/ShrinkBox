"use client";

import { useState, useRef } from "react";

export default function SvgToPngWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState<number>(2);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.name.toLowerCase().endsWith(".svg")) {
        setError("Please select an SVG file.");
        return;
      }
      setFile(selected);
      setResult(null);
      setError(null);
    }
  };

  const convertSvg = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      const reader = new FileReader();
      const svgText = await new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsText(file);
      });

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      const svgEl = svgDoc.querySelector("svg");
      if (!svgEl) throw new Error("Invalid SVG");

      // Extract dimensions
      let width = parseFloat(svgEl.getAttribute("width") || "300");
      let height = parseFloat(svgEl.getAttribute("height") || "300");
      const viewBox = svgEl.getAttribute("viewBox");

      if (viewBox && (isNaN(width) || isNaN(height))) {
        const parts = viewBox.split(/[ ,]+/).map(parseFloat);
        if (parts.length === 4) {
          width = parts[2];
          height = parts[3];
        }
      }

      const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.src = url;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context failed");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const pngBlob: Blob = await new Promise((resolve) => 
        canvas.toBlob((b) => resolve(b!), "image/png")
      );

      const resultUrl = URL.createObjectURL(pngBlob);
      setResult({ 
        blob: pngBlob, 
        url: resultUrl, 
        name: file.name.replace(/\.[^/.]+$/, "") + ".png" 
      });
      URL.revokeObjectURL(url);
    } catch (err) {
      setError("Failed to process SVG. Check the file for errors.");
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
          ${file ? 'border-[var(--brand)] bg-[var(--brand-light)]/30' : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand-muted)] hover:bg-[var(--surface-muted)]'}`}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept=".svg"
        />
        <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--brand)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 1 0-18c2.2 0 4.1.8 5.7 2.1l2.3-2.1V9h-6l2.1-2.1C14.1 5.9 12.1 5 10 5a7 7 0 1 0 7 7"/></svg>
        </div>
        <p className="text-sm font-medium text-[var(--text)]">
          {file ? file.name : "Select an SVG vector file"}
        </p>
      </div>

      {file && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-5 text-center">
          <div className="flex items-center justify-center gap-6">
            <div>
              <p className="text-[10px] font-bold text-[var(--text-subtle)] uppercase tracking-widest mb-2">Resolution Scale</p>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 8].map((s) => (
                  <button 
                    key={s}
                    onClick={() => setScale(s)}
                    className={`w-10 h-10 rounded-lg text-xs font-bold transition-all border 
                      ${scale === s ? 'bg-[var(--brand)] text-white border-[var(--brand)]' : 'bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--brand-muted)]'}`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={convertSvg}
            disabled={isProcessing}
            className="w-full h-11 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] disabled:opacity-50 transition-all"
          >
            {isProcessing ? "Rasterizing..." : "Convert to PNG"}
          </button>

          {result && (
            <div className="mt-4 pt-6 border-t border-[var(--border)] animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-[var(--brand-light)]/40 border border-[var(--brand-muted)] flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-[11px] font-bold text-green-600 uppercase tracking-widest leading-none">Ready for download</p>
                </div>
                <p className="text-xs font-medium text-[var(--text-subtle)] truncate w-full px-4">{result.name}</p>
                <button 
                  onClick={handleDownload}
                  className="w-full h-10 rounded-lg bg-[var(--brand)] text-white text-xs font-bold hover:bg-[var(--brand-dim)] transition-colors mt-1"
                >
                  Download PNG
                </button>
              </div>
            </div>
          )}

          {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
}
