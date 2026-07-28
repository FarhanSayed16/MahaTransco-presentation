import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { PromptBuilder } from "@/components/labs/PromptBuilder"

export function EnterpriseBuilder({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-12 items-center">
      <h2 className="text-4xl font-display font-bold text-navy mb-8 w-full text-left">{scene.content.headline}</h2>
      <PromptBuilder />
    </div>
  )
}
