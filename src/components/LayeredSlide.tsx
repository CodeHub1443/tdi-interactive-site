"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface LayeredSlideProps {
  children: React.ReactNode
  className?: string
  index?: number
  containerRef?: React.RefObject<HTMLDivElement | null>
}

export const LayeredSlide: React.FC<LayeredSlideProps> = ({ children, className, index = 0, containerRef }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of this section relative to the viewport/container
  const { scrollYProgress } = useScroll({
    target: elementRef,
    container: containerRef,
    offset: ["start end", "end start"]
  })

  // Entrance and Exit transforms
  // 0 - section enters bottom
  // 0.5 - section is centered
  // 1 - section leaves top
  
  const y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["20vh", "0vh", "0vh", "-10vh"])
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.85, 1, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -5]) // Subtle 3D tilt

  return (
    <div 
      ref={elementRef} 
      className={`relative w-full overflow-visible min-h-[100svh] md:snap-start ${className}`}
      style={{ perspective: "2000px" }}
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
          rotateX,
          transformOrigin: "center center",
          zIndex: 10 + index
        }}
        className="w-full min-h-[100svh]"
      >
        {children}
      </motion.div>
    </div>
  )
}
