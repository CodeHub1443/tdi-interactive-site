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
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { 
    opacity: 1, scale: 1, y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export const WhyTDI: React.FC = () => {
  return (
    <section className="bg-[#050a0a] py-8 md:py-12 border-t border-white/5 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex-1 flex flex-col justify-center">
        
        {/* Header - Compacted */}
        <div className="mb-8 md:mb-12 border-l-[3px] border-[#6CF2B0] pl-6">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#6CF2B0] font-bold mb-2">Why The Data Island</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white max-w-3xl">
            Built for the Real World. Managed End-to-End.
          </h3>
        </div>

        {/* 2-Column Comparison Grid to half the vertical height */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 pt-6 border-t border-white/10"
        >
          {comparisons.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-3 p-4 sm:p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-colors group">
              
              {/* Challenge */}
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 font-bold mb-1.5 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400/50" /> Challenge
                </span>
                <h4 className="text-sm font-medium text-white/90 leading-snug">
                  {item.challenge}
                </h4>
              </div>

              {/* Response */}
              <div className="flex flex-col pl-4 sm:pl-5 border-l border-[#6CF2B0]/30 mt-1">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#6CF2B0] font-bold mb-1.5 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#6CF2B0]" /> TDI Response
                </span>
                <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed font-light">
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
