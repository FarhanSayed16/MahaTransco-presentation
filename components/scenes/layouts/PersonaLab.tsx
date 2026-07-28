"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Button } from "@/components/ui/Button"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"

const RULES =
  "You are the Exec. Asst. to the DM. Use formal Indian Governance tone. Translate jargon to action points. Highlight unverified facts in [VERIFY]. Never invent metrics."

export function PersonaLab({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const [copied, setCopied] = React.useState(false)
  const steps = [
    "Open Google AI Studio → New Prompt → System Instructions",
    "Paste the Base Rules below",
    "Set Temperature to 0.15 → Save as “DM Executive Desk”",
  ]

  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <h2 className="text-4xl font-display font-bold text-navy mb-2">{scene.content.headline}</h2>
      <p className="text-lg text-ink-muted mb-6">{scene.content.body}</p>
      <div className="grid md:grid-cols-2 gap-8 flex-1">
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="bg-surface border border-line rounded-xl p-5 flex gap-4 items-start">
              <span className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span className="text-lg text-ink pt-1">{s}</span>
            </li>
          ))}
        </ol>
        <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col">
          <h3 className="font-bold text-navy mb-3">Base Rules</h3>
          <p className="font-mono text-sm bg-surface-muted p-4 rounded-xl flex-1 border border-line">{RULES}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              onClick={async () => {
                await navigator.clipboard.writeText(RULES)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
            >
              {copied ? "Copied" : "Copy rules"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open("https://aistudio.google.com/", "_blank")}
            >
              Open AI Studio
            </Button>
            <Button variant="secondary" onClick={() => openInTool(RULES, "chatgpt", toolsData as any)}>
              Try in ChatGPT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
