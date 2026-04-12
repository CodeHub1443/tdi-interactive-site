"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface LayeredSlideProps {
  children: React.ReactNode
  className?: string
  index?: number
  containerRef?: React.RefObject<HTMLDivElement | null>
}

export const LayeredSlide: React.FC<LayeredSlideProps> = ({ children, className, index = 0, containerRef }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  // Only enable parallax on lg+ screens
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  
  // Track scroll progress of this section relative to the viewport/container
  const { scrollYProgress } = useScroll({
    target: elementRef,
    container: containerRef,
    offset: ["start end", "end start"]
  })

  // Entrance and Exit transforms — only active on desktop
  const y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], isDesktop ? ["20vh", "0vh", "0vh", "-10vh"] : ["0vh", "0vh", "0vh", "0vh"])
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], isDesktop ? [0.85, 1, 1, 0.95] : [1, 1, 1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], isDesktop ? [0, 1, 1, 0] : [1, 1, 1, 1])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], isDesktop ? [15, 0, -5] : [0, 0, 0])

  return (
    <div 
      ref={elementRef} 
      className={`relative w-full overflow-visible min-h-[100svh] md:snap-start ${className}`}
      style={{ perspective: isDesktop ? "2000px" : "none" }}
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
