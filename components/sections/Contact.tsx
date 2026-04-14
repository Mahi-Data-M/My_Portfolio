"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, viewport } from "@/lib/animations";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/*
 * TODO: Configure email submission.
 * Options:
 *   A) Replace the handleSubmit function with Formspree (https://formspree.io)
 *      → Change the fetch URL to "https://formspree.io/f/YOUR_FORM_ID"
 *   B) Use EmailJS (https://emailjs.com)
 *   C) Wire up your own API route at /app/api/contact/route.ts
 */

const SOCIALS = [
  {
    label: "Email",
    value: "muskaan.data.m@gmail.com",
    href: "mailto:muskaan.data.m@gmail.com",
    icon: Mail,
    color: "cyan",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muskaan-mahi",
    href: "https://www.linkedin.com/in/muskaan-mahi/",
    icon: Linkedin,
    color: "sky",
  },
  {
    label: "GitHub",
    value: "github.com/Mahi-Data-M",
    href: "https://github.com/Mahi-Data-M",
    icon: Github,
    color: "violet",
  },
];

const SOCIAL_COLOR: Record<string, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/8 text-cyan-400",
  sky: "border-sky-400/25 bg-sky-400/8 text-sky-400",
  violet: "border-violet-400/25 bg-violet-400/8 text-violet-400",
  emerald: "border-emerald-400/25 bg-emerald-400/8 text-emerald-400",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return; // prevent duplicate submissions
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Contact API error:", data.error);
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Network error:", err);
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Glow accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.3), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header — always centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-8 sm:mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="section-label mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading">
            Let&apos;s Build Something Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 mx-auto max-w-xl text-text-secondary"
          >
            Open to Data Engineering, Data Science, and AI/ML opportunities.
            Whether it&apos;s a full-time role, contract, or collaboration — I&apos;d love to connect.
          </motion.p>
        </motion.div>

        {/*
         * Outer flex row: form content (flex-1) + character column (xl+ only).
         * Character is IN document flow — no absolute positioning, no overflow.
         */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:gap-8">

          {/* ── Form + socials ── */}
          <div className="flex-1 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left — Social info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-2 space-y-4"
          >
            <motion.h3
              variants={fadeInLeft}
              className="text-base font-semibold text-text-primary mb-6"
            >
              Get In Touch
            </motion.h3>

            {SOCIALS.map(({ label, value, href, icon: Icon, color }) => (
              <motion.div key={label} variants={fadeInLeft}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 glass-hover rounded-xl group"
                  >
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${SOCIAL_COLOR[color]}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">{label}</p>
                      <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                        {value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${SOCIAL_COLOR[color]}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">{label}</p>
                      <p className="text-sm text-text-secondary">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              variants={fadeInLeft}
              className="mt-6 p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-text-muted">
                Open to full-time, contract, and consulting opportunities starting
                immediately.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-5 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-text-muted mb-1.5">
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="input-premium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-text-muted mb-1.5">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="input-premium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-text-muted mb-1.5">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="input-premium"
                    >
                      <option value="" disabled>
                        What&apos;s this about?
                      </option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="contract">Contract / Freelance</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="consulting">Data Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-text-muted mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the role, project, or what you'd like to discuss..."
                      className="input-premium resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      {errorMsg || "Something went wrong. Please email me directly."}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 font-semibold"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          </div>
          </div>{/* end form side */}

          {/* ── Character column (xl+ only, in document flow) ── */}
          <div
            className="hidden xl:block flex-shrink-0 self-end relative"
            style={{ width: "clamp(220px, 18vw, 320px)", height: "clamp(320px, 28vw, 480px)" }}
            aria-hidden
          >
            {/* Bottom + left fade — merges into dark background */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #050911 0%, transparent 30%), linear-gradient(to left, transparent 40%, #050911 100%)",
              }}
            />
            <Image
              src="/images/profile-headphones.png"
              alt=""
              fill
              className="object-contain object-bottom"
              style={{ opacity: 0.78 }}
              sizes="(min-width: 1280px) 320px, 0px"
            />
          </div>

        </div>{/* end outer flex row */}
      </div>
    </section>
  );
}
