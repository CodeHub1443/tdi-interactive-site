"use client";

import React, { useRef, useEffect } from "react";
import { initParticleMesh } from "@/animations/particleMesh";

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const cleanUp = initParticleMesh(canvasRef.current);
      return () => {
        if (typeof cleanUp === 'function') {
          cleanUp();
        }
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60 z-20"
    />
  );
};

export default ParticleBackground;
