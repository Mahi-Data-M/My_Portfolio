"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/Mahi-Data-M",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muskaan-mahi/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:muskaan.data.m@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border-subtle">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.3), rgba(167,139,250,0.2), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="text-sm font-semibold text-text-primary">
                Muskaan Mahindrakar
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Data Engineer · Data Scientist · AI/ML Engineer. Building scalable
              data systems and intelligent AI solutions.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/8 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-text-muted hover:text-cyan-400 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Status / CTA */}
          <div>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
              Availability
            </h3>
            <div className="p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-xs text-text-muted">
                Data Engineering · Data Science · AI/ML Engineering roles
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-xs text-text-muted flex items-center gap-1.5">
            © {new Date().getFullYear()} Muskaan Mahindrakar. Built with{" "}
            <Heart size={11} className="text-rose-400 fill-rose-400" />
            using Next.js, Framer Motion &amp; Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/8 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
