"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Inbox, Scissors, Dices, Waves } from "lucide-react"

const STEPS = [
  { icon: Inbox, title: "1. Prompt arrives", desc: "Your instruction enters the model" },
  { icon: Scissors, title: "2. Split into tokens", desc: "Text becomes small chunks" },
  { icon: Dices, title: "3. Predict next token", desc: "Probability — not certainty" },
  { icon: Waves, title: "4. Stream the answer", desc: "Tokens become the reply" },
]

export function TransformerSteps() {
  const reduce = useReducedMotion()
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 2200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="w-full bg-surface border border-line rounded-2xl p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5">Response pipeline</p>
      <div className="space-y-3">
        {STEPS.map((s, i) => (
          <motion.button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-colors ${
              i === active
                ? "border-accent bg-accent-soft"
                : "border-line bg-surface-muted/50 hover:border-accent/40"
            }`}
            initial={reduce ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reduce ? 0 : i * 0.05 }}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                i === active ? "bg-accent text-white" : "bg-navy-soft text-navy"
              }`}
            >
              <s.icon size={22} />
            </div>
            <div>
              <div className="font-bold text-navy">{s.title}</div>
              <div className="text-sm text-ink-muted">{s.desc}</div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
