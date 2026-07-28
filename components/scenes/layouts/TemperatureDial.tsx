"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"

const SAMPLES: Record<string, { label: string; text: string }> = {
  "0.1": {
    label: "Governance draft (T≈0.1)",
    text: "Issue a concise circular confirming the maintenance window, safety precautions, and the official helpline. Avoid speculation.",
  },
  "0.7": {
    label: "Campaign copy (T≈0.7)",
    text: "Draft a warmer citizen awareness post about electrical safety during monsoon — still accurate, more conversational.",
  },
  "1.0": {
    label: "Risky creative (T≈1.0+)",
    text: "Inventive slogans and unexpected metaphors — entertaining, but dangerous for official notices.",
  },
}

export function TemperatureDial({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const [t, setT] = React.useState<"0.1" | "0.7" | "1.0">("0.1")

  return (
    <div className="flex flex-col h-full w-full max-w-5xl pt-8 items-center">
      <h2 className="text-4xl font-display font-bold text-navy mb-2 w-full text-left">{scene.content.headline}</h2>
      <p className="text-lg text-ink-muted mb-10 w-full text-left">{scene.content.body}</p>
      <div className="flex gap-4 mb-8">
        {(["0.1", "0.7", "1.0"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setT(v)}
            className={`px-8 py-4 rounded-2xl font-bold text-xl border-2 ${
              t === v ? "border-accent bg-accent text-white" : "border-line bg-surface text-ink"
            }`}
          >
            T={v}
          </button>
        ))}
      </div>
      <div className="w-full bg-surface border border-line rounded-2xl p-8">
        <h3 className="font-bold text-navy text-xl mb-3">{SAMPLES[t].label}</h3>
        <p className="text-lg text-ink">{SAMPLES[t].text}</p>
        <p className="mt-6 text-sm text-ink-muted">
          For official drafting, lock temperature low (≈0.1–0.2) in AI Studio / system settings.
        </p>
      </div>
    </div>
  )
}
