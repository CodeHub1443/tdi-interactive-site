"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    role: "CHAIRMAN AND CO-FOUNDER",
    name: "Riyadh Hossain",
    image: "https://i.pravatar.cc/500?img=11",
  },
  {
    role: "COO AND CO-FOUNDER",
    name: "Intisar Tahmid Naheen",
    image: "https://i.pravatar.cc/500?img=68",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  },
};

const Leadership: React.FC = () => {
  return (
    <section className="bg-white text-textDark w-full h-full flex items-center py-12 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col items-center"
      >

        {/* Header Block */}
        <motion.div variants={itemVariants} className="border border-gray-200 rounded-full px-4 py-1 text-xs tracking-wider text-gray-400 mb-8 uppercase">
          Company
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light text-center mb-6 tracking-tight">
          About Our Company and Leadership Team
        </motion.h2>

        <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-500 font-light text-center max-w-2xl leading-relaxed mb-20">
          TDI is an AI-first professional services company specializing in process and
          workflow automation through applied artificial intelligence. Headquartered in Singapore
          with a full delivery base in Bangladesh, we partner with enterprises and high-growth
          organizations to redesign how work gets done—replacing slow, manual workflows
          with intelligent, automated systems.
        </motion.p>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-[#111] rounded-3xl overflow-hidden aspect-[4/3] flex items-end shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            >
              <div className="grid grid-cols-2 w-full h-full">

                {/* Left side text overlay / abstract wave */}
                <div className="relative z-20 flex flex-col justify-between p-8 md:p-10 w-full h-full bg-gradient-to-r from-black/80 to-transparent">
                  <div>
                    <p className="text-[10px] sm:text-xs text-white/50 tracking-widest font-semibold mb-2">
                      {leader.role}
                    </p>
                    <h3 className="text-xl md:text-2xl text-white font-medium">
                      {leader.name}
                    </h3>
                  </div>

                  {/* Watermark Logo */}
                  <div className="mt-auto opacity-50 bg-gradient-to-tr from-white/10 to-transparent p-4 rounded-xl backdrop-blur-sm w-max">
                    <span className="font-sans font-bold text-white text-xl tracking-widest">
                      TDI<span className="text-[9px] font-normal tracking-normal ml-1 opacity-70 block -mt-1 uppercase">Technologies</span>
                    </span>
                  </div>
                </div>

                {/* Right side portrait image */}
                <div className="absolute inset-0 z-10 w-full h-full">
                  {/* Decorative abstract wave overlay */}
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none mix-blend-overlay" />

                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out object-right"
                  />

                  {/* Shadow vignette to blend into black left side */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none w-2/3" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none h-1/3 mt-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Leadership;
