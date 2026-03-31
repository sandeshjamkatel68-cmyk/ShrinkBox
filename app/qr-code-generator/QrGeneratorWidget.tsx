"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrGeneratorWidget() {
  const [data, setData] = useState("https://shrink-box.com");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQr = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "shrinkbox_qr_code.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-5">
        <div>
          <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Website URL or Text</label>
          <input 
            type="text" 
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-sm font-medium focus:outline-none focus:border-[var(--brand)] transition-colors"
            placeholder="https://example.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">QR Color</label>
            <input 
              type="color" 
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-full h-11 px-1 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--text-subtle)] uppercase tracking-wider mb-2">Background</label>
            <input 
              type="color" 
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full h-11 px-1 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col items-center py-6 gap-6">
          <div ref={qrRef} className="p-4 bg-white rounded-xl shadow-sm border border-[var(--border)]">
            <QRCodeCanvas 
              value={data || " "}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
              level="H"
              includeMargin={false}
            />
          </div>

          <button 
            onClick={downloadQr}
            className="w-full h-11 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all"
          >
            Download PNG
          </button>
        </div>
      </div>
    </div>
  );
}
