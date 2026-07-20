export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 flex flex-col items-center justify-center border-b border-border-base bg-gradient-to-b from-bg-base via-bg-base to-card-bg">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-slow" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-secondary/8 animate-float blur-[60px] sm:blur-[90px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-accent/8 animate-float blur-[60px] sm:blur-[90px] pointer-events-none" style={{ animationDelay: "2s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-8 hover:bg-primary/10 transition-colors duration-200">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" aria-hidden="true" />
          Introducing ContextCue AI v1.0
        </div>

        {/* Primary Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-base max-w-4xl leading-[1.1] sm:leading-[1.05]">
          Understand what people{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            may mean
          </span>
          , not just what they say.
        </h1>

        {/* Subtitle / Body text */}
        <p className="mt-8 text-lg sm:text-xl text-text-muted max-w-2xl font-normal leading-relaxed">
          ContextCue AI is an accessibility-first communication assistant. 
          By analyzing subtle emotional cues, unspoken intent, and tone context, 
          we bridge the gaps in remote work interactions, customer support, and text-based collaboration.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <a
            href="#demo"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover shadow-lg shadow-glow-effect hover:shadow-primary/25 transition-all duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary cursor-pointer"
          >
            Try Interactive Demo
          </a>
          <a
            href="#features"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-border-base bg-card-bg px-8 text-base font-semibold text-text-base hover:bg-card-hover hover:border-text-muted transition-all duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary cursor-pointer"
          >
            Learn Features
          </a>
        </div>

        {/* Interactive mock interface (Visual decoration representing Context analysis) */}
        <div className="mt-16 sm:mt-24 w-full max-w-4xl rounded-2xl border border-border-base bg-card-bg/60 p-2 backdrop-blur-md shadow-2xl">
          <div className="rounded-xl border border-border-base/50 bg-bg-base/70 overflow-hidden">
            {/* Mock Application Window Header */}
            <div className="flex items-center justify-between border-b border-border-base px-4 py-3 bg-card-bg/30">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-semibold font-mono text-text-muted select-none">
                context-cue-engine v1.0.0
              </span>
              <div className="w-12" aria-hidden="true" />
            </div>
            
            {/* Mock Application Content */}
            <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-6 text-left">
              {/* Left Column - Input message */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-xs font-semibold tracking-wider text-text-muted uppercase">
                  Incoming Raw Communication
                </div>
                <div className="flex-1 rounded-lg border border-border-base bg-card-bg/20 p-4 font-sans text-sm sm:text-base text-text-base relative overflow-hidden">
                  <span className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-xl" aria-hidden="true" />
                  "Sure, that's fine. We can reschedule to tomorrow morning. Looking forward to it."
                </div>
              </div>

              {/* Right Column - Analyzed Cues */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-xs font-semibold tracking-wider text-text-muted uppercase">
                  Decoded Hidden Context
                </div>
                <div className="rounded-lg border border-border-base bg-primary/5 p-4 flex flex-col gap-3 text-sm">
                  {/* Sentiment Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">Decoded Intent:</span>
                    <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Hesitant Agreement
                    </span>
                  </div>
                  {/* Cues checklist */}
                  <ul className="flex flex-col gap-2 text-xs text-text-muted mt-1">
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">●</span>
                      <span>Tone is polite but word structure indicates mild exhaustion.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-bold">●</span>
                      <span>"Sure, that's fine." is typically passive-agreeable in scheduling.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">●</span>
                      <span>Potential overlap with other commitments (detected fatigue).</span>
                    </li>
                  </ul>
                  {/* Action recommendation */}
                  <div className="mt-2 border-t border-border-base/50 pt-3">
                    <div className="text-[11px] font-semibold uppercase text-text-muted tracking-wide mb-1">
                      Adaptive Suggestion
                    </div>
                    <p className="text-xs italic text-text-base">
                      "Would you prefer tomorrow afternoon or Wednesday instead if that is more convenient? No rush."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
