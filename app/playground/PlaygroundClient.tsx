"use client"

import * as React from "react"
import { PlaygroundCard } from "./PlaygroundCard"
import { z } from "zod"
import { PromptSchema, ToolSchema } from "@/lib/content/schemas"

type Prompt = z.infer<typeof PromptSchema>
type Tool = z.infer<typeof ToolSchema>

export function PlaygroundClient({
  prompts,
  tools,
}: {
  prompts: Prompt[]
  tools: Tool[]
}) {
  const categories = React.useMemo(() => {
    const set = new Set(prompts.map((p) => p.category))
    return ["All", ...Array.from(set)]
  }, [prompts])

  const [cat, setCat] = React.useState("All")
  const filtered = cat === "All" ? prompts : prompts.filter((p) => p.category === cat)

  const exportMd = () => {
    const md = [
      "# Mahatransco AI Workshop — Prompt Pack",
      "",
      ...filtered.map(
        (p) =>
          `## ${p.title}\n\n**Category:** ${p.category} · **Tool:** ${p.toolId}\n\n\`\`\`\n${p.promptText}\n\`\`\`\n`
      ),
    ].join("\n")
    const blob = new Blob([md], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "mahatransco-prompt-pack.md"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-bg p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy">Prompt Playground</h1>
          <button
            onClick={exportMd}
            className="px-6 py-3 bg-navy text-white rounded-lg font-bold hover:bg-navy/90"
          >
            Export Pack (MD)
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                cat === c ? "bg-accent text-white" : "bg-surface-muted text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {filtered.map((p) => (
            <PlaygroundCard key={p.id} prompt={p} tools={tools} />
          ))}
        </div>
      </div>
    </div>
  )
}
