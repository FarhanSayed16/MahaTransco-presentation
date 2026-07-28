"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import { motion, AnimatePresence } from "framer-motion"
import { Surface } from "@/components/ui/Surface"
import { SceneIcon } from "@/components/visuals/SceneIcon"

export function OverviewGrid() {
  const { showOverview, activeScenes, setCurrentIndex, closeAllOverlays, currentIndex } =
    usePresentation()

  return (
    <AnimatePresence>
      {showOverview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 shell-glass p-12 overflow-y-auto flex flex-col"
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-4xl font-display font-bold text-navy">Workshop Overview</h2>
              <p className="text-ink-muted mt-2">
                {activeScenes.length} scenes in this profile — select one to jump.
              </p>
            </div>
            <button
              onClick={closeAllOverlays}
              className="text-ink hover:text-accent font-medium px-4 py-2"
            >
              Close (Esc)
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-20">
            {activeScenes.map((scene, i) => (
              <Surface
                key={scene.id}
                onClick={() => {
                  setCurrentIndex(i)
                  closeAllOverlays()
                }}
                className={`p-4 cursor-pointer hover:border-accent hover:shadow-md transition-all group flex flex-col justify-between h-36 ${
                  i === currentIndex ? "border-accent ring-2 ring-accent/30" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-semibold text-ink-muted group-hover:text-accent transition-colors">
                    Act {scene.act} · {String(i + 1).padStart(2, "0")}
                  </div>
                  <SceneIcon sceneId={scene.id} size={16} className="text-accent/70 group-hover:text-accent" />
                </div>
                <div className="font-medium text-ink text-sm leading-snug">{scene.title}</div>
              </Surface>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
