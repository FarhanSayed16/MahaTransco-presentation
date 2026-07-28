"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  FileUp,
  Scissors,
  Database,
  Search,
  Sparkles,
  BookMarked,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/Button"

const PIPE = [
  { icon: FileUp, label: "Upload", hint: "Policy PDF" },
  { icon: Scissors, label: "Chunk", hint: "Split text" },
  { icon: Database, label: "Index", hint: "Searchable" },
  { icon: Search, label: "Retrieve", hint: "Relevant bits" },
  { icon: Sparkles, label: "Generate", hint: "Draft answer" },
  { icon: BookMarked, label: "Cite", hint: "Page refs" },
]

export function RagPipelineDiagram({ onOpenTool }: { onOpenTool?: () => void }) {
  const reduce = useReducedMotion()
  const [step, setStep] = React.useState(0)

  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setStep((s) => (s + 1) % PIPE.length), 1800)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {PIPE.map((p, i) => (
          <React.Fragment key={p.label}>
            <motion.button
              type="button"
              onClick={() => setStep(i)}
              className={`flex flex-col items-center gap-2 min-w-[72px] p-2 rounded-xl transition-colors ${
                i === step ? "bg-accent-soft" : "hover:bg-surface-muted"
              }`}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ${
                  i === step
                    ? "bg-accent text-white border-accent"
                    : i < step
                      ? "bg-good/10 text-good border-good/30"
                      : "bg-surface text-navy border-line"
                }`}
              >
                <p.icon size={24} />
              </div>
              <span className="text-xs font-bold text-navy">{p.label}</span>
              <span className="text-[10px] text-ink-muted">{p.hint}</span>
            </motion.button>
            {i < PIPE.length - 1 && (
              <ArrowRight size={16} className="text-ink-muted hidden md:block shrink-0 -mt-6" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-surface border border-line rounded-2xl p-6 text-center accent-border-left">
        <p className="text-lg text-ink mb-4">
          <strong className="text-navy">
            Step {step + 1} — {PIPE[step].label}:
          </strong>{" "}
          {PIPE[step].hint}. Ground answers in <em>your</em> documents.
        </p>
        {onOpenTool && (
          <Button onClick={onOpenTool}>Open NotebookLM</Button>
        )}
        <p className="mt-3 text-sm text-warn font-semibold">Public / sample PDFs only — never confidential files.</p>
      </div>
    </div>
  )
}
