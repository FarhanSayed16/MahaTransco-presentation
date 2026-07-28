"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Download, BookOpen, ShieldAlert, ListChecks, UserCog, FileText } from "lucide-react"
import QRCode from "react-qr-code"
import resources from "@/content/resources.json"
import type { LucideIcon } from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  "Prompt Playground": BookOpen,
  "One-page Cheat Sheet": FileText,
  "Never-Upload Checklist": ShieldAlert,
  "Officer OS Playbook": ListChecks,
  "DM Persona Rules": UserCog,
  "Verification Checklist": ShieldAlert,
}

export function ResourcePack({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const items = resources.items as { name: string; url: string; type: string }[]
  const [qrValue, setQrValue] = React.useState("/playground")

  React.useEffect(() => {
    setQrValue(`${window.location.origin}/playground`)
  }, [])

  return (
    <div className="flex flex-col w-full max-w-5xl items-center">
      <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-4">
        <Download size={28} className="text-accent" />
      </div>
      <h2 className="text-4xl font-display font-bold text-navy mb-4 text-center">
        {scene.content.headline}
      </h2>
      <p className="text-lg text-ink-muted mb-10 text-center max-w-3xl">{scene.content.body}</p>

      <div className="grid md:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
        {items.map((r) => {
          const Icon = ICONS[r.name] || BookOpen
          return (
            <a
              key={r.name}
              href={r.url}
              className="bg-surface border border-line rounded-xl p-5 flex items-center gap-4 card-lift accent-border-left no-underline text-ink hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center shrink-0">
                <Icon size={20} className="text-accent" />
              </div>
              <span className="text-lg font-semibold">{r.name}</span>
            </a>
          )
        })}
      </div>

      <div className="flex flex-col items-center gap-3 mt-4 bg-white p-6 rounded-2xl shadow-sm border border-line">
        <QRCode value={qrValue} size={120} />
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-navy uppercase tracking-widest">Playground + resources</span>
          <span className="text-ink-muted text-sm mt-1 text-center max-w-xs">
            Scan for /playground after deploy — or open it on this device
          </span>
        </div>
      </div>
    </div>
  )
}
