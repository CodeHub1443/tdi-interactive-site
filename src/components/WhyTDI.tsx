"use client";

import React from "react";
import { motion } from "framer-motion";

const comparisons = [
  {
    challenge: "AI initiatives stuck in pilot — cannot reach production",
    response: "TDI builds exclusively for production deployment. Every system is engineered to operate reliably in the client's real environment from go-live.",
  },
  {
    challenge: "Fragmented SaaS stack with no automation between platforms",
    response: "TDI builds native integrations and custom tooling that wires together the platforms the client already uses — Slack, Notion, Stripe, Supabase, CRMs, and more.",
  },
  {
    challenge: "Sales and ops teams spending time on manual pipeline management",
    response: "TDI automates lead gen, outreach, CRM updates, and follow-up workflows so revenue pipelines move without manual babysitting.",
  },
  {
    challenge: "Internal knowledge trapped in documents and communication tools",
    response: "TDI builds SOP-aware chatbots and internal knowledge assistants that give teams instant access to institutional knowledge, without IT escalation.",
  },
  {
    challenge: "Uncertain which AI tools, vendors, or architectures to invest in",
    response: "TDI's AI Strategy & Advisory engagements provide independent, implementation-grounded guidance so clients invest in the right tools and avoid costly mistakes.",
  },
  {
    challenge: "Shortage of specialized AI engineering talent",
    response: "Talent & Team Augmentation provides immediate access to experienced AI practitioners who contribute at pace — without the cost and delay of permanent recruitment.",
  },
  {
    challenge: "Scalability concerns as automation requirements grow",
    response: "TDI's modular, reusable frameworks allow automation systems to scale incrementally alongside the client's operations without architectural overhaul.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export const WhyTDI: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32 dark:bg-[#050a0a] border-t border-gray-100 dark:border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-accentTeal font-bold mb-4">Why The Data Island</h2>
          <h3 className="text-4xl md:text-5xl font-normal leading-tight tracking-tight text-textDark dark:text-white max-w-2xl">
            Built for the Real World, Managed End-to-End, Built to Last.
          </h3>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={containerVariants}
          className="flex flex-col border-t border-gray-100 dark:border-white/10"
        >
          {comparisons.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] border-b border-gray-100 dark:border-white/10 py-10 lg:py-16 gap-8 group">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 opacity-70">Challenge</span>
                <h4 className="text-lg md:text-xl font-medium text-textDark dark:text-white leading-snug">
                  {item.challenge}
                </h4>
              </div>
              <div className="flex flex-col border-l-0 lg:border-l border-gray-100 dark:border-white/10 lg:pl-16">
                <span className="text-[10px] uppercase tracking-widest text-accentTeal font-bold mb-4 opacity-100">TDI Response</span>
                <p className="text-sm md:text-base text-textMuted dark:text-white/60 leading-relaxed font-light">
                  {item.response}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
