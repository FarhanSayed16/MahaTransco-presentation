"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MessageSquare, Cpu, Sparkles, ArrowRight } from "lucide-react"

const STEPS = [
  { icon: MessageSquare, label: "Prompt", sub: "Your instruction" },
  { icon: Cpu, label: "Model", sub: "Predicts next tokens" },
  { icon: Sparkles, label: "Output", sub: "Draft response" },
]

export function GenAILoop() {
  const reduce = useReducedMotion()

  return (
    <div className="w-full bg-surface border border-line rounded-2xl p-6 md:p-8 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">How generative AI works</p>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.label}>
            <motion.div
              className="flex flex-col items-center gap-2 min-w-[100px]"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.12 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-soft border border-accent/20 flex items-center justify-center">
                <s.icon size={28} className="text-accent" />
              </div>
              <span className="font-bold text-navy">{s.label}</span>
              <span className="text-xs text-ink-muted text-center">{s.sub}</span>
            </motion.div>
            {i < STEPS.length - 1 && (
              <ArrowRight className="text-ink-muted hidden sm:block shrink-0 mx-1" size={22} />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink-muted">
        It predicts likely text — it does not look up a government database.
      </p>
    </div>
  )
}
