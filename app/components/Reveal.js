"use client";
import { useEffect } from "react";

// Fade-up on first visibility; fires once per element. Also lights the
// heatmap grid (staggered per-cell timing is set inline on each cell).
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll(".reveal:not(.is-in), .heatmap:not(.is-in)")
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}
