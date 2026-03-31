"use client";

import React from "react";
import Image from "next/image";
import { MetricsWall } from "./MetricsBrickWall/MetricsWall";

const logos = [
  { src: "/logos/Syncoria Greyscale.svg", alt: "Syncoria" },
  { src: "/logos/Tech Matters Greyscale.svg", alt: "Tech Matters" },
  { src: "/logos/bangladesh-army-seeklogo greyscale.svg", alt: "Bangladesh Army" },
  { src: "/logos/grameenphone-original-seeklogo greyscale.svg", alt: "Grameenphone" },
  { src: "/logos/unilever-seeklogo greyscale.svg", alt: "Unilever" },
  { src: "/logos/university-of-toronto-seeklogo greyscale.svg", alt: "University of Toronto" },
];

export const ClientSegments: React.FC = () => {
  return (
    <section className="bg-[#010404] border-t border-white/5 w-full overflow-hidden">
      
      {/* ── Trusted By + Marquee ────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 md:py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

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
                  className="inline-flex items-center justify-center shrink-0 mx-12 opacity-65 hover:opacity-100 grayscale transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className="object-contain h-8 md:h-10 w-32 md:w-36"
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
