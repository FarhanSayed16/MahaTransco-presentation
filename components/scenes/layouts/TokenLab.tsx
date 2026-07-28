"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { approxTokenize } from "@/lib/navigation/filterScenes"
import tokenSamples from "@/content/labs/token-samples.json"
import { Button } from "@/components/ui/Button"

type Sample = { id: string; label: string; text: string }

export function TokenLab({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const samples = tokenSamples as Sample[]
  const [text, setText] = React.useState(samples[0]?.text ?? "")
  const [lostMiddle, setLostMiddle] = React.useState(false)
  const tokens = React.useMemo(() => approxTokenize(text), [text])
  const wordApprox = Math.max(1, text.trim().split(/\s+/).filter(Boolean).length)
  const indicHeavy = /[\u0900-\u097F]/.test(text)
  const multiplier = indicHeavy ? "~2–3× vs English" : "~1× (English-like)"

  const displayTokens = lostMiddle
    ? [...tokens.slice(0, 3), "…", ...tokens.slice(-4)]
    : tokens

  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <h2 className="text-4xl font-display font-bold text-navy mb-2">
        {scene.content.headline || "Token Lab"}
      </h2>
      <p className="text-lg text-ink-muted mb-6 max-w-3xl">
        {scene.content.body ||
          "Models read tokens (chunks), not whole documents. Indic scripts often use more tokens per word."}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {samples.map((s) => (
          <Button
            key={s.id}
            variant={text === s.text ? "primary" : "secondary"}
            onClick={() => {
              setText(s.text)
              setLostMiddle(false)
            }}
          >
            {s.label}
          </Button>
        ))}
      </div>

      <textarea
        className="w-full p-4 rounded-xl border border-line bg-surface text-lg font-mono focus:outline-none focus:border-accent min-h-[120px]"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setLostMiddle(false)
        }}
      />

      <div className="flex flex-wrap gap-6 mt-4 text-sm font-semibold">
        <span className="text-accent">Tokens: {tokens.length}</span>
        <span className="text-ink-muted">~Words: {wordApprox}</span>
        <span className="text-navy">Indic cost: {multiplier}</span>
      </div>

      <div className="flex-1 border border-line rounded-2xl bg-surface mt-4 p-4 flex flex-wrap gap-2 content-start overflow-y-auto min-h-[160px]">
        {displayTokens.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className={`px-2 py-1 font-mono text-sm rounded-md ${
              t === "…" ? "bg-warn-soft text-warn" : "bg-accent-soft text-accent"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 items-center">
        <Button variant="secondary" onClick={() => setLostMiddle((v) => !v)}>
          {lostMiddle ? "Show full tokens" : "Simulate “Lost in the Middle”"}
        </Button>
        <p className="text-sm text-ink-muted">
          For 100+ page PDFs: use NotebookLM / RAG — do not paste raw into chat.
        </p>
      </div>
    </div>
  )
}
