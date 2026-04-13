import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ── Fonts ─────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Muskaan Mahindrakar — Data Engineer · Data Scientist · AI/ML Engineer",
  description:
    "Portfolio of Muskaan Mahindrakar. 6+ years building scalable data pipelines, intelligent analytics, and AI-powered solutions across AWS, Azure, GCP, Databricks, and more.",
  keywords: [
    "Data Engineer", "Data Scientist", "AI Engineer", "ML Engineer",
    "Python", "PySpark", "Databricks", "AWS", "Azure", "GCP",
    "LangChain", "GenAI", "MLOps",
  ],
  authors: [{ name: "Muskaan Mahindrakar" }],
  openGraph: {
    type: "website",
    title: "Muskaan Mahindrakar — Data Engineer · AI/ML Engineer",
    description:
      "Building scalable data systems, intelligent analytics, and AI-powered solutions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050911",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,   // allow pinch-zoom for accessibility
  userScalable: true,
};

/* ── Ambient background — desktop-only orbs, single lightweight layer on mobile ── */
function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Subtle grid overlay — always visible, very low opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top-center cyan orb — scaled down on mobile */}
      <div
        className="ambient-orb hidden sm:block"
        style={{
          width: "clamp(300px, 55vw, 800px)",
          height: "clamp(300px, 55vw, 800px)",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      {/* Bottom-left violet orb */}
      <div
        className="ambient-orb hidden sm:block"
        style={{
          width: "clamp(200px, 40vw, 600px)",
          height: "clamp(200px, 40vw, 600px)",
          bottom: "20%",
          left: "-5%",
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />
      {/* Bottom-right cyan orb */}
      <div
        className="ambient-orb hidden md:block"
        style={{
          width: "clamp(200px, 35vw, 500px)",
          height: "clamp(200px, 35vw, 500px)",
          bottom: "10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      {/* Mobile-only: single minimal orb */}
      <div
        className="ambient-orb sm:hidden"
        style={{
          width: 280,
          height: 280,
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

/* ── Root layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="relative min-h-screen font-sans antialiased">
        <AmbientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
