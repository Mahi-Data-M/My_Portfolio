"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerFast,
  viewport,
} from "@/lib/animations";

const SKILL_CATEGORIES = [
  {
    id: "engineering",
    label: "Data Engineering",
    color: "cyan",
    skills: [
      "Python", "SQL", "PySpark", "Apache Spark", "Apache Kafka",
      "Apache Airflow", "dbt", "Databricks", "Snowflake", "Microsoft Fabric",
      "Spark Streaming", "Delta Lake", "Apache Hive", "ETL / ELT",
    ],
  },
  {
    id: "cloud",
    label: "Cloud Platforms",
    color: "sky",
    skills: [
      "AWS (S3, Glue, Redshift, Lambda, EMR)", "Azure (ADF, ADLS, Synapse, Purview)",
      "GCP (BigQuery, Dataflow, Pub/Sub)", "Terraform", "Azure Databricks",
      "AWS Lake Formation", "Azure DevOps", "Cloud Composer",
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    color: "violet",
    skills: [
      "Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs",
      "RAG (Retrieval-Augmented Generation)", "LangChain", "AI Agents",
      "MLflow", "MLOps", "Scikit-learn", "TensorFlow", "Hugging Face",
      "Vector Databases", "Prompt Engineering",
    ],
  },
  {
    id: "visualization",
    label: "Visualization",
    color: "emerald",
    skills: [
      "Power BI", "Tableau", "Matplotlib", "Plotly", "Seaborn",
      "DAX", "M Query", "Looker",
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    color: "amber",
    skills: [
      "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD Pipelines",
      "REST APIs", "FastAPI", "Postman", "Jira", "Confluence",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "rose",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Azure Cosmos DB",
      "Amazon DynamoDB", "Redshift", "BigQuery", "SAP",
    ],
  },
];

const COLOR_MAP: Record<string, { pill: string; tab: string; dot: string }> = {
  cyan: {
    pill: "bg-cyan-400/8 border-cyan-400/20 text-cyan-300 hover:bg-cyan-400/15 hover:border-cyan-400/35",
    tab: "border-cyan-400 text-cyan-400",
    dot: "bg-cyan-400",
  },
  sky: {
    pill: "bg-sky-400/8 border-sky-400/20 text-sky-300 hover:bg-sky-400/15 hover:border-sky-400/35",
    tab: "border-sky-400 text-sky-400",
    dot: "bg-sky-400",
  },
  violet: {
    pill: "bg-violet-400/8 border-violet-400/20 text-violet-300 hover:bg-violet-400/15 hover:border-violet-400/35",
    tab: "border-violet-400 text-violet-400",
    dot: "bg-violet-400",
  },
  emerald: {
    pill: "bg-emerald-400/8 border-emerald-400/20 text-emerald-300 hover:bg-emerald-400/15 hover:border-emerald-400/35",
    tab: "border-emerald-400 text-emerald-400",
    dot: "bg-emerald-400",
  },
  amber: {
    pill: "bg-amber-400/8 border-amber-400/20 text-amber-300 hover:bg-amber-400/15 hover:border-amber-400/35",
    tab: "border-amber-400 text-amber-400",
    dot: "bg-amber-400",
  },
  rose: {
    pill: "bg-rose-400/8 border-rose-400/20 text-rose-300 hover:bg-rose-400/15 hover:border-rose-400/35",
    tab: "border-rose-400 text-rose-400",
    dot: "bg-rose-400",
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("engineering");
  const active = SKILL_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="section-padding relative">
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
            Technical Skills
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            The Full Stack of Data
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            From raw ingestion to AI-powered insights — end-to-end expertise across
            the modern data ecosystem.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const colors = COLOR_MAP[cat.color];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-200 ${
                  activeTab === cat.id
                    ? `${colors.tab} border-current bg-current/8`
                    : "border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-accent hover:bg-white/5"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeTab === cat.id ? colors.dot : "bg-text-muted"
                  }`}
                />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="glass rounded-2xl p-5 sm:p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <span
              className={`w-2 h-2 rounded-full ${COLOR_MAP[active.color].dot}`}
            />
            <h3 className="text-lg font-semibold text-text-primary">
              {active.label}
            </h3>
            <span className="ml-auto text-xs text-text-muted">
              {active.skills.length} skills
            </span>
          </div>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2.5"
          >
            {active.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeInUp}
                className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-default ${
                  COLOR_MAP[active.color].pill
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* All-skills summary grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const colors = COLOR_MAP[cat.color];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`glass-hover rounded-xl p-3 sm:p-4 text-center transition-all ${
                  activeTab === cat.id ? "border-current/30" : ""
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${
                    activeTab === cat.id
                      ? colors.tab.split(" ")[1]
                      : "text-text-secondary"
                  }`}
                >
                  {cat.skills.length}+
                </div>
                <div className="text-[10px] sm:text-[11px] text-text-muted leading-tight">
                  {cat.label}
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
