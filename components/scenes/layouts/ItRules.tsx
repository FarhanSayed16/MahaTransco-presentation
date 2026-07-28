"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Scale, AlertTriangle, Clock, Tag, Shield } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

const HIGHLIGHTS = [
  { icon: Tag, title: "Persistent labelling", text: "SGI must stay labelled for its entire duration" },
  { icon: Clock, title: "2-hour window", text: "Worst intimate deepfake content: faster takedown duty" },
  { icon: Shield, title: "Do No Harm", text: "IndiaAI Guidelines — human judgment on sensitive data" },
]

export function ItRules({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col w-full max-w-5xl items-center">
      <div className="flex items-center gap-3 mb-4">
        <SceneIconBadge sceneId={scene.id} />
        <div className="w-12 h-12 rounded-2xl bg-warn-soft flex items-center justify-center">
          <Scale size={24} className="text-warn" />
        </div>
      </div>
      <h2 className="text-4xl font-display font-bold text-navy mb-4 text-center">
        {scene.content.headline}
      </h2>
      <p className="text-lg text-ink-muted mb-8 text-center max-w-3xl">{scene.content.body}</p>

      <div className="grid md:grid-cols-3 gap-4 w-full mb-8">
        {HIGHLIGHTS.map((h) => (
          <div key={h.title} className="bg-surface border border-line rounded-2xl p-5 text-center shadow-sm">
            <h.icon size={22} className="text-warn mx-auto mb-2" />
            <div className="font-bold text-navy text-sm mb-1">{h.title}</div>
            <div className="text-xs text-ink-muted">{h.text}</div>
          </div>
        ))}
      </div>

      {scene.content.bullets && (
        <div className="bg-surface rounded-2xl border border-line p-8 w-full max-w-3xl shadow-sm accent-border-left">
          <ul className="space-y-5 text-lg text-ink">
            {scene.content.bullets.map((b) => (
              <li key={b} className="icon-bullet">
                <AlertTriangle size={18} className="text-warn shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
