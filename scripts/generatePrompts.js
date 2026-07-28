const fs = require('fs')
const path = require('path')

const prompts = [
  { id: "p01", title: "Power shutdown advisory", promptText: "Draft a public safety advisory regarding a scheduled power shutdown...", toolId: "chatgpt", category: "Writing", type: "lab" },
  { id: "p02", title: "Meeting to decision minutes", promptText: "Convert this transcript into formal decision minutes...", toolId: "claude", category: "Writing", type: "lab" },
  { id: "p03", title: "D.O. tone rewrite", promptText: "Rewrite this internal memo in the tone of a formal D.O. letter...", toolId: "claude", category: "Writing", type: "lab" },
  { id: "p04", title: "Simplify to Class-10 reading level", promptText: "Simplify this technical transformer manual to an 8th-grade reading level...", toolId: "chatgpt", category: "Writing", type: "lab" },
  { id: "p05", title: "Bilingual EN+Marathi outline", promptText: "Generate an outline for the infrastructure project in both English and Marathi...", toolId: "chatgpt", category: "Translation", type: "lab" },
  { id: "p06", title: "3-minute speaking notes", promptText: "Convert this 20-page PDF report into 3-minute speaking notes...", toolId: "claude", category: "Writing", type: "lab" },
  { id: "p07", title: "RTI-style FAQ", promptText: "Generate an RTI-style FAQ from this public circular...", toolId: "perplexity", category: "Research", type: "lab" },
  { id: "p08", title: "Factual scrub", promptText: "Cross-reference the claims in this text with factual data...", toolId: "perplexity", category: "Research", type: "lab" },
  { id: "p09", title: "Research query", promptText: "Research the latest guidelines for high-voltage transmission lines...", toolId: "perplexity", category: "Research", type: "lab" },
  { id: "p10", title: "Image prompt - Substation", promptText: "A photorealistic image of a modern electrical substation at sunset...", toolId: "midjourney", category: "Media", type: "lab" },
  { id: "p11", title: "Image prompt - Engineer", promptText: "An electrical engineer inspecting a transformer...", toolId: "midjourney", category: "Media", type: "lab" },
  { id: "p12", title: "Video script prompt", promptText: "Write a 30-second script for an AI avatar explaining safety guidelines...", toolId: "heygen", category: "Media", type: "lab" },
  { id: "p13", title: "DPDP classification", promptText: "Analyze this dataset schema and flag any fields that violate DPDP rules...", toolId: "chatgpt", category: "Safety", type: "lab" },
  { id: "p14", title: "Data extraction", promptText: "Extract the tender values and dates from this unstructured text...", toolId: "claude", category: "Data", type: "lab" },
  { id: "p15", title: "Meeting Agenda", promptText: "Create an agenda for a 1-hour board meeting based on these topics...", toolId: "chatgpt", category: "Meetings", type: "lab" },
  { id: "p16", title: "Citizen Complaint Response", promptText: "Draft an empathetic response to this citizen complaint...", toolId: "claude", category: "Citizen", type: "lab" },
]

prompts.forEach((p) => {
  const folderMap = {
    "Writing": "official-writing",
    "Translation": "translation",
    "Research": "research",
    "Media": "media-image",
    "Safety": "safety",
    "Data": "data",
    "Meetings": "meetings",
    "Citizen": "citizen"
  }
  const folder = folderMap[p.category] || "official-writing"
  const filepath = path.join(__dirname, '../content/prompts', folder, `${p.id}.json`)
  fs.writeFileSync(filepath, JSON.stringify(p, null, 2))
})

console.log("16 Prompts generated.")
