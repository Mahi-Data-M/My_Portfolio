"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { GraduationCap } from "lucide-react";

/*
 * TODO: Replace placeholder education entries with your actual degrees.
 * Update institution names, locations, years, and GPA if desired.
 */
const EDUCATION = [
  {
    degree: "Master of Science in Data Science", // TODO: Confirm/update degree
    field: "Data Science & Machine Learning",
    institution: "Your University Name Here",     // TODO: Add your university
    location: "City, State",                      // TODO: Add location
    period: "20XX — 20XX",                        // TODO: Add years
    gpa: "X.X / 4.0",                            // TODO: Add GPA (optional)
    highlight: "Graduate",
    color: "cyan",
    coursework: [
      "Machine Learning", "Deep Learning", "Big Data Analytics",
      "Statistical Modeling", "Natural Language Processing", "Cloud Computing",
    ],
  },
  {
    degree: "Bachelor of Engineering",             // TODO: Confirm/update degree
    field: "Computer Science / Information Technology",
    institution: "Your University Name Here",     // TODO: Add your university
    location: "City, Country",                    // TODO: Add location
    period: "20XX — 20XX",                        // TODO: Add years
    gpa: "X.X / 10.0",                           // TODO: Add GPA (optional)
    highlight: "Undergraduate",
    color: "violet",
    coursework: [
      "Data Structures", "Algorithms", "Database Systems",
      "Software Engineering", "Operating Systems", "Computer Networks",
    ],
  },
];

const COLOR: Record<string, { label: string; border: string; dot: string }> = {
  cyan: {
    label: "bg-cyan-400/10 border-cyan-400/25 text-cyan-400",
    border: "border-cyan-400/20",
    dot: "bg-cyan-400",
  },
  violet: {
    label: "bg-violet-400/10 border-violet-400/25 text-violet-400",
    border: "border-violet-400/20",
    dot: "bg-violet-400",
  },
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Education
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Academic Foundation
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => {
            const c = COLOR[edu.color];
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="glass-hover rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${c.label}`}
                  >
                    <GraduationCap size={22} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-text-secondary mt-0.5">
                          {edu.field}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.label}`}
                      >
                        {edu.highlight}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-text-primary mb-3">
                      {edu.institution}
                    </p>


                    {/* Coursework */}
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-widest mb-2">
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border-subtle text-text-secondary"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
