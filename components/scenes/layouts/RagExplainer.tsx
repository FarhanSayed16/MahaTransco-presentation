"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { ArrowRight, Copy, Check } from "lucide-react"
import { RagPipelineDiagram } from "@/components/visuals/diagrams/RagPipelineDiagram"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import notebookPrompts from "@/content/labs/notebooklm-prompts.json"
import { Button } from "@/components/ui/Button"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"

type PackPrompt = { id: string; label: string; prompt: string }

export function RagExplainer({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const prompts = notebookPrompts as PackPrompt[]
  const [active, setActive] = React.useState(0)
  const [copied, setCopied] = React.useState(false)
  const current = prompts[active]

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(current.prompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col w-full max-w-6xl items-center pt-4">
      <div className="flex items-center gap-3 mb-4">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy text-center">
          {scene.content.headline}
        </h2>
      </div>
      <p className="text-lg text-ink-muted mb-6 text-center max-w-3xl">{scene.content.body}</p>

      <RagPipelineDiagram
        onOpenTool={() => window.open("https://notebooklm.google.com/", "_blank")}
      />

      <div className="w-full max-w-4xl mt-8 bg-surface border border-line rounded-2xl p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          Live NotebookLM pack — public PDFs only
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {prompts.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`px-3 py-2 rounded-xl text-sm font-bold border ${
                i === active ? "bg-accent text-white border-accent" : "bg-surface-muted border-line text-ink"
              }`}
            >
              {i + 1}. {p.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-sm bg-surface-muted p-4 rounded-xl border border-line mb-4">
          {current.prompt}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={copyPrompt}>
            {copied ? <Check size={16} className="mr-1 inline" /> : <Copy size={16} className="mr-1 inline" />}
            {copied ? "Copied" : "Copy prompt"}
          </Button>
          <Button variant="secondary" onClick={() => openInTool(current.prompt, "notebooklm", toolsData as any)}>
            Open NotebookLM
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open("https://gamma.app", "_blank")}
          >
            Optional: Gamma outline
          </Button>
        </div>
      </div>

      {scene.content.bullets && (
        <div className="bg-surface rounded-2xl border border-line p-8 w-full max-w-3xl shadow-sm accent-border-left mt-6">
          <ul className="space-y-4 text-lg text-ink">
            {scene.content.bullets.map((b) => (
              <li key={b} className="icon-bullet">
                <ArrowRight size={18} className="text-accent shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
