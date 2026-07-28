import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"

export type Scene = z.infer<typeof SceneSchema>

export function filterScenesByProfile(scenes: Scene[], profile: 60 | 90 | 120): Scene[] {
  if (profile === 120) return scenes
  if (profile === 90) return scenes.filter((s) => !s.flags.includes("optional"))
  // 60: core only (scenes that include core, or lack optional)
  return scenes.filter((s) => s.flags.includes("core") && !s.flags.includes("optional"))
}

/** Approximate token split for teaching demos (not a real tokenizer). */
export function approxTokenize(text: string): string[] {
  if (!text.trim()) return []
  // Split on whitespace and keep Indic/latin word chunks; break long words
  const parts = text.match(/[\u0900-\u097F]+|[A-Za-z0-9]+|[^\s]/gu) || []
  const tokens: string[] = []
  for (const part of parts) {
    if (/^[\u0900-\u097F]+$/.test(part)) {
      // Indic: ~2-3x — show syllable-ish chunks of 2 chars
      for (let i = 0; i < part.length; i += 2) {
        tokens.push(part.slice(i, i + 2))
      }
    } else if (/^[A-Za-z0-9]+$/.test(part) && part.length > 6) {
      tokens.push(part.slice(0, Math.ceil(part.length / 2)))
      tokens.push(part.slice(Math.ceil(part.length / 2)))
    } else if (part.trim()) {
      tokens.push(part)
    }
  }
  return tokens
}
