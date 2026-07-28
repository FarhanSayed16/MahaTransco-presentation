"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FileWarning, SearchCheck, Stamp, ArrowRight } from "lucide-react"

const STEPS = [
  { icon: FileWarning, label: "Draft", sub: "AI sounds sure" },
  { icon: SearchCheck, label: "Verify", sub: "Check a source" },
  { icon: Stamp, label: "Sign", sub: "Officer owns it" },
]

export function VerifyLoop() {
  const reduce = useReducedMotion()

  return (
    <div className="w-full bg-surface border border-line rounded-2xl p-5 mb-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4 text-center">
        Verification loop
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.label}>
            <motion.div
              className="flex flex-col items-center gap-1 min-w-[88px]"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-soft border border-line flex items-center justify-center">
                <s.icon size={22} className="text-navy" />
              </div>
              <span className="font-bold text-navy text-sm">{s.label}</span>
              <span className="text-[10px] text-ink-muted">{s.sub}</span>
            </motion.div>
            {i < STEPS.length - 1 && (
              <ArrowRight size={16} className="text-ink-muted hidden sm:block mb-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
