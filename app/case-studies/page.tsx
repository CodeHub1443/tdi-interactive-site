"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseStudySection } from "@/components/CaseStudies/CaseStudySection";
import { CTASection } from "@/components/CTASection";

export default function CaseStudiesPage() {
  return (
    <main className="pt-20 bg-black">
      {/* Intro Header */}
      <section className="bg-black py-24 md:py-32 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 md:mb-8">
              Operational <br/><span className="text-accentTeal">Deployments</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
              We don't build demonstrations. We build operational AI systems that work in production, at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Horizontal Scroll Section */}
      <CaseStudySection />

      <CTASection />
    </main>
  );
}
