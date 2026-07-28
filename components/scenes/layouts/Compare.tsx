"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Button } from "@/components/ui/Button"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"
import { LlmSlmSplit } from "@/components/visuals/diagrams/LlmSlmSplit"

const WEAK = "Write a letter about land records."

const STRONG = `[SYSTEM ROLE]
You are the Executive Assistant to the District Magistrate.

[CONTEXT]
The district is implementing a new digital land records scheme in 3 blocks.

[TASK]
Draft a formal guidance note for Sub-Divisional Magistrates (SDMs) outlining rollout phases.

[CONSTRAINTS]
- Max length: 350 words
- Tone: Imperative, formal, precise
- Exclude unnecessary legal preamble
- Never invent metrics; mark unsure items as [VERIFY]

[FORMAT]
Bulleted action points ordered by priority.`

export function Compare({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const isLlmSlm = scene.id === "07-llm-vs-slm"
  const isWeakStrong = scene.id === "12-weak-vs-enterprise"
  const [showStrong, setShowStrong] = React.useState(false)

  if (isLlmSlm) {
    return (
      <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <SceneIconBadge sceneId={scene.id} />
          <h2 className="text-4xl font-display font-bold text-navy text-center">
            {scene.content.headline}
          </h2>
        </div>
        <p className="text-lg text-ink-muted mb-10 text-center max-w-3xl">{scene.content.body}</p>
        <LlmSlmSplit />
        <p className="mt-8 text-center text-navy font-semibold text-lg">
          This is a security decision — classify the data first, then choose the tool.
        </p>
      </div>
    )
  }

  if (isWeakStrong) {
    return (
      <div className="flex flex-col w-full max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <SceneIconBadge sceneId={scene.id} />
          <h2 className="text-4xl font-display font-bold text-navy">{scene.content.headline}</h2>
        </div>
        <p className="text-lg text-ink-muted mb-8">{scene.content.body}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bad/5 border-2 border-bad/30 p-6 rounded-2xl card-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-bad/10 flex items-center justify-center">
                <ThumbsDown size={20} className="text-bad" />
              </div>
              <h3 className="text-xl font-bold text-bad">Weak prompt</h3>
            </div>
            <p className="font-mono text-sm mb-4 bg-surface-muted p-3 rounded-lg">&ldquo;{WEAK}&rdquo;</p>
            <p className="text-ink-muted">Result: generic, wordy essay — nobody would sign this.</p>
          </div>
          <div className="bg-good/5 border-2 border-good/30 p-6 rounded-2xl card-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-good/10 flex items-center justify-center">
                <ThumbsUp size={20} className="text-good" />
              </div>
              <h3 className="text-xl font-bold text-good">Enterprise prompt</h3>
            </div>
            <pre className="font-mono text-xs whitespace-pre-wrap mb-4 max-h-48 overflow-y-auto bg-surface-muted p-3 rounded-lg">
              {showStrong ? STRONG : STRONG.slice(0, 180) + "…"}
            </pre>
            <p className="text-ink-muted mb-4">Result: ready-to-edit guidance with clear actions.</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" onClick={() => setShowStrong(true)}>
                Show full template
              </Button>
              <Button onClick={() => openInTool(STRONG, "chatgpt", toolsData as any)}>
                Copy + Open ChatGPT
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full max-w-6xl">
      <h2 className="text-4xl font-display font-bold text-navy mb-8">{scene.content.headline}</h2>
      <p className="text-lg text-ink-muted">{scene.content.body}</p>
      {scene.content.bullets && (
        <ul className="mt-8 space-y-2 text-left w-full max-w-2xl list-disc pl-6">
          {scene.content.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
