"use client";

import React, { useState, useRef } from "react";
import JSZip from "jszip";
import { clsx } from "clsx";

interface ProgressState {
  total: number;
  current: number;
  status: "idle" | "fetching" | "zipping" | "done" | "error";
  message: string;
}

export default function BulkUrlPacker() {
  const [urlsText, setUrlsText] = useState("");
  const [progress, setProgress] = useState<ProgressState>({
    total: 0,
    current: 0,
    status: "idle",
    message: "",
  });
  const [errorLogs, setErrorLogs] = useState<string[]>([]);

  const handlePack = async () => {
    const urls = urlsText
      .split("\n")
      .map((u) => u.trim())
      .filter((u) => u.startsWith("http"));

    if (urls.length === 0) {
      setProgress({ total: 0, current: 0, status: "error", message: "Please enter at least one valid URL starting with http/https" });
      return;
    }

    setProgress({ total: urls.length, current: 0, status: "fetching", message: "Initialising download queue..." });
    setErrorLogs([]);

    const zip = new JSZip();
    let credits = "SHRINKBOX - BULK DOWNLOAD CREDITS\n";
    credits += "==================================\n\n";
    credits += "The following files were collected via ShrinkBox Bulk Downloader.\n";
    credits += "Please respect the copyright and usage terms of the original sources.\n\n";

    const fetchPromises = urls.map(async (url, index) => {
      try {
        // Try to fetch the image. NOTE: This is subject to CORS.
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const blob = await response.blob();
        const contentType = blob.type;
        const extension = contentType.split("/")[1] || "file";
        const fileName = `image_${index + 1}.${extension}`;

        zip.file(fileName, blob);
        credits += `[${fileName}] Source: ${url}\n`;
        
        setProgress((prev) => ({
          ...prev,
          current: prev.current + 1,
          message: `Fetched ${prev.current + 1} of ${urls.length} files...`,
        }));
      } catch (err) {
        const errorMsg = `Failed to fetch: ${url} (Check if site allows CORS)`;
        setErrorLogs((prev) => [...prev, errorMsg]);
        credits += `[FAILED] Source: ${url}\n`;
      }
    });

    await Promise.all(fetchPromises);

    setProgress((prev) => ({ ...prev, status: "zipping", message: "Packing collection into ZIP..." }));
    
    zip.file("credits.txt", credits);

    try {
      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `shrinkbox_collection_${Date.now()}.zip`;
      link.click();
      
      setProgress({
        total: urls.length,
        current: urls.length,
        status: "done",
        message: "Collection ready! Your ZIP has been downloaded.",
      });
    } catch (err) {
      setProgress({ ...progress, status: "error", message: "Failed to create ZIP file." });
    }
  };

  const isProcessing = progress.status === "fetching" || progress.status === "zipping";

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-up">
      <div className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl -mr-16 -mt-16 rounded-full group-hover:bg-brand/20 transition-colors" />
        
        <div className="relative space-y-6">
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Paste Image/File URLs (one per line)
            </label>
            <textarea
              className="w-full h-48 bg-background border border-border rounded-2xl p-4 text-sm font-mono focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none resize-none"
              placeholder="https://example.com/image1.jpg&#10;https://example.com/photo2.png"
              value={urlsText}
              onChange={(e) => setUrlsText(e.target.value)}
              disabled={isProcessing}
            />
          </div>

          {progress.status !== "idle" && (
            <div className="space-y-3 p-4 rounded-2xl bg-brand/5 border border-brand/10">
              <div className="flex justify-between items-center text-xs font-bold text-brand">
                <span>{progress.message}</span>
                {progress.total > 0 && (
                  <span>
                    {Math.round((progress.current / progress.total) * 100)}%
                  </span>
                )}
              </div>
              <div className="h-2 w-full bg-brand/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand transition-all duration-300 ease-out shadow-[0_0_10px_rgba(var(--brand-rgb),0.5)]" 
                  style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
                />
              </div>
            </div>
          )}

          {errorLogs.length > 0 && (
            <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20 text-[11px] text-red-500 space-y-1 max-h-24 overflow-y-auto">
              <p className="font-bold uppercase tracking-widest text-[10px]">Warnings ({errorLogs.length})</p>
              {errorLogs.map((log, i) => <p key={i}>• {log}</p>)}
            </div>
          )}

          <button
            onClick={handlePack}
            disabled={isProcessing || !urlsText.trim()}
            className={clsx(
              "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]",
              isProcessing 
                ? "bg-muted text-surface cursor-not-allowed" 
                : "bg-brand text-white hover:bg-brand-dim hover:shadow-lg hover:shadow-brand/20"
            )}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                <span className="text-xl">📦</span>
                Pack All into ZIP
              </>
            )}
          </button>

          <p className="text-[10px] text-center text-muted-foreground">
            Compatible with any public image URL. Files are processed entirely in your browser for 100% privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
