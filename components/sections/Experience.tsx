"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import { MapPin, Calendar, ChevronDown, ExternalLink } from "lucide-react";

const EXPERIENCES = [
  {
    id: "att",
    company: "AT&T",
    role: "Senior Data Engineer / AI Engineer",
    period: "2022 — Present",
    location: "Dallas, TX",
    type: "Full-time",
    logo: "AT&T",
    accentColor: "cyan",
    summary:
      "Enterprise data infrastructure at scale — streaming pipelines, AI automation, and cloud-native architecture across AWS and Microsoft Fabric.",
    highlights: [
      "Architected production ETL/ELT pipelines processing 10TB+ daily across AWS S3, Redshift, Glue, and Lambda, achieving 99.9% uptime across critical data workflows.",
      "Built real-time anomaly detection systems using PySpark and Kafka Streaming, reducing incident detection time by 40% and cutting customer-facing SLA breaches.",
      "Designed and deployed AI agent workflows leveraging LangChain and RAG to automate data governance tasks across Microsoft Fabric and Azure Purview, saving 20+ engineering hours/week.",
      "Led migration of legacy data pipelines to Microsoft Fabric, implementing end-to-end lineage tracking and automated data quality checks using Purview.",
      "Delivered Power BI enterprise dashboards consumed by C-suite and operational teams, integrating with Spark-based data marts and Azure Analysis Services.",
      "Established MLOps best practices including CI/CD for model deployment, experiment tracking, and A/B testing infrastructure for production ML models.",
      "Implemented Spark Streaming pipelines for real-time customer analytics, processing 500K+ events/minute with sub-second latency requirements.",
    ],
    techStack: [
      "PySpark", "Kafka", "Spark Streaming", "AWS S3", "Glue", "Redshift",
      "Lambda", "LangChain", "RAG", "Microsoft Fabric", "Azure Purview",
      "Power BI", "CI/CD", "MLOps", "Python", "SQL",
    ],
  },
  {
    id: "northHighland",
    company: "North Highland",
    role: "Data Engineer / Analytics Consultant",
    period: "2020 — 2022",
    location: "Atlanta, GA",
    type: "Full-time",
    logo: "NH",
    accentColor: "violet",
    summary:
      "Healthcare data integration, dimensional modeling, and analytics delivery for enterprise clients across Databricks and cloud platforms.",
    highlights: [
      "Led Databricks-based data integration projects for healthcare clients, unifying clinical, claims, and EHR datasets across multi-cloud environments into a unified analytical layer.",
      "Designed star and snowflake dimensional models optimizing query performance by 60%, reducing average report load times from minutes to seconds for 500+ daily users.",
      "Built reusable PySpark transformation frameworks processing HIPAA-compliant patient data at scale, with automated data quality validation and anomaly alerting.",
      "Delivered Power BI executive dashboards and self-serve analytics solutions adopted by C-suite stakeholders across 3 healthcare enterprise accounts.",
      "Implemented data quality frameworks with Great Expectations, achieving 98%+ data accuracy across integrated sources.",
      "Collaborated with data architects and business analysts to translate complex business requirements into robust, maintainable data models.",
    ],
    techStack: [
      "Databricks", "PySpark", "Python", "SQL", "Power BI",
      "Azure Data Factory", "ADLS Gen2", "Delta Lake",
      "Dimensional Modeling", "Healthcare Data", "HIPAA", "dbt",
    ],
  },
  {
    id: "behl",
    company: "Bharat Electronics Heavy Limited",
    role: "Data Engineer / ML Engineer",
    period: "2018 — 2020",
    location: "India",
    type: "Full-time",
    logo: "BEHL",
    accentColor: "sky",
    summary:
      "End-to-end data pipeline engineering and predictive maintenance ML systems for manufacturing operations.",
    highlights: [
      "Built automated data ingestion pipelines with Apache Airflow and PySpark, processing manufacturing sensor data from SAP systems at 10-minute intervals across 50+ production machines.",
      "Deployed predictive maintenance ML models containerized with Docker, using MLflow for experiment tracking and model versioning — reducing unplanned machine downtime by 25%.",
      "Engineered feature engineering pipelines for time-series sensor data, implementing sliding window aggregations and statistical anomaly features for fault prediction.",
      "Developed Tableau dashboards for operations and maintenance teams, visualizing real-time sensor telemetry, fault alerts, and predictive maintenance schedules.",
      "Integrated Databricks and PySpark workflows for batch processing of historical sensor data, enabling trend analysis and capacity planning.",
      "Implemented SQL-based data warehousing on PostgreSQL, centralizing production metrics previously siloed across multiple SAP modules.",
    ],
    techStack: [
      "Python", "SQL", "Apache Airflow", "PySpark", "Databricks",
      "MLflow", "Docker", "SAP", "PostgreSQL", "Tableau",
      "Scikit-learn", "Pandas", "NumPy", "Time-Series ML",
    ],
  },
];

const ACCENT_COLORS: Record<string, string> = {
  cyan: "border-cyan-400/30 bg-cyan-400/8 text-cyan-400",
  violet: "border-violet-400/30 bg-violet-400/8 text-violet-400",
  sky: "border-sky-400/30 bg-sky-400/8 text-sky-400",
};

const BADGE_COLORS: Record<string, string> = {
  cyan: "bg-cyan-400/8 border-cyan-400/20 text-cyan-300",
  violet: "bg-violet-400/8 border-violet-400/20 text-violet-300",
  sky: "bg-sky-400/8 border-sky-400/20 text-sky-300",
};

const DOT_COLORS: Record<string, string> = {
  cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]",
  violet: "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]",
  sky: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]",
};

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>("att");

  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Work Experience
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Where I&apos;ve Made Impact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            6+ years of enterprise data engineering, from batch pipelines to
            real-time AI systems across Fortune 500 companies and consulting.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-4 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-3.5 top-6 w-3 h-3 rounded-full hidden sm:block ${DOT_COLORS[exp.accentColor]}`}
                  />

                  {/* Card */}
                  <div
                    className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "border-[rgba(56,189,248,0.2)] shadow-[0_0_30px_rgba(56,189,248,0.06)]"
                        : "border-border-subtle hover:border-border-accent"
                    }`}
                  >
                    {/* Card header — always visible */}
                    <button
                      className="w-full text-left p-6 sm:p-8"
                      onClick={() =>
                        setExpandedId(isExpanded ? "" : exp.id)
                      }
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {/* Company logo / initials */}
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold border shrink-0 ${ACCENT_COLORS[exp.accentColor]}`}
                          >
                            {exp.logo}
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-text-primary leading-tight">
                              {exp.role}
                            </h3>
                            <p
                              className={`text-sm font-semibold mt-0.5 ${
                                exp.accentColor === "violet"
                                  ? "text-violet-400"
                                  : exp.accentColor === "sky"
                                  ? "text-sky-400"
                                  : "text-cyan-400"
                              }`}
                            >
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-2 text-xs text-text-muted">
                              <span className="flex items-center gap-1">
                                <Calendar size={11} />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={11} />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0 text-text-muted mt-1"
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      </div>

                      {/* Summary */}
                      <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                        {exp.summary}
                      </p>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-8 sm:px-8 border-t border-border-subtle pt-6">
                            {/* Highlights */}
                            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                              Key Contributions
                            </h4>
                            <ul className="space-y-3 mb-8">
                              {exp.highlights.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.04, duration: 0.3 }}
                                  className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                                >
                                  <span
                                    className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                                      exp.accentColor === "violet"
                                        ? "bg-violet-400"
                                        : exp.accentColor === "sky"
                                        ? "bg-sky-400"
                                        : "bg-cyan-400"
                                    }`}
                                  />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>

                            {/* Tech stack */}
                            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className={`text-xs font-medium px-3 py-1 rounded-full border ${BADGE_COLORS[exp.accentColor]}`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
