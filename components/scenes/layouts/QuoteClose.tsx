"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Quote } from "lucide-react"

export function QuoteClose({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const quote =
    scene.content.quote ||
    scene.content.headline ||
    "AI will not replace officers. Officers who understand AI will outperform officers who don't."

  return (
    <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
      <Quote size={36} className="mb-5 text-accent/35" aria-hidden />
      <h2 className="mb-6 font-display text-3xl font-bold italic leading-tight text-navy md:text-4xl lg:text-5xl">
        &ldquo;{quote}&rdquo;
      </h2>
      {scene.content.body && (
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          {scene.content.body}
        </p>
      )}
      {scene.content.speaker && (
        <p className="mt-5 font-semibold text-navy">{scene.content.speaker}</p>
      )}
      <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
        Q&amp;A · Thank you
      </p>
    </div>
  )
}
