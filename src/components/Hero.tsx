import React from "react";
import DotFieldShader from "@/components/DotFieldShader";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col bg-backgroundDark">
      {/* TOP HERO STAGE - Adapts from 65% to natural on mobile */}
      <div className="relative flex flex-col items-start lg:items-end justify-end pb-8 lg:pb-12 shrink-0 flex-1 lg:h-[65%]">
        
        {/* WebGL Powered Dot Background */}
        <div className="absolute inset-0 hero-gradient z-0" />
        <DotFieldShader />
        <div className="hero-vignette z-40" />

        {/* Content aligned with navbar */}
        <div className="relative z-50 mx-auto w-full max-w-[1800px] px-6 lg:px-8 flex flex-col lg:flex-row justify-end lg:justify-between items-start lg:items-end gap-10 lg:gap-0 pt-32 lg:pt-0">
          
          <div className="max-w-md sm:max-w-lg mt-auto lg:mt-0">
            <p className="text-3xl sm:text-4xl lg:text-4xl text-white/90 font-light leading-tight">
              The Future of <br className="hidden sm:block" />
              Work is Automated
            </p>
          </div>

          <div className="text-left lg:text-right mt-4 lg:mt-0">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4 font-medium">
              Quick Contact With Us!
            </p>
            <div className="flex gap-2 justify-start lg:justify-end">
              <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-md bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all shadow-sm">
                <span className="text-black font-bold text-xs">X</span>
              </div>
              <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-md bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all shadow-sm">
                <span className="text-black font-bold text-xs">In</span>
              </div>
              <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-md bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all shadow-sm">
                <span className="text-black font-bold text-xs">Ig</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL - 35% height layout with adaptive wrapping for tiny screens */}
      <div className="relative shrink-0 bg-white border-t border-gray-100 py-10 lg:py-0 lg:h-[35%] w-full">
        <div className="h-full mx-auto max-w-[1800px] px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-end lg:pb-12 lg:pt-8 gap-8 font-sans">
          
          <div className="max-w-[840px] h-full flex flex-col justify-end">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-textDark mb-4 lg:mb-6 leading-[1.15] font-normal tracking-tight">
              Intelligent Automation for <br className="hidden md:block" />
              Modern Enterprise
            </h2>
            <p className="text-base sm:text-lg text-textMuted font-light leading-relaxed max-w-2xl">
              TDI designs and deploys AI systems that automate operational 
              workflows across enterprises.
            </p>
          </div>

          <div className="lg:pb-1 shrink-0 mt-2 lg:mt-0 w-full sm:w-auto">
            <button className="w-full sm:w-auto justify-center bg-black text-white px-9 py-4 sm:py-3.5 rounded-full font-medium flex items-center gap-2.5 hover:bg-gray-900 transition-all shadow-lg group text-sm md:text-base">
              Explore Solutions
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;