"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MessageSquare, UserCog, Copy, Lock, GitBranch, type LucideIcon } from "lucide-react"

const RUNG_ICONS: LucideIcon[] = [MessageSquare, UserCog, Copy, Lock, GitBranch]

export function PromptLadder({
  steps,
  activeIndex,
  onSelect,
}: {
  steps: string[]
  activeIndex: number
  onSelect: (i: number) => void
}) {
  const reduce = useReducedMotion()
  const quality = Math.round(((activeIndex + 1) / Math.max(steps.length, 1)) * 100)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Prompt quality ladder</p>
        <span className="text-sm font-bold text-accent">{quality}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface-muted mb-4 overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={false}
          animate={{ width: `${quality}%` }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => {
          const Icon = RUNG_ICONS[i] || MessageSquare
          const active = i === activeIndex
          return (
            <motion.button
              key={step}
              type="button"
              onClick={() => onSelect(i)}
              className={`flex items-center gap-3 text-left p-3 rounded-xl border transition-colors ${
                active
                  ? "bg-accent text-white border-accent shadow-sm"
                  : i < activeIndex
                    ? "bg-accent-soft border-accent/30 text-navy"
                    : "bg-surface-muted border-transparent text-ink-muted hover:border-line"
              }`}
              initial={reduce ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.04 }}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  active ? "bg-white/20" : "bg-white/80 text-navy"
                }`}
              >
                <Icon size={18} className={active ? "text-white" : "text-navy"} />
              </div>
              <span className="font-bold text-sm">
                {i + 1}. {step}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
