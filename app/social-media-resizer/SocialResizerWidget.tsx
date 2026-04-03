"use client";

import { useState, useRef, useEffect } from "react";

const PRESETS = [
  { id: "ig-post", label: "Instagram Post", w: 1080, h: 1080, icon: "📸" },
  { id: "ig-story", label: "Instagram Story", w: 1080, h: 1920, icon: "📱" },
  { id: "fb-cover", label: "Facebook Cover", w: 820, h: 312, icon: "📘" },
  { id: "tw-header", label: "Twitter Header", w: 1500, h: 500, icon: "🐦" },
  { id: "yt-thumb", label: "YouTube Thumb", w: 1280, h: 720, icon: "📺" },
  { id: "li-banner", label: "LinkedIn Banner", w: 1584, h: 396, icon: "💼" },
];

export default function SocialResizerWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [fitMode, setFitMode] = useState<"cover" | "contain">("cover");
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
      resizeForSocial();
    }
  }, [file, selectedPreset, fitMode]);

  const resizeForSocial = async () => {
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

      canvas.width = selectedPreset.w;
      canvas.height = selectedPreset.h;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const targetRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawW, drawH, drawX, drawY;

      if (fitMode === "cover") {
        if (imgRatio > targetRatio) {
          drawH = canvas.height;
          drawW = img.width * (canvas.height / img.height);
        } else {
          drawW = canvas.width;
          drawH = img.height * (canvas.width / img.width);
        }
        drawX = (canvas.width - drawW) / 2;
        drawY = (canvas.height - drawH) / 2;
      } else {
        if (imgRatio > targetRatio) {
          drawW = canvas.width;
          drawH = img.height * (canvas.width / img.width);
        } else {
          drawH = canvas.height;
          drawW = img.width * (canvas.height / img.height);
        }
        drawX = (canvas.width - drawW) / 2;
        drawY = (canvas.height - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      setPreviewUrl(canvas.toDataURL("image/jpeg", 0.9));
    } catch (err) {
      setError("Failed to resize image.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!previewUrl || !file) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = `${selectedPreset.id}_${file.name.replace(/\.[^/.]+$/, "")}.jpg`;
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
          {file ? file.name : "Select a photo to resize"}
        </p>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {file && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start animate-in fade-in duration-500">
          <div className="bg-surface border border-border rounded-2xl p-6 space-y-5 text-center">
            <div>
              <p className="text-[10px] font-bold text-subtle uppercase tracking-widest mb-3">Choose Platform Preset</p>
              <div className="grid grid-cols-2 gap-2">
                {PRESETS.map((p) => (
                  <button 
                    key={p.id}
                    onClick={() => setSelectedPreset(p)}
                    className={`h-11 px-3 rounded-xl text-[11px] font-bold border transition-all flex items-center gap-2
                      ${selectedPreset.id === p.id ? 'bg-brand text-white border-brand shadow-sm' : 'bg-transparent text-muted border-border hover:border-[var(--brand-muted)]'}`}
                  >
                    <span>{p.icon}</span>
                    <span className="truncate">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-subtle uppercase tracking-widest mb-3">Fit Mode</p>
              <div className="flex gap-2 p-1 bg-surface-muted rounded-xl border border-border">
                <button 
                  onClick={() => setFitMode("cover")}
                  className={`flex-1 h-9 rounded-lg text-xs font-bold transition-all ${fitMode === "cover" ? 'bg-white text-foreground shadow-sm' : 'text-muted hover:text-foreground'}`}
                >
                  Cover (Fill)
                </button>
                <button 
                  onClick={() => setFitMode("contain")}
                  className={`flex-1 h-9 rounded-lg text-xs font-bold transition-all ${fitMode === "contain" ? 'bg-white text-foreground shadow-sm' : 'text-muted hover:text-foreground'}`}
                >
                  Contain (Full)
                </button>
              </div>
            </div>

            <button 
              onClick={handleDownload}
              className="w-full h-12 rounded-xl bg-brand text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all mt-2"
            >
              Download for {selectedPreset.label}
            </button>
          </div>

          <div className="bg-surface-muted border border-border rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px]">
             {previewUrl ? (
              <div className="space-y-3 flex flex-col items-center">
                <img 
                  src={previewUrl} 
                  alt="Social preview" 
                  className="max-w-full max-h-[400px] rounded-lg shadow-md border border-border"
                />
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest">{selectedPreset.w} x {selectedPreset.h} PX</p>
              </div>
            ) : (
              <p className="text-xs font-medium text-muted italic">Rendering...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
