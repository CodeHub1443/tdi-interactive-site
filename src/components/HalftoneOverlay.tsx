import React from "react";

const HalftoneOverlay: React.FC = () => {
  return (
    <div 
      className="absolute inset-[-50%] z-0 pointer-events-none opacity-35"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1.2px)",
        backgroundSize: "14px 14px",
        transform: "rotate(-25deg) scale(1.5)",
      }}
    />
  );
};

export default HalftoneOverlay;
