import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
export function ShockStage({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="w-full h-full flex flex-col items-center max-w-7xl pt-12">
      <h2 className="text-4xl font-display font-bold text-warn mb-8">{scene.content.headline}</h2>
      <div className="w-full flex-1 bg-ink rounded-2xl overflow-hidden flex items-center justify-center relative shadow-2xl">
        <span className="text-white/50 text-2xl">Dark Media Inset / Deepfake Stage</span>
      </div>
    </div>
  )
}
