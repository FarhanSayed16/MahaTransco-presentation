"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"

type Tool = { id: string; name: string; url: string; category: string }

const SCENE_DEMOS: Record<string, { label: string; toolId: string; text: string }[]> = {
  "14-live-writing-demo": [
    {
      label: "Open ChatGPT",
      toolId: "chatgpt",
      text: "You are a communications officer at Mahatransco. Draft a clear public power-shutdown advisory in formal tone, max 120 words. Do not invent feeder names. Mark unknowns as [VERIFY].",
    },
    {
      label: "Open Claude",
      toolId: "claude",
      text: "You are a communications officer at Mahatransco. Draft a clear public power-shutdown advisory in formal tone, max 120 words. Do not invent feeder names. Mark unknowns as [VERIFY].",
    },
  ],
  "18-image": [
    {
      label: "Open Midjourney",
      toolId: "midjourney",
      text: "Photojournalistic wide-angle flood relief staging area, Maharashtra, no readable real official faces, no logos, documentary realism.",
    },
  ],
  "17-persona-lab": [
    {
      label: "Copy persona rules",
      toolId: "chatgpt",
      text: "You are the Exec. Asst. to the DM. Use formal Indian Governance tone. Translate jargon to action points. Highlight unverified facts in [VERIFY]. Never invent metrics.",
    },
  ],
  "21-rag-explainer": [
    {
      label: "Open NotebookLM",
      toolId: "perplexity",
      text: "Extract deadlines and responsible offices from the uploaded circular; cite page numbers; list what the document does not answer.",
    },
  ],
  "20-video-shock": [
    {
      label: "Open HeyGen",
      toolId: "heygen",
      text: "Namaskar. This is a short public advisory from Mahatransco. Planned maintenance may affect power supply in selected areas tonight between 10 PM and 2 AM. For updates, please check official Mahatransco channels only. Thank you.",
    },
    {
      label: "Open Runway",
      toolId: "runway",
      text: "Namaskar. This is a short public advisory from Mahatransco. Planned maintenance may affect power supply in selected areas tonight between 10 PM and 2 AM. For updates, please check official Mahatransco channels only. Thank you.",
    },
  ],
  default: [
    {
      label: "Open ChatGPT",
      toolId: "chatgpt",
      text: "Act as an executive assistant for an Indian administrative officer. Use formal governance tone. Never invent metrics. Mark unsure facts as [VERIFY].",
    },
    {
      label: "Open Claude",
      toolId: "claude",
      text: "Act as an executive assistant for an Indian administrative officer. Use formal governance tone. Never invent metrics. Mark unsure facts as [VERIFY].",
    },
  ],
}

export function DemoTray() {
  const { showDemoTray, currentSceneData, toggleDemoTray } = usePresentation()
  const tools = toolsData as Tool[]

  if (!showDemoTray) return null

  const demos =
    (currentSceneData?.id && SCENE_DEMOS[currentSceneData.id]) || SCENE_DEMOS.default

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-navy border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-wrap gap-4 backdrop-blur-xl max-w-[90vw] justify-center">
      <p className="w-full text-center text-white/60 text-sm mb-1">
        Live tools · copies text then opens site (Wi‑Fi) · {currentSceneData?.title}
      </p>
      {demos.map((demo) => (
        <button
          key={demo.label}
          onClick={() => {
            if (demo.toolId === "perplexity" && currentSceneData?.id === "21-rag-explainer") {
              window.open("https://notebooklm.google.com/", "_blank")
              void navigator.clipboard.writeText(demo.text)
            } else {
              void openInTool(demo.text, demo.toolId, tools)
            }
            toggleDemoTray()
          }}
          className="px-6 py-4 bg-surface text-ink font-bold rounded-xl hover:bg-surface-muted transition-colors whitespace-nowrap focus-visible:ring-4 focus-visible:ring-accent outline-none"
        >
          {demo.label}
        </button>
      ))}
      <button
        onClick={toggleDemoTray}
        className="px-6 py-4 bg-warn text-white font-bold rounded-xl hover:bg-warn/80 transition-colors whitespace-nowrap"
      >
        Close
      </button>
    </div>
  )
}
