"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { ExternalLink, Github, ArrowRight, Zap, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: "ai-web-analytics",
    title: "AI-Driven Web & Analytics Solutions for Local Businesses",
    category: "Full-Stack AI",
    status: "Production",
    icon: Zap,
    accentColor: "cyan",
    gradient: "from-cyan-500/15 via-sky-500/8 to-transparent",
    description:
      "End-to-end AI-powered platform delivering intelligent web presence and real-time analytics dashboards for local SMBs. Combines automated content generation, customer behavior analytics, and actionable business insights — all in one integrated solution.",
    longDescription:
      "Built a multi-tenant SaaS platform that automates website generation, SEO optimization, and analytics reporting for local businesses with limited technical resources. Integrates LLM-driven content creation, Google Analytics pipelines, and a React-based dashboard for data-driven decision making.",
    impact: [],
    techStack: [
      "Python", "Next.js", "TypeScript", "OpenAI API", "LangChain",
      "PostgreSQL", "FastAPI", "Docker", "AWS", "Tailwind CSS",
    ],
    // TODO: Add your actual GitHub and live demo URLs
    githubUrl: "#", // Replace with: https://github.com/yourusername/repo
    liveUrl: "#",   // Replace with your deployed URL
    featured: true,
  },
  {
    id: "ai-business-agent",
    title: "AI Agent for Business Insights",
    category: "AI / GenAI",
    status: "Production",
    icon: Brain,
    accentColor: "violet",
    gradient: "from-violet-500/15 via-purple-500/8 to-transparent",
    description:
      "Autonomous multi-agent system that ingests structured and unstructured business data, reasons over it using RAG, and surfaces actionable insights through a conversational interface — no SQL knowledge required.",
    longDescription:
      "Built on LangChain's agent framework with a custom tool suite for SQL querying, document retrieval, trend analysis, and forecast generation. Implemented a hierarchical memory system enabling context retention across multi-turn conversations.",
    impact: [],
    techStack: [
      "Python", "LangChain", "OpenAI GPT-4", "RAG", "Pinecone",
      "Snowflake", "FastAPI", "Streamlit", "Docker", "LangSmith",
    ],
    // TODO: Add your actual GitHub and live demo URLs
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "realtime-mlops",
    title: "Real-Time Customer Analytics Pipeline with MLOps",
    category: "Data Engineering · MLOps",
    status: "Production",
    icon: BarChart3,
    accentColor: "sky",
    gradient: "from-sky-500/15 via-cyan-500/8 to-transparent",
    description:
      "Enterprise-grade streaming data pipeline processing 500K+ customer events per minute, with integrated ML scoring, automated model retraining, and a real-time analytics dashboard for customer behavior insights.",
    longDescription:
      "Built a Kafka → Spark Streaming → Feature Store → ML Inference pipeline with automated drift detection and model retraining triggers. Implements blue/green model deployment with automated rollback and full experiment tracking via MLflow.",
    impact: [],
    techStack: [
      "Apache Kafka", "PySpark", "Spark Streaming", "MLflow", "Databricks",
      "AWS S3", "Redshift", "Docker", "Airflow", "Grafana", "Python",
    ],
    // TODO: Add your actual GitHub repo URL (this is your existing project)
    githubUrl: "https://github.com/Mahi-Data-M",
    liveUrl: "#",
    featured: false,
  },
];

const ACCENT: Record<string, { badge: string; dot: string; link: string; border: string }> = {
  cyan: {
    badge: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300",
    dot: "bg-cyan-400",
    link: "text-cyan-400 hover:text-cyan-300",
    border: "hover:border-cyan-400/30",
  },
  violet: {
    badge: "bg-violet-400/10 border-violet-400/20 text-violet-300",
    dot: "bg-violet-400",
    link: "text-violet-400 hover:text-violet-300",
    border: "hover:border-violet-400/30",
  },
  sky: {
    badge: "bg-sky-400/10 border-sky-400/20 text-sky-300",
    dot: "bg-sky-400",
    link: "text-sky-400 hover:text-sky-300",
    border: "hover:border-sky-400/30",
  },
};

/* ── Ambient pill sub-component ────────────────────────────────────────── */
function AmbientPill({
  label,
  size = "sm",
  muted = false,
}: {
  label: string;
  size: "sm" | "md" | "lg";
  muted: boolean;
}) {
  // 80% larger than original sizes
  const textSize = size === "lg" ? "text-xl"     : size === "md" ? "text-lg"    : "text-base";
  const px       = size === "lg" ? "px-7 py-3.5" : size === "md" ? "px-6 py-3" : "px-5 py-2";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full ${px} ${textSize} font-medium tracking-wide whitespace-nowrap`}
      style={{
        background: muted
          ? "rgba(255,255,255,0.04)"
          : "rgba(15,22,41,0.6)",
        border: muted
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(56,189,248,0.15)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        color: muted ? "rgba(148,163,184,0.55)" : "rgba(148,163,184,0.75)",
        boxShadow: muted
          ? "none"
          : "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {!muted && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "rgba(56,189,248,0.6)" }}
        />
      )}
      {label}
    </span>
  );
}

/* ── Ambient floating items config ─────────────────────────────────────── */
const AMBIENT_ITEMS = [
  {
    label: "raineyremoval.com",
    href: "https://raineyremoval.com",
    top: "12%", left: "2%",
    duration: 9,  blinkDuration: 4,   delay: 0,
    size: "sm",   muted: false,
  },
  {
    label: "e4t-supply.com",
    href: "https://e4t-supply.com",
    top: "65%", left: "1%",
    duration: 11, blinkDuration: 5,   delay: 1.5,
    size: "sm",  muted: false,
  },
  {
    label: "github.com/Mahi-Data-M",
    href: "https://github.com/Mahi-Data-M",
    top: "36%", right: "1.5%",
    duration: 13, blinkDuration: 6,   delay: 0.8,
    size: "md",  muted: false,
  },
  {
    label: "Projects Yet Loading",
    href: null,
    top: "80%", right: "2%",
    duration: 10, blinkDuration: 3.5, delay: 2,
    size: "lg",  muted: true,
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">

      {/* ── Ambient floating layer ── always visible, seamless loop ── */}
      <div className="absolute inset-0 pointer-events-none select-none hidden lg:block" aria-hidden>
        {AMBIENT_ITEMS.map((item) => (
          <motion.div
            key={item.label}
            className="absolute"
            style={{
              top:   "top"   in item ? item.top   : undefined,
              left:  "left"  in item ? item.left  : undefined,
              right: "right" in item ? item.right : undefined,
            }}
            // Float + rotate — seamless infinite loop
            animate={{
              y:      [0, -14, -4, -18, 0],
              rotate: [-1.5, 0.8, -0.5, 1.5, -1.5],
            }}
            transition={{
              y: {
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              },
              rotate: {
                duration: item.duration * 1.1,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              },
            }}
          >
            {/* Blink layer — opacity pulses independently, never hits 0 */}
            <motion.div
              animate={{
                opacity: item.muted
                  ? [0.4, 0.7, 0.45, 0.75, 0.4]
                  : [0.55, 1,   0.65, 0.95, 0.55],
              }}
              transition={{
                duration: item.blinkDuration,
                delay: item.delay * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto"
                  tabIndex={-1}
                >
                  <AmbientPill label={item.label} size={item.size} muted={false} />
                </a>
              ) : (
                <AmbientPill label={item.label} size={item.size} muted />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Featured Projects
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Built to Solve Real Problems
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            Production-grade data engineering and AI systems, from concept to
            deployment — built with scale, reliability, and business impact in mind.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const accent = ACCENT[project.accentColor];
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group relative glass rounded-2xl overflow-hidden border border-border-subtle transition-all duration-300 flex flex-col ${accent.border} hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]`}
              >
                {/* Card gradient header */}
                <div
                  className={`relative h-36 sm:h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Decorative grid in card header */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl border flex items-center justify-center ${accent.badge} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${accent.badge}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-text-primary leading-tight mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Impact points */}
                  {project.impact.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {project.impact.map((point, i) => (
                        <li key={i} className="flex gap-2 text-xs text-text-muted">
                          <span
                            className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${accent.dot}`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${accent.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="text-[11px] text-text-muted px-2.5 py-0.5">
                        +{project.techStack.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto">
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${accent.link}`}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${accent.link}`}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    <span className="ml-auto text-text-muted group-hover:text-text-secondary transition-colors">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 text-center"
        >
          {/* TODO: Replace with your actual GitHub profile URL */}
          <a
            href="https://github.com/Mahi-Data-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2">
              <Github size={16} />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
