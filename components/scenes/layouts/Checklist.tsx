"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

export function Checklist({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const { currentStep, setTotalSteps } = usePresentation()
  const bullets = scene.content.bullets || []

  useEffect(() => {
    setTotalSteps(bullets.length)
  }, [bullets.length, setTotalSteps])

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex items-center gap-3 mb-10">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy">{scene.content.headline}</h2>
      </div>
      <ul className="space-y-5 w-full">
        {bullets.map((bullet, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: currentStep >= idx + 1 ? 1 : 0.35,
              x: currentStep >= idx + 1 ? 0 : -10,
            }}
            className="flex items-start gap-4 text-xl md:text-2xl text-ink bg-surface/80 border border-line rounded-2xl px-5 py-4"
          >
            <CheckCircle2
              size={28}
              className={`shrink-0 mt-0.5 ${currentStep >= idx + 1 ? "text-accent" : "text-line"}`}
            />
            <span>{bullet}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
