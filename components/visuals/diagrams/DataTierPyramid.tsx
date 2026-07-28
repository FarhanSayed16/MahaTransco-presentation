"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Globe, Lock, Server, ShieldAlert } from "lucide-react"

const TIERS = [
  { tier: 4, name: "Classified", env: "Air-gapped only", icon: ShieldAlert, tone: "border-bad bg-bad/5 text-bad" },
  { tier: 3, name: "Confidential", env: "Local / on-prem SLM", icon: Server, tone: "border-warn bg-warn-soft text-warn" },
  { tier: 2, name: "Internal", env: "Enterprise + no-training", icon: Lock, tone: "border-accent bg-accent-soft text-accent" },
  { tier: 1, name: "Public", env: "Consumer AI OK", icon: Globe, tone: "border-good bg-good/5 text-good" },
]

/** Visual severity pyramid for data classification */
export function DataTierPyramid() {
  const reduce = useReducedMotion()

  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4 text-center">
        Sensitivity pyramid
      </p>
      <div className="flex flex-col items-center gap-2">
        {TIERS.map((t, i) => (
          <motion.div
            key={t.tier}
            className={`border-2 ${t.tone} rounded-xl flex items-center justify-center gap-3 py-3 px-4 shadow-sm`}
            style={{ width: `${58 + i * 14}%` }}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : i * 0.06 }}
          >
            <t.icon size={18} />
            <span className="font-bold text-navy text-sm">
              T{t.tier} {t.name}
            </span>
            <span className="hidden sm:inline text-xs text-ink-muted">· {t.env}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
