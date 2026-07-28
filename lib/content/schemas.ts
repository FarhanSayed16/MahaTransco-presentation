import { z } from "zod"

export const SceneSchema = z.object({
  id: z.string(),
  title: z.string(),
  act: z.enum(["I", "II", "III", "IV", "V", ""]),
  flags: z.array(z.enum(["core", "optional", "wow", "lab", "shock"])).default(["core"]),
  layout: z.enum(["title", "concept", "lab", "compare", "pipeline", "shock", "checklist", "quote", "tools-wall", "token-lab", "prompt-methods", "enterprise-builder", "live-writing", "playground", "temperature-dial", "persona-lab", "image-generation", "voice-generation", "video-shock", "rag-explainer", "hallucination-clinic", "dpdp-tiers", "it-rules", "deepfake-drill", "officer-playbook", "resource-pack"]),
  content: z.object({
    headline: z.string().optional(),
    body: z.string().optional(),
    bullets: z.array(z.string()).optional(),
    media: z.string().optional(),
    quote: z.string().optional(),
    speaker: z.string().optional(),
  }).default({}),
})

export const ToolSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  icon: z.string().optional(),
  category: z.string().optional(),
})

export const PromptSchema = z.object({
  id: z.string(),
  title: z.string(),
  promptText: z.string(),
  toolId: z.string(),
  category: z.string(),
  type: z.enum(["demo", "lab"]),
})

export const LabSchema = z.object({
  id: z.string(),
  title: z.string(),
  scenario: z.string(),
  prompts: z.array(z.string()), // References to prompt IDs
})

export const DemoManifestSchema = z.object({
  id: z.string(),
  type: z.enum(["video", "image", "rag", "voice"]),
  fallbackPath: z.string(),
  liveUrl: z.string().optional(),
})

export const ResourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  link: z.string(),
})

export const MetaSchema = z.object({
  title: z.string(),
  presenter: z.string(),
  profiles: z.array(z.number()),
  brandPaths: z.object({
    logo: z.string(),
  }).optional(),
})

export const ChaptersSchema = z.record(z.string(), z.string())
