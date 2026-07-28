"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Wrench, SlidersHorizontal, ShieldCheck } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

const PILLAR_ICONS = [Wrench, SlidersHorizontal, ShieldCheck]

export function Pipeline({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const steps = scene.content.bullets?.length
    ? scene.content.bullets
    : ["The Right Tool", "Full Control", "Governance First"]

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3 mb-4">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy text-center">
          {scene.content.headline}
        </h2>
      </div>
      <p className="text-xl text-ink-muted mb-12 text-center">{scene.content.body}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => {
          const Icon = PILLAR_ICONS[i] || Wrench
          return (
            <div
              key={s}
              className="bg-surface border-2 border-accent rounded-2xl p-8 text-center shadow-sm card-lift"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-accent-soft flex items-center justify-center">
                  <Icon size={28} className="text-accent" />
                </div>
              </div>
              <div className="text-accent font-bold text-sm mb-2 uppercase tracking-wider">
                Pillar {i + 1}
              </div>
              <div className="text-xl font-bold text-navy">{s}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
