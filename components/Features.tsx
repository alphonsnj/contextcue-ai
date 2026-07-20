export default function Features() {
  const features = [
    {
      title: "Multi-Dimensional Tone Analysis",
      description: "Go beyond basic 'positive/negative' sentiment. Decode subtle sarcasm, frustration, fatigue, passive-aggressiveness, and anxiety in real time.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: "Cultural & Idiomatic Awareness",
      description: "Understands regional slang, colloquial expressions, and complex cultural idioms that standard literal language models frequently misinterpret.",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Real-Time Collaborative Integrations",
      description: "Seamlessly decode context inside your favorite work tools. Native extensions for Slack, Microsoft Teams, Gmail, and browser-based interfaces.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M16 8h.01M12 8h.01M8 8h.01M16 12h.01M12 12h.01M8 12h.01M12 16h.01M8 16h.01" />
        </svg>
      )
    },
    {
      title: "Privacy-First Architecture",
      description: "Enterprise-ready compliance. We offer fully encrypted transactions, zero data-retention options, and lightweight client-side local processing.",
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 border-b border-border-base bg-card-bg/20 relative">
      {/* Decorative glows */}
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-secondary/5 blur-[70px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[70px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-base">
            Engineered for Empathetic Communication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted">
            Text lacks physical tone. ContextCue AI restores interpersonal nuance to remote communication, 
            helping teams work better together, reducing misunderstandings, and enhancing productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border border-border-base bg-card-bg hover:bg-card-hover hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-base border border-border-base shadow-sm group-hover:scale-105 transition-transform duration-200">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold text-text-base leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
