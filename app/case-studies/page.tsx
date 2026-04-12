"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const caseStudies = [
  {
    industry: "Manufacturing",
    problem: "Manual quality inspection failing to catch defects at production speed.",
    system: "Bespoke computer vision defect detection pipeline integrated with production lines.",
    outcome: "99.8% detection accuracy at machine speed, 40% reduction in quality-related rework costs."
  },
  {
    industry: "Logistics & Supply Chain",
    problem: "Fragmented data silos across multiple vendors causing shipment visibility gaps.",
    system: "AI agent orchestration layer connecting legacy ERP with modern SaaS dispatch platforms.",
    outcome: "Real-time visibility across all 3PL vendors, 15% improvement in route efficiency."
  },
  {
    industry: "Fast-Moving Consumer Goods (FMCG)",
    problem: "Disproportionate team time spent on automated outreach sequencing and CRM updates.",
    system: "Autonomous sales agents for lead qualification and CRM data enrichment.",
    outcome: "400% increase in qualified pipeline generation without increasing headcount."
  },
  {
    industry: "Financial Services",
    problem: "High-volume document processing for regulatory compliance causing bottlenecks.",
    system: "Multi-lingual NLP pipeline for automated document classification and information extraction.",
    outcome: "Reduced compliance check cycle-time from 3 days to 45 seconds per document."
  },
  {
    industry: "Enterprise Operations",
    problem: "Internal knowledge trapped in inaccessible documents and scattered communication tools.",
    system: "SOP-aware chatbot and internal knowledge assistant indexing company wikis and documents.",
    outcome: "85% reduction in internal support tickets for standard operational queries."
  },
  {
    industry: "Global Retail",
    problem: "Stalled AI pilot initiatives failing to deliver measurable production value.",
    system: "AI implementation roadmap and end-to-end production-grade agent infrastructure.",
    outcome: "Successful go-live of inventory optimization agents within 4 months of engagement."
  }
];

export default function CaseStudiesPage() {
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 md:mb-8">
              Operational <br/><span className="text-accentTeal">Outcomes</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              We don't build demonstrations. We build automation that works in production, at scale, within the complexity of real business environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-black py-16 md:py-24 lg:py-40">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((caseStudy, idx) => (
              <div key={idx} className="bg-[#0c1414] border border-white/5 rounded-3xl p-6 md:p-10 lg:p-14 group">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accentTeal mb-8 block">/ Case Study 0{idx + 1}</span>
                <h2 className="text-sm font-bold tracking-widest text-white/40 uppercase mb-4">{caseStudy.industry}</h2>
                <h3 className="text-xl md:text-2xl font-light leading-snug text-white mb-10 group-hover:text-accentTeal transition-colors">
                  {caseStudy.problem}
                </h3>
                
                <div className="space-y-12">
                  <div className="flex flex-col gap-4">
                    <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">The Solution</span>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">{caseStudy.system}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4 p-8 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-[9px] uppercase tracking-widest text-accentTeal font-bold">Operational Outcome</span>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-semibold">{caseStudy.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
