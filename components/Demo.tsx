"use client";

import { useEffect, useState } from "react";

interface Preset {
  id: string;
  source: "Slack" | "Email" | "Chat";
  sender: string;
  text: string;
  decoded: {
    tone: string;
    toneClass: string;
    intent: string;
    cues: string[];
    suggestion: string;
  };
}

const PRESETS: Preset[] = [
  {
    id: "preset-slack",
    source: "Slack",
    sender: "Alex (Product Manager)",
    text: "No worries. Let's just do it your way. I don't want to hold up the launch.",
    decoded: {
      tone: "Reluctant Compliance / Passive-Aggressive",
      toneClass: "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20",
      intent: "Complying under perceived pressure while feeling ignored.",
      cues: [
        "\"No worries\" paired with \"your way\" is a common marker of frustration or feeling unheard.",
        "\"I don't want to hold up the launch\" indicates they feel their feedback is treated as a blocker rather than a contribution."
      ],
      suggestion: "Hey Alex, I really value your perspective on this. If you feel strongly about your approach, let's take 10 minutes to talk it through. I want to make sure we make the best decision, not just the fastest one."
    }
  },
  {
    id: "preset-email",
    source: "Email",
    sender: "Sarah (Client Lead)",
    text: "Thanks for the updated proposal. We'll run this by the leadership board and get back to you next week.",
    decoded: {
      tone: "Neutral / Deferring Decision",
      toneClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
      intent: "Postponing review, potential sign of low priority or standard bureaucracy.",
      cues: [
        "\"Get back to you next week\" lacks a firm commitment or day, indicating standard deferral.",
        "No follow-up questions or immediate feedback suggestions indicates they might need more conviction to pitch it internally."
      ],
      suggestion: "Thanks Sarah. While the board reviews the proposal, would it be helpful if I prepared a 1-page summary of the ROI metrics to make their review easier? Let me know if any questions come up."
    }
  },
  {
    id: "preset-chat",
    source: "Chat",
    sender: "Devin (Tech Lead)",
    text: "is it done?",
    decoded: {
      tone: "Direct / High Urgency",
      toneClass: "bg-secondary/10 text-secondary dark:text-secondary border-secondary/20",
      intent: "Seeking immediate status update due to external deadlines or blockers.",
      cues: [
        "Short, lower-cased sentence without a greeting is a sign of speed or typing on mobile, not necessarily rudeness.",
        "Asking directly \"is it done?\" signals high task-focus and potential pressure from another team."
      ],
      suggestion: "Hey Devin, yes, it's in final testing. I'm finishing the documentation and will push the code in 15 minutes. Let me know if you need to see a preview before that."
    }
  }
];

export default function Demo() {
  const [selectedId, setSelectedId] = useState(PRESETS[0].id);
  const [analyzing, setAnalyzing] = useState(false);
  const [copied, setCopied] = useState(false);

  const activePreset = PRESETS.find((p) => p.id === selectedId) || PRESETS[0];

  const handleSelect = (id: string) => {
    if (id === selectedId) return;
    setAnalyzing(true);
    setSelectedId(id);
    setCopied(false);
  };

  useEffect(() => {
    if (analyzing) {
      const timer = setTimeout(() => setAnalyzing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [analyzing]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activePreset.decoded.suggestion);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-20 lg:py-32 border-b border-border-base bg-bg-base relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-base">
            See ContextCue in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted">
            Select a raw message from the presets below to see how our engine decodes the unspoken content, 
            providing clarity and suggesting an optimal, empathetic response.
          </p>
        </div>

        {/* Preset Tabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8" role="tablist" aria-label="Preset messages selector">
          {PRESETS.map((preset) => {
            const isActive = preset.id === selectedId;
            return (
              <button
                key={preset.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${preset.id}`}
                id={`tab-${preset.id}`}
                onClick={() => handleSelect(preset.id)}
                type="button"
                className={`flex flex-col items-start text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-md shadow-glow-effect"
                    : "border-border-base bg-card-bg hover:border-text-muted hover:bg-card-hover"
                } focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {/* Miniature source indicators */}
                  <span className={`w-2 h-2 rounded-full ${
                    preset.source === "Slack" ? "bg-purple-500" : preset.source === "Email" ? "bg-amber-500" : "bg-cyan-500"
                  }`} aria-hidden="true" />
                  <span className="text-xs font-semibold text-text-muted">
                    {preset.source} — {preset.sender}
                  </span>
                </div>
                <p className="text-sm line-clamp-1 text-text-base font-normal">
                  "{preset.text}"
                </p>
              </button>
            );
          })}
        </div>

        {/* Decoder Workspace */}
        <div
          id={`panel-${activePreset.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activePreset.id}`}
          className="rounded-2xl border border-border-base bg-card-bg/40 backdrop-blur-sm overflow-hidden min-h-[380px] flex flex-col"
        >
          {/* Workspace bar */}
          <div className="flex items-center justify-between border-b border-border-base bg-card-bg/25 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Context Decoder Active
              </span>
            </div>
            <span className="text-xs text-text-muted font-mono">
              Source: {activePreset.source}
            </span>
          </div>

          {/* Core Content Box */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6 relative">
            {analyzing ? (
              /* Scanning Overlay */
              <div className="absolute inset-0 bg-bg-base/70 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-3">
                {/* Visual scanner wave */}
                <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide text-primary animate-pulse" aria-live="polite">
                  Reading between the lines...
                </span>
              </div>
            ) : null}

            {/* Analysis details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Message Display (Left Col) */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Message Content
                </div>
                <blockquote className="flex-1 rounded-xl border border-border-base bg-bg-base/50 p-5 text-sm sm:text-base italic leading-relaxed text-text-base relative">
                  <span className="absolute top-2 left-2 text-3xl font-serif text-border-base select-none leading-none">“</span>
                  <p className="relative pl-3">{activePreset.text}</p>
                </blockquote>
              </div>

              {/* Decoder Diagnostics (Right Col) */}
              <div className="md:col-span-7 flex flex-col gap-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Analysis Details
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-border-base bg-bg-base/30 p-5">
                  {/* Decoded Tone */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-sm font-bold text-text-base">Decoded Tone:</span>
                    <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-center ${activePreset.decoded.toneClass}`}>
                      {activePreset.decoded.tone}
                    </span>
                  </div>

                  {/* Decoded Intent */}
                  <div>
                    <span className="block text-sm font-bold text-text-base mb-1">Unspoken Intent:</span>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {activePreset.decoded.intent}
                    </p>
                  </div>

                  {/* Context Cues Checklist */}
                  <div>
                    <span className="block text-sm font-bold text-text-base mb-2">Key Emotional Cues:</span>
                    <ul className="flex flex-col gap-2">
                      {activePreset.decoded.cues.map((cue, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                          <span className="text-primary font-bold mt-0.5" aria-hidden="true">✔</span>
                          <span>{cue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Empathy Suggestion (Bottom panel) */}
            <div className="border-t border-border-base pt-6 mt-2 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Empathetic Adaptive Response Suggestion
                </span>
                <span className="visually-hidden" aria-live="polite">
                  {copied ? "Suggested response copied to clipboard" : ""}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 rounded-xl border border-primary/20 bg-primary/3 p-4 text-xs sm:text-sm italic text-text-base leading-relaxed">
                  "{activePreset.decoded.suggestion}"
                </div>
                <button
                  onClick={copyToClipboard}
                  type="button"
                  className={`flex h-11 items-center justify-center gap-2 rounded-full border px-6 text-xs font-bold transition-all duration-200 cursor-pointer ${
                    copied
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-border-base bg-card-bg text-text-base hover:bg-card-hover hover:border-primary"
                  } focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary`}
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy Suggestion
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
