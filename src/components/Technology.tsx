"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techItems = [
  {
    id: "001",
    title: "Data and Database",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: "Robust data pipelines and secure database architectures that serve as the foundation for complex AI operations and machine learning models.",
  },
  {
    id: "002",
    title: "Scalable Architecture",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    description: "Cloud-native infrastructure designed to horizontally scale on demand, ensuring consistent performance during peak computational loads.",
  },
  {
    id: "003",
    title: "Adaptive Machine Learning",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description: "Self-optimizing AI models that continuously train on real-time data streams to adapt to changing environments and edge cases.",
  },
  {
    id: "004",
    title: "UI/UX",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    description: "Quantum UI, part of the TDI platform, offers an intuitive interface that simplifies complex data analysis with a user-centered design for seamless interaction.",
  },
];

const AbstractTriangleGraphic = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simplified abstract dotted wireframe representation */}
    <g stroke="white" strokeWidth="1" opacity="0.4" strokeDasharray="2 4">
      <path d="M200 50L350 250H50L200 50Z" />
      <path d="M200 80L320 230H80L200 80Z" />
      <path d="M200 110L290 210H110L200 110Z" />
      
      <path d="M150 250L300 350H50L150 250Z" />
      <path d="M280 150L380 320H220L280 150Z" />
      
      {/* Connecting nodes */}
      <circle cx="200" cy="50" r="2" fill="white" />
      <circle cx="350" cy="250" r="2" fill="white" />
      <circle cx="50" cy="250" r="2" fill="white" />
    </g>
  </svg>
);

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

const Technology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="bg-black text-white py-24 md:py-32 w-full overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="max-w-[1800px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        
        {/* Left Column: List and Titles */}
        <div className="flex flex-col h-full justify-between">
          <motion.div variants={itemVariants}>
            <div className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-wide text-white/70 mb-8">
              Technology
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-8">
              Leading-Edge Technology <br className="hidden xl:block" />
              for Machine Learning
            </h2>
            
            <button className="flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 text-sm hover:bg-white hover:text-black transition-all mb-16 lg:mb-24 w-max">
              Contact Us <span className="text-lg leading-none">→</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="pb-4">
            <div className="flex justify-between items-center text-xs text-white/50 mb-6 uppercase tracking-wider font-semibold border-b border-white/10 pb-4">
              <span>Select an item</span>
              <span>{activeIndex + 1}/{techItems.length}</span>
            </div>
            
            <div className="flex flex-col gap-2">
              {techItems.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 text-left ${
                      isActive 
                        ? "bg-white/10 border border-white/20" 
                        : "bg-transparent border border-transparent hover:bg-white/5"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? "bg-white/15" : "bg-white/5"} text-white/70`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm md:text-base font-medium ${isActive ? "text-white" : "text-white/60"}`}>
                      {item.title}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accentTeal" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Card Display */}
        <motion.div variants={itemVariants} className="relative w-full h-[500px] lg:h-auto lg:min-h-[700px] flex items-stretch">
          <div className="w-full h-full relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden flex flex-col p-8 md:p-12">
            
            {/* Top Indicator */}
            <div className="flex items-center justify-between text-xs font-mono text-white/50 z-10 w-full relative">
              <span>/ {techItems[activeIndex].id}</span>
              <span className="font-sans font-bold text-white/30 text-lg tracking-widest">TDI<span className="text-[10px] font-normal tracking-normal ml-2 opacity-50">Machine<br/>Technologies</span></span>
            </div>

            {/* Abstract Graphic Area */}
            <div className="absolute inset-0 top-12 left-12 right-12 bottom-[250px] flex items-center justify-center pointer-events-none">
              <AbstractTriangleGraphic />
            </div>

            {/* Bottom Content Area */}
            <div className="mt-auto relative z-10 w-full max-w-lg border-t border-white/10 pt-8 pt-[clamp(2rem,5vh,4rem)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-light mb-4">
                    {techItems[activeIndex].title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                    {techItems[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Decorative background gradients */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accentTeal/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 mix-blend-overlay" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Technology;
