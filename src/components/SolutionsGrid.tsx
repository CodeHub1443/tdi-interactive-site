"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "01",
    title: "AI Agent Development",
    description: "Build the agents that run your operations—not just assist them. We design and build purpose-built AI agents that autonomously execute complex, multi-step tasks end-to-end.",
  },
  {
    id: "02",
    title: "Workflow Automation",
    description: "Replace manual coordination with intelligent, automated pipelines. TDI replaces repetitive decision-making and fragmented data movement with seamless automated integration.",
  },
  {
    id: "03",
    title: "Custom AI Integration",
    description: "Purpose-built AI systems for processes standard tools cannot handle. We design bespoke systems for factory floors, logistics networks, and document-heavy environments.",
  },
  {
    id: "04",
    title: "MVP Development",
    description: "AI-native products built to ship—not just to demonstrate. We provides end-to-end MVP development that combines product engineering with applied AI from day one.",
  },
  {
    id: "05",
    title: "AI Strategy & Advisory",
    description: "Invest in the right AI, avoid the wrong ones. Implementation-grounded strategy and advisory engagements to map your operational landscape and design a roadmap.",
  },
  {
    id: "06",
    title: "Talent Augmentation",
    description: "Specialized AI practitioners who deliver from day one. Access experienced AI engineers, agent developers, and NLP specialists to accelerate your product development.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

const SolutionsGrid: React.FC = () => {
  return (
    <section className="bg-[#050a0a] text-white w-full h-full flex flex-col py-16 md:py-20 border-t border-white/5 overflow-hidden relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        variants={containerVariants}
        className="max-w-[1800px] mx-auto px-6 lg:px-8 w-full h-full flex flex-col justify-center"
      >
        
        {/* Header Block - More compact */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 lg:mb-12">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <div className="inline-block border border-accentTeal/30 text-accentTeal text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4">
              Enterprise Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-tight text-white mb-4">
              Six Core Workflow Automation Services
            </h2>
            <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-xl font-light">
              Harness the power of autonomous AI agents and intelligent pipelines to streamline complex operational hurdles.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="shrink-0 flex items-end">
            <Link href="/solutions" className="flex items-center gap-3 bg-white text-black rounded-full px-6 py-3 text-xs font-semibold hover:bg-accentTeal hover:text-white transition-all">
              View All Services <span className="text-sm leading-none">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid - Very compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {solutions.map((solution) => (
            <motion.div 
              key={solution.id} 
              variants={itemVariants}
              className="group relative bg-[#0c1414] border border-white/5 hover:border-accentTeal/30 rounded-2xl p-6 lg:p-7 flex flex-col transition-all duration-500 overflow-hidden min-h-[220px] lg:min-h-[240px]"
            >
              <div className="flex items-center justify-between mb-5 z-10 w-full relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-accentTeal">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-medium tracking-wide">
                    {solution.title}
                  </h3>
                </div>
                
                <Link href="/solutions" className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center -rotate-45 group-hover:bg-white group-hover:text-black transition-colors z-20">
                  <span className="text-xs">→</span>
                </Link>
              </div>

              <p className="text-xs md:text-sm text-white/40 leading-relaxed z-10 relative pr-2 font-light">
                {solution.description}
              </p>

              {/* Giant Number Subtext - More subtle */}
              <div className="absolute bottom-2 right-4 select-none opacity-[0.03] group-hover:opacity-10 transition-all duration-700 ease-out z-0">
                <span className="text-[70px] font-bold tracking-tighter leading-none text-white font-mono">
                  {solution.id}
                </span>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accentTeal/0 via-transparent to-accentTeal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default SolutionsGrid;
