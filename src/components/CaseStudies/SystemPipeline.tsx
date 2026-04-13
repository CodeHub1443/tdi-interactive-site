"use client"

import React, { useId } from "react"
import { motion } from "framer-motion"

interface Node {
  id: string
  label: string
}

interface Connection {
  from: string
  to: string
}

interface SystemPipelineProps {
  nodes: Node[]
  connections: Connection[]
  active?: boolean
}

export const SystemPipeline: React.FC<SystemPipelineProps> = ({ nodes, connections, active = false }) => {
  const uniqueId = useId().replace(/:/g, "")
  const gradientId = `gradient-${uniqueId}`

  return (
    <div className="relative w-full h-48 flex items-center justify-between px-8 md:px-16">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
      
      {/* Connections with animations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {connections.map((conn, i) => {
          const fromIdx = nodes.findIndex(n => n.id === conn.from)
          const toIdx = nodes.findIndex(n => n.id === conn.to)
          if (fromIdx === -1 || toIdx === -1) return null

          const step = 100 / (nodes.length - 1)
          const x1 = `${step * fromIdx}%`
          const x2 = `${step * toIdx}%`
          
          // Use path instead of line for better pathLength support in some browsers
          const d = `M ${x1} 50% L ${x2} 50%`

          return (
            <motion.path
              key={`conn-${i}`}
              d={d}
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 + i * 0.4, ease: "easeInOut" as const }}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <motion.div
          key={node.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: idx * 0.4 
          }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-white mb-4" />
          <span className="text-[10px] md:text-sm font-semibold text-white/90 uppercase tracking-widest whitespace-nowrap">
            {node.label}
          </span>
          
          {/* Technical scanning line */}
          <motion.div 
            animate={active ? { height: [0, 30, 0], opacity: [0, 0.5, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
            className="absolute -top-10 w-px bg-white/40"
          />
        </motion.div>
      ))}
    </div>
  )
}
