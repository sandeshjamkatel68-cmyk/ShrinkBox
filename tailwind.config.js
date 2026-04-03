/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--text))",
        muted:      "hsl(var(--text-muted))",
        subtle:     "hsl(var(--text-subtle))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          dim:     "hsl(var(--brand-dim))",
          light:   "hsl(var(--brand-light))",
          muted:   "hsl(var(--brand-muted))",
          vibrant: "hsl(var(--brand-vibrant))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light:   "hsl(var(--accent-light))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          muted:   "hsl(var(--surface-muted))",
        },
        border: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-up":    "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer":    "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
