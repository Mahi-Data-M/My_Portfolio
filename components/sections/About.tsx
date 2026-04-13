"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "@/lib/animations";
import { Database, Brain, Cloud, BarChart3, Zap, Users } from "lucide-react";

const STATS = [
  { value: "6+", label: "Years Experience", icon: Zap },
  { value: "3", label: "Cloud Platforms", icon: Cloud },
  { value: "15+", label: "Core Technologies", icon: Database },
  { value: "3", label: "Industries Served", icon: BarChart3 },
  { value: "8+", label: "AI/ML Projects", icon: Brain },
  { value: "3", label: "Enterprise Clients", icon: Users },
];

const HIGHLIGHTS = [
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Production-grade pipelines processing terabytes daily across cloud-native architectures.",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "AI & ML",
    desc: "LLMs, RAG systems, AI agents, and MLOps workflows that move from prototype to production.",
    color: "violet",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Multi-cloud expertise across AWS, Azure, and GCP with CI/CD and containerized deployments.",
    color: "sky",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.55"],
  });
  // Subtle 18px rise — completes quickly as section enters viewport
  const rawY = useTransform(scrollYProgress, [0, 1], [18, 0]);
  // Spring smooths out any scroll jank into buttery motion
  const contentY = useSpring(rawY, { stiffness: 90, damping: 28, mass: 0.6 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 pb-16 sm:pb-24 lg:pb-32 pt-12 sm:pt-16"
      style={{
        background: "#050911",
        borderRadius: "28px 28px 0 0",
        boxShadow: "0 -20px 60px rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.04)",
        marginTop: "-28px",
      }}
    >
      {/* Top highlight line — subtle edge glow where About meets Hero */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.15) 30%, rgba(167,139,250,0.15) 70%, transparent 100%)",
          borderRadius: "28px 28px 0 0",
        }}
      />

      <motion.div
        style={{ y: contentY }}
        className="mx-auto max-w-7xl px-6"
      >
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 sm:mb-20 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            About Me
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            The Engineer Behind the Data
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-2xl text-text-secondary leading-relaxed"
          >
            Where data engineering foundations meet cutting-edge AI.
          </motion.p>
        </motion.div>

        {/* Main bio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-20">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInLeft}
              className="text-lg text-text-secondary leading-relaxed text-justify"
            >
              I build intelligent data experiences that blend engineering ⚙️, analytics 📊, and AI 🤖 into solutions that are both scalable and meaningful.
            </motion.p>
            <motion.p
              variants={fadeInLeft}
              className="text-text-secondary leading-relaxed text-justify"
            >
              With around 6 years of experience across{" "}
              <span className="text-cyan-400 font-semibold">Data Engineering, Data Science, and AI/ML</span>,
              I work at the intersection of Python 💻, cloud platforms ☁️, modern data pipelines 🔄, and intelligent systems 🧠.
            </motion.p>
            <motion.p
              variants={fadeInLeft}
              className="text-text-secondary leading-relaxed text-justify"
            >
              I enjoy turning complex data into clear insights, production-ready workflows, and measurable business outcomes 📈. From real-time pipelines and enterprise analytics to AI agents, dashboards, and premium digital solutions ✨, my focus is always on building systems that are smart, reliable, and genuinely useful.
            </motion.p>

            {/* Highlight cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {HIGHLIGHTS.map(({ icon: Icon, title, desc, color }) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="glass-hover rounded-xl p-4"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                      color === "cyan"
                        ? "bg-cyan-glow"
                        : color === "violet"
                        ? "bg-violet-glow"
                        : "bg-cyan-glow"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={
                        color === "violet" ? "text-violet-400" : "text-cyan-400"
                      }
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">
                    {title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {STATS.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeInRight}
                className="glass-hover rounded-2xl p-4 sm:p-6 text-center group"
              >
                <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-cyan-glow flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text-cyan mb-1">
                  {value}
                </div>
                <div className="text-xs text-text-muted tracking-wide leading-tight">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
