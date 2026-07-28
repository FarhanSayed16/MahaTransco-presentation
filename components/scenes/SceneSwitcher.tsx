"use client"

import { usePresentation } from "@/lib/navigation/PresentationContext"
import { SceneRenderer } from "./SceneRenderer"

export function SceneSwitcher() {
  const { currentSceneData } = usePresentation()
  if (!currentSceneData) return <div className="text-ink-muted">No scenes loaded</div>
  return (
    <div className="flex w-full items-center justify-center">
      <SceneRenderer scene={currentSceneData} />
    </div>
  )
}
