"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Button } from "@/components/ui/Button"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"
import cascade from "@/content/demos/writing/cascade.json"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

type Step = { id: string; label: string; prompt: string }

export function LiveWriting({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const steps = cascade.steps as Step[]
  const [idx, setIdx] = React.useState(0)
  const current = steps[idx]

  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <div className="flex items-center gap-3 mb-2">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy">{scene.content.headline}</h2>
      </div>
      <p className="text-lg text-ink-muted mb-6">{scene.content.body}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIdx(i)}
            className={`px-3 py-2 rounded-xl text-sm font-bold border transition-colors ${
              i === idx
                ? "bg-accent text-white border-accent"
                : i < idx
                  ? "bg-accent-soft border-accent/30 text-navy"
                  : "bg-surface border-line text-ink-muted hover:border-accent/40"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="flex-1 grid md:grid-cols-2 gap-6 min-h-0">
        <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col shadow-sm accent-border-left min-h-0">
          <h3 className="font-bold text-navy mb-3">{current.label}</h3>
          <pre className="flex-1 text-xs font-mono whitespace-pre-wrap overflow-y-auto bg-surface-muted p-4 rounded-xl border border-line">
            {current.prompt}
          </pre>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button onClick={() => openInTool(current.prompt, "chatgpt", toolsData as any)}>
              Copy + Open ChatGPT
            </Button>
            <Button variant="secondary" onClick={() => openInTool(current.prompt, "claude", toolsData as any)}>
              Open Claude
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIdx((i) => Math.min(i + 1, steps.length - 1))}
              disabled={idx >= steps.length - 1}
            >
              Next channel
            </Button>
          </div>
        </div>
        <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col justify-center accent-border-left shadow-sm">
          <h3 className="font-bold text-navy mb-4">Presenter beat</h3>
          <ol className="list-decimal list-inside space-y-3 text-ink text-lg">
            <li>Paste step 1 — let the room watch the draft stream in</li>
            <li>Run follow-ups in the same chat (Marathi → Hindi → WhatsApp → social)</li>
            <li>Say: one notice, four audiences — judgment stays with the officer</li>
            <li>Ask: “Would you sign a cleaned English version?”</li>
          </ol>
          <p className="mt-6 text-sm text-ink-muted">
            Tip: keep the same conversation open so the model retains the English draft as context.
          </p>
        </div>
      </div>
    </div>
  )
}
