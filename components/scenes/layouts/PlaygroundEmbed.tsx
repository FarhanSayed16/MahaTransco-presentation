import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import Link from "next/link"

export function PlaygroundEmbed({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <h2 className="text-4xl font-display font-bold text-navy mb-2">{scene.content.headline}</h2>
      <p className="text-lg text-ink-muted mb-8">{scene.content.body}</p>
      <div className="flex-1 bg-surface rounded-2xl border border-line flex flex-col items-center justify-center p-12 shadow-sm text-center">
        <h3 className="text-2xl font-bold mb-3 text-navy">Prompt Playground</h3>
        <p className="text-ink-muted mb-8 max-w-xl">
          Ready-to-use administrative prompts — copy and open in ChatGPT, Claude, Gemini, and more.
        </p>
        <Link
          href="/playground"
          className="px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90"
        >
          Open Playground
        </Link>
      </div>
    </div>
  )
}
