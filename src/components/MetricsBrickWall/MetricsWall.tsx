"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { BrickSurface } from "./BrickSurface";
import { ParticleField } from "./ParticleField";

export const MetricsWall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView]               = useState(false);
  const [particlesActive, setParticlesActive] = useState(false);
  const [mousePos, setMousePos]           = useState({ x: -999, y: -999 });
  const particleDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // IntersectionObserver — fires metric counters when section enters viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseEnter = useCallback(() => {
    particleDelayRef.current = setTimeout(() => setParticlesActive(true), 120);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (particleDelayRef.current) clearTimeout(particleDelayRef.current);
    setParticlesActive(false);
    setMousePos({ x: -999, y: -999 });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #0f2f2c 0%, #061414 50%, #010404 100%)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Brick wall — height driven by BrickSurface paddingBottom aspect ratio */}
      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-4 py-10">
        <BrickSurface
          inView={inView}
          mouseX={mousePos.x}
          mouseY={mousePos.y}
        />
      </div>

      {/* Firefly particles */}
      <ParticleField
        active={particlesActive}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
      />

      {/* 4-sided vignette — "wall extends beyond frame" look */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 20,
          background: [
            "linear-gradient(to right,  #010404 0%, transparent 15%, transparent 85%, #010404 100%)",
            "linear-gradient(to bottom, #010404 0%, transparent 15%, transparent 85%, #010404 100%)",
          ].join(", "),
        }}
      />
    </section>
  );
};
