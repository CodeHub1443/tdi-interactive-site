"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const comparisons = [
  {
    layout: "col-span-2 row-span-2",
    challengeSize: "text-2xl sm:text-3xl lg:text-4xl",
    responseSize: "text-sm sm:text-base lg:text-xl",
    challenge: "AI initiatives stuck in pilot — cannot reach production",
    response: "TDI builds exclusively for production deployment. Every system is engineered to operate reliably in the client's real environment from go-live.",
  },
  {
    layout: "col-span-1 row-span-1",
    challengeSize: "text-[10px] sm:text-xs lg:text-sm",
    responseSize: "text-[9px] sm:text-[10px] lg:text-[11px]",
    challenge: "Fragmented SaaS stack with no automation between platforms",
    response: "Native integrations and custom tooling that wires together the platforms the client already uses.",
  },
  {
    layout: "col-span-1 row-span-2",
    challengeSize: "text-xs sm:text-sm lg:text-lg",
    responseSize: "text-[10px] sm:text-xs lg:text-sm",
    challenge: "Sales and ops spending time on manual pipeline management",
    response: "Automated lead gen, CRM updates, and follow-up workflows so revenue pipelines move without manual babysitting.",
  },
  {
    layout: "col-span-1 row-span-1",
    challengeSize: "text-[10px] sm:text-xs lg:text-sm",
    responseSize: "text-[9px] sm:text-[10px] lg:text-[11px] leading-tight",
    challenge: "Internal knowledge trapped in isolated documents",
    response: "SOP-aware knowledge assistants that give teams instant access, without IT escalation.",
  },
  {
    layout: "col-span-2 row-span-1",
    challengeSize: "text-sm sm:text-base lg:text-xl",
    responseSize: "text-[11px] sm:text-sm lg:text-base",
    challenge: "Uncertain which AI tools or architectures to invest in",
    response: "Independent, implementation-grounded guidance so clients invest in the right tools avoiding mistakes.",
  },
  {
    layout: "col-span-1 row-span-1",
    challengeSize: "text-[10px] sm:text-xs lg:text-sm",
    responseSize: "text-[9px] sm:text-[10px] lg:text-[11px]",
    challenge: "Shortage of specialized AI engineering talent",
    response: "Immediate access to practitioners who contribute at pace without expensive recruitment delays.",
  },
  {
    layout: "col-span-1 row-span-1",
    challengeSize: "text-[10px] sm:text-xs lg:text-sm",
    responseSize: "text-[9px] sm:text-[10px] lg:text-[11px]",
    challenge: "Scalability concerns as automation requirements grow",
    response: "Modular, reusable frameworks allow automation to scale without architectural overhaul.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export const WhyTDI: React.FC = () => {
  return (
    <section className="bg-[#050a0a] py-8 md:py-16 border-t border-white/5 h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center flex flex-col items-center">
          <h2 className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-[#6CF2B0] font-bold mb-3 md:mb-4 bg-[#6CF2B0]/10 px-4 py-1.5 rounded-full border border-[#6CF2B0]/20 inline-flex">
            Why The Data Island
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-white/90 max-w-4xl">
            Built for the Real World. Managed End-to-End.
          </h3>
        </div>

        {/* 
          Interactive Pinterest / Asymmetric Bento Grid 
          Fits entirely within viewport using dynamic row sizing
        */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 w-full mx-auto"
          style={{ gridAutoRows: 'minmax(80px, 14vh)' }}
        >
          {comparisons.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#010404] transition-all duration-700 hover:border-[#6CF2B0]/50 hover:shadow-[0_0_50px_rgba(108,242,176,0.15)] cursor-pointer ${item.layout}`}
            >
              
              {/* === Base State: The Challenge (Problem) === */}
              <div className="absolute inset-0 p-3 sm:p-5 md:p-6 flex flex-col justify-between transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                 <div className="inline-flex items-center gap-2">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/80 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                   <span className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-widest text-red-400 font-bold opacity-80">
                      The Problem
                   </span>
                 </div>
                 <h4 className={`font-light text-white/90 leading-snug tracking-tight ${item.challengeSize}`}>
                   "{item.challenge}"
                 </h4>
              </div>

              {/* === Reveal State: The Response (Solution) === */}
              <div className="absolute inset-0 p-3 sm:p-5 md:p-6 flex flex-col justify-between bg-[radial-gradient(circle_at_top_right,_rgba(108,242,176,0.15)_0%,_#010404_80%)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                 <div className="inline-flex items-center gap-2">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#6CF2B0] shadow-[0_0_10px_rgba(108,242,176,0.8)]" />
                   <span className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-widest text-[#6CF2B0] font-bold">
                      TDI Solution
                   </span>
                 </div>
                 <p className={`font-normal text-white leading-relaxed ${item.responseSize}`}>
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
