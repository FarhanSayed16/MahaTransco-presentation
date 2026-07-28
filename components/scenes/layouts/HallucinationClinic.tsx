"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { AlertOctagon, CheckCircle, ArrowRight } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import { VerifyLoop } from "@/components/visuals/diagrams/VerifyLoop"

export function HallucinationClinic({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="flex flex-col w-full max-w-5xl items-center">
      <div className="flex items-center gap-3 mb-4">
        <SceneIconBadge sceneId={scene.id} />
        <div className="w-12 h-12 rounded-2xl bg-bad/10 flex items-center justify-center">
          <AlertOctagon size={24} className="text-bad" />
        </div>
      </div>
      <h2 className="text-4xl font-display font-bold text-navy mb-4 text-center">
        {scene.content.headline}
      </h2>
      <p className="text-lg text-ink-muted mb-6 text-center max-w-3xl">{scene.content.body}</p>

      <VerifyLoop />

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        <div className="bg-bad/5 border-2 border-bad/20 rounded-2xl p-6 card-lift">
          <div className="flex items-center gap-2 mb-3">
            <AlertOctagon size={20} className="text-bad" />
            <h3 className="font-bold text-bad">Ungrounded AI answer</h3>
          </div>
          <p className="text-ink">Sounds confident, may cite non-existent sections or invent budget figures. No source trail.</p>
        </div>
        <div className="bg-good/5 border-2 border-good/20 rounded-2xl p-6 card-lift">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={20} className="text-good" />
            <h3 className="font-bold text-good">RAG answer with citations</h3>
          </div>
          <p className="text-ink">Pulls from your uploaded document. Cites page numbers. Still verify, but much safer.</p>
        </div>
      </div>

      {scene.content.bullets && (
        <div className="bg-surface rounded-2xl border border-line p-8 w-full max-w-3xl shadow-sm accent-border-left">
          <ul className="space-y-4 text-lg text-ink">
            {scene.content.bullets.map((b) => (
              <li key={b} className="icon-bullet">
                <ArrowRight size={18} className="text-accent shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
