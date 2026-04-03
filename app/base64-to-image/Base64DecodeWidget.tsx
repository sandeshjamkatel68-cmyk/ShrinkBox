"use client";

import { useState, useEffect } from "react";

export default function Base64DecodeWidget() {
  const [input, setInput] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!input.trim()) {
      setPreviewUrl(null);
      setError(null);
      return;
    }

    try {
      let base64String = input.trim();
      
      // If it doesn't have the data:image prefix, attempt to add one (defaulting to png)
      if (!base64String.startsWith("data:image/")) {
        // Strip any potential whitespace or non-base64 characters at start/end
        base64String = `data:image/png;base64,${base64String.replace(/\s/g, "")}`;
      }

      setPreviewUrl(base64String);
      setError(null);
    } catch (err) {
      setError("Invalid Base64 string. Please check your data.");
      setPreviewUrl(null);
    }
  }, [input]);

  const handleDownload = () => {
    if (!previewUrl) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    
    // Try to extract the extension from the data URI
    const match = previewUrl.match(/data:image\/([^;]+);/);
    const ext = match ? match[1] : "png";
    
    a.download = `decoded_image.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-surface border border-border rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-subtle uppercase tracking-wider mb-2">Paste Base64 String</label>
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 p-4 rounded-xl border border-border bg-surface-muted text-[10px] font-mono leading-normal focus:outline-none focus:border-brand transition-colors resize-none"
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA..."
          />
        </div>

        {error && <p className="text-xs font-medium text-red-500">{error}</p>}

        {previewUrl && !error && (
          <div className="pt-4 border-t border-border space-y-4 flex flex-col items-center animate-in fade-in duration-500">
            <div className="bg-surface-muted border border-border rounded-xl p-4 flex items-center justify-center min-h-[200px] w-full">
              <img 
                src={previewUrl} 
                alt="Base64 preview" 
                className="max-w-full max-h-[300px] rounded-lg shadow-md"
                onError={() => setError("Could not render image. The Base64 string might be truncated or invalid.")}
              />
            </div>
            
            <button 
              onClick={handleDownload}
              className="w-full h-11 rounded-xl bg-brand text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all"
            >
              Download Decoded Image
            </button>
            <button 
              onClick={() => setInput("")}
              className="text-xs font-bold text-muted hover:text-foreground transition-colors"
            >
              Clear Input
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
