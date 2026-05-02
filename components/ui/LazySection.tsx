"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** Skeleton placeholder height while content is off-screen (default: "400px") */
  fallbackHeight?: string;
  /** IntersectionObserver rootMargin — how early to start rendering (default: "200px") */
  rootMargin?: string;
  /** Additional className for the wrapper */
  className?: string;
}

/**
 * LazySection — Intersection Observer wrapper that defers rendering
 * of heavy sections until they're near the viewport. Greatly reduces
 * initial DOM size and improves mobile performance (LCP / FCP).
 */
export default function LazySection({
  children,
  fallbackHeight = "400px",
  rootMargin = "200px",
  className = "",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver isn't supported, render immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        children
      ) : (
        <div
          className="animate-pulse rounded-2xl"
          style={{
            height: fallbackHeight,
            background: "hsl(var(--surface-muted))",
          }}
        />
      )}
    </div>
  );
}
