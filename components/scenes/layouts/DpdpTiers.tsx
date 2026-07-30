"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import cardsData from "@/content/labs/dpdp-cards.json"
import { Button } from "@/components/ui/Button"
import { Globe, Lock, Server, ShieldAlert, GripVertical } from "lucide-react"
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
  
  // State for click-to-place fallback
  const [selected, setSelected] = React.useState<string | null>(null)

  // State for drag and drop visual highlights
  const [draggedCardId, setDraggedCardId] = React.useState<string | null>(null)
  const [dragOverTier, setDragOverTier] = React.useState<number | null>(null)

  const assignCardToTier = (cardId: string, targetTier: number) => {
    const card = pool.find((c) => c.id === cardId) || Object.values(placed).flat().find((c) => c.id === cardId)
    if (!card) return
    
    setPool((p) => p.filter((c) => c.id !== cardId))
    setPlaced((prev) => {
      const next = { ...prev }
      for (const t of [1, 2, 3, 4]) next[t] = next[t].filter((c) => c.id !== cardId)
      next[targetTier] = [...next[targetTier], card]
      return next
    })
  }

  // Fallback click handler
  const assignClick = (tier: number) => {
    if (!selected) return
    assignCardToTier(selected, tier)
    setSelected(null)
  }

  const reset = () => {
    setPool(cards)
    setPlaced({ 1: [], 2: [], 3: [], 4: [] })
    setSelected(null)
    setDraggedCardId(null)
    setDragOverTier(null)
  }

  // Auto-calculated score
  const totalPlaced = Object.values(placed).flat().length
  const correctPlaced = Object.entries(placed).flatMap(([t, list]) => list.filter(c => c.tier === Number(t))).length
  const showScore = totalPlaced > 0

  // --- Drag and Drop Handlers ---
  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData("text/plain", cardId)
    e.dataTransfer.effectAllowed = "move"
    setDraggedCardId(cardId)
    setSelected(null) // clear selected if they decide to drag instead
  }

  const handleDragEnd = () => {
    setDraggedCardId(null)
    setDragOverTier(null)
  }

  const handleDragOver = (e: React.DragEvent, tier: number) => {
    e.preventDefault() // Required to allow dropping
    e.dataTransfer.dropEffect = "move"
    if (dragOverTier !== tier) {
      setDragOverTier(tier)
    }
  }

  const handleDragLeave = (e: React.DragEvent, tier: number) => {
    e.preventDefault()
    if (dragOverTier === tier) {
      setDragOverTier(null)
    }
  }

  const handleDrop = (e: React.DragEvent, tier: number) => {
    e.preventDefault()
    const cardId = e.dataTransfer.getData("text/plain")
    if (cardId) {
      assignCardToTier(cardId, tier)
    }
    setDragOverTier(null)
    setDraggedCardId(null)
  }

  return (
    <div className="flex flex-col h-full w-full max-w-7xl pt-4 md:pt-8">
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

      <div className="bg-surface-muted border border-line rounded-xl px-4 py-3 mb-4 flex items-center justify-between">
        <p className="text-sm font-bold text-navy">
          Interactive Lab: <span className="font-medium text-ink-muted">Drag and drop documents into the correct security tier, or click to select and place.</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 min-h-[48px] p-2 bg-surface/50 rounded-xl border border-line border-dashed">
        {pool.map((c) => (
          <div
            key={c.id}
            draggable
            onDragStart={(e) => handleDragStart(e, c.id)}
            onDragEnd={handleDragEnd}
            onClick={() => setSelected(c.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-bold transition-all cursor-grab active:cursor-grabbing ${
              draggedCardId === c.id ? "opacity-40 scale-95" : ""
            } ${
              selected === c.id ? "border-accent bg-accent text-white shadow-md" : "border-line bg-white hover:border-accent/40 hover:shadow-sm"
            }`}
          >
            <GripVertical size={14} className={selected === c.id ? "text-white/70" : "text-ink-muted/50"} />
            {c.label}
          </div>
        ))}
        {pool.length === 0 && <span className="text-ink-muted text-sm font-medium w-full text-center py-2">All documents placed! Check your score below.</span>}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
        {TIERS.map((t) => (
          <div
            key={t.tier}
            onClick={() => assignClick(t.tier)}
            onDragOver={(e) => handleDragOver(e, t.tier)}
            onDragLeave={(e) => handleDragLeave(e, t.tier)}
            onDrop={(e) => handleDrop(e, t.tier)}
            className={`rounded-2xl border-2 p-4 text-left flex flex-col min-h-[220px] transition-all cursor-pointer ${t.color} ${
              dragOverTier === t.tier ? "ring-4 ring-accent ring-opacity-50 scale-[1.02] shadow-lg" : ""
            } ${selected ? "hover:ring-2 hover:ring-accent hover:ring-opacity-50" : ""}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <t.icon size={20} className={t.iconClass} />
              <h3 className="font-bold text-navy">
                Tier {t.tier}: {t.name}
              </h3>
            </div>
            <p className="text-xs font-medium text-ink-muted mb-4 border-b border-black/5 pb-2">{t.env}</p>
            
            <div className="flex flex-col gap-2 mt-auto">
              {placed[t.tier].map((c) => (
                <div
                  key={c.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, c.id)}
                  onDragEnd={handleDragEnd}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent clicking a card from immediately assigning the selected card to this tier
                    setSelected(c.id);
                  }}
                  className={`flex items-center gap-1.5 text-xs font-bold px-2 py-1.5 rounded-lg bg-white border shadow-sm cursor-grab active:cursor-grabbing ${
                    draggedCardId === c.id ? "opacity-50" : ""
                  } ${
                    c.tier === t.tier ? "border-good text-good bg-good/5" : "border-bad text-bad bg-bad/5"
                  } ${selected === c.id ? "ring-2 ring-accent" : ""}`}
                >
                  <GripVertical size={12} className="text-black/20" />
                  {c.label}
                </div>
              ))}
              
              {placed[t.tier].length === 0 && (
                <div className="w-full h-12 rounded-lg border-2 border-dashed border-black/10 flex items-center justify-center">
                  <span className="text-xs text-black/30 font-bold uppercase tracking-widest">Drop Here</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3 items-center">
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
        {showScore && (
          <div className="flex items-center gap-2 ml-4">
            <span className={`px-4 py-2 rounded-xl font-bold text-lg ${correctPlaced === cards.length ? 'bg-good/10 text-good border border-good/30' : 'bg-warn/10 text-warn border border-warn/30'}`}>
              Score: {correctPlaced} / {cards.length}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
