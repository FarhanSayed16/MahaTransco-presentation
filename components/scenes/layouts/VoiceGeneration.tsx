"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Button } from "@/components/ui/Button"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"

const SCRIPT =
  "Namaskar. Planned maintenance may affect electricity supply in selected areas tonight. Please rely only on official Mahatransco channels for updates. Thank you."

export function VoiceGeneration({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl pt-8">
      <h2 className="text-4xl font-display font-bold text-navy mb-2">{scene.content.headline}</h2>
      <p className="text-lg text-ink-muted mb-8">{scene.content.body}</p>
      <div className="bg-surface border border-line rounded-2xl p-8 flex flex-col gap-6">
        <p className="font-mono text-base bg-surface-muted p-4 rounded-xl border border-line">{SCRIPT}</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openInTool(SCRIPT, "elevenlabs", toolsData as any)}>
            Open ElevenLabs
          </Button>
        </div>
        <div className="text-sm font-bold uppercase tracking-widest text-warn px-4 py-2 border border-warn rounded-md bg-warn/10 w-fit">
          Always disclose synthetic voice in official use
        </div>
      </div>
    </div>
  )
}
