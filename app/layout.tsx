
import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "../styles/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ContextCue AI — Understand What People Mean",
  description: "Understand what people may mean, not just what they say. ContextCue AI is an accessibility-first communication assistant that decodes tone, hidden intent, sentiment, and emotional cues in real-time.",
  applicationName: "ContextCue AI",
  keywords: ["AI communication", "context decoding", "sentiment analysis", "tone interpreter", "accessibility assistant", "interpersonal communication"],
  authors: [{ name: "ContextCue AI Team" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const theme = localStorage.getItem("color-scheme");
                if (theme === "dark" || theme === "light") {
                  document.documentElement.classList.add(theme);
                  const meta = document.querySelector('meta[name="color-scheme"]');
                  if (meta) meta.content = theme;
                }
              } catch (e) {}
            })()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-text-base">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
