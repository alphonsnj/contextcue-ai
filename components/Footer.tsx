export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Context Decoder", href: "#demo" },
        { label: "Integrations", href: "#" },
        { label: "Pricing", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Community Guides", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press Kit", href: "#" },
        { label: "Contact", href: "#" }
      ]
    }
  ];

  return (
    <footer className="w-full border-t border-border-base bg-bg-base transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Tagline Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="10" r="1.5" className="fill-current" />
              </svg>
              <span className="font-display text-lg font-bold tracking-tight text-text-base">
                ContextCue <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted max-w-xs leading-relaxed">
              Bridging the gap between literal text and human intent. Accessibility-first tone analysis for modern teams.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-text-base transition-colors" aria-label="Follow us on Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-text-base transition-colors" aria-label="Follow us on GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-base">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-text-muted hover:text-text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded px-1 py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 border-t border-border-base pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} ContextCue AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-base transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-base transition-colors">Terms</a>
            <a href="#" className="hover:text-text-base transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
