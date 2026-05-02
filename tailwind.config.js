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
      screens: {
        'xs': '475px',
      },
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--text))",
        "foreground-secondary": "hsl(var(--text-secondary))",
        muted: "hsl(var(--text-muted))",
        subtle: "hsl(var(--text-subtle))",
        "muted-foreground": "hsl(var(--text-muted))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          dim:     "hsl(var(--brand-dim))",
          deep:    "hsl(var(--brand-deep))",
          light:   "hsl(var(--brand-light))",
          muted:   "hsl(var(--brand-muted))",
          vibrant: "hsl(var(--brand-vibrant))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light:   "hsl(var(--accent-light))",
          dim:     "hsl(var(--accent-dim))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          muted:   "hsl(var(--surface-muted))",
          alt:     "hsl(var(--surface-alt))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          hover:   "hsl(var(--border-hover))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error:   "hsl(var(--error))",
      },
      borderRadius: {
        'lg':  'var(--radius)',
        'xl':  'var(--radius-lg)',
        '2xl': 'var(--radius-xl)',
        '3xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'xs':    'var(--shadow-xs)',
        'sm':    'var(--shadow-sm)',
        'md':    'var(--shadow-md)',
        'lg':    'var(--shadow-lg)',
        'xl':    'var(--shadow-xl)',
        'brand': 'var(--shadow-brand)',
        'glow':  'var(--shadow-glow)',
      },
      animation: {
        "fade-up":    "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "scale-in":   "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down": "slideDown 0.3s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "shimmer":    "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { left: "100%" },
        },
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
};

module.exports = config;
