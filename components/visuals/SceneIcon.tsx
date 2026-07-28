"use client"

import {
  Sparkles,
  Target,
  Columns3,
  LayoutGrid,
  Boxes,
  Brain,
  Cloud,
  Binary,
  Hash,
  Ruler,
  MessageSquare,
  GitCompare,
  PenLine,
  Star,
  Thermometer,
  UserCog,
  Image,
  Mic,
  Video,
  FileSearch,
  AlertTriangle,
  Shield,
  Scale,
  ScanSearch,
  ListChecks,
  BookOpen,
  Quote,
  type LucideIcon,
} from "lucide-react"

const SCENE_ICONS: Record<string, LucideIcon> = {
  "01-opening": Sparkles,
  "02-promise": Target,
  "03-pillars": Columns3,
  "04-ai-not-app": LayoutGrid,
  "05-tools-wall": Boxes,
  "06-generative-ai": Brain,
  "07-llm-vs-slm": Cloud,
  "08-transformer-intuition": Binary,
  "09-token-lab": Hash,
  "10-context-window": Ruler,
  "11-prompt-methods": MessageSquare,
  "12-weak-vs-enterprise": GitCompare,
  "13-enterprise-builder": PenLine,
  "14-live-writing-demo": PenLine,
  "15-playground-embed": Star,
  "16-temperature-dial": Thermometer,
  "17-persona-lab": UserCog,
  "18-image": Image,
  "19-voice": Mic,
  "20-video-shock": Video,
  "21-rag-explainer": FileSearch,
  "22-hallucination-clinic": AlertTriangle,
  "23-dpdp-tiers": Shield,
  "24-it-rules": Scale,
  "25-deepfake-drill": ScanSearch,
  "26-officer-playbook": ListChecks,
  "27-resource-pack": BookOpen,
  "28-closing": Quote,
}

export function getSceneIcon(sceneId: string): LucideIcon {
  return SCENE_ICONS[sceneId] ?? Sparkles
}

export function SceneIcon({
  sceneId,
  size = 20,
  className = "text-accent",
}: {
  sceneId: string
  size?: number
  className?: string
}) {
  const Icon = getSceneIcon(sceneId)
  return <Icon size={size} className={className} aria-hidden />
}

export function SceneIconBadge({
  sceneId,
  size = 22,
}: {
  sceneId: string
  size?: number
}) {
  return (
    <div className="w-11 h-11 rounded-xl bg-accent-soft border border-accent/25 flex items-center justify-center shrink-0 shadow-sm ring-2 ring-white/80">
      <SceneIcon sceneId={sceneId} size={size} />
    </div>
  )
}
