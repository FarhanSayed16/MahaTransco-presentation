"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  PenLine,
  Search,
  Image,
  Video,
  Mic,
  Workflow,
  BookOpen,
  type LucideIcon,
} from "lucide-react"

const NODES: { icon: LucideIcon; label: string; use: string }[] = [
  { icon: PenLine, label: "Writing", use: "Circulars, D.O. letters" },
  { icon: Search, label: "Research", use: "Policy & sources" },
  { icon: Image, label: "Image", use: "Campaign visuals" },
  { icon: Video, label: "Video", use: "Training shorts" },
  { icon: Mic, label: "Voice", use: "Explainers / IVR" },
  { icon: Workflow, label: "Automation", use: "Workflows" },
  { icon: BookOpen, label: "Knowledge", use: "RAG / NotebookLM" },
]

export function CategoryConstellation() {
  const reduce = useReducedMotion()
  const [active, setActive] = React.useState(0)

  return (
    <div className="w-full bg-surface border border-line rounded-2xl p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">AI is a toolkit</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
        {NODES.map((n, i) => (
          <motion.button
            key={n.label}
            type="button"
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-colors ${
              i === active ? "border-accent bg-accent-soft" : "border-line bg-surface-muted/40 hover:border-accent/40"
            }`}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduce ? 0 : i * 0.04 }}
          >
            <n.icon size={22} className={i === active ? "text-accent" : "text-navy"} />
            <span className="text-sm font-bold text-navy">{n.label}</span>
          </motion.button>
        ))}
      </div>
      <div className="rounded-xl bg-navy-soft border border-line px-4 py-3 text-center">
        <span className="font-bold text-navy">{NODES[active].label}:</span>{" "}
        <span className="text-ink-muted">{NODES[active].use}</span>
      </div>
    </div>
  )
}
