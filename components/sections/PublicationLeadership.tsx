"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerFast, viewport } from "@/lib/animations";
import { BookOpen, Users, ExternalLink, Star, Lightbulb } from "lucide-react";

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

const LEADERSHIP = [
  {
    role: "Founder, Community Connect",
    organization: "NIIT University, India",
    period: "",
    description:
      "Founded a digital literacy initiative training 50+ rural students in technology skills.",
    icon: Users,
    color: "cyan",
  },
  {
    role: "Research Initiative Lead",
    organization: "NIIT University, India",
    period: "",
    description:
      "Led a nano-scale IC research initiative with industry collaboration, achieving a 10% reduction in component size.",
    icon: Lightbulb,
    color: "violet",
  },
  {
    role: "Technical Event Organizer",
    organization: "NIIT University, India",
    period: "",
    description:
      "Organized university technical events to enhance student engagement and collaboration.",
    icon: Star,
    color: "sky",
  },
];

const LEAD_COLOR: Record<string, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/8 text-cyan-400",
  violet: "border-violet-400/25 bg-violet-400/8 text-violet-400",
  sky: "border-sky-400/25 bg-sky-400/8 text-sky-400",
};

export default function PublicationLeadership() {
  return (
    <section id="publications" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Publications & Leadership
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Thought Leadership &amp; Impact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            Research contributions and community leadership beyond day-to-day project delivery.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Publications */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-glow border border-cyan-border flex items-center justify-center">
                <BookOpen size={15} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">Research Publications</h3>
            </motion.div>

            <div className="space-y-5">
              {PUBLICATIONS.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  variants={fadeInUp}
                  className="glass-hover rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-bold text-text-primary leading-snug">
                      {pub.title}
                    </h4>
                    {pub.doi !== "#" && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-muted mb-3">
                    <span className="text-cyan-400 font-medium">{pub.venue}</span>
                    {pub.year && <><span>·</span><span>{pub.year}</span></>}
                    <span>·</span>
                    <span>{pub.type}</span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-400/8 border border-cyan-400/15 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {pub.doi !== "#" && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200 shrink-0"
                        style={{
                          background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                          boxShadow: "0 2px 10px rgba(56,189,248,0.3)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 4px 16px rgba(56,189,248,0.5)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 2px 10px rgba(56,189,248,0.3)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                      >
                        <ExternalLink size={11} />
                        Link
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-glow border border-[rgba(167,139,250,0.2)] flex items-center justify-center">
                <Users size={15} className="text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">Leadership Roles</h3>
            </motion.div>

            <div className="space-y-5">
              {LEADERSHIP.map((item) => {
                const Icon = item.icon;
                const colorClass = LEAD_COLOR[item.color];

                return (
                  <motion.div
                    key={item.role}
                    variants={fadeInUp}
                    className="glass-hover rounded-xl p-5 flex gap-4"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${colorClass}`}
                    >
                      <Icon size={15} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{item.role}</h4>
                      <div className="flex flex-wrap gap-2 text-xs text-text-muted mt-0.5 mb-2">
                        <span className="text-text-secondary font-medium">
                          {item.organization}
                        </span>
                        {item.period && <><span>·</span><span>{item.period}</span></>}
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-3 text-text-muted"
        >
          <BookOpen size={16} />
          <span className="text-sm">
            1 research publication and multiple leadership initiatives in academic and community settings.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
