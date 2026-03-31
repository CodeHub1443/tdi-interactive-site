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

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    <ClientSegments />,
    <SolutionsGrid />,
    <ProcessTimeline />,
    <WhyTDI />,
    <Technology />,
    <Products />,
    <TestimonialSlider />,
    <Leadership />,
    <CTASection />
  ];

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-black scroll-smooth"
    >
      <LayeredSlide index={0} className="w-full h-screen" containerRef={scrollContainerRef}>
        <Hero />
      </LayeredSlide>
      <WebGLTransitionProvider>
        <main className="flex-1 w-full flex flex-col items-center">
          {sections.map((section, idx) => (
            <LayeredSlide 
              key={idx} 
              index={idx + 1} 
              className="w-full h-screen"
              containerRef={scrollContainerRef}
            >
              {section}
            </LayeredSlide>
          ))}
        </main>
      </WebGLTransitionProvider>
    </div>
  );
}
