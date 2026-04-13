"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import {
  GraduationCap, BookOpen, Users, ExternalLink, Star, Lightbulb,
} from "lucide-react";

/* ── Education data ─────────────────────────────────────────────────────── */
const EDUCATION = [
  {
    degree: "Master of Science in Data Science",
    field: "Data Science & Machine Learning",
    institution: "Your University Name Here",   // TODO: Add your university
    highlight: "Graduate",
    color: "cyan",
    coursework: [
      "Machine Learning", "Deep Learning", "Big Data Analytics",
      "Statistical Modeling", "Natural Language Processing", "Cloud Computing",
    ],
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science / Information Technology",
    institution: "Your University Name Here",   // TODO: Add your university
    highlight: "Undergraduate",
    color: "violet",
    coursework: [
      "Data Structures", "Algorithms", "Database Systems",
      "Software Engineering", "Operating Systems", "Computer Networks",
    ],
  },
];

const EDU_COLOR: Record<string, { label: string }> = {
  cyan:   { label: "bg-cyan-400/10 border-cyan-400/25 text-cyan-400" },
  violet: { label: "bg-violet-400/10 border-violet-400/25 text-violet-400" },
};

/* ── Publications data ──────────────────────────────────────────────────── */
const PUBLICATIONS = [
  {
    title: "Self-Driving Cars Using Deep Learning",
    venue: "International Journal of All Research Education and Scientific Methods (IJARESM)",
    year: "2022",
    type: "Research Publication",
    abstract:
      "Applied deep learning techniques to autonomous vehicle perception and decision-making systems.",
    doi: "https://www.ijaresm.com/self-driving-cars-using-deep-learning",
    tags: ["Deep Learning", "AI", "Computer Vision"],
  },
  {
    title: "Research & Applied Learning",
    venue: "Academic Exploration",
    year: "",
    type: "Applied Research",
    abstract:
      "Hands-on academic work across machine learning, NLP, data mining, and intelligent systems.",
    doi: "#",
    tags: ["Machine Learning", "NLP", "Data Mining"],
  },
];

/* ── Leadership data ────────────────────────────────────────────────────── */
const LEADERSHIP = [
  {
    role: "Founder, Community Connect",
    organization: "NIIT University, India",
    description: "Founded a digital literacy initiative training 50+ rural students in technology skills.",
    icon: Users,
    color: "cyan",
  },
  {
    role: "Research Initiative Lead",
    organization: "NIIT University, India",
    description: "Led a nano-scale IC research initiative with industry collaboration, achieving a 10% reduction in component size.",
    icon: Lightbulb,
    color: "violet",
  },
  {
    role: "Technical Event Organizer",
    organization: "NIIT University, India",
    description: "Organized university technical events to enhance student engagement and collaboration.",
    icon: Star,
    color: "sky",
  },
];

const LEAD_COLOR: Record<string, string> = {
  cyan:   "border-cyan-400/25 bg-cyan-400/8 text-cyan-400",
  violet: "border-violet-400/25 bg-violet-400/8 text-violet-400",
  sky:    "border-sky-400/25 bg-sky-400/8 text-sky-400",
};

/* ── Combined section ───────────────────────────────────────────────────── */
export default function AcademicsLeadership() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Education & Leadership
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Academic Foundation &amp; Impact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            Academic background alongside research contributions and community leadership.
          </motion.p>
        </motion.div>

        {/* ── Three-column layout ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">

          {/* ══ COL 1 — Education ══════════════════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <div className="w-9 h-9 rounded-lg bg-cyan-glow border border-cyan-border flex items-center justify-center">
                <GraduationCap size={17} className="text-cyan-400" />
              </div>
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">Education</h3>
            </motion.div>

            <div className="space-y-5 flex-1">
              {EDUCATION.map((edu, index) => {
                const c = EDU_COLOR[edu.color];
                return (
                  <motion.div
                    key={edu.degree}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="glass-hover rounded-xl p-5"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg border flex items-center justify-center shrink-0 ${c.label}`}>
                        <GraduationCap size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                          <h4 className="text-sm font-bold text-text-primary leading-snug">
                            {edu.degree}
                          </h4>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${c.label}`}>
                            {edu.highlight}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary">{edu.field}</p>
                        <p className="text-xs font-medium text-text-primary mt-0.5">{edu.institution}</p>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span key={course} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border-subtle text-text-secondary">
                          {course}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ══ COL 2 — Research Publications ══════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <div className="w-9 h-9 rounded-lg bg-cyan-glow border border-cyan-border flex items-center justify-center">
                <BookOpen size={17} className="text-cyan-400" />
              </div>
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">Research Publications</h3>
            </motion.div>

            <div className="space-y-5 flex-1">
              {PUBLICATIONS.map((pub) => (
                <motion.div
                  key={pub.title}
                  variants={fadeInUp}
                  className="glass-hover rounded-xl p-5"
                >
                  <h4 className="text-sm font-bold text-text-primary leading-snug mb-3">{pub.title}</h4>
                  <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-xs text-text-muted mb-3">
                    <span className="text-cyan-400 font-medium leading-snug">{pub.venue}</span>
                    {pub.year && <><span>·</span><span>{pub.year}</span></>}
                    <span>·</span><span>{pub.type}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">{pub.abstract}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/8 border border-cyan-400/15 text-cyan-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {pub.doi !== "#" && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shrink-0 transition-all duration-200"
                        style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)", boxShadow: "0 2px 8px rgba(56,189,248,0.3)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(56,189,248,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(56,189,248,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                      >
                        <ExternalLink size={12} /> Link
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ══ COL 3 — Leadership Roles ═══════════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <div className="w-9 h-9 rounded-lg bg-violet-glow border border-[rgba(167,139,250,0.2)] flex items-center justify-center">
                <Users size={17} className="text-violet-400" />
              </div>
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">Leadership Roles</h3>
            </motion.div>

            <div className="space-y-5 flex-1">
              {LEADERSHIP.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.role}
                    variants={fadeInUp}
                    className="glass-hover rounded-xl p-5 flex gap-4"
                  >
                    <div className={`w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 ${LEAD_COLOR[item.color]}`}>
                      <Icon size={17} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary leading-snug">{item.role}</h4>
                      <p className="text-xs text-text-secondary font-medium mt-0.5 mb-1.5">{item.organization}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
