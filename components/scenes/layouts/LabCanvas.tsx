import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
export function LabCanvas({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-12">
      <h2 className="text-4xl font-display font-bold text-accent mb-2">Live Laboratory</h2>
      <h3 className="text-2xl text-navy mb-8">{scene.content.headline}</h3>
      <div className="flex-1 bg-surface rounded-2xl border border-line p-8 flex items-center justify-center shadow-sm">
        <p className="text-xl text-ink-muted">{scene.content.body || "Interactive Lab Component"}</p>
      </div>
    </div>
  )
}
