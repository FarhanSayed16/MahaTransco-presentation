import fs from "fs"
import path from "path"
import { SceneSchema, MetaSchema, ChaptersSchema, ToolSchema, PromptSchema } from "./schemas"
import { z } from "zod"

const contentDir = path.join(process.cwd(), "content")

function readJsonFile(filePath: string) {
  try {
    const raw = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(raw)
  } catch (error) {
    console.error(`Failed to read or parse file: ${filePath}`)
    throw error
  }
}

export function getWorkshopMeta() {
  const data = readJsonFile(path.join(contentDir, "workshop.meta.json"))
  return MetaSchema.parse(data)
}

export function getChapters() {
  const data = readJsonFile(path.join(contentDir, "chapters.json"))
  return ChaptersSchema.parse(data)
}

export function getAllScenes() {
  const scenesDir = path.join(contentDir, "scenes")
  if (!fs.existsSync(scenesDir)) return []
  
  const files = fs.readdirSync(scenesDir).filter(f => f.endsWith(".json")).sort()
  
  return files.map(file => {
    const data = readJsonFile(path.join(scenesDir, file))
    return SceneSchema.parse(data)
  })
}

export function getSceneById(id: string) {
  const scenes = getAllScenes()
  return scenes.find(s => s.id === id)
}

export function getTools() {
  const data = readJsonFile(path.join(contentDir, "tools.json"))
  return z.array(ToolSchema).parse(data)
}

export function getAllPrompts() {
  const promptsDir = path.join(contentDir, "prompts")
  let results: z.infer<typeof PromptSchema>[] = []
  
  if (!fs.existsSync(promptsDir)) return results
  
  const walkSync = (dir: string) => {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const filepath = path.join(dir, file)
      const stat = fs.statSync(filepath)
      if (stat.isDirectory()) {
        walkSync(filepath)
      } else if (file.endsWith(".json")) {
        try {
          const data = readJsonFile(filepath)
          results.push(PromptSchema.parse(data))
        } catch (e) {
          console.error(`Failed to load prompt ${filepath}`, e)
        }
      }
    }
  }
  
  walkSync(promptsDir)
  return results
}


