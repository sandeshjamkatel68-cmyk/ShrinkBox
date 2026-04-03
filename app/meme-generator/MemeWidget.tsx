"use client";

import { useState, useRef, useEffect } from "react";

export default function MemeWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [topText, setTopText] = useState("TOP TEXT");
  const [bottomText, setBottomText] = useState("BOTTOM TEXT");
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
      drawMeme();
    }
  }, [file, topText, bottomText]);

  const drawMeme = async () => {
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

      // Text settings
      const fontSize = canvas.width / 10;
      ctx.font = `${fontSize}px Impact, "Arial Black", sans-serif`;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = fontSize / 15;
      ctx.lineJoin = "round";

      const drawText = (text: string, y: number) => {
        const textUpper = text.toUpperCase();
        ctx.strokeText(textUpper, canvas.width / 2, y);
        ctx.fillText(textUpper, canvas.width / 2, y);
      };

      // Top text position
      drawText(topText, fontSize * 1.1);

      // Bottom text position
      drawText(bottomText, canvas.height - fontSize * 0.4);

      setPreviewUrl(canvas.toDataURL("image/jpeg", 0.9));
    } catch (err) {
      setError("Failed to generate meme.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!previewUrl || !file) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = `meme_${file.name.replace(/\.[^/.]+$/, "")}.jpg`;
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
          accept="image/*"
        />
        <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </div>
        <p className="text-sm font-medium text-foreground">
          {file ? file.name : "Select your meme template"}
        </p>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {file && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start animate-in fade-in duration-500">
          <div className="bg-surface border border-border rounded-2xl p-6 space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-2">Top Text</label>
              <input 
                type="text" 
                value={topText} 
                onChange={(e) => setTopText(e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-border bg-surface-muted text-sm font-bold focus:outline-none focus:border-brand uppercase"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-2">Bottom Text</label>
              <input 
                type="text" 
                value={bottomText} 
                onChange={(e) => setBottomText(e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-border bg-surface-muted text-sm font-bold focus:outline-none focus:border-brand uppercase"
              />
            </div>
            <button 
              onClick={handleDownload}
              className="w-full h-12 rounded-xl bg-brand text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all mt-2"
            >
              Download Meme
            </button>
          </div>

          <div className="bg-surface-muted border border-border rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px]">
             {previewUrl ? (
              <img 
                src={previewUrl} 
                alt="Meme preview" 
                className="max-w-full max-h-[400px] rounded-lg shadow-md"
              />
            ) : (
              <p className="text-xs font-medium text-muted italic">Rendering...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
