"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Button } from "@/components/ui/Button"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"
import { ImagePlus, Eye, ArrowRight } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

const IMAGE_PROMPT =
  "Create a highly realistic, documentary-style photograph of a flood relief staging area in rural Maharashtra. Government and NDRF personnel coordinating logistics near inflatable boats and supply crates, overcast monsoon light, muted colours, photojournalistic style, no readable faces of real officials looking at camera, no logos, no watermarks, no readable vehicle plates."

export function ImageGeneration({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <div className="flex items-center gap-3 mb-2">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy">{scene.content.headline}</h2>
      </div>
      <p className="text-lg text-ink-muted mb-6">{scene.content.body}</p>
      <div className="flex-1 grid md:grid-cols-2 gap-8">
        <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col shadow-sm accent-border-left">
          <h3 className="text-xl font-bold text-navy mb-3">Image prompt</h3>
          <p className="font-mono text-sm bg-surface-muted p-4 rounded-xl flex-1 text-ink">{IMAGE_PROMPT}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button onClick={() => openInTool(IMAGE_PROMPT, "gemini", toolsData as any)}>
              Open Gemini
            </Button>
            <Button variant="secondary" onClick={() => openInTool(IMAGE_PROMPT, "midjourney", toolsData as any)}>
              Open Midjourney
            </Button>
            <Button variant="secondary" onClick={() => openInTool(IMAGE_PROMPT, "chatgpt", toolsData as any)}>
              Open ChatGPT (image)
            </Button>
          </div>
        </div>
        <div className="bg-surface rounded-2xl p-8 border border-line flex flex-col justify-center shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Eye size={20} className="text-accent" />
            <h3 className="text-xl font-bold text-navy">What to tell the room</h3>
          </div>
          <ul className="space-y-4 text-lg text-ink">
            <li className="icon-bullet">
              <ArrowRight size={18} className="text-accent" />
              <span>Pause before generating: “Would you trust this as a real photograph?”</span>
            </li>
            <li className="icon-bullet">
              <ArrowRight size={18} className="text-accent" />
              <span>Useful for first-draft campaign visuals — not a substitute for final design approval</span>
            </li>
            <li className="icon-bullet">
              <ArrowRight size={18} className="text-accent" />
              <span>Never use real officials&apos; faces without consent; no logos in the prompt</span>
            </li>
            <li className="icon-bullet">
              <ImagePlus size={18} className="text-accent" />
              <span>Same capability that impresses here can be misused as a deepfake — verification comes next</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
