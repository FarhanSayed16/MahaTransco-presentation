"use client"

import * as React from "react"
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react"
import { filterScenesByProfile, type Scene } from "./filterScenes"

interface PresentationState {
  currentIndex: number
  /** Alias for older components */
  currentScene: number
  totalScenes: number
  currentStep: number
  totalSteps: number
  profile: 60 | 90 | 120
  showOverview: boolean
  showPresenter: boolean
  showNotes: boolean
  showDemoTray: boolean
  activeScenes: Scene[]
  currentSceneData: Scene | null
}

interface PresentationActions {
  setCurrentIndex: (index: number) => void
  setCurrentScene: (index: number) => void
  setTotalSteps: (steps: number) => void
  nextScene: () => void
  prevScene: () => void
  setProfile: (profile: 60 | 90 | 120) => void
  jumpToSceneId: (id: string) => void
  jumpToClosing: () => void
  toggleOverview: () => void
  togglePresenter: () => void
  toggleNotes: () => void
  toggleDemoTray: () => void
  closeAllOverlays: () => void
}

const PresentationContext = createContext<(PresentationState & PresentationActions) | null>(null)

export function PresentationProvider({
  children,
  scenes,
}: {
  children: React.ReactNode
  scenes: Scene[]
}) {
  const [profile, setProfileState] = useState<60 | 90 | 120>(90)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps, setTotalSteps] = useState(0)
  const [showOverview, setShowOverview] = useState(false)
  const [showPresenter, setShowPresenter] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [showDemoTray, setShowDemoTray] = useState(false)
  const [hashReady, setHashReady] = useState(false)

  const activeScenes = useMemo(() => filterScenesByProfile(scenes, profile), [scenes, profile])
  const lastIndex = Math.max(activeScenes.length - 1, 0)
  const currentSceneData = activeScenes[currentIndex] ?? activeScenes[0] ?? null

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, lastIndex))
  }, [lastIndex])

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "")
    if (hash) {
      const byId = scenes.findIndex((s) => s.id === hash || s.id === hash.replace(/^scene-/, ""))
      if (byId >= 0) {
        const filtered = filterScenesByProfile(scenes, profile)
        const idx = filtered.findIndex((s) => s.id === scenes[byId].id)
        if (idx >= 0) setCurrentIndex(idx)
      } else {
        const num = parseInt(hash.replace(/^scene-/, ""), 10)
        if (!isNaN(num) && num >= 0) setCurrentIndex(num)
      }
    }
    setHashReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!hashReady || !currentSceneData) return
    window.history.replaceState(null, "", `#${currentSceneData.id}`)
  }, [currentSceneData, hashReady])

  useEffect(() => {
    setCurrentStep(0)
    setTotalSteps(0)
  }, [currentIndex])

  const setCurrentIndexSafe = useCallback(
    (idx: number) => {
      setCurrentIndex(Math.max(0, Math.min(idx, lastIndex)))
    },
    [lastIndex]
  )

  const nextScene = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep((s) => s + 1)
      return
    }
    setCurrentIndex((i) => Math.min(i + 1, lastIndex))
  }, [currentStep, totalSteps, lastIndex])

  const prevScene = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1)
      return
    }
    setCurrentIndex((i) => Math.max(i - 1, 0))
  }, [currentStep])

  const jumpToSceneId = useCallback(
    (id: string) => {
      const idx = activeScenes.findIndex((s) => s.id === id)
      if (idx >= 0) setCurrentIndex(idx)
    },
    [activeScenes]
  )

  const jumpToClosing = useCallback(() => {
    const idx = activeScenes.findIndex((s) => s.id === "28-closing")
    if (idx >= 0) setCurrentIndex(idx)
    setShowPresenter(false)
    setShowOverview(false)
    setShowDemoTray(false)
    setShowNotes(false)
  }, [activeScenes])

  const closeAllOverlays = useCallback(() => {
    setShowOverview(false)
    setShowPresenter(false)
    setShowNotes(false)
    setShowDemoTray(false)
  }, [])

  const value: PresentationState & PresentationActions = {
    currentIndex,
    currentScene: currentIndex,
    totalScenes: lastIndex,
    currentStep,
    totalSteps,
    profile,
    showOverview,
    showPresenter,
    showNotes,
    showDemoTray,
    activeScenes,
    currentSceneData,
    setCurrentIndex: setCurrentIndexSafe,
    setCurrentScene: setCurrentIndexSafe,
    setTotalSteps,
    nextScene,
    prevScene,
    setProfile: setProfileState,
    jumpToSceneId,
    jumpToClosing,
    toggleOverview: () => setShowOverview((v) => !v),
    togglePresenter: () => setShowPresenter((v) => !v),
    toggleNotes: () => setShowNotes((v) => !v),
    toggleDemoTray: () => setShowDemoTray((v) => !v),
    closeAllOverlays,
  }

  return <PresentationContext.Provider value={value}>{children}</PresentationContext.Provider>
}

export function usePresentation() {
  const ctx = useContext(PresentationContext)
  if (!ctx) throw new Error("usePresentation must be used within a PresentationProvider")
  return ctx
}
