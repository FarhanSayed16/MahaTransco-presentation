"use client"

import * as React from "react"
import Image from "next/image"
import { usePresentation } from "@/lib/navigation/PresentationContext"

const ACT_CLASS: Record<string, string> = {
  I: "act-tint-I",
  II: "act-tint-II",
  III: "act-tint-III",
  IV: "act-tint-IV",
  V: "act-tint-V",
}

/**
 * Full-bleed tech atmosphere from public/art/workshop-atmosphere.png
 * + soft center veil so navy text stays projector-readable.
 */
export function WorkshopBackground() {
  const { currentSceneData } = usePresentation()
  const act = currentSceneData?.act || ""
  const actClass = ACT_CLASS[act] || ""
  const isHero = currentSceneData?.id === "01-opening" || currentSceneData?.id === "28-closing"

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 workshop-atmosphere ${actClass} ${isHero ? "workshop-atmosphere-hero" : ""}`}
      aria-hidden
    >
      <Image
        src="/art/workshop-atmosphere.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center select-none"
        quality={75}
      />
      <div className="workshop-veil" />
      <div className="workshop-edge-fade" />
    </div>
  )
}
