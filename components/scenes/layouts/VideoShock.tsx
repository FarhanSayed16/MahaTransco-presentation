"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"
import { Button } from "@/components/ui/Button"
import { Video, AlertTriangle, Copy, ArrowRight } from "lucide-react"

const DEFAULT_SCRIPT =
  "Namaskar. This is a short public advisory from MahaTransco. Planned maintenance may affect power supply in selected areas tonight between 10 PM and 2 AM. For updates, please check official MahaTransco channels only. Thank you."

export function VideoShock({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const [copied, setCopied] = React.useState(false)
  const script = scene.content.body?.trim() || DEFAULT_SCRIPT
  const tools = toolsData as Array<{ id: string; name: string; url: string; category: string }>

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(script)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-6xl pt-10 pb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-warn-soft flex items-center justify-center">
          <Video size={24} className="text-warn" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-warn">
          Live demo · External tool
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-3">
        {scene.content.headline || "Generate an AI video — live"}
      </h2>
      <p className="text-xl text-ink-muted max-w-3xl mb-10">
        We will create a short talking video in HeyGen or Runway right now. The video is generated live so the room can see how powerful (and risky) this is.
      </p>

      <div className="grid md:grid-cols-2 gap-8 flex-1 min-h-0">
        <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col shadow-sm accent-border-left">
          <h3 className="text-lg font-bold text-navy mb-3 flex items-center gap-2">
            <Copy size={18} className="text-accent" /> Demo script
          </h3>
          <p className="text-base text-ink leading-relaxed flex-1 whitespace-pre-wrap font-mono bg-surface-muted rounded-xl p-4 border border-line">
            {script}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={copyScript} aria-label="Copy video script">
              {copied ? "✓ Copied" : "Copy script"}
            </Button>
            <Button variant="secondary" onClick={() => openInTool(script, "heygen", tools)} aria-label="Open HeyGen">
              Open HeyGen
            </Button>
            <Button variant="secondary" onClick={() => openInTool(script, "runway", tools)} aria-label="Open Runway">
              Open Runway
            </Button>
          </div>
        </div>

        <div className="bg-surface border border-line rounded-2xl p-6 flex flex-col shadow-sm">
          <h3 className="text-lg font-bold text-navy mb-4">Presenter flow</h3>
          <ol className="space-y-4 text-ink text-lg">
            <li className="icon-bullet"><ArrowRight size={18} className="text-accent" /><span>Copy the script</span></li>
            <li className="icon-bullet"><ArrowRight size={18} className="text-accent" /><span>Open HeyGen (or Runway) — use a fictional avatar only</span></li>
            <li className="icon-bullet"><ArrowRight size={18} className="text-accent" /><span>Paste → generate → play full-screen for the room</span></li>
            <li className="icon-bullet"><ArrowRight size={18} className="text-accent" /><span className="italic text-ink-muted">"If we can do this, bad actors can too — that is why verification matters."</span></li>
            <li className="icon-bullet"><ArrowRight size={18} className="text-accent" /><span>Next: governance and deepfake discipline</span></li>
          </ol>
          <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-warn font-semibold">
            <AlertTriangle size={16} />
            <span>Always disclose AI-generated media. No unauthorised likenesses.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
