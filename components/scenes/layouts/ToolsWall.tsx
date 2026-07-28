"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import toolsData from "@/content/tools.json"
import { Button } from "@/components/ui/Button"
import { BrandIcon } from "@/components/ui/BrandIcon"

type Tool = { id: string; name: string; url: string; category?: string }

const HINTS: Record<string, { use: string; avoid: string }> = {
  chatgpt: { use: "Circular drafts, brainstorming, tone rewrites, multi-channel follow-ups", avoid: "Confidential PII, final legal citations without verification" },
  claude: { use: "Long careful documents, structured reasoning", avoid: "Classified / air-gapped data" },
  gemini: { use: "Drafting + image generation in one place", avoid: "Confidential uploads; treat free tier like an open line" },
  perplexity: { use: "Policy research with source links", avoid: "Treating web answers as gazette without checking" },
  notebooklm: { use: "Summarise public PDFs with page citations, FAQs, briefing notes", avoid: "Any confidential / citizen / tender PDFs" },
  heygen: { use: "Citizen briefing avatars (disclosed)", avoid: "Impersonating real officers without consent" },
  midjourney: { use: "Campaign visuals / concept art", avoid: "Real faces, logos, misleading official imagery" },
  runway: { use: "Short awareness / training clips", avoid: "Deepfake-style misuse of real persons" },
  gamma: { use: "Doc → slide outline for review meetings", avoid: "Publishing unreviewed slides as official deck" },
}

export function ToolsWall({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const tools = toolsData as Tool[]
  const [selected, setSelected] = React.useState<Tool | null>(tools[0] ?? null)
  const hint = selected ? HINTS[selected.id] ?? { use: selected.category ?? "General", avoid: "Sensitive data in public tools" } : null

  return (
    <div className="flex h-full w-full max-w-7xl pt-8 gap-8 min-h-0">
      <div className="flex-1 min-w-0 flex flex-col">
        <h2 className="text-4xl font-display font-bold text-navy mb-2">{scene.content.headline}</h2>
        <p className="text-ink-muted mb-6">{scene.content.body}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pb-4 pr-2">
          {tools.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t)}
              className={`text-left rounded-xl border-2 p-5 transition-all card-lift ${
                selected?.id === t.id ? "border-accent bg-accent-soft shadow-md" : "border-line bg-surface hover:border-accent/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <BrandIcon name={t.name} category={t.category} size={24} />
                <div className="font-bold text-navy text-lg">{t.name}</div>
              </div>
              <div className="text-xs text-ink-muted mt-1 capitalize">{t.category}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-surface rounded-2xl border border-line p-8 flex flex-col shrink-0 shadow-sm accent-border-left">
        {selected && hint ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <BrandIcon name={selected.name} category={selected.category} size={32} />
              <h3 className="text-2xl font-bold text-navy">{selected.name}</h3>
            </div>
            <p className="text-sm font-bold text-good mb-1">✓ When to use</p>
            <p className="text-ink mb-4">{hint.use}</p>
            <p className="text-sm font-bold text-bad mb-1">✗ When not to use</p>
            <p className="text-ink mb-6">{hint.avoid}</p>
            <Button onClick={() => window.open(selected.url, "_blank")}>Open {selected.name}</Button>
          </>
        ) : (
          <p className="text-ink-muted">Select a tool</p>
        )}
      </div>
    </div>
  )
}

