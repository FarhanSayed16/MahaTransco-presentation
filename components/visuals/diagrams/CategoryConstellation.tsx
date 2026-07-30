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

const NODES = [
  { icon: PenLine, label: "Writing", use: "Circulars, D.O. letters & Summaries", tools: "ChatGPT, Claude 3.5" },
  { icon: Search, label: "Research", use: "Policy & deep-dive research", tools: "Perplexity, NotebookLM" },
  { icon: Image, label: "Image", use: "Campaign & social media visuals", tools: "Midjourney, DALL-E 3" },
  { icon: Video, label: "Video", use: "Training shorts & outreach", tools: "HeyGen, Runway" },
  { icon: Mic, label: "Voice", use: "Explainers & automated IVR", tools: "ElevenLabs, Bhashini" },
  { icon: Workflow, label: "Automate", use: "Linking tools together", tools: "Make.com, Zapier" },
  { icon: BookOpen, label: "Knowledge", use: "Chat with your private files", tools: "Enterprise RAG setups" },
]

export function CategoryConstellation() {
  const reduce = useReducedMotion()
  const [active, setActive] = React.useState(0)
  const ActiveIcon = NODES[active].icon

  return (
    <div className="w-full bg-surface border border-line rounded-3xl p-6 md:p-8 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">AI Toolkit Explorer</p>
      
      {/* Grid of buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {NODES.map((n, i) => (
          <motion.button
            key={n.label}
            type="button"
            onClick={() => setActive(i)}
            className={`flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl border transition-all ${
              i === active 
                ? "border-accent bg-accent-soft shadow-sm scale-[1.02]" 
                : "border-line bg-surface-muted/30 hover:border-accent/40 hover:bg-surface-muted"
            }`}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduce ? 0 : i * 0.04 }}
          >
            <n.icon size={20} className={i === active ? "text-accent" : "text-ink-muted"} />
            <span className={`text-[13px] ${i === active ? "font-bold text-navy" : "font-medium text-ink-muted"}`}>
              {n.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Details Box */}
      <div className="rounded-2xl bg-surface-muted border border-line p-5 flex flex-col gap-3 min-h-[120px] justify-center animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white border border-line/60 shadow-sm shrink-0">
             <ActiveIcon size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="font-display font-bold text-navy text-lg leading-tight mb-1">{NODES[active].label}</h3>
            <p className="text-sm font-medium text-ink-muted leading-snug">{NODES[active].use}</p>
          </div>
        </div>
        <div className="mt-2 border-t border-line/60 pt-3 flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted shrink-0">Best Tools:</span>
          <span className="text-sm font-semibold text-accent">{NODES[active].tools}</span>
        </div>
      </div>
    </div>
  )
}
