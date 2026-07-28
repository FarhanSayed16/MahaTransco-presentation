"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"

export function KeyboardManager() {
  const {
    nextScene,
    prevScene,
    toggleOverview,
    togglePresenter,
    toggleNotes,
    toggleDemoTray,
    closeAllOverlays,
  } = usePresentation()

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) return

      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault()
          nextScene()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevScene()
          break
        case "g":
        case "G":
          toggleOverview()
          break
        case "p":
        case "P":
          togglePresenter()
          break
        case "n":
        case "N":
          toggleNotes()
          break
        case "f":
        case "F":
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {})
          } else {
            document.exitFullscreen().catch(() => {})
          }
          break
        case "d":
        case "D":
          toggleDemoTray()
          break
        case "Escape":
          closeAllOverlays()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [
    nextScene,
    prevScene,
    toggleOverview,
    togglePresenter,
    toggleNotes,
    toggleDemoTray,
    closeAllOverlays,
  ])

  return null
}
