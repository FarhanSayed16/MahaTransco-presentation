"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import Markdown from "react-markdown"

export function PresenterPanel() {
  const {
    showPresenter,
    currentSceneData,
    activeScenes,
    currentIndex,
    profile,
    setProfile,
    jumpToClosing,
    closeAllOverlays,
  } = usePresentation()
  const [notes, setNotes] = React.useState("")
  const [sessionTime, setSessionTime] = React.useState(0)

  const nextScene = activeScenes[currentIndex + 1]

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval>
    if (showPresenter) {
      timer = setInterval(() => setSessionTime((t) => t + 1), 1000)
    }
    return () => clearInterval(timer)
  }, [showPresenter])

  React.useEffect(() => {
    if (currentSceneData && showPresenter) {
      fetch(`/notes/${currentSceneData.id}.md`)
        .then((res) => res.text())
        .then((text) => {
          if (text.startsWith("<!DOCTYPE") || text.includes("<html")) throw new Error("Not found")
          setNotes(text)
        })
        .catch(() => setNotes("*No notes found for this scene.*"))
    }
  }, [currentSceneData, showPresenter])

  if (!showPresenter || !currentSceneData) return null

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  const isSoftEnd = sessionTime > profile * 60 - 300

  return (
    <div className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col p-8 font-sans overflow-hidden">
      <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-accent">{currentSceneData.title}</h2>
          <p className="text-white/50 font-mono mt-1">
            Scene {currentIndex + 1} of {activeScenes.length} · #{currentSceneData.id}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {([60, 90, 120] as const).map((p) => (
              <button
                key={p}
                onClick={() => setProfile(p)}
                className={`px-3 py-1 rounded ${profile === p ? "bg-accent" : "bg-white/10"}`}
              >
                {p}m
              </button>
            ))}
          </div>
          <div className={`text-4xl font-mono font-bold ${isSoftEnd ? "text-warn animate-pulse" : ""}`}>
            {formatTime(sessionTime)}
          </div>
          <button
            onClick={jumpToClosing}
            className="px-4 py-2 bg-warn rounded-lg font-bold text-sm"
          >
            Panic → Close
          </button>
          <button onClick={closeAllOverlays} className="px-4 py-2 bg-white/10 rounded-lg text-sm">
            Esc
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-8 min-h-0">
        <div className="flex-[2] bg-white/5 rounded-xl p-8 overflow-y-auto prose prose-invert prose-lg max-w-none">
          <Markdown>{notes}</Markdown>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">Up Next</h3>
            {nextScene ? (
              <div>
                <div className="text-xl font-bold">{nextScene.title}</div>
                <div className="text-white/60">{nextScene.content.headline}</div>
              </div>
            ) : (
              <div className="text-xl font-bold text-accent">End of Presentation</div>
            )}
          </div>
          <div className="bg-white/5 rounded-xl p-6 flex-1">
            <h3 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">Hotkeys</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <span className="text-accent bg-accent/20 px-2 py-1 rounded mr-2">Space</span> Next
              </li>
              <li>
                <span className="text-accent bg-accent/20 px-2 py-1 rounded mr-2">G</span> Grid
              </li>
              <li>
                <span className="text-accent bg-accent/20 px-2 py-1 rounded mr-2">D</span> Demo tray
              </li>
              <li>
                <span className="text-accent bg-accent/20 px-2 py-1 rounded mr-2">N</span> Notes overlay
              </li>
              <li>
                <span className="text-accent bg-accent/20 px-2 py-1 rounded mr-2">P</span> This panel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
