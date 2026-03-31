"use client";

import React from "react";
import { motion } from "framer-motion";

const leaders = [
  {
    role: "DIRECTOR OF ENGINEERING",
    name: "Sarah Mitchell",
    image: "https://i.pravatar.cc/800?img=44",
    key: false,
  },
  {
    role: "CHAIRMAN AND CO-FOUNDER",
    name: "Riyadh Hossain",
    image: "/Riyadh.png",
    key: true,
  },
  {
    role: "COO AND CO-FOUNDER",
    name: "Intisar Tahmid Naheen",
    image: "/Intisar.png",
    key: true,
  },
  {
    role: "HEAD OF AI SYSTEMS",
    name: "Tanvir Tabassum",
    image: "/Tanvir.png",
    key: false,
  },
];

// The 2 inner (key) cards slide in from opposite sides; outer cards fade straight in
const startOffsets = ["0px", "-140px", "140px", "0px"];

const PhotoCard = ({ leader, index }: { leader: typeof leaders[0]; index: number }) => {
  const isKeyPerson = leader.key;
  const initial = { opacity: 0, x: startOffsets[index] };
  const animate = { opacity: 1, x: "0px" };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{
        duration: isKeyPerson ? 1.4 : 0.8,
        delay: isKeyPerson ? 0.5 : 0.2,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      viewport={{ once: true, margin: "-15%" }}
      className={`relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#111] flex-shrink-0 shadow-2xl group
        ${isKeyPerson
          ? "w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] z-20 -translate-y-6 sm:-translate-y-8 md:-translate-y-10"
          : "w-[160px] sm:w-[200px] md:w-[230px] lg:w-[270px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[390px] z-10 opacity-70 hover:opacity-100 transition-opacity duration-500 -translate-y-4 sm:-translate-y-5"
        }`}
    >
      {/* Full-bleed photo */}
      <img
        src={leader.image}
        alt={leader.name}
        className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />

      {/* Left-to-right shadow vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />
      {/* Top subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none z-10" />

      {/* Top-left: Role + Name */}
      <div className="absolute top-0 left-0 z-20 p-5 md:p-6 lg:p-8 flex flex-col">
        <p className="text-[9px] sm:text-[10px] text-white/50 tracking-widest font-semibold mb-1 uppercase">
          {leader.role}
        </p>
        <h3 className={`text-white font-medium leading-tight ${isKeyPerson ? "text-base sm:text-lg md:text-xl lg:text-2xl" : "text-sm sm:text-base"}`}>
          {leader.name}
        </h3>
      </div>

      {/* Bottom-left: TDI Technologies watermark */}
      {isKeyPerson && (
        <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-20 opacity-50 bg-gradient-to-tr from-white/10 to-transparent p-3 md:p-4 rounded-xl backdrop-blur-sm w-max">
          <span className="font-sans font-bold text-white text-lg md:text-xl tracking-widest">
            TDI
            <span className="text-[8px] font-normal tracking-normal ml-1 opacity-70 block -mt-1 uppercase">
              Technologies
            </span>
          </span>
        </div>
      )}
    </motion.div>
  );
};

const Leadership: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#010404] text-textDark dark:text-white w-full flex flex-col items-center py-16 md:py-24 overflow-hidden relative border-t border-gray-100 dark:border-white/5">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 text-[10px] tracking-widest text-accentTeal dark:text-[#6CF2B0] mb-8 uppercase font-mono font-bold"
      >
        Company
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-light text-center mb-6 tracking-tight max-w-3xl px-6"
      >
        About Our Company and Leadership Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-base text-gray-500 dark:text-white/50 font-light text-center max-w-2xl leading-relaxed mb-10 md:mb-14 px-6"
      >
        TDI is an AI-first professional services company specializing in process and
        workflow automation through applied artificial intelligence. Headquartered in Singapore
        with a full delivery base in Bangladesh, we partner with enterprises and high-growth
        organizations to redesign how work gets done.
      </motion.p>

      {/* 4-Photo Row: outer two stay, inner two slide in from sides */}
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[1300px] px-4 md:px-8">
        {leaders.map((leader, i) => (
          <PhotoCard key={i} leader={leader} index={i} />
        ))}
      </div>

    </section>
  );
};

export default Leadership;
