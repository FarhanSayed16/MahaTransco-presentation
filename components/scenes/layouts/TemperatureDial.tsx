"use client"

import * as React from "react"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"
import { Bot, Sparkles, AlertTriangle } from "lucide-react"

// Real "simulated" responses for typing effect
const SAMPLES: Record<string, { label: string; text: string; icon: any; color: string; speed: number }> = {
  "0.1": {
    label: "Strict & Factual (Governance Draft)",
    icon: Bot,
    color: "text-navy",
    speed: 15,
    text: "NOTICE: Planned maintenance outage scheduled for August 15, 10:00 AM to 2:00 PM. Affected areas include Substation A and surrounding sectors. For official inquiries, contact the helpline at 1800-XXX-XXXX. No deviation from this schedule is anticipated.",
  },
  "0.7": {
    label: "Creative & Conversational (Campaign Copy)",
    icon: Sparkles,
    color: "text-accent",
    speed: 30,
    text: "Dear Citizens, to ensure your lights stay bright through the upcoming monsoon season, our dedicated engineers are performing essential upgrades on August 15. You might experience a brief pause in power between 10 AM and 2 PM, but it's for a safer tomorrow!",
  },
  "1.0": {
    label: "Risky & Unpredictable (Hallucination Danger)",
    icon: AlertTriangle,
    color: "text-warn",
    speed: 60,
    text: "Attention! The electricity goblins are being banished! Our brave voltage warriors are delving into the quantum matrix of Substation A to harvest the pure lightning of August 15th. Bring your own candles, for the sun itself shall weep between the hours of ten and two!",
  },
}

export function TemperatureDial({ scene }: { scene: z.infer<typeof SceneSchema> }) {
  const [t, setT] = React.useState<"0.1" | "0.7" | "1.0">("0.1")
  const [displayedText, setDisplayedText] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)

  // Typing effect logic
  React.useEffect(() => {
    setIsTyping(true)
    setDisplayedText("")
    const fullText = SAMPLES[t].text
    const speed = SAMPLES[t].speed
    
    let i = 0
    let timeoutId: NodeJS.Timeout
    
    // We use a random jitter so high temperature looks more erratic
    const typeNext = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1))
        i++
        const jitter = t === "1.0" ? Math.random() * 80 : 0
        timeoutId = setTimeout(typeNext, speed + jitter)
      } else {
        setIsTyping(false)
      }
    }
    
    // Start typing after a short delay
    const startDelay = setTimeout(typeNext, 300)
    
    return () => {
      clearTimeout(startDelay)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [t])

  const ActiveIcon = SAMPLES[t].icon

  return (
    <div className="flex flex-col h-full w-full max-w-5xl pt-4 md:pt-8 items-center">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4 w-full text-left">{scene.content.headline}</h2>
      <p className="text-lg md:text-xl text-ink-muted mb-8 w-full text-left">{scene.content.body}</p>
      
      {/* Dial Controls */}
      <div className="flex flex-wrap gap-4 mb-8 w-full">
        {(["0.1", "0.7", "1.0"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setT(v)}
            disabled={isTyping && t === v}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-lg md:text-xl border-2 transition-all duration-300 ${
              t === v 
                ? "border-accent bg-accent text-white shadow-md scale-105" 
                : "border-line bg-surface text-ink hover:border-accent/50"
            }`}
          >
            T = {v}
          </button>
        ))}
      </div>

      {/* Simulated Chat Interface */}
      <div className="w-full bg-surface border-2 border-line rounded-3xl shadow-sm overflow-hidden flex flex-col">
        {/* Chat Header */}
        <div className="bg-surface-muted border-b border-line px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-1">Prompt</p>
            <p className="text-sm font-semibold text-navy">"Write a notice about a planned power outage."</p>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-line">
            <span className="text-xs font-bold text-ink-muted uppercase">Settings</span>
            <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">Temp: {t}</span>
          </div>
        </div>

        {/* Chat Body */}
        <div className="p-6 md:p-8 min-h-[220px] flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-xl ${t === '0.1' ? 'bg-navy/10' : t === '0.7' ? 'bg-accent/10' : 'bg-warn/10'}`}>
              <ActiveIcon size={24} className={SAMPLES[t].color} />
            </div>
            <h3 className={`font-bold text-lg ${SAMPLES[t].color}`}>{SAMPLES[t].label}</h3>
          </div>
          
          <div className="relative flex-1">
            <p className="text-lg md:text-xl text-ink leading-relaxed font-medium">
              {displayedText}
              {isTyping && <span className="inline-block w-2 h-5 bg-accent ml-1 animate-pulse align-middle" />}
            </p>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-sm font-bold text-ink-muted text-left w-full uppercase tracking-widest">
        Takeaway: For official drafting, lock temperature low (≈0.1–0.2).
      </p>
    </div>
  )
}
