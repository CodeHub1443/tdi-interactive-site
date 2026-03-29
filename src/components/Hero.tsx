import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col bg-black">
      {/* TOP HERO STAGE - 65% height */}
      <div className="relative h-[65%] flex items-end pb-12 shrink-0">
        {/* New Background Structure */}
        <div className="absolute inset-0 hero-gradient z-0" />
        <div className="hero-light z-10" />
        <div className="hero-dots z-20" />
        <div className="hero-noise z-30" />
        <div className="hero-vignette z-40" />

        {/* Content aligned with navbar */}
        <div className="relative z-50 mx-auto w-full max-w-[1800px] px-6 flex justify-between items-end">
          <div className="max-w-md">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light leading-tight">
              The Future of <br />
              Work is Automated
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-white/50 mb-3 font-medium">
              Quick Contact With Us!
            </p>
            <div className="flex gap-2 justify-end">
              <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all shadow-sm">
                <span className="text-black font-bold text-xs">X</span>
              </div>
              <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all shadow-sm">
                <span className="text-black font-bold text-xs">In</span>
              </div>
              <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all shadow-sm">
                <span className="text-black font-bold text-xs">Ig</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL - 35% height */}
      <div className="relative h-[35%] bg-white border-t border-gray-100 shrink-0">
        <div className="h-full mx-auto max-w-[1800px] px-6 flex flex-col md:flex-row justify-between items-center md:items-end pb-12 pt-8 gap-8 font-sans">

          <div className="max-w-[840px] h-full flex flex-col justify-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-textDark mb-4 leading-[1.15] font-normal tracking-tight">
              Intelligent Automation for <br />
              Modern Enterprise
            </h2>
            <p className="text-md md:text-lg text-textMuted font-light leading-relaxed max-w-2xl">
              TDI designs and deploys AI systems that automate operational
              workflows across enterprises.
            </p>
          </div>

          <div className="md:pb-1 shrink-0">
            <button className="bg-black text-white px-9 py-3.5 rounded-full font-medium flex items-center gap-2.5 hover:bg-gray-900 transition-all shadow-lg group text-sm md:text-base">
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