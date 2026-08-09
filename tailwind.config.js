/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1200px',
      lg: '1200px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Arial Narrow', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-data)', 'ui-monospace', 'monospace'],
      },
      colors: {
        casing: 'var(--casing)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        'ink-dim': 'var(--ink-dim)',
        signal: 'var(--signal)',
        removed: 'var(--removed)',
      },
      fontSize: {
        xs: ['12px', '1.4'],
        sm: ['14px', '1.5'],
        base: ['16px', '1.6'],
        lg: ['20px', '1.4'],
        xl: ['28px', '1.15'],
        '2xl': ['40px', '1'],
        '3xl': ['64px', '0.95'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
}
