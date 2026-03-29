import React from "react";
import Image from "next/image";

const leaders = [
  {
    role: "CHAIRMAN AND CO-FOUNDER",
    name: "William Dennis",
    image: "https://i.pravatar.cc/500?img=11", 
  },
  {
    role: "CEO AND CO-FOUNDER",
    name: "Rajiv Chandrasekaran, Ph.D.",
    image: "https://i.pravatar.cc/500?img=68", 
  },
];

const Leadership: React.FC = () => {
  return (
    <section className="bg-white text-textDark w-full py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="border border-gray-200 rounded-full px-4 py-1 text-xs tracking-wider text-gray-400 mb-8 uppercase">
          Company
        </div>
        
        <h2 className="text-3xl md:text-5xl font-light text-center mb-6 tracking-tight">
          About Our Company and Leadership Team
        </h2>
        
        <p className="text-sm md:text-base text-gray-500 font-light text-center max-w-2xl leading-relaxed mb-20">
          Founded in 2017, TDI Technologies is a self-funded, bootstrapped company
          serving Global Fortune 500 customers. Our commitment to innovation and excellence
          has positioned us as leaders in the AI and machine learning industry.
        </p>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {leaders.map((leader, i) => (
            <div 
              key={i} 
              className="group relative bg-[#111] rounded-3xl overflow-hidden aspect-[4/3] flex items-end shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            >
              <div className="grid grid-cols-2 w-full h-full">
                
                {/* Left side text overlay / abstract wave */}
                <div className="relative z-20 flex flex-col justify-between p-8 md:p-10 w-full h-full bg-gradient-to-r from-black/80 to-transparent">
                  <div>
                    <p className="text-[10px] sm:text-xs text-white/50 tracking-widest font-semibold mb-2">
                      {leader.role}
                    </p>
                    <h3 className="text-xl md:text-2xl text-white font-medium">
                      {leader.name}
                    </h3>
                  </div>
                  
                  {/* Watermark Logo */}
                  <div className="mt-auto opacity-50 bg-gradient-to-tr from-white/10 to-transparent p-4 rounded-xl backdrop-blur-sm w-max">
                    <span className="font-sans font-bold text-white text-xl tracking-widest">
                      TDI<span className="text-[9px] font-normal tracking-normal ml-1 opacity-70 block -mt-1 uppercase">Technologies</span>
                    </span>
                  </div>
                </div>

                {/* Right side portrait image */}
                <div className="absolute inset-0 z-10 w-full h-full">
                  {/* Decorative abstract wave overlay */}
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none mix-blend-overlay" />
                  
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out object-right"
                  />
                  
                  {/* Shadow vignette to blend into black left side */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none w-2/3" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none h-1/3 mt-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
