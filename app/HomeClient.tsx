"use client"

import React, { useRef } from "react";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import SolutionsGrid from "@/components/SolutionsGrid";
import Products from "@/components/Products";
import TestimonialSlider from "@/components/TestimonialSlider";
import Leadership from "@/components/Leadership";
import { LayeredSlide } from "@/components/LayeredSlide";
import { WebGLTransitionProvider } from "@/components/WebGLTransitionProvider";
import { ClientSegments } from "@/components/ClientSegments";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyTDI } from "@/components/WhyTDI";
import { CTASection } from "@/components/CTASection";
import { CaseStudySection } from "@/components/CaseStudies/CaseStudySection";

export default function HomeClient() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    ClientSegments,
    SolutionsGrid,
    ProcessTimeline,
    WhyTDI,
    CaseStudySection,
    Technology,
    Products,
    TestimonialSlider,
    Leadership,
    CTASection,
  ];

  return (
    <div 
      ref={scrollContainerRef}
      className="h-[100svh] overflow-y-auto overflow-x-hidden bg-black scroll-smooth md:snap-y md:snap-mandatory"
    >
      {/* Hero is the page header landmark */}
      <header>
        <LayeredSlide index={0} className="w-full min-h-[100svh]" containerRef={scrollContainerRef}>
          <Hero />
        </LayeredSlide>
      </header>

      <WebGLTransitionProvider>
        <main id="main-content" tabIndex={-1} className="flex-1 w-full flex flex-col items-center outline-none">
          {sections.map((Section, idx) => {
            const isCaseStudy = Section === CaseStudySection;
            return (
              <LayeredSlide 
                key={idx} 
                index={idx + 1} 
                className="w-full"
                containerRef={scrollContainerRef}
                disableTransform={isCaseStudy}
              >
                <Section />
              </LayeredSlide>
            );
          })}
        </main>
      </WebGLTransitionProvider>
    </div>
  );
}
