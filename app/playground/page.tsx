import { getAllPrompts, getTools } from "@/lib/content/loaders"
import { PlaygroundClient } from "./PlaygroundClient"

export default function Playground() {
  const prompts = getAllPrompts()
  const tools = getTools()

  return <PlaygroundClient prompts={prompts} tools={tools} />
}
