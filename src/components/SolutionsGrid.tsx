"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "01",
    title: "ML Ops",
    description: "ML Ops at TDI streamlines machine learning workflows through advanced techniques. Time-domain autocorrelation captures temporal and causal dynamics between predictors and target variables for accurate forecasting.",
  },
  {
    id: "02",
    title: "Forecasting",
    description: "By integrating diverse data sources, including historical data, external factors, and market dynamics, businesses can gain deep insights into evolving consumer preferences and market conditions.",
  },
  {
    id: "03",
    title: "Marketing Analytics",
    description: "Forecast sales and media effectiveness with 90-95% accuracy over 18 months, enabling forward-looking strategies and capitalizing on future market opportunities. Enhance customer loyalty and revenue.",
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
    <section className="bg-black text-white w-full h-full flex items-center py-12 md:py-16 border-t border-white/5 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="max-w-[1800px] mx-auto px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24"
      >
        
        {/* Left Side: Sticky or static CTA group */}
        <motion.div variants={itemVariants} className="flex flex-col items-start gap-8">
          <div className="border border-accentTeal/30 text-accentTeal text-xs font-semibold px-4 py-1.5 rounded-full mt-2">
            Enterprise Solutions
          </div>
          
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm mt-4 lg:mt-32">
            Harness the power of advanced analytics and machine learning for unparalleled insights and performance.
          </p>
          
          <button className="flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 text-sm hover:bg-white hover:text-black transition-all mb-4">
            Get Started <span className="text-lg leading-none">→</span>
          </button>
        </motion.div>

        {/* Right Side: Headlines and Grid */}
        <div className="flex flex-col">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-[56px] font-normal leading-[1.1] mb-12 max-w-4xl tracking-tight">
            Tailored Ai Solutions to Enhance <br className="hidden md:block"/>
            Your Business Performance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            
            {/* Header/Title Card within Grid */}
            <motion.div variants={itemVariants} className="bg-[#050b0b] border border-white/5 rounded-2xl p-8 lg:p-10 flex flex-col justify-center min-h-[300px]">
              <div className="w-8 h-8 rounded-full bg-accentTeal/10 flex items-center justify-center mb-6">
                <span className="text-accentTeal text-xl">⚙</span>
              </div>
              <h3 className="text-xl md:text-2xl font-light leading-snug">
                <span className="font-semibold text-white">Enterprise AI:</span> Optimizing <br/>
                ML Ops for Accurate <br/>
                Forecasting
              </h3>
            </motion.div>

            {/* Feature Cards Loop */}
            {solutions.map((solution) => (
              <motion.div 
                key={solution.id} 
                variants={itemVariants}
                className="group relative bg-[#050b0b] border border-white/5 hover:border-accentTeal/30 rounded-2xl p-8 lg:p-10 flex flex-col transition-all duration-500 overflow-hidden min-h-[300px]"
              >
                <div className="flex items-center justify-between mb-8 z-10 w-full relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center text-white/50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-medium tracking-wide">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center -rotate-45 group-hover:bg-white group-hover:text-black transition-colors z-20">
                    <span className="text-sm">→</span>
                  </Link>
                </div>

                <p className="text-sm text-white/40 leading-relaxed z-10 relative pr-4">
                  {solution.description}
                </p>

                {/* Giant Number Subtext */}
                <div className="absolute bottom-0 right-4 translate-y-1/4 select-none opacity-20 group-hover:opacity-40 group-hover:-translate-y-2 transition-all duration-700 ease-out z-0">
                  <span className="text-[120px] font-light tracking-tighter leading-none text-white font-mono">
                    {solution.id}
                  </span>
                </div>
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accentTeal/0 via-transparent to-accentTeal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
            
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default SolutionsGrid;
