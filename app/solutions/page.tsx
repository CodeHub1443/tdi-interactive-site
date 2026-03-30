"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const serviceSections = [
  {
    title: "AI Agent Development",
    intro: "Build the agents that run your operations—not just assist them.",
    subsections: [
      { name: "Operational AI Agents", desc: "Building agents for Sales, Operations, and Support that reason and execute tasks autonomously." },
      { name: "AI Copilots & Internal Assistants", desc: "SOP-aware chatbots and knowledge assistants that provide instant team guidance." },
      { name: "Stack Integration", desc: "Native wiring with your existing high-growth product or enterprise SaaS stack." }
    ],
    examples: ["Sales discovery agents", "Level 1-2 support agents", "Automated procurement operators"],
    bgColor: "bg-black"
  },
  {
    title: "Workflow Automation",
    intro: "Replace manual coordination with intelligent, automated pipelines.",
    subsections: [
      { name: "Go-to-Market Automation", desc: "Automating lead identification, enrichment, and sequenced multi-channel outreach." },
      { name: "Operational Workflow Automation", desc: "Document processing, multi-step approval chains, and automated reporting." },
      { name: "Custom Integration Tooling", desc: "Building the glue logic between fragmented systems standard tools can't connect." }
    ],
    tools: ["n8n", "LangChain", "LangGraph", "MCP", "PowerShell", "TypeScript"],
    bgColor: "bg-[#050a0a]"
  },
  {
    title: "Custom AI System Integration",
    intro: "Purpose-built AI systems for processes standard tools cannot handle.",
    subsections: [
      { name: "Visual Process Automation", desc: "Production line quality inspection and real-time operational monitoring." },
      { name: "Language & Document Intelligence", desc: "Multi-lingual processing and intelligent search over institutional repositories." }
    ],
    examples: ["Defect detection at machine speed", "Regulatory compliance monitoring", "Automated OCR pipelines"],
    bgColor: "bg-black"
  },
  {
    title: "MVP Development",
    intro: "AI-native products built to ship—not to demonstrate.",
    subsections: [
      { name: "Core Infrastructure", desc: "Building the agent architecture that powers your product's core intelligence." },
      { name: "Deployment & Scaling", desc: "Production-ready backend and API layers engineered for scale." }
    ],
    bgColor: "bg-[#050a0a]"
  },
  {
    title: "AI Strategy & Advisory",
    intro: "Invest in the right AI. Avoid the wrong ones.",
    subsections: [
      { name: "Opportunity Mapping", desc: "Identifying which processes in your operation are genuinely automatable." },
      { name: "Architecture Decisions", desc: "Independent assessment of AI platforms and LLM providers for your specific case." }
    ],
    bgColor: "bg-black"
  },
  {
    title: "Talent & Team Augmentation",
    intro: "Specialized AI practitioners who deliver from day one.",
    roles: ["AI/ML Engineers", "AI Agent Developers", "Computer Vision Specialists", "NLP Engineers", "Backend & Integration Engineers", "DevOps / MLOps Engineers", "Business Analysts"],
    bgColor: "bg-[#050a0a]"
  }
];

export default function SolutionsPage() {
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
              Full-Spectrum <br/><span className="text-accentTeal">AI Automation</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
              We design and deploy purpose-built AI systems that automate the processes driving enterprise and high-growth business performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      {serviceSections.map((section, idx) => (
        <section key={idx} className={`${section.bgColor} py-24 md:py-40 border-b border-white/5`}>
          <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] text-accentTeal uppercase mb-6 block">/ 0{idx + 1} Service Line</span>
                <h2 className="text-3xl md:text-5xl font-normal leading-tight text-white mb-6">{section.title}</h2>
                <p className="text-white/40 text-lg font-light">{section.intro}</p>
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  {section.subsections?.map((sub, sidx) => (
                    <div key={sidx}>
                      <h4 className="text-white font-medium text-lg mb-4">{sub.name}</h4>
                      <p className="text-white/40 text-sm leading-relaxed font-light">{sub.desc}</p>
                    </div>
                  ))}
                </div>

                {section.examples && (
                  <div className="mt-8 pt-12 border-t border-white/10">
                    <h5 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-6">Practical Applications</h5>
                    <div className="flex flex-wrap gap-4">
                      {section.examples.map((ex, eidx) => (
                        <span key={eidx} className="bg-white/5 text-white/70 px-4 py-2 rounded-full text-xs font-medium border border-white/10">{ex}</span>
                      ))}
                    </div>
                  </div>
                )}

                {section.tools && (
                  <div className="mt-8 pt-12 border-t border-white/10">
                    <h5 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-6">Automation Stack</h5>
                    <div className="flex flex-wrap gap-4">
                      {section.tools.map((t, tidx) => (
                        <span key={tidx} className="text-accentTeal font-mono text-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {section.roles && (
                  <div className="grid grid-cols-2 gap-4">
                    {section.roles.map((r, ridx) => (
                      <div key={ridx} className="flex items-center gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accentTeal opacity-50" />
                        <span className="text-sm font-light">{r}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </main>
  );
}
