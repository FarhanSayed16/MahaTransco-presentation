import { getAllScenes, getWorkshopMeta, getChapters, getAllPrompts, getTools } from "./loaders"

console.log("Starting content validation...")

try {
  const meta = getWorkshopMeta()
  console.log("✅ Meta validated:", meta.title)

  const chapters = getChapters()
  console.log("✅ Chapters validated:", Object.keys(chapters).length)

  const scenes = getAllScenes()
  console.log(`✅ Scenes validated: ${scenes.length}`)

  const prompts = getAllPrompts()
  console.log(`✅ Prompts validated: ${prompts.length}`)
  const truncated = prompts.filter((p) => p.promptText.trim().endsWith("..."))
  if (truncated.length) {
    throw new Error(`Truncated prompts: ${truncated.map((p) => p.id).join(", ")}`)
  }

  const tools = getTools()
  console.log(`✅ Tools validated: ${tools.length}`)
  for (const p of prompts) {
    if (!tools.find((t) => t.id === p.toolId)) {
      console.warn(`⚠️ Prompt ${p.id} references unknown toolId: ${p.toolId}`)
    }
  }

  console.log("All content validated successfully!")
  process.exit(0)
} catch (error) {
  console.error("❌ Content validation failed:")
  console.error(error)
  process.exit(1)
}
