const fs = require('fs')
const path = require('path')

const scenes = [
  { id: "01-opening", title: "Opening Title", act: "I", flags: ["core"], layout: "title" },
  { id: "02-promise", title: "The Promise", act: "I", flags: ["core"], layout: "concept" },
  { id: "03-pillars", title: "Three Pillars", act: "I", flags: ["core"], layout: "pipeline" },
  { id: "04-ai-not-app", title: "AI is not one app", act: "I", flags: ["core"], layout: "concept" },
  { id: "05-category-matrix", title: "Category Matrix", act: "I", flags: ["core"], layout: "compare" },
  { id: "06-tokens", title: "What is a Token?", act: "II", flags: ["core"], layout: "concept" },
  { id: "07-token-lab", title: "Tokenization Lab", act: "II", flags: ["core", "lab"], layout: "lab" },
  { id: "08-predict-next", title: "Predict the next word", act: "II", flags: ["core"], layout: "concept" },
  { id: "09-hallucination", title: "Anatomy of a Hallucination", act: "II", flags: ["core"], layout: "checklist" },
  { id: "10-hallucination-lab", title: "Hallucination Lab", act: "II", flags: ["optional", "lab"], layout: "lab" },
  { id: "11-context-window", title: "Context Window", act: "II", flags: ["core"], layout: "concept" },
  { id: "12-memory-bridge", title: "No Permanent Memory", act: "II", flags: ["core"], layout: "concept" },
  { id: "13-prompt-anatomy", title: "Anatomy of a Prompt", act: "III", flags: ["core"], layout: "checklist" },
  { id: "14-zero-vs-few", title: "Zero-shot vs Few-shot", act: "III", flags: ["core"], layout: "compare" },
  { id: "15-drafting-lab", title: "Official Drafting Lab", act: "III", flags: ["core", "lab", "wow"], layout: "lab" },
  { id: "16-persona-shift", title: "Persona Shifting", act: "III", flags: ["optional"], layout: "concept" },
  { id: "17-marathi-translation", title: "Marathi Translation", act: "III", flags: ["core", "wow"], layout: "lab" },
  { id: "18-media-wow", title: "Image Generation", act: "III", flags: ["core", "wow"], layout: "lab" },
  { id: "19-deepfake-intro", title: "The Deepfake Threat", act: "III", flags: ["core"], layout: "concept" },
  { id: "20-video-shock", title: "Video Shock", act: "III", flags: ["core", "wow"], layout: "shock" },
  { id: "21-rag-concept", title: "RAG / Document Chat", act: "IV", flags: ["core"], layout: "concept" },
  { id: "22-rag-lab", title: "RAG Lab (NotebookLM)", act: "IV", flags: ["core", "lab"], layout: "lab" },
  { id: "23-dpdp-rules", title: "DPDP Act & IT Rules", act: "IV", flags: ["core"], layout: "checklist" },
  { id: "24-sgi-data", title: "SGI Data Handling", act: "IV", flags: ["core"], layout: "checklist" },
  { id: "25-red-lines", title: "The Red Lines", act: "IV", flags: ["core"], layout: "checklist" },
  { id: "26-future-ready", title: "Future Ready", act: "V", flags: ["core"], layout: "concept" },
  { id: "27-resources", title: "Resources & QR", act: "V", flags: ["core"], layout: "title" },
  { id: "28-closing", title: "Closing Quote", act: "V", flags: ["core"], layout: "quote" },
]

const dir = path.join(__dirname, '../content/scenes')
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

scenes.forEach((s, idx) => {
  const filename = `${String(idx+1).padStart(2, '0')}-${s.id.split('-').slice(1).join('-') || s.id}.json`
  const data = {
    id: s.id,
    title: s.title,
    act: s.act,
    flags: s.flags,
    layout: s.layout,
    content: {
      headline: s.title,
      body: "Placeholder content for " + s.title,
      bullets: ["Point 1", "Point 2", "Point 3"]
    }
  }
  fs.writeFileSync(path.join(dir, filename), JSON.stringify(data, null, 2))
})

console.log('28 scenes generated.')
