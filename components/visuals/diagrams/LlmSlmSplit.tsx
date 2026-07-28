"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Cloud, Laptop, AlertTriangle, ShieldCheck } from "lucide-react"

export function LlmSlmSplit() {
  const reduce = useReducedMotion()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <motion.div
        className="bg-surface border-2 border-accent/30 p-8 rounded-2xl card-lift"
        initial={reduce ? false : { opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
            <Cloud size={24} className="text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-navy">LLM (Cloud)</h3>
        </div>
        <ul className="space-y-3 text-ink text-lg">
          <li className="icon-bullet">
            <AlertTriangle size={18} className="text-accent" />
            <span>GPT-4o, Claude, Gemini</span>
          </li>
          <li className="icon-bullet">
            <AlertTriangle size={18} className="text-accent" />
            <span>Most powerful reasoning, huge context</span>
          </li>
          <li className="text-accent font-semibold pl-7">⚠ Data leaves the building</li>
          <li className="icon-bullet">
            <AlertTriangle size={18} className="text-accent" />
            <span>Not for unencrypted PII or classified data</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-surface border-2 border-accent/30 p-8 rounded-2xl card-lift"
        initial={reduce ? false : { opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reduce ? 0 : 0.08 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
            <Laptop size={24} className="text-good" />
          </div>
          <h3 className="text-2xl font-bold text-navy">SLM (Local)</h3>
        </div>
        <ul className="space-y-3 text-ink text-lg">
          <li className="icon-bullet">
            <ShieldCheck size={18} className="text-good" />
            <span>Llama, Gemma, Phi</span>
          </li>
          <li className="icon-bullet">
            <ShieldCheck size={18} className="text-good" />
            <span>Runs on your laptop — air-gapped possible</span>
          </li>
          <li className="text-good font-semibold pl-7">✓ Full data sovereignty</li>
          <li className="icon-bullet">
            <ShieldCheck size={18} className="text-good" />
            <span>Best for sensitive local processing</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
