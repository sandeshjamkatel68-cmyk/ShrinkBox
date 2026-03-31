"use client";

import { useState, useMemo } from "react";

type DocType = "privacy" | "terms";

export default function LegalGeneratorWidget() {
  const [docType, setDocType] = useState<DocType>("privacy");
  const [siteName, setSiteName] = useState("ShrinkBox");
  const [siteUrl, setSiteUrl] = useState("https://shrink-box.com");
  const [email, setEmail] = useState("support@shrink-box.com");
  const [useCookies, setUseCookies] = useState(true);
  const [useAnalytics, setUseAnalytics] = useState(true);
  const [useAds, setUseAds] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatedDoc = useMemo(() => {
    const today = new Date().toLocaleDateString("en-US", { 
      year: 'numeric', month: 'long', day: 'numeric' 
    });

    if (docType === "privacy") {
      return `
# Privacy Policy for ${siteName}

Last updated: ${today}

At ${siteName}, accessible from ${siteUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${siteName} and how we use it.

## Consent
By using our website, you hereby consent to our Privacy Policy and agree to its terms.

## Information we collect
The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

## How we use your information
We use the information we collect in various ways, including to:
- Provide, operate, and maintain our website
- Improve, personalize, and expand our website
- Understand and analyze how you use our website
- Develop new products, services, features, and functionality
- Communicate with you, either directly or through one of our partners
- Find and prevent fraud
${useCookies ? "- Use cookies to enhance user experience" : ""}
${useAnalytics ? "- Analyze website traffic via third-party tools" : ""}
${useAds ? "- Show personalized advertisements" : ""}

## Log Files
${siteName} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.

## Contact Us
If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at ${email}.
      `.trim();
    } else {
      return `
# Terms of Service for ${siteName}

Last updated: ${today}

Welcome to ${siteName}!

These terms and conditions outline the rules and regulations for the use of ${siteName}'s Website, located at ${siteUrl}.

By accessing this website we assume you accept these terms and conditions. Do not continue to use ${siteName} if you do not agree to take all of the terms and conditions stated on this page.

## Cookies
${useCookies ? "We employ the use of cookies. By accessing " + siteName + ", you agreed to use cookies in agreement with our Privacy Policy." : "This website does not use cookies for tracking or marketing purposes."}

## License
Unless otherwise stated, ${siteName} and/or its licensors own the intellectual property rights for all material on ${siteName}. All intellectual property rights are reserved. You may access this from ${siteName} for your own personal use subjected to restrictions set in these terms and conditions.

You must not:
- Republish material from ${siteName}
- Sell, rent or sub-license material from ${siteName}
- Reproduce, duplicate or copy material from ${siteName}
- Redistribute content from ${siteName}

## Disclaimer
To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
- limit or exclude our or your liability for death or personal injury;
- limit or exclude our or your liability for fraud or fraudulent misrepresentation;
- limit any of our or your liabilities in any way that is not permitted under applicable law.

If you have any questions regarding our terms, please contact us at ${email}.
      `.trim();
    }
  }, [docType, siteName, siteUrl, email, useCookies, useAnalytics, useAds]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDoc);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start animate-in fade-in duration-500">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-5">
          <div className="flex gap-2 p-1 bg-[var(--surface-muted)] rounded-xl border border-[var(--border)] mb-4">
            <button 
              onClick={() => setDocType("privacy")}
              className={`flex-1 h-9 rounded-lg text-xs font-bold transition-all ${docType === "privacy" ? 'bg-white text-[var(--text)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text)]'}`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setDocType("terms")}
              className={`flex-1 h-9 rounded-lg text-xs font-bold transition-all ${docType === "terms" ? 'bg-white text-[var(--text)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text)]'}`}
            >
              Terms of Service
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-[var(--text-subtle)] uppercase tracking-widest mb-1.5">Website Name</label>
              <input 
                type="text" 
                value={siteName} 
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] text-sm focus:outline-none focus:border-[var(--brand)]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[var(--text-subtle)] uppercase tracking-widest mb-1.5">Website URL</label>
              <input 
                type="text" 
                value={siteUrl} 
                onChange={(e) => setSiteUrl(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] text-sm focus:outline-none focus:border-[var(--brand)]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[var(--text-subtle)] uppercase tracking-widest mb-1.5">Contact Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] text-sm focus:outline-none focus:border-[var(--brand)]"
              />
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-[10px] font-bold text-[var(--text-subtle)] uppercase tracking-widest">Options</p>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={useCookies} onChange={(e) => setUseCookies(e.target.checked)} className="w-4 h-4 rounded border-[var(--border)] text-[var(--brand)] focus:ring-[var(--brand)]" />
              <span className="text-xs font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">We use cookies</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={useAnalytics} onChange={(e) => setUseAnalytics(e.target.checked)} className="w-4 h-4 rounded border-[var(--border)] text-[var(--brand)] focus:ring-[var(--brand)]" />
              <span className="text-xs font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">We use analytics</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={useAds} onChange={(e) => setUseAds(e.target.checked)} className="w-4 h-4 rounded border-[var(--border)] text-[var(--brand)] focus:ring-[var(--brand)]" />
              <span className="text-xs font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">We show ads</span>
            </label>
          </div>

          <button 
            onClick={copyToClipboard}
            className="w-full h-11 rounded-xl bg-[var(--brand)] text-white text-sm font-bold shadow-[var(--shadow-sm)] hover:bg-[var(--brand-dim)] transition-all mt-2"
          >
            {copied ? "Copied Correct!" : `Copy ${docType === "privacy" ? "Privacy Policy" : "Terms"}`}
          </button>
        </div>

        <div className="bg-[var(--surface-muted)] border border-[var(--border)] rounded-2xl p-6 min-h-[400px] overflow-hidden">
          <p className="text-[10px] font-bold text-[var(--text-subtle)] uppercase tracking-widest mb-4">Live Preview</p>
          <div className="prose prose-sm max-h-[450px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[var(--border)]">
            <div className="text-[11px] text-[var(--text-muted)] font-serif leading-relaxed whitespace-pre-wrap">
              {generatedDoc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
