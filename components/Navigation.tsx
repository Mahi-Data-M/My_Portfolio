"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About",         href: "#about" },
  { label: "Experience",    href: "#experience" },
  { label: "Projects",      href: "#projects" },
  { label: "Certifications",href: "#certifications" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink]     = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [scrolled, setScrolled]           = useState(false);

  /* ── scroll shadow trigger ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section detection ──────────────────────────────────── */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── smooth scroll helper ──────────────────────────────────────── */
  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── the link that should show the bubble ──────────────────────── */
  const bubbleTarget = hoveredLink ?? activeSection;

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          DESKTOP FLOATING CAPSULE NAV
      ════════════════════════════════════════════════════════════ */}
      {/* Fixed centering wrapper — keeps centering separate from Framer Motion transform */}
      <div className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="pointer-events-auto"
        style={{ willChange: "transform" }}
      >
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: scrolled
              ? "0 0 40px rgba(56,189,248,0.12), 0 0 80px rgba(56,189,248,0.05)"
              : "0 0 20px rgba(56,189,248,0.06)",
            transition: "box-shadow 0.4s ease",
          }}
        />

        {/* Capsule container */}
        <div
          className="relative flex items-center gap-0.5 rounded-full px-2 py-2"
          style={{
            background: "rgba(10, 12, 22, 0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.3) inset",
          }}
        >
          {/* ── Logo ─────────────────────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative flex items-center justify-center w-9 h-9 rounded-full mr-1 shrink-0 group"
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
              boxShadow: "0 2px 12px rgba(56,189,248,0.35)",
            }}
            aria-label="Back to top"
          >
            <span className="text-white font-bold text-sm select-none">M</span>
          </button>

          {/* ── Nav links ────────────────────────────────────────── */}
          <nav
            className="flex items-center gap-0.5"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id        = href.slice(1);
              const isActive  = activeSection === id;
              const isBubble  = bubbleTarget  === id;

              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  onMouseEnter={() => setHoveredLink(id)}
                  className="relative px-3 py-2 text-sm font-medium text-white rounded-full select-none z-10 whitespace-nowrap"
                  style={{ transition: "color 0.2s" }}
                >
                  {/* Sliding bubble */}
                  {isBubble && (
                    <motion.span
                      layoutId="nav-bubble"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: hoveredLink
                          ? "rgba(255,255,255,0.13)"
                          : "rgba(56,189,248,0.18)",
                        border: hoveredLink
                          ? "1px solid rgba(255,255,255,0.12)"
                          : "1px solid rgba(56,189,248,0.28)",
                        boxShadow: hoveredLink
                          ? "none"
                          : "0 0 12px rgba(56,189,248,0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 34,
                      }}
                    />
                  )}
                  <span
                    className="relative"
                    style={{
                      textShadow: isBubble && !hoveredLink
                        ? "0 0 20px rgba(56,189,248,0.6)"
                        : "none",
                    }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </nav>

        </div>
      </motion.header>
      </div>

      {/* ════════════════════════════════════════════════════════════
          MOBILE NAV
      ════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-3 left-3 right-3 z-50 md:hidden"
      >
        <div
          className="flex items-center justify-between px-3 py-2.5 rounded-2xl"
          style={{
            background: "rgba(10, 12, 22, 0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
                boxShadow: "0 2px 10px rgba(56,189,248,0.3)",
              }}
            >
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-sm font-semibold text-white">
              Muskaan<span className="text-cyan-400">.</span>
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.07)" }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{ rotate: 90,    opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{ rotate: -90,    opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-2 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(10, 12, 22, 0.95)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
              }}
            >
              <nav className="flex flex-col p-2 gap-0.5">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id       = href.slice(1);
                  const isActive = activeSection === id;

                  return (
                    <motion.button
                      key={href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1,  x: 0   }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      onClick={() => handleNav(href)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      )}
                      style={
                        isActive
                          ? {
                              background: "rgba(56,189,248,0.15)",
                              border: "1px solid rgba(56,189,248,0.2)",
                            }
                          : { border: "1px solid transparent" }
                      }
                    >
                      {label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Mobile CTA row */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
