"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  // 'theme' can be: null (system default), 'light', or 'dark'
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [systemIsDark, setSystemIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Read theme from localStorage
    const savedTheme = localStorage.getItem("color-scheme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }

    // Check system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemIsDark(mediaQuery.matches);

    // Listen for system preference changes
    const handler = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    const doc = document.documentElement;
    const meta = document.querySelector('meta[name="color-scheme"]');

    if (theme === null) {
      // Transition from System Default to Custom Override (Opposite of system)
      const nextTheme = systemIsDark ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("color-scheme", nextTheme);
      
      // Update DOM classes and meta tags
      doc.classList.remove("light", "dark");
      doc.classList.add(nextTheme);
      if (meta) meta.setAttribute("content", nextTheme);
    } else {
      // Transition from Custom Override back to System Default
      setTheme(null);
      localStorage.removeItem("color-scheme");
      
      // Update DOM
      doc.classList.remove("light", "dark");
      if (meta) meta.setAttribute("content", "light dark");
    }
  };

  if (!mounted) {
    // Render a placeholder button during SSR to prevent layout shifting
    return (
      <div className="w-10 h-10 rounded-full bg-card-bg border border-border-base opacity-20" aria-hidden="true" />
    );
  }

  const isDarkActive = theme === "dark" || (theme === null && systemIsDark);

  let ariaLabel = "Color theme: Follow system preferences";
  if (theme === "light") {
    ariaLabel = "Color theme: Pinned to light mode. Click to restore system settings.";
  } else if (theme === "dark") {
    ariaLabel = "Color theme: Pinned to dark mode. Click to restore system settings.";
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-card-bg border border-border-base text-text-base hover:bg-card-hover hover:border-primary transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {/* Visual Indicator of what mode is active */}
      <span className="relative w-5 h-5 flex items-center justify-center">
        {theme === null ? (
          // System Setting Icon (Monitor with mini sun/moon representation inside)
          <svg
            className="w-5 h-5 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            {isDarkActive ? (
              <circle cx="12" cy="10" r="2" className="fill-current" />
            ) : (
              <circle cx="12" cy="10" r="3" />
            )}
          </svg>
        ) : isDarkActive ? (
          // Dark Mode Icon (Moon)
          <svg
            className="w-5 h-5 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // Light Mode Icon (Sun)
          <svg
            className="w-5 h-5 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </span>

      {/* Mini status indicator at the top right of the toggle */}
      {theme !== null && (
        <span 
          className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-bg-base" 
          title="Theme preference pinned"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
