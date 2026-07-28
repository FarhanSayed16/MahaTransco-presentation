"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import Markdown from "react-markdown"

export function NotesOverlay() {
  const { showNotes, showPresenter, currentSceneData, toggleNotes } = usePresentation()
  const [notes, setNotes] = React.useState("")

  React.useEffect(() => {
    if (currentSceneData && showNotes && !showPresenter) {
      fetch(`/notes/${currentSceneData.id}.md`)
        .then((res) => res.text())
        .then((text) => {
          if (text.startsWith("<!DOCTYPE") || text.includes("<html")) throw new Error("nf")
          setNotes(text)
        })
        .catch(() => setNotes("*No notes found.*"))
    }
  }, [currentSceneData, showNotes, showPresenter])

  if (!showNotes || showPresenter || !currentSceneData) return null

  return (
    <div className="fixed bottom-24 right-6 z-50 w-full max-w-md max-h-[50vh] bg-navy text-white rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
        <span className="font-bold text-sm">Notes · {currentSceneData.title}</span>
        <button onClick={toggleNotes} className="text-white/60 hover:text-white text-sm">
          Close (N)
        </button>
      </div>
      <div className="p-4 overflow-y-auto prose prose-invert prose-sm max-w-none">
        <Markdown>{notes}</Markdown>
      </div>
    </div>
  )
}
