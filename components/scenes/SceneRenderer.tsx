"use client"

import * as React from "react"
import { usePresentation } from "@/lib/navigation/PresentationContext"
import { z } from "zod"
import { SceneSchema } from "@/lib/content/schemas"

import { TitlePlate } from "./layouts/TitlePlate"
import { ConceptSplit } from "./layouts/ConceptSplit"
import { LabCanvas } from "./layouts/LabCanvas"
import { Compare } from "./layouts/Compare"
import { Pipeline } from "./layouts/Pipeline"
import { ShockStage } from "./layouts/ShockStage"
import { Checklist } from "./layouts/Checklist"
import { QuoteClose } from "./layouts/QuoteClose"
import { ToolsWall } from "./layouts/ToolsWall"
import { TokenLab } from "./layouts/TokenLab"
import { PromptMethods } from "./layouts/PromptMethods"
import { EnterpriseBuilder } from "./layouts/EnterpriseBuilder"
import { LiveWriting } from "./layouts/LiveWriting"
import { PlaygroundEmbed } from "./layouts/PlaygroundEmbed"
import { TemperatureDial } from "./layouts/TemperatureDial"
import { PersonaLab } from "./layouts/PersonaLab"
import { ImageGeneration } from "./layouts/ImageGeneration"
import { VoiceGeneration } from "./layouts/VoiceGeneration"
import { VideoShock } from "./layouts/VideoShock"
import { RagExplainer } from "./layouts/RagExplainer"
import { HallucinationClinic } from "./layouts/HallucinationClinic"
import { DpdpTiers } from "./layouts/DpdpTiers"
import { ItRules } from "./layouts/ItRules"
import { DeepfakeDrill } from "./layouts/DeepfakeDrill"
import { OfficerPlaybook } from "./layouts/OfficerPlaybook"
import { ResourcePack } from "./layouts/ResourcePack"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { SceneStage } from "@/components/visuals/SceneStage"

type Scene = z.infer<typeof SceneSchema>

const WIDE_LAYOUTS = new Set([
  "tools-wall",
  "token-lab",
  "prompt-methods",
  "enterprise-builder",
  "live-writing",
  "image-generation",
  "voice-generation",
  "video-shock",
  "rag-explainer",
  "dpdp-tiers",
  "deepfake-drill",
])

const OPEN_GLASS = new Set(["title", "quote"])

export function SceneRenderer({ scene }: { scene: Scene }) {
  const reduce = useReducedMotion()

  const renderLayout = () => {
    switch (scene.layout) {
      case "title": return <TitlePlate scene={scene} />
      case "concept": return <ConceptSplit scene={scene} />
      case "lab": return <LabCanvas scene={scene} />
      case "compare": return <Compare scene={scene} />
      case "pipeline": return <Pipeline scene={scene} />
      case "shock": return <ShockStage scene={scene} />
      case "checklist": return <Checklist scene={scene} />
      case "quote": return <QuoteClose scene={scene} />
      case "tools-wall": return <ToolsWall scene={scene} />
      case "token-lab": return <TokenLab scene={scene} />
      case "prompt-methods": return <PromptMethods scene={scene} />
      case "enterprise-builder": return <EnterpriseBuilder scene={scene} />
      case "live-writing": return <LiveWriting scene={scene} />
      case "playground": return <PlaygroundEmbed scene={scene} />
      case "temperature-dial": return <TemperatureDial scene={scene} />
      case "persona-lab": return <PersonaLab scene={scene} />
      case "image-generation": return <ImageGeneration scene={scene} />
      case "voice-generation": return <VoiceGeneration scene={scene} />
      case "video-shock": return <VideoShock scene={scene} />
      case "rag-explainer": return <RagExplainer scene={scene} />
      case "hallucination-clinic": return <HallucinationClinic scene={scene} />
      case "dpdp-tiers": return <DpdpTiers scene={scene} />
      case "it-rules": return <ItRules scene={scene} />
      case "deepfake-drill": return <DeepfakeDrill scene={scene} />
      case "officer-playbook": return <OfficerPlaybook scene={scene} />
      case "resource-pack": return <ResourcePack scene={scene} />
      default: return <div>Unknown layout: {scene.layout}</div>
    }
  }

  const wide = WIDE_LAYOUTS.has(scene.layout)
  const glass = !OPEN_GLASS.has(scene.layout)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -12 }}
        transition={{ duration: reduce ? 0 : 0.28, ease: "easeOut" }}
        className="flex w-full max-w-[100%] flex-col items-center justify-center"
      >
        <SceneStage wide={wide} glass={glass}>
          {renderLayout()}
        </SceneStage>
      </motion.div>
    </AnimatePresence>
  )
}
