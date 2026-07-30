"use client"

import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Sparkles, CheckCircle2 } from "lucide-react"
import { LogoLockup } from "./LogoLockup"
import QRCode from "react-qr-code"

export function TitlePlate({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  return (
    <div className="relative mx-auto flex max-w-6xl w-full flex-col md:flex-row items-center justify-between gap-12 px-4">
      {/* Left Column: Content */}
      <div className="flex-1 text-left flex flex-col items-start">
        <LogoLockup align="left" />
        <h1 className="mb-6 font-display text-4xl font-bold leading-[1.15] text-navy md:text-5xl lg:text-6xl max-w-3xl">
          {scene.content.headline}
        </h1>
        <p className="mb-8 max-w-2xl text-xl leading-relaxed text-ink-muted">
          {scene.content.body}
        </p>

        {scene.content.bullets && scene.content.bullets.length > 0 && (
          <ul className="space-y-4 mb-8">
            {scene.content.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-lg text-ink font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {scene.content.speaker && (
          <div className="flex items-center gap-2 mt-auto pt-4 border-t border-line w-full max-w-sm">
            <Sparkles size={18} className="text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-ink-muted mr-2">Speaker</span>
            <p className="text-lg font-bold text-navy">{scene.content.speaker}</p>
          </div>
        )}
      </div>

      {/* Right Column: QR Code Card */}
      <div className="shrink-0 w-full md:w-[320px] bg-surface rounded-3xl border border-line p-8 shadow-sm accent-border-left flex flex-col items-center text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
          Join the Live Demo
        </p>
        <p className="text-sm text-ink-muted mb-8">
          Scan to follow along on your phone and save the resource toolkit.
        </p>
        <div className="rounded-2xl bg-white p-3 shadow-sm border border-line/50 mb-6">
          <QRCode value="https://g6xrghvh-3000.inc1.devtunnels.ms/" size={180} />
        </div>
        <p className="font-mono text-xs font-semibold text-ink-muted uppercase tracking-widest">
          No App Required
        </p>
      </div>
    </div>
  )
}
