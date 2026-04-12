"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const techCapabilities = [
  {
    title: "AI Agents",
    desc: "Autonomous reasoning systems that reason through problems, interact with external platforms, and make contextually appropriate decisions.",
    features: ["Single-agent purpose systems", "Sophisticated multi-agent architectures", "Continuous behavioral learning"]
  },
  {
    title: "Workflow Orchestration",
    desc: "Intelligent pipelines that replace manual coordination, repetitive decision-making, and fragmented data movement.",
    features: ["Automated decision logic", "Temporal sequence management", "Conditional branch handling"]
  },
  {
    title: "Computer Vision Systems",
    desc: "Visual automation for quality control, real-time operational monitoring, and document digitization across industrial and commercial environments.",
    features: ["Machine speed defect detection", "Continuous visual surveillance", "Structured OCR extraction"]
  },
  {
    title: "Natural Language Processing",
    desc: "Language understanding systems adapted for Bengali, English, and other relevant languages for document and communication intelligence.",
    features: ["Information extraction from contracts", "Multi-lingual processing", "Intelligent search over data lakes"]
  },
  {
    title: "Automation Infrastructure",
    desc: "Production-ready deployment on modern cloud architecture, engineered to support sustained AI workloads reliably.",
    features: ["Scalable backend API layers", "Production-grade deployment", "Real-time monitoring & optimization"]
  }
];

const integrations = [
  "Slack", "Notion", "Stripe", "Supabase", "HubSpot", "Salesforce", "AWS", "Vercel", "Docker", "GitHub Actions", "Pipedrive", "Gmail"
];

export default function TechnologyPage() {
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
              Engineering <br/><span className="text-accentTeal">Infrastructure</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              TDI brings together the technical depth of an AI engineering firm with the operational discipline of an enterprise systems integrator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Capabilities */}
      <section className="bg-black py-16 md:py-24 lg:py-40 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCapabilities.map((tech, idx) => (
              <div key={idx} className="bg-[#0c1414] border border-white/5 p-10 rounded-3xl group">
                <span className="text-xs font-bold tracking-[0.3em] text-accentTeal uppercase mb-8 block">/ Capability 0{idx + 1}</span>
                <h2 className="text-2xl font-normal text-white mb-6 group-hover:text-accentTeal transition-colors">{tech.title}</h2>
                <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
                  {tech.desc}
                </p>
                <div className="space-y-3">
                  {tech.features.map((f, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-white/70">
                      <div className="w-1 h-1 rounded-full bg-accentTeal opacity-40 shrink-0" />
                      <span className="text-[13px] font-light leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-[#050a0a] py-16 md:py-24 lg:py-40">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight text-white mb-8">Native Integration Ecosystem</h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                TDI agents and pipelines are built to integrate natively with the platforms your organization already operates on. We don't bolt on—we wire in.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {integrations.map((int, iidx) => (
                <div key={iidx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-medium tracking-wide text-sm">{int}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
