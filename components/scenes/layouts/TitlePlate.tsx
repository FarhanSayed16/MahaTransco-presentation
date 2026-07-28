"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Sparkles } from "lucide-react"
import { LogoLockup } from "./LogoLockup"
import QRCode from "react-qr-code"

export function TitlePlate({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
      <LogoLockup />
      <h1 className="mb-4 font-display text-4xl font-bold leading-[1.15] text-navy md:text-5xl lg:text-6xl">
        {scene.content.headline}
      </h1>
      <p className="mb-6 max-w-3xl text-lg leading-relaxed text-ink-muted md:text-xl">
        {scene.content.body}
      </p>
      {scene.content.speaker && (
        <div className="mb-6 flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-accent" />
          <p className="text-base font-semibold text-navy md:text-lg">{scene.content.speaker}</p>
        </div>
      )}

      <div className="inline-flex items-center gap-3 rounded-2xl border border-line bg-white/70 p-2.5 shadow-sm backdrop-blur-md">
        <div className="rounded-lg bg-white p-1.5">
          <QRCode value="https://g6xrghvh-3000.inc1.devtunnels.ms/" size={48} />
        </div>
        <div className="pr-3 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
            Follow along
          </span>
          <p className="font-mono text-xs font-semibold text-accent">Live demo QR</p>
        </div>
      </div>
    </div>
  )
}
