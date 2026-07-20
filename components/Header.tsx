"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Interactive Demo" },
    { href: "#faq", label: "How It Works" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-base bg-bg-base/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary rounded-md px-2 py-1"
          >
            {/* Visual Logo SVG */}
            <svg
              className="w-8 h-8 text-primary group-hover:scale-105 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              {/* Cue representation (mini glowing circle) */}
              <circle cx="12" cy="10" r="1.5" className="fill-current animate-pulse" />
            </svg>
            <span className="font-display text-xl font-bold tracking-tight text-text-base">
              ContextCue <span className="text-primary">AI</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-text-base transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary rounded-md px-2.5 py-1.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls (Toggle & CTA) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#demo"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary-hover shadow-md shadow-glow-effect transition-all duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary cursor-pointer"
          >
            Try Context Decoding
          </a>
        </div>

        {/* Mobile Controls (Menu Toggle & Theme Toggle) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-base text-text-base hover:bg-card-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              // Close Icon
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border-base bg-bg-base/95 backdrop-blur-md"
        >
          <nav aria-label="Mobile Navigation" className="p-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-text-muted hover:bg-card-hover hover:text-text-base transition-all focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-border-base pt-4">
                <a
                  href="#demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-white hover:bg-primary-hover shadow-md transition-all focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary cursor-pointer"
                >
                  Try Context Decoding
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
