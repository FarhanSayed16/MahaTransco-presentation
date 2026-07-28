"use client"

import type { ReactNode } from "react"

/**
 * Frosted content stage — keeps scene copy readable over the decorative atmosphere.
 */
export function SceneStage({
  children,
  wide = false,
  glass = true,
}: {
  children: ReactNode
  wide?: boolean
  glass?: boolean
}) {
  return (
    <div
      className={`mx-auto w-full ${wide ? "max-w-7xl" : "max-w-6xl"} ${
        glass
          ? "scene-stage rounded-3xl border border-white/70 bg-white/75 px-5 py-6 shadow-[0_20px_60px_rgba(11,31,58,0.08)] backdrop-blur-md md:px-10 md:py-8"
          : ""
      }`}
    >
      {children}
    </div>
  )
}
