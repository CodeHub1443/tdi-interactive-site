"use client";

import React from "react";
import Image from "next/image";
import { MetricsWall } from "./MetricsBrickWall/MetricsWall";

const logos = [
  { src: "/logos/Syncoria Greyscale.svg", alt: "Syncoria", width: 120 },
  { src: "/logos/Tech Matters Greyscale.svg", alt: "Tech Matters", width: 120 },
  { src: "/logos/bangladesh-army-seeklogo greyscale.svg", alt: "Bangladesh Army", width: 80 },
  { src: "/logos/grameenphone-original-seeklogo greyscale.svg", alt: "Grameenphone", width: 120 },
  { src: "/logos/unilever-seeklogo greyscale.svg", alt: "Unilever", width: 100 },
  { src: "/logos/university-of-toronto-seeklogo greyscale.svg", alt: "University of Toronto", width: 140 },
];

export const ClientSegments: React.FC = () => {
  return (
    <section className="bg-[#010404] border-t border-white/5 w-full overflow-hidden">
      
      {/* ── Trusted By + Marquee ────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24 md:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="w-full lg:w-[280px] shrink-0 text-center lg:text-left">
            <h2
              className="font-bold tracking-tight text-white/90 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Trusted by<br className="hidden lg:block" /> Market Leaders
            </h2>
            <div className="h-[2px] w-12 mt-6 mx-auto lg:mx-0 rounded-full" style={{ background: "#6CF2B0" }} />
          </div>

          <div className="w-full flex-1 overflow-hidden relative">
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#010404] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#010404] to-transparent z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap animate-marquee">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center justify-center shrink-0 mx-10 opacity-35 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={56}
                    className="object-contain h-10 md:h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Metrics Brick Wall ──────────────────────────────── */}
      <MetricsWall />

    </section>
  );
};
