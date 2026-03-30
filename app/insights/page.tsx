"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const insights = [
  {
    title: "The Deployment Reality: Why AI Initiatives Stagnate in Pilot",
    category: "AI Implementation Lessons",
    summary: "Exploring the gap between AI demonstration and production value. Real-world insights from over 200 automation audits.",
    time: "Dec 2025"
  },
  {
    title: "The Architecture of Autonomous AI Agents",
    category: "Workflow Automation Strategies",
    summary: "Breaking down the transition from assisted bots to autonomous decision-makers at every level of operations.",
    time: "Nov 2025"
  },
  {
    title: "Multi-Agent Orchestration: A Technical Primer",
    category: "AI Automation Guides",
    summary: "How specialized agents collaboration can execute broader, more complex operational processes with minimal intervention.",
    time: "Oct 2025"
  },
  {
    title: "The Rise of SOP-Aware Chatbots in Enterprise",
    category: "Industry Automation Trends",
    summary: "Why intelligent internal assistants are becoming the backbone of operational knowledge management.",
    time: "Sep 2025"
  },
  {
    title: "Modular Scaling in AI Automation: A Strategy",
    category: "AI Implementation Lessons",
    summary: "Ensuring your AI systems grow incrementally alongside your operations without costly architectural overhauls.",
    time: "Aug 2025"
  },
  {
    title: "Native Stack Integration vs Bolting On: Choosing Your Path",
    category: "AI Automation Guides",
    summary: "Evaluating the long-term trade-offs between custom-built automation glue and off-the-shelf single-purpose tools.",
    time: "Jul 2025"
  }
];

export default function InsightsPage() {
  return (
    <main className="pt-20">
      <section className="bg-black py-24 md:py-32 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-8">
              Automation <br/><span className="text-accentTeal">Insights</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              Explore lessons learned from deploying AI at scale, guides to workflow automation, and the latest trends in industrial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-24 md:py-40">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {insights.map((article, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <div className="h-px bg-white/10 w-full mb-8" />
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accentTeal">{article.category}</span>
                  <span className="text-white/20 text-xs font-mono">{article.time}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-normal leading-snug text-white mb-6 group-hover:text-accentTeal transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light mb-8">
                  {article.summary}
                </p>
                <div className="mt-auto flex items-center gap-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all">
                  Read Article <span>→</span>
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
