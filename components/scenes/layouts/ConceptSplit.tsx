"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import {
  FileText,
  Search,
  Video,
  ArrowRight,
  Hand,
  type LucideIcon,
} from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import { GenAILoop } from "@/components/visuals/diagrams/GenAILoop"
import { TransformerSteps } from "@/components/visuals/diagrams/TransformerSteps"
import { CategoryConstellation } from "@/components/visuals/diagrams/CategoryConstellation"

const BULLET_ICONS: Record<string, LucideIcon[]> = {
  "02-promise": [Hand, Hand, Hand, FileText],
}

const POLL_QUESTIONS = [
  "Who has used ChatGPT or a similar AI chatbot at least once?",
  "Who has generated an image with AI?",
  "Who has used AI for official work — a draft, translation, or summary?",
]

export function ConceptSplit({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const bulletIcons = BULLET_ICONS[scene.id]
  const showGenAI = scene.id === "06-generative-ai"
  const showTransformer = scene.id === "08-transformer-intuition"
  const showConstellation = scene.id === "04-ai-not-app"
  const showPoll = scene.id === "02-promise"
  const showDiagram = showGenAI || showTransformer || showConstellation
  const [pollStep, setPollStep] = React.useState(0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
      <div>
        <div className="mb-4">
          <SceneIconBadge sceneId={scene.id} size={24} />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
          {scene.content.headline}
        </h2>
        <p className="text-xl md:text-2xl text-ink-muted leading-relaxed">{scene.content.body}</p>
        {!showDiagram && !showPoll && scene.content.bullets?.length ? (
          <ul className="mt-8 space-y-4 text-lg text-ink md:hidden">
            {scene.content.bullets.map((b, i) => {
              const BulletIcon = bulletIcons?.[i] || ArrowRight
              return (
                <li key={b} className="icon-bullet">
                  <BulletIcon size={20} />
                  <span>{b}</span>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>

      <div className="min-h-[280px] flex flex-col justify-center">
        {showGenAI && <GenAILoop />}
        {showTransformer && <TransformerSteps />}
        {showConstellation && <CategoryConstellation />}
        {showPoll && (
          <div className="bg-surface rounded-2xl p-8 border border-line shadow-sm accent-border-left">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Quick show of hands
            </p>
            <p className="text-2xl font-display font-bold text-navy mb-6 leading-snug">
              {POLL_QUESTIONS[pollStep]}
            </p>
            <div className="flex gap-2 mb-6">
              {POLL_QUESTIONS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPollStep(i)}
                  className={`h-2 flex-1 rounded-full ${i === pollStep ? "bg-accent" : i < pollStep ? "bg-accent/40" : "bg-line"}`}
                  aria-label={`Poll question ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-surface border border-line text-ink-muted hover:text-ink text-sm font-bold disabled:opacity-50"
                onClick={() => setPollStep((s) => Math.max(s - 1, 0))}
                disabled={pollStep === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-navy text-white text-sm font-bold disabled:opacity-50"
                onClick={() => setPollStep((s) => Math.min(s + 1, POLL_QUESTIONS.length - 1))}
                disabled={pollStep >= POLL_QUESTIONS.length - 1}
              >
                Next question
              </button>
            </div>
            {pollStep === POLL_QUESTIONS.length - 1 && (
              <div className="mt-6 border-t border-line pt-4 animate-in fade-in slide-in-from-bottom-2">
                <p className="text-ink font-semibold mb-3">
                  That gap — personal use high, official use low — is exactly what this workshop closes.
                </p>
                {scene.content.bullets && scene.content.bullets.length > 3 && (
                  <p className="text-sm text-ink-muted bg-surface-muted p-3 rounded-xl border border-line">
                    {scene.content.bullets[3]}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        {!showDiagram && !showPoll && (
          <div className="bg-surface rounded-2xl p-10 border border-line shadow-sm accent-border-left">
            {scene.content.bullets?.length ? (
              <ul className="space-y-5 text-lg text-ink">
                {scene.content.bullets.map((b, i) => {
                  const BulletIcon = bulletIcons?.[i] || ArrowRight
                  return (
                    <li key={b} className="icon-bullet">
                      <BulletIcon size={20} />
                      <span>{b}</span>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="text-ink-muted text-lg">Key teaching beat for this scene.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
