"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import { IconButton } from "@/components/ui/IconButton"
import { ChevronLeft, ChevronRight, Grid } from "lucide-react"
import { SceneIconBadge } from "@/components/visuals/SceneIcon"

export function NavChrome() {
  const {
    currentIndex,
    totalScenes,
    prevScene,
    nextScene,
    toggleOverview,
    currentSceneData,
    activeScenes,
  } = usePresentation()

  const actLabel = currentSceneData?.act ? `Act ${currentSceneData.act}` : "Workshop"

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 flex items-center justify-between z-40 shell-glass border-t border-line/60">
      <div className="flex items-center gap-3 min-w-0">
        <IconButton onClick={toggleOverview} title="Overview (G)">
          <Grid className="w-5 h-5" />
        </IconButton>
        {currentSceneData && <SceneIconBadge sceneId={currentSceneData.id} size={18} />}
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">{actLabel}</span>
          <span className="text-sm font-medium text-ink truncate">
            {currentSceneData?.title ?? "—"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="text-sm text-ink-muted mr-4">
          {currentIndex + 1} / {activeScenes.length}
        </span>
        <IconButton onClick={prevScene} disabled={currentIndex === 0} title="Previous (←)">
          <ChevronLeft className="w-5 h-5" />
        </IconButton>
        <IconButton
          onClick={nextScene}
          disabled={currentIndex >= totalScenes}
          title="Next (→ or Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  )
}
