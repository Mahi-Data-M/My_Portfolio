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
    "Data Engineer",
    "Data Scientist",
    "AI Engineer",
    "ML Engineer",
    "Python",
    "PySpark",
    "Databricks",
    "AWS",
    "Azure",
    "GCP",
    "LangChain",
    "GenAI",
    "MLOps",
  ],
  authors: [{ name: "Muskaan Mahindrakar" }],
  // TODO: Update og:image with your actual profile image path
  openGraph: {
    type: "website",
    title: "Muskaan Mahindrakar — Data Engineer · AI/ML Engineer",
    description:
      "Building scalable data systems, intelligent analytics, and AI-powered solutions.",
    // url: "https://your-domain.com", // TODO: Add your deployed URL
  },
};

export const viewport: Viewport = {
  themeColor: "#050911",
};

/* ── Background ambient layer ───────────────────────────────────────────── */
function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Top-center cyan orb */}
      <div
        className="ambient-orb"
        style={{
          width: 800,
          height: 800,
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      {/* Bottom-left violet orb */}
      <div
        className="ambient-orb"
        style={{
          width: 600,
          height: 600,
          bottom: "20%",
          left: -100,
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />
      {/* Bottom-right cyan orb */}
      <div
        className="ambient-orb"
        style={{
          width: 500,
          height: 500,
          bottom: "10%",
          right: -80,
          background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
