"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import cardsData from "@/content/labs/dpdp-cards.json"
import { Button } from "@/components/ui/Button"
import { Globe, Lock, Server, ShieldAlert } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import { DataTierPyramid } from "@/components/visuals/diagrams/DataTierPyramid"

type Card = { id: string; label: string; tier: number }

const TIERS = [
  { tier: 1, name: "Public", env: "Consumer AI OK", color: "border-good bg-good/5", icon: Globe, iconClass: "text-good" },
  { tier: 2, name: "Internal", env: "Enterprise AI", color: "border-accent bg-accent-soft", icon: Lock, iconClass: "text-accent" },
  { tier: 3, name: "Confidential", env: "Local SLM only", color: "border-warn bg-warn-soft", icon: Server, iconClass: "text-warn" },
  { tier: 4, name: "Classified", env: "Air-gapped", color: "border-bad bg-bad/5", icon: ShieldAlert, iconClass: "text-bad" },
]

export function DpdpTiers({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const cards = cardsData as Card[]
  const [pool, setPool] = React.useState(cards)
  const [placed, setPlaced] = React.useState<Record<number, Card[]>>({ 1: [], 2: [], 3: [], 4: [] })
  const [selected, setSelected] = React.useState<string | null>(null)
  const [score, setScore] = React.useState<{ correct: number; total: number } | null>(null)

  const assign = (tier: number) => {
    if (!selected) return
    const card = pool.find((c) => c.id === selected) || Object.values(placed).flat().find((c) => c.id === selected)
    if (!card) return
    setPool((p) => p.filter((c) => c.id !== selected))
    setPlaced((prev) => {
      const next = { ...prev }
      for (const t of [1, 2, 3, 4]) next[t] = next[t].filter((c) => c.id !== selected)
      next[tier] = [...next[tier], card]
      return next
    })
    setSelected(null)
    setScore(null)
  }

  const check = () => {
    const all = Object.entries(placed).flatMap(([t, list]) => list.map((c) => ({ c, t: Number(t) })))
    const correct = all.filter(({ c, t }) => c.tier === t).length
    setScore({ correct, total: all.length })
  }

  const reset = () => {
    setPool(cards)
    setPlaced({ 1: [], 2: [], 3: [], 4: [] })
    setSelected(null)
    setScore(null)
  }

  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-8">
      <div className="flex items-center gap-3 mb-2">
        <SceneIconBadge sceneId={scene.id} />
        <h2 className="text-4xl font-display font-bold text-navy">{scene.content.headline}</h2>
      </div>
      <p className="text-lg text-ink-muted mb-4">{scene.content.body}</p>

      <div className="w-full mb-4 rounded-2xl border-2 border-bad/30 bg-bad/5 px-5 py-4 text-sm text-ink">
        <p className="font-bold text-bad mb-1">Never upload to free / public AI</p>
        <p>
          Aadhaar or citizen IDs · FIR / evidence · Cabinet drafts · medical records · tender evaluation sheets ·
          unpublished financials · citizen name+address+phone+ID combos
        </p>
      </div>

      <DataTierPyramid />

      <p className="text-sm text-ink-muted mb-4">Select a document, then click a tier to place it. Then Check.</p>

      <div className="flex flex-wrap gap-2 mb-6 min-h-[48px]">
        {pool.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${
              selected === c.id ? "border-accent bg-accent text-white" : "border-line bg-surface hover:border-accent/40"
            }`}
          >
            {c.label}
          </button>
        ))}
        {pool.length === 0 && <span className="text-ink-muted text-sm">All placed — press Check</span>}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
        {TIERS.map((t) => (
          <button
            key={t.tier}
            type="button"
            onClick={() => assign(t.tier)}
            className={`rounded-2xl border-2 p-4 text-left flex flex-col min-h-[180px] card-lift ${t.color}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <t.icon size={20} className={t.iconClass} />
              <h3 className="font-bold text-navy">
                Tier {t.tier}: {t.name}
              </h3>
            </div>
            <p className="text-xs text-ink-muted mb-3">{t.env}</p>
            <div className="flex flex-col gap-2 mt-auto">
              {placed[t.tier].map((c) => (
                <div
                  key={c.id}
                  className={`text-xs font-bold px-2 py-1 rounded bg-white border ${
                    score ? (c.tier === t.tier ? "border-good text-good" : "border-bad text-bad") : "border-line"
                  }`}
                >
                  {c.label}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-3 items-center">
        <Button onClick={check}>Check answers</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
        {score && (
          <span className="font-bold text-navy">
            Score: {score.correct}/{score.total}
          </span>
        )}
      </div>
    </div>
  )
}
