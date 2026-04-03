"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="
        w-9 h-9 rounded-xl flex items-center justify-center text-base
        border border-border bg-surface
        text-muted hover:text-foreground
        hover:border-brand/40
        transition-all duration-200
        shadow-sm
      "
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
