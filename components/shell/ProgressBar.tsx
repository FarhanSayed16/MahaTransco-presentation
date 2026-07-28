"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"

export function ProgressBar() {
  const { currentScene, totalScenes } = usePresentation()
  const progress = totalScenes > 0 ? (currentScene / totalScenes) * 100 : 0

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-line z-50">
      <div 
        className="h-full bg-accent transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
