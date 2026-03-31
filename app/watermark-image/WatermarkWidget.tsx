"use client";

import { useState, useRef, useEffect } from "react";

type Position = "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export default function WatermarkWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("© ShrinkBox");
  const [color, setColor] = useState("#ffffff");
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5); // Percent of width
  const [position, setPosition] = useState<Position>("bottom-right");
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (!selected.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }
      setFile(selected);
      setError(null);
    }
  };

  useEffect(() => {
    if (file) {
      applyWatermark();
    }
  }, [file, text, color, opacity, size, position]);

  const applyWatermark = async () => {
    if (!file) return;
    setIsProcessing(true);

    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Setup font
      const fontSize = (canvas.width * size) / 100;
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.textBaseline = "middle";

      const padding = fontSize;
      const metrics = ctx.measureText(text);
      let x = canvas.width / 2;
      let y = canvas.height / 2;

      if (position === "top-left") {
        x = padding + metrics.width / 2;
        y = padding;
        ctx.textAlign = "center";
      } else if (position === "top-right") {
        x = canvas.width - padding - metrics.width / 2;
        y = padding;
        ctx.textAlign = "center";
      } else if (position === "bottom-left") {
        x = padding + metrics.width / 2;
        y = canvas.height - padding;
        ctx.textAlign = "center";
      } else if (position === "bottom-right") {
        x = canvas.width - padding - metrics.width / 2;
        y = canvas.height - padding;
        ctx.textAlign = "center";
      } else {
        ctx.textAlign = "center";
      }

      ctx.fillText(text, x, y);

      const url = canvas.toDataURL("image/jpeg", 0.9);
      setPreviewUrl(url);
    } catch (err) {
      setError("Failed to apply watermark.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!previewUrl || !file) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = `watermarked_${file.name.replace(/\.[^/.]+$/, "")}.jpg`;
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
          accept="image/*"
        />
        <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--brand)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </div>
        <p className="text-sm font-medium text-[var(--text)]">
          {file ? file.name : "Select an image to watermark"}
        </p>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {file && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Watermark Text</label>
              <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-sm font-medium focus:outline-none focus:border-[var(--brand)] transition-colors"
                placeholder="e.g. © Your Name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Color</label>
                <input 
                  type="color" 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-11 px-1 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Size (%)</label>
                <input 
                  type="number" 
                  value={size} 
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-11 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Opacity</label>
              <input 
                type="range" 
                min="0.1" max="1" step="0.1" 
                value={opacity} 
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-[var(--surface-muted)] appearance-none cursor-pointer accent-[var(--brand)] mt-2"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Position</label>
              <div className="grid grid-cols-3 gap-2">
                {(["top-left", "top-right", "center", "bottom-left", "bottom-right"] as Position[]).map((pos) => (
                  <button 
                    key={pos}
                    onClick={() => setPosition(pos)}
                    className={`h-9 px-2 rounded-lg text-[10px] font-bold border transition-all 
                      ${position === pos ? 'bg-[var(--brand)] text-white border-[var(--brand)] shadow-sm' : 'bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--brand-muted)]'}`}
                  >
                    {pos.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleDownload}
              className="w-full h-12 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all mt-4"
            >
              Download Watermarked Image
            </button>
          </div>

          <div className="bg-[var(--surface-muted)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px]">
            {previewUrl ? (
              <img 
                src={previewUrl} 
                alt="Watermark preview" 
                className="max-w-full max-h-[400px] rounded-lg shadow-md"
              />
            ) : (
              <p className="text-xs font-medium text-[var(--text-muted)]">Live preview will appear here</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
