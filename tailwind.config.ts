import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Base palette
        base: {
          DEFAULT: "#050911",
          surface: "#0c1120",
          card: "#0f1629",
        },
        // Accent system
        cyan: {
          DEFAULT: "#38bdf8",
          dim: "#0ea5e9",
          glow: "rgba(56,189,248,0.15)",
          border: "rgba(56,189,248,0.2)",
        },
        violet: {
          DEFAULT: "#a78bfa",
          dim: "#8b5cf6",
          glow: "rgba(167,139,250,0.15)",
        },
        emerald: {
          DEFAULT: "#34d399",
          glow: "rgba(52,211,153,0.15)",
        },
        // Text system
        "text-primary": "#f0f4ff",
        "text-secondary": "#8892ab",
        "text-muted": "#4a5568",
        // Border
        "border-subtle": "rgba(255,255,255,0.06)",
        "border-accent": "rgba(56,189,248,0.2)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-subtle":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(5,9,17,0.55) 0%, rgba(5,9,17,0.75) 60%, rgba(5,9,17,1) 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.21,0.47,0.32,0.98) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 30px rgba(56,189,248,0.15), 0 0 60px rgba(56,189,248,0.05)",
        "cyan-glow-sm": "0 0 15px rgba(56,189,248,0.2)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.15)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.21, 0.47, 0.32, 0.98)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
