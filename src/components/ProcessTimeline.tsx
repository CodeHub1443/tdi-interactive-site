"use client";

import React from "react";
import { motion } from "framer-motion";

const NODES = [
  { id: 1, angle: 0, title: "DISCOVERY & AUDIT", desc: "Mapping workflow constraints." },
  { id: 2, angle: 60, title: "SYSTEM ARCHITECTURE", desc: "Topological AI design." },
  { id: 3, angle: 120, title: "AGENTS & WORKFLOWS", desc: "Autonomous cognitive logic." },
  { id: 4, angle: 180, title: "QUALITY ASSURANCE", desc: "Edge-case stress testing." },
  { id: 5, angle: 240, title: "SEAMLESS DEPLOYMENT", desc: "Zero-downtime integration." },
  { id: 6, angle: 300, title: "MONITORING & PROFILING", desc: "Continuous metric tracking." },
];

const RADIUS_CLASS = "w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[min(520px,55vh)] md:h-[min(520px,55vh)] lg:w-[min(600px,60vh)] lg:h-[min(600px,60vh)]";

const NodeBlock = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="relative group flex flex-col items-center justify-center p-3 sm:p-4 border border-white/5 bg-[#010404]/80 rounded-2xl backdrop-blur-xl w-[120px] sm:w-[160px] md:w-[190px] shadow-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-[#6CF2B0]/40 hover:scale-105 z-20">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-[#6CF2B0] text-center mb-1 uppercase">
        {title}
      </span>
      <p className="hidden md:block text-[10px] text-white/50 text-center font-light leading-snug">
        {desc}
      </p>
    </div>
  );
};

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="bg-[#010404] py-8 md:py-12 border-t border-white/5 overflow-hidden relative h-screen flex flex-col items-center justify-start">
      {/* Background Deep Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(108,242,176,0.05)_0%,_transparent_50%)]" />

      {/* Header */}
      <div className="mt-4 mb-8 md:mb-12 text-center flex flex-col items-center relative z-30 px-6 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6CF2B0]/10 border border-[#6CF2B0]/20 text-[#6CF2B0] text-[9px] md:text-[10px] font-mono font-semibold tracking-widest mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#6CF2B0] animate-pulse shadow-[0_0_10px_rgba(108,242,176,0.8)]" />
          CONTINUOUS AUTOMATION LOOP
        </motion.div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white mb-4">
          The Automation Engine
        </h3>
        <p className="text-white/50 text-sm md:text-base max-w-2xl font-light">
          A living, cyclical architecture. Designed to discover, deploy, and continuously optimize operations.
        </p>
      </div>

      {/* Orbital Diagram Container */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-[300px]">
        
        {/* The Outer Orbital Track */}
        <div className={`absolute border border-white/10 rounded-full ${RADIUS_CLASS} shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]`} />
        
        {/* The Orbiting Light Pulse */}
        <motion.div 
          className={`absolute rounded-full pointer-events-none ${RADIUS_CLASS}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          {/* Glowing particle positioned exactly on the top edge of the track */}
          <div className="absolute top-[-3px] left-1/2 -ml-[3px] w-[6px] h-[6px] rounded-full bg-[#6CF2B0] shadow-[0_0_20px_6px_rgba(108,242,176,0.8)]" />
          <div className="absolute top-0 left-1/2 -ml-[1px] w-[2px] h-[40px] bg-gradient-to-b from-[#6CF2B0] to-transparent opacity-80" />
        </motion.div>

        {/* The Central Engine Core */}
        <div className="absolute flex items-center justify-center z-10 hover:scale-105 transition-transform duration-700 cursor-default">
           <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border border-[#6CF2B0]/30 bg-[#6CF2B0]/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_80px_rgba(108,242,176,0.15)] relative z-20 overflow-hidden">
             {/* Swirling center gradient */}
             <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_transparent_0%,_rgba(108,242,176,0.1)_50%,_transparent_100%)] animate-spin-slow opacity-50" />
             <span className="font-mono text-[10px] sm:text-xs md:text-sm font-bold text-white/90 text-center uppercase tracking-widest leading-relaxed relative z-10">
               TDI<br/>Core
             </span>
           </div>
           {/* Pulsing broadcast rings */}
           <div className="absolute inset-[-20%] rounded-full border border-[#6CF2B0]/20 animate-ping shadow-[0_0_40px_rgba(108,242,176,0.2)]" style={{ animationDuration: '4s' }}/>
        </div>

        {/* Network Spokes (Connecting Core to Track) */}
        {NODES.map((node) => (
           <div key={`spoke-${node.id}`} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${RADIUS_CLASS} pointer-events-none`}>
              <div className="w-full h-full absolute" style={{ transform: `rotate(${node.angle}deg)` }}>
                 <div className="absolute top-[5%] left-1/2 -ml-px w-px h-[45%] bg-gradient-to-b from-white/10 to-transparent" />
              </div>
           </div>
        ))}

        {/* Orbital Nodes Placements */}
        {NODES.map((node, index) => (
          <div 
            key={node.id} 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${RADIUS_CLASS} pointer-events-none`}
          >
            {/* Rotate container to the specific degree */}
            <div className="w-full h-full absolute" style={{ transform: `rotate(${node.angle}deg)` }}>
              {/* Counter-rotate the child to stay perfectly upright */}
              <div 
                className="absolute top-0 left-1/2 origin-center pointer-events-auto"
                style={{ transform: `translate(-50%, -50%) rotate(-${node.angle}deg)` }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-10%" }}
                >
                  <NodeBlock title={node.title} desc={node.desc} />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};
