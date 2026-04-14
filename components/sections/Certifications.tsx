"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerFast, viewport } from "@/lib/animations";
import { Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "Google Certification: Data Engineering, Big Data, Machine Learning on GCP",
    issuer: "Google Cloud",
    shortIssuer: "GCP",
    credentialId: "KRF1QRGRQP8N",
    color: "cyan",
    verifyUrl: "#",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    shortIssuer: "AWS",
    credentialId: "",
    color: "amber",
    verifyUrl: "#",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    shortIssuer: "AWS",
    credentialId: "",
    color: "amber",
    verifyUrl: "#",
  },
  {
    name: "Databricks Certifications: ML / Data Science",
    issuer: "Databricks",
    shortIssuer: "DB",
    credentialId: "",
    color: "red",
    verifyUrl: "#",
  },
  {
    name: "Dataiku Academy Certifications: Core Designer, ML/MLOps Practitioner, Advanced Designer, Developer",
    issuer: "Dataiku",
    shortIssuer: "DKU",
    credentialId: "",
    color: "violet",
    verifyUrl: "#",
  },
  {
    name: "Python: 60 Hour Training Program (ISO-Certified)",
    issuer: "ISO Certified",
    shortIssuer: "PY",
    credentialId: "1218/5593",
    color: "sky",
    verifyUrl: "#",
  },
  {
    name: "Java Certification: ISO Certified Core and Advanced",
    issuer: "ISO Certified",
    shortIssuer: "JAVA",
    credentialId: "1020/6601",
    color: "blue",
    verifyUrl: "#",
  },
  {
    name: "Machine Learning: Internship Training (ISO-Certified)",
    issuer: "ISO Certified",
    shortIssuer: "ML",
    credentialId: "719/4352",
    color: "emerald",
    verifyUrl: "#",
  },
  {
    name: "Deep Learning Course: Course Completion Certificate",
    issuer: "Course Certification",
    shortIssuer: "DL",
    credentialId: "",
    color: "rose",
    verifyUrl: "#",
  },
];

const COLOR_MAP: Record<string, string> = {
  amber: "border-amber-400/25 bg-amber-400/8 text-amber-400",
  sky: "border-sky-400/25 bg-sky-400/8 text-sky-400",
  cyan: "border-cyan-400/25 bg-cyan-400/8 text-cyan-400",
  red: "border-red-400/25 bg-red-400/8 text-red-400",
  blue: "border-blue-400/25 bg-blue-400/8 text-blue-400",
  violet: "border-violet-400/25 bg-violet-400/8 text-violet-400",
  emerald: "border-emerald-400/25 bg-emerald-400/8 text-emerald-400",
  rose: "border-rose-400/25 bg-rose-400/8 text-rose-400",
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Certifications
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Validated Expertise
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            Industry-recognized credentials across cloud platforms, data engineering, and AI.
          </motion.p>
        </motion.div>

        {/* Cert grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {CERTIFICATIONS.map((cert) => {
            const colorClass = COLOR_MAP[cert.color] ?? COLOR_MAP.cyan;

            return (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                className="glass-hover rounded-xl p-5 flex gap-4 items-start group"
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xs font-bold shrink-0 ${colorClass}`}
                >
                  {cert.shortIssuer}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary leading-snug mb-1 group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-text-muted mb-2">{cert.issuer}</p>
                  {cert.credentialId && (
                    <span className="text-xs text-text-muted">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Award icon accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-3 text-text-muted"
        >
          <Award size={16} />
          <span className="text-sm">
            9 active certifications across cloud, data engineering, and AI platforms
          </span>
        </motion.div>
      </div>
    </section>
  );
}
