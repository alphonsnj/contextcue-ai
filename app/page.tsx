import Header from "../components/Header";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  const faqs = [
    {
      q: "Why does text-based communication frequently lead to misunderstandings?",
      a: "Text lacks vocal prosody (pitch, tone, pauses) and physical body language. Studies show that when intent is ambiguous, readers default to a more negative interpretation than intended. ContextCue AI helps identify the underlying cues to provide emotional clarity."
    },
    {
      q: "How does the Context Engine determine a message's tone?",
      a: "Our model analyzes syntactic structure, word choice, punctuation patterns (like short periods or trailing ellipses), and conversational pacing. It maps these markers to standard communication models to predict how a message will be received."
    },
    {
      q: "Can I use ContextCue AI if I have cognitive or neurological processing differences?",
      a: "Yes! ContextCue is designed with neurodivergence in mind (such as ADHD, Autism, or social communication differences). It acts as an accessibility-first assistant to make reading and writing digital communications less stressful."
    },
    {
      q: "Is my personal message data stored or used to train models?",
      a: "Absolutely not. We prioritize user privacy. In alignment with our privacy-first guidelines, all processed text is analyzed transiently in memory, never saved, and never utilized for model training purposes."
    }
  ];

  return (
    <>
      {/* Header component containing navbar and theme controller */}
      <Header />

      {/* Main content wrapper containing page sections, linked to by the skip link */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Hero />
        
        <Features />
        
        <Demo />

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-32 border-b border-border-base bg-card-bg/10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[60px] pointer-events-none" aria-hidden="true" />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-text-base sm:text-4xl">
                Frequently Answered Questions
              </h2>
              <p className="mt-4 text-base text-text-muted">
                Learn more about the science of tone analysis and digital accessibility.
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-border-base bg-card-bg/60 p-6 backdrop-blur-sm"
                >
                  <h3 className="font-display text-base sm:text-lg font-bold text-text-base">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Semantic footer containing legal and navigation lists */}
      <Footer />
    </>
  );
}
