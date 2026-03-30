"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import Leadership from "@/components/Leadership";

const aboutSections = [
  {
    title: "About The Data Island",
    desc: "TDI is an AI-first professional services company specializing in process and workflow automation through applied artificial intelligence. We partner with enterprises and high-growth organizations to redesign how work gets done—replacing slow, manual workflows with intelligent, automated systems.",
    bgColor: "bg-black"
  },
  {
    title: "Mission & Vision",
    desc: "To help organizations across emerging and global markets harness artificial intelligence to automate their most important processes—enabling faster decisions, leaner operations, and compounding productivity gains. Our vision is to be the most trusted AI automation partner in South Asia and globally.",
    bgColor: "bg-[#050a0a]"
  },
  {
    title: "Corporate Structure",
    desc: "TDI is a founder-led, privately-held organization driven by a multidisciplinary team of AI engineering specialists, architected for long-term operational impact.",
    structure: [
      { key: "Legal Entity", val: "The Data Island LLC — Singapore" },
      { key: "Operating Base", val: "Bangladesh (Full Delivery Execution)" },
      { key: "Ownership", val: "Privately held — Founder-led" },
      { key: "Governance", val: "Founder-governed Board" }
    ],
    bgColor: "bg-black"
  },
  {
    title: "Market Focus",
    desc: "We serve large enterprises in Bangladesh across retail, garments, and financial sectors, while providing agile AI automation for international startups and SMEs looking to scale their operations without proportional headcount growth.",
    bgColor: "bg-[#050a0a]"
  }
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Intro Header */}
      <section className="bg-black py-24 md:py-32 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-8">
              Built to <br/><span className="text-accentTeal">Last</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              We architecturalize automation that operates reliably at scale, combining engineering depth with an understanding of real business environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections Breakdown */}
      {aboutSections.map((section, idx) => (
        <section key={idx} className={`${section.bgColor} py-24 md:py-40 border-b border-white/5`}>
          <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accentTeal mb-8 block">/ 0{idx + 1} Section</span>
                <h2 className="text-3xl md:text-5xl font-normal leading-tight text-white mb-6 uppercase">{section.title}</h2>
              </div>

              <div>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12">
                  {section.desc}
                </p>

                {section.structure && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-16 pt-12 border-t border-white/10">
                    {section.structure.map((item, id) => (
                      <div key={id} className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{item.key}</span>
                        <span className="text-white text-base md:text-lg font-medium">{item.val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Existing Leadership Section */}
      <section className="bg-black">
        <Leadership />
      </section>

      <CTASection />
    </main>
  );
}
