"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import methodsData from "@/content/labs/prompt-methods.json"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"
import { Button } from "@/components/ui/Button"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import { PromptLadder } from "@/components/visuals/diagrams/PromptLadder"

type Method = { step: string; prompt: string }

export function PromptMethods({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const methods = methodsData as Method[]
  const [idx, setIdx] = React.useState(0)
  const display = methods[idx]

  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <div className="flex items-center gap-3 mb-2">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy">
          {scene.content.headline || "Prompt Architecture"}
        </h2>
      </div>
      <p className="text-lg text-ink-muted mb-6">
        {scene.content.body || "Advance methods one by one — quality rises with structure."}
      </p>
      <div className="flex gap-8 flex-1 min-h-0 flex-col md:flex-row">
        <div className="w-full md:w-1/3 shrink-0">
          <PromptLadder
            steps={methods.map((m) => m.step)}
            activeIndex={idx}
            onSelect={setIdx}
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          <div className="flex-1 bg-surface rounded-2xl border border-line p-6 font-mono text-base whitespace-pre-wrap overflow-y-auto shadow-sm accent-border-left">
            {display?.prompt}
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button onClick={() => openInTool(display?.prompt ?? "", "chatgpt", toolsData as any)}>
              Copy + Open ChatGPT
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIdx((i) => Math.min(i + 1, methods.length - 1))}
              disabled={idx >= methods.length - 1}
            >
              Next method
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
