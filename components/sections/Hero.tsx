"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_VIDEO_PATH = "/videos/hero.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop after mount (SSR-safe) — parallax only runs on ≥768px
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax only on desktop — mobile gets y:0 for smooth scrolling
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["0%", "12%"] : ["0%", "0%"]
  );
  const parallaxY = useSpring(rawY, { stiffness: 120, damping: 30, mass: 0.4 });

  // Scale: slightly less crop on mobile
  const videoScale = isDesktop ? 1.1 : 1.05;

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="sticky top-0 z-0 min-h-[100svh] overflow-hidden"
    >
      {/* ── Parallax video wrapper ─────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: parallaxY,
          scale: videoScale,
          willChange: "transform",
          translateZ: 0,
        }}
      >
        <video
          src={HERO_VIDEO_PATH}
          autoPlay
          muted
          loop
          playsInline
          // metadata on mobile saves bandwidth; auto on desktop for smooth loop
          preload={isDesktop ? "auto" : "metadata"}
          className="hero-video absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(135deg, #050911 0%, #0c1a3a 50%, #050911 100%)",
            transform: "translateZ(0)",
          }}
        />
      </motion.div>

      {/* ── Subtle dark overlay ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "rgba(5,9,17,0.22)" }}
      />

      {/* ── Bottom fade — merges into About section ──────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 z-[2] pointer-events-none"
        style={{
          height: "60%",
          background:
            "linear-gradient(to top, #050911 0%, rgba(5,9,17,0.97) 18%, rgba(5,9,17,0.75) 45%, transparent 100%)",
        }}
      />

      {/* ── Bottom-left content ──────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 z-10 w-full px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10 lg:pb-14">
        <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5 max-w-lg sm:max-w-xl lg:max-w-none">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/35 backdrop-blur-md px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="hidden sm:inline">Open to Data Engineering · Data Science · AI/ML Opportunities</span>
              <span className="sm:hidden">Open to DE · DS · AI/ML Roles</span>
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-end gap-x-5 gap-y-2 sm:gap-x-8 xl:gap-x-10"
          >
            {[
              { value: "6+",  label: "Years Exp."      },
              { value: "3",   label: "Cloud Platforms"  },
              { value: "15+", label: "Technologies"     },
              { value: "3",   label: "Companies"        },
            ].map(({ value, label }) => (
              <div key={label} className="text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text-cyan drop-shadow-lg leading-none">
                  {value}
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] text-white/55 tracking-wide uppercase">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            <Button
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="gap-2 font-semibold backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 h-10 sm:h-12"
            >
              <Sparkles size={15} />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="gap-2 font-semibold backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 h-10 sm:h-12"
            >
              <Mail size={15} />
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={scrollToNext}
            className="flex flex-col items-start gap-1.5 text-white/40 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to next section"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </motion.button>

        </div>
      </div>
    </section>
  );
}
