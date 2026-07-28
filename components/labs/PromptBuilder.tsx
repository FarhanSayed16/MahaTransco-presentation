"use client"

import { useState, useEffect } from "react"
import { openInTool } from "@/lib/tools/openInTool"
import toolsData from "@/content/tools.json"
import landRecords from "@/content/labs/enterprise-scenarios/land-records.json"
import loadShedding from "@/content/labs/enterprise-scenarios/load-shedding.json"
import disasterRelief from "@/content/labs/enterprise-scenarios/disaster-relief.json"
import citizenCharter from "@/content/labs/enterprise-scenarios/citizen-charter.json"
import { Button } from "@/components/ui/Button"

type Scenario = {
  id: string
  title: string
  role: string
  context: string
  task: string
  constraints: string
  format: string
}

const SCENARIOS = [landRecords, loadShedding, disasterRelief, citizenCharter] as Scenario[]

export function PromptBuilder() {
  const [role, setRole] = useState("")
  const [context, setContext] = useState("")
  const [task, setTask] = useState("")
  const [constraints, setConstraints] = useState("")
  const [format, setFormat] = useState("")

  const loadScenario = (s: Scenario) => {
    setRole(s.role)
    setContext(s.context)
    setTask(s.task)
    setConstraints(s.constraints)
    setFormat(s.format)
  }

  useEffect(() => {
    if (SCENARIOS[0]) loadScenario(SCENARIOS[0])
  }, [])

  const assembledPrompt = [
    role ? `[SYSTEM ROLE]\n${role}` : "",
    context ? `[CONTEXT]\n${context}` : "",
    task ? `[TASK]\n${task}` : "",
    constraints ? `[CONSTRAINTS]\n${constraints}` : "",
    format ? `[FORMAT]\n${format}` : "",
  ]
    .filter(Boolean)
    .join("\n\n")

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl text-left flex-1 min-h-0">
      <p className="text-sm text-ink-muted">
        Template: <strong className="text-navy">Role · Context · Task · Constraints · Format</strong>
        — add Audience / Tone / Avoid inside Constraints. Iterate after the first draft.
      </p>
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((s) => (
          <Button key={s.id} variant="secondary" onClick={() => loadScenario(s)}>
            {s.title}
          </Button>
        ))}
      </div>
      <div className="flex gap-8 w-full flex-1 min-h-0">
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 pb-2">
          {(
            [
              ["SYSTEM ROLE", role, setRole],
              ["CONTEXT", context, setContext],
              ["TASK", task, setTask],
              ["CONSTRAINTS", constraints, setConstraints],
              ["FORMAT", format, setFormat],
            ] as const
          ).map(([label, value, setter]) => (
            <div key={label}>
              <label className="block text-sm font-bold text-navy mb-1">{label}</label>
              <textarea
                className="w-full p-3 rounded-lg border border-line bg-surface focus:outline-none focus:border-accent resize-none h-20 shadow-sm text-sm"
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 bg-surface-muted rounded-xl border border-line p-6 flex flex-col min-h-0">
          <h3 className="font-bold text-navy mb-4">Preview</h3>
          <div className="flex-1 overflow-y-auto font-mono text-sm whitespace-pre-wrap mb-6 bg-white p-4 rounded border border-line shadow-inner">
            {assembledPrompt || "Your assembled prompt will appear here."}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={async () => {
                await navigator.clipboard.writeText(assembledPrompt)
              }}
            >
              Copy Prompt
            </Button>
            <Button
              variant="secondary"
              onClick={() => openInTool(assembledPrompt, "chatgpt", toolsData as any)}
            >
              Open ChatGPT
            </Button>
            <Button
              variant="secondary"
              onClick={() => openInTool(assembledPrompt, "claude", toolsData as any)}
            >
              Open Claude
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setRole("")
                setContext("")
                setTask("")
                setConstraints("")
                setFormat("")
              }}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
