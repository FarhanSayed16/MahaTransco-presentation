"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Wrench, Shield, FileText, BookMarked, CheckCircle, Save } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

const STEP_ICONS = [Wrench, Shield, FileText, BookMarked, CheckCircle, Save]

export function OfficerPlaybook({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const steps = scene.content.bullets || []

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex items-center gap-3 mb-4">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy text-center">
          {scene.content.headline}
        </h2>
      </div>
      <p className="text-lg text-ink-muted mb-10 text-center max-w-3xl">{scene.content.body}</p>
      <div className="grid md:grid-cols-2 gap-4 w-full">
        {steps.map((s, i) => {
          const Icon = STEP_ICONS[i] || CheckCircle
          return (
            <div key={s} className="bg-surface border border-line rounded-xl p-5 flex items-center gap-4 card-lift accent-border-left">
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center shrink-0 border border-accent/20">
                <Icon size={22} className="text-accent" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-0.5">
                  Step {i + 1}
                </div>
                <span className="text-lg text-ink font-medium">{s}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
