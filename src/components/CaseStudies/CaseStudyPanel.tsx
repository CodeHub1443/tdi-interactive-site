"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SystemPipeline } from "./SystemPipeline"
import { ImpactMetrics } from "./ImpactMetrics"

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry?: string
  problem?: string
  systemSummary: string
  capabilities: string[]
  impact: string[]
  systemNote?: string
  pipeline: {
    nodes: { id: string; label: string }[]
    connections: { from: string; to: string }[]
  }
}

interface CaseStudyPanelProps {
  study: CaseStudy
}

export const CaseStudyPanel: React.FC<CaseStudyPanelProps> = ({ study }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.4, once: false })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  return (
    <div ref={ref} className="w-screen flex-shrink-0 min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 bg-black/40">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
            >
              {study.title}
            </motion.h2>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-12">
              <div>
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">Client / Industry</p>
                <p className="text-white text-xl font-medium">{study.client || study.industry}</p>
              </div>
              {study.problem && (
                <div>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">Problem</p>
                  <p className="text-white text-xl font-medium max-w-md line-clamp-2 md:line-clamp-none">{study.problem}</p>
                </div>
              )}
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="md:text-right">
             <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">System Architecture</p>
             <p className="text-white/60 text-sm font-mono">{study.systemSummary}</p>
          </motion.div>
        </div>

        {/* Visual System Diagram */}
        <motion.div variants={itemVariants} className="mb-12">
          <SystemPipeline 
            nodes={study.pipeline.nodes} 
            connections={study.pipeline.connections}
            active={isInView}
          />
        </motion.div>

        {study.systemNote && (
          <motion.div 
            variants={itemVariants}
            className="mb-16 p-4 border-l-2 border-blue-500 bg-blue-500/5 text-blue-100/70 italic text-sm font-light"
          >
            {study.systemNote}
          </motion.div>
        )}

        {/* Impact Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-4 mb-8">
            Operational Impact & Metrics
          </h3>
          <ImpactMetrics metrics={study.impact} active={isInView} />
        </motion.div>
      </motion.div>
    </div>
  )
}
