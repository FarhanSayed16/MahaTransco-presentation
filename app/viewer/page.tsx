"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { FileText, Download, ArrowLeft, Bot, Info } from "lucide-react"
import { Button } from "@/components/ui/Button"

function ViewerContent() {
  const searchParams = useSearchParams()
  const fileUrl = searchParams?.get("file")
  const [content, setContent] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [viewMode, setViewMode] = React.useState<"preview" | "raw">("preview")

  React.useEffect(() => {
    if (!fileUrl) {
      setError("No file specified.")
      setLoading(false)
      return
    }

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error("File not found")
        return res.text()
      })
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [fileUrl])

  return (
    <div className="min-h-screen bg-canvas p-6 md:p-12 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Button variant="secondary" onClick={() => window.history.back()} className="gap-2 bg-white">
            <ArrowLeft size={16} /> Back
          </Button>
          
          {fileUrl && (
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-line/50 rounded-lg p-1 border border-line">
                <button 
                  onClick={() => setViewMode("preview")} 
                  className={`px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${viewMode === "preview" ? "bg-white shadow-sm text-navy" : "text-ink-muted hover:text-navy"}`}
                >
                  Preview
                </button>
                <button 
                  onClick={() => setViewMode("raw")} 
                  className={`px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${viewMode === "raw" ? "bg-white shadow-sm text-navy" : "text-ink-muted hover:text-navy"}`}
                >
                  Raw Markdown
                </button>
              </div>
              <a href={fileUrl} download target="_blank" rel="noreferrer">
                <Button className="gap-2">
                  <Download size={16} /> Download
                </Button>
              </a>
            </div>
          )}
        </div>

        <div className="bg-accent-soft border border-accent/20 rounded-2xl p-6 mb-8 flex items-start gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-white flex shrink-0 items-center justify-center text-accent mt-1 border border-accent/10">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy mb-1 flex items-center gap-2">
              Why is this file written in Markdown?
              <span className="text-[10px] font-bold bg-white border border-accent/20 px-2 py-1 rounded text-accent uppercase tracking-wider shadow-sm">AI Ready</span>
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              We provide these resources as raw <code>.md</code> or <code>.txt</code> files because they are the native language of Large Language Models. 
              Uploading a simple Markdown file uses far fewer tokens than a complex PDF or Word document, preventing formatting errors and saving cost when pasting into tools like ChatGPT or Claude.
            </p>
          </div>
        </div>

        <div className="bg-surface rounded-2xl shadow-sm border border-line p-8 md:p-12 min-h-[500px]">
          {loading && (
            <div className="flex flex-col items-center justify-center h-64 text-ink-muted gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              Loading document...
            </div>
          )}
          
          {error && (
            <div className="flex flex-col items-center justify-center h-64 text-bad gap-3">
              <Info size={32} />
              <p className="font-bold">Could not load document</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          
          {content && viewMode === "preview" && (
            <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-navy prose-p:text-ink prose-a:text-accent prose-strong:text-navy">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
          
          {content && viewMode === "raw" && (
            <div className="relative">
              <pre className="bg-slate-900 text-slate-50 p-6 rounded-xl overflow-x-auto text-sm font-mono whitespace-pre-wrap leading-relaxed shadow-inner">
                <code>{content}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ViewerPage() {
  return (
    <React.Suspense fallback={<div className="p-12 text-center text-ink-muted">Loading viewer...</div>}>
      <ViewerContent />
    </React.Suspense>
  )
}
