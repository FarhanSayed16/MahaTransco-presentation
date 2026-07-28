"use client"

import { useState, useEffect } from "react"
import { z } from "zod"
import { PromptSchema, ToolSchema } from "@/lib/content/schemas"
import { openInTool } from "@/lib/tools/openInTool"

export function PlaygroundCard({ prompt, tools }: { prompt: z.infer<typeof PromptSchema>, tools: z.infer<typeof ToolSchema>[] }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (favs.includes(prompt.id)) setIsFavorite(true)
  }, [prompt.id])

  const toggleFav = () => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (isFavorite) {
      localStorage.setItem("favorites", JSON.stringify(favs.filter((id: string) => id !== prompt.id)))
      setIsFavorite(false)
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favs, prompt.id]))
      setIsFavorite(true)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.promptText)
      alert("Copied!")
    } catch(e) {
      console.error(e)
    }
  }

  const handleOpen = () => {
    openInTool(prompt.promptText, prompt.toolId, tools)
  }

  return (
    <div className="bg-surface p-6 rounded-xl border border-line shadow-sm flex flex-col gap-4 relative">
      <button onClick={toggleFav} className="absolute top-4 right-4 text-2xl">
        {isFavorite ? "⭐" : "☆"}
      </button>
      <div className="text-xs font-bold text-accent tracking-widest uppercase">{prompt.category}</div>
      <h2 className="text-xl font-bold text-navy pr-8">{prompt.title}</h2>
      <p className="font-mono text-sm text-ink-muted line-clamp-4 bg-surface-muted p-3 rounded">{prompt.promptText}</p>
      <div className="mt-auto flex gap-2 pt-4">
        <button onClick={handleCopy} className="flex-1 py-2 px-4 bg-accent text-white font-bold rounded-lg text-sm hover:bg-opacity-90">Copy</button>
        <button onClick={handleOpen} className="flex-1 py-2 px-4 bg-surface border border-line text-navy font-bold rounded-lg text-sm hover:bg-surface-muted">Open {prompt.toolId}</button>
      </div>
    </div>
  )
}
