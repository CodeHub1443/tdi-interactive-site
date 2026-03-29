import React from "react";

const HalftoneOverlay: React.FC = () => {
  return (
    <div 
      className="absolute inset-[-60%] z-0 pointer-events-none opacity-35"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 2px, transparent 2px)",
        backgroundSize: "18px 18px",
        transform: "rotate(-25deg) scale(1.8) perspective(800px) rotateX(25deg)",
      }}
    />
  );
};

export default HalftoneOverlay;
