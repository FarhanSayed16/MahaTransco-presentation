"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import drillsData from "@/content/labs/deepfake-drills.json"
import { Pause, Radio, ScanEye, Search, ShieldCheck, Megaphone } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import type { LucideIcon } from "lucide-react"

type Drill = { step: string; desc: string }

const ICONS: Record<string, LucideIcon> = {
  PAUSE: Pause,
  SOURCE: Radio,
  INSPECT: ScanEye,
  SEARCH: Search,
  VERIFY: ShieldCheck,
  ESCALATE: Megaphone,
}

const COLORS = [
  "bg-red-100 text-red-600 border-red-300",
  "bg-orange-100 text-orange-600 border-orange-300",
  "bg-amber-100 text-amber-600 border-amber-300",
  "bg-blue-100 text-blue-600 border-blue-300",
  "bg-green-100 text-green-600 border-green-300",
  "bg-teal-100 text-teal-700 border-teal-300",
]

export function DeepfakeDrill({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const drills = drillsData as Drill[]
  const [activeStep, setActiveStep] = React.useState(0)
  const active = drills[activeStep]
  const ActiveIcon = ICONS[active.step] || ShieldCheck

  return (
    <div className="flex flex-col w-full max-w-6xl items-center">
      <div className="flex items-center gap-3 mb-4">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy text-center">
          {scene.content.headline}
        </h2>
      </div>
      <p className="text-lg text-ink-muted mb-8 text-center max-w-3xl">{scene.content.body}</p>

      <div className="flex items-center justify-center gap-0 mb-8 w-full max-w-5xl flex-wrap">
        {drills.map((step, i) => {
          const Icon = ICONS[step.step] || ShieldCheck
          const color = COLORS[i] || COLORS[0]
          return (
            <React.Fragment key={step.step}>
              <button
                type="button"
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center gap-2 cursor-pointer transition-transform px-1 ${
                  activeStep === i ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full border-2 ${color} flex items-center justify-center shadow-sm ${
                    activeStep === i ? "ring-4 ring-offset-2 ring-accent/30" : ""
                  }`}
                >
                  <Icon size={22} />
                </div>
                <span className="text-xs font-bold text-navy">{step.step}</span>
              </button>
              {i < drills.length - 1 && (
                <div
                  className={`hidden sm:block w-6 md:w-10 h-0.5 mx-0.5 transition-colors ${
                    i < activeStep ? "bg-accent" : "bg-line"
                  }`}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>

      <div className="bg-surface rounded-2xl border border-line p-8 w-full max-w-2xl shadow-sm text-center accent-border-left">
        <div className="flex justify-center mb-4">
          <ActiveIcon size={36} className="text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">{active.step}</h3>
        <p className="text-lg text-ink text-left">{active.desc}</p>
        <p className="text-sm text-ink-muted mt-4">
          Step {activeStep + 1} of {drills.length}. Same tools you saw in demos can be misused — verification is the defense.
        </p>
      </div>
    </div>
  )
}
