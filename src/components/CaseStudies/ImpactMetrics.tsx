"use client"

import React from "react"
import { motion } from "framer-motion"

interface ImpactMetricsProps {
  metrics: string[]
  active?: boolean
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ metrics, active = false }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={active ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
          className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm group hover:border-accentTeal/50 transition-colors"
        >
          <div className="text-accentTeal text-xs font-bold mb-2 uppercase tracking-tighter">Impact Log</div>
          <p className="text-white/80 text-sm leading-relaxed font-light">
            {metric}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
