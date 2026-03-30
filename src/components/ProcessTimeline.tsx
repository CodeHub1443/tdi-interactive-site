"use client";

import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    title: "Discovery & Workflow Audit",
    explanation: "TDI conducts a structured audit of the client's operational environment—mapping existing workflows, identifying automation opportunities, and understanding system constraints.",
  },
  {
    title: "Solution Design & Architecture",
    explanation: "Based on discovery findings, TDI designs the automation solution—selecting the appropriate AI capabilities, defining system architecture, and establishing the development roadmap.",
  },
  {
    title: "Development & Integration",
    explanation: "TDI's engineering team builds the AI system—developing agents, automation pipelines, and integration layers—and connects them with the client's existing technology stack.",
  },
  {
    title: "Testing & Quality Assurance",
    explanation: "All systems undergo thorough testing in conditions that replicate the production environment, covering functional testing, edge case handling, and benchmarking.",
  },
  {
    title: "Deployment & Go-Live",
    explanation: "TDI manages the full deployment process—provisioning infrastructure, configuring monitoring pipelines, and ensuring a smooth, controlled transition to the automated system.",
  },
  {
    title: "Monitoring & Optimization",
    explanation: "Post-deployment, TDI monitors system performance, tracks operational outcomes, and implements ongoing optimizations as client operations evolve.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, scale: 1, y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="bg-white py-24 dark:bg-black border-t border-gray-100 dark:border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-normal leading-tight tracking-tight text-textDark dark:text-white mb-6">
            How TDI Works: <br/>
            Engineered for Precision
          </h3>
          <p className="text-textMuted dark:text-white/50 text-base md:text-lg max-w-2xl font-light">
            Our structured engagement methodology ensures every automation system is matched to your operational reality and built for reliable, long-term performance.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {phases.map((phase, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-accentTeal font-mono">/ 0{idx + 1}</span>
                <div className="h-px bg-gray-100 dark:bg-white/10 flex-1 ml-6" />
              </div>
              <h4 className="text-xl font-semibold text-textDark dark:text-white mb-4 group-hover:text-accentTeal transition-colors">{phase.title}</h4>
              <p className="text-sm text-textMuted dark:text-white/40 leading-relaxed font-light">
                {phase.explanation}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
