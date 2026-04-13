"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CaseStudyPanel, CaseStudy } from "./CaseStudyPanel"

const caseStudies: CaseStudy[] = [
  {
    id: "intrusion-monitoring",
    title: "Automated Intrusion Monitoring",
    client: "Bangladesh Army",
    problem: "Monitoring CCTV manually across many feeds",
    systemSummary: "AI intrusion monitoring pipeline",
    systemNote: "This system converts passive CCTV → automated security monitoring workflow.",
    capabilities: [
      "Real-time person detection",
      "Restricted zone monitoring",
      "CCTV stream analysis",
      "Event-based alert generation"
    ],
    impact: [
      "Continuous 24/7 monitoring",
      "Reduced human observation dependency",
      "Faster detection of unauthorized presence"
    ],
    pipeline: {
      nodes: [
        { id: "cam", label: "CCTV FEEDS" },
        { id: "ai", label: "AI DETECTION" },
        { id: "alert", label: "ALERT SYSTEM" }
      ],
      connections: [
        { from: "cam", to: "ai" },
        { from: "ai", to: "alert" }
      ]
    }
  },
  {
    id: "unilever-u-lens",
    title: "Retail Execution Visibility",
    client: "Unilever Bangladesh",
    problem: "Lack of real-time visibility in 500k+ retail outlets",
    systemSummary: "U-Lens Platform",
    systemNote: "Proof-based reporting before day close.",
    capabilities: [
      "geo-validated store visits",
      "computer-vision shelf analysis",
      "share-of-shelf measurement",
      "POSM tracking",
      "real-time dashboards"
    ],
    impact: [
      "visibility across 500,000+ retail outlets",
      "40% improvement in execution efficiency",
      "25% reduction in operational cost"
    ],
    pipeline: {
      nodes: [
        { id: "store", label: "RETAIL OUTLET" },
        { id: "vis", label: "COMPUTER VISION" },
        { id: "dash", label: "REAL-TIME DASHBOARD" }
      ],
      connections: [
        { from: "store", to: "vis" },
        { from: "vis", to: "dash" }
      ]
    }
  },
  {
    id: "garment-quality",
    title: "Garment Quality Inspection",
    client: "Industry: Manufacturing",
    industry: "Manufacturing",
    problem: "Manual inspection inconsistency and low throughput",
    systemSummary: "Automated Garment Quality Inspection",
    capabilities: [
      "defect detection",
      "stitching error detection",
      "fabric damage detection",
      "production line monitoring"
    ],
    impact: [
      "real-time defect detection",
      "consistent inspection standards",
      "reduced manual inspection workload"
    ],
    pipeline: {
      nodes: [
        { id: "line", label: "CAM: FABRIC SCAN" },
        { id: "ml", label: "DEFECT ANALYZER" },
        { id: "qa", label: "REJECT HANDLER" }
      ],
      connections: [
        { from: "line", to: "ml" },
        { from: "ml", to: "qa" }
      ]
    }
  },
  {
    id: "doc-processing",
    title: "Document Processing Pipeline",
    client: "Industry: Financial Services",
    industry: "Financial Services",
    problem: "High administrative cost and slow data extraction",
    systemSummary: "AI Document Processing Pipeline",
    capabilities: [
      "OCR extraction",
      "document classification",
      "automated routing",
      "structured data generation"
    ],
    impact: [
      "faster document processing",
      "improved data accuracy",
      "reduced administrative workload"
    ],
    pipeline: {
      nodes: [
        { id: "doc", label: "RAW DOCUMENTS" },
        { id: "ocr", label: "OCR ENGINE" },
        { id: "data", label: "STRUCTURED DATA" }
      ],
      connections: [
        { from: "doc", to: "ocr" },
        { from: "ocr", to: "data" }
      ]
    }
  },
  {
    id: "safety-monitoring",
    title: "Industrial Safety Monitoring",
    client: "Industry: Industrial manufacturing",
    industry: "Industrial manufacturing",
    problem: "Manual safety supervision gaps in high-risk zones",
    systemSummary: "Industrial Safety Monitoring",
    capabilities: [
      "PPE compliance detection",
      "restricted zone monitoring",
      "safety alerts",
      "compliance logging"
    ],
    impact: [
      "improved safety compliance",
      "faster violation detection",
      "automated supervision of safety protocols"
    ],
    pipeline: {
      nodes: [
        { id: "safety", label: "SAFETY CAMS" },
        { id: "logic", label: "RULE ENGINE" },
        { id: "log", label: "COMPLIANCE LOG" }
      ],
      connections: [
        { from: "safety", to: "logic" },
        { from: "logic", to: "log" }
      ]
    }
  }
]

export const CaseStudySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // We have 5 panels. Each is 100vw.
  // To show panels 1 through 5, we need to translate from 0% to -80%.
  // Using a slightly more conservative transition range to ensure it feels "pinned".
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-80%"])

  return (
    <section 
      ref={containerRef} 
      className="relative h-[600vh] bg-black" // Increased height for more "scroll room" per case study
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex h-full w-[500vw]"
        >
          {caseStudies.map((study) => (
            <CaseStudyPanel key={study.id} study={study} />
          ))}
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-[100] pointer-events-none">
        {caseStudies.map((_, i) => {
          const step = 1 / caseStudies.length
          const start = i * step
          const end = (i + 1) * step
          
          return (
            <motion.div
              key={i}
              className="h-1 w-10 md:w-16 bg-white/10 rounded-full overflow-hidden"
            >
               <motion.div 
                 className="h-full bg-blue-500"
                 style={{
                   scaleX: useTransform(
                     scrollYProgress,
                     [start, end],
                     [0, 1]
                   ),
                   transformOrigin: "left"
                 }}
               />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
