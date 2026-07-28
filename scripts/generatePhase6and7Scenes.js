const fs = require('fs')
const path = require('path')

const scenes = [
  // Phase 06 - Act I
  { id: "01-opening", title: "AI as a Digital Assistant for Administrative Leadership", act: "I", flags: ["core"], layout: "title", content: { headline: "AI as a Digital Assistant for Administrative Leadership", body: "Mahatransco Interactive AI Workshop", speaker: "Akshay Ridlan" } },
  { id: "02-promise", title: "The Promise", act: "I", flags: ["core"], layout: "concept", content: { headline: "The Promise", body: "A new era of administrative efficiency powered by AI." } },
  { id: "03-pillars", title: "Three Pillars", act: "I", flags: ["core"], layout: "pipeline", content: { headline: "Three Pillars of AI", body: "Specialized AI Matrix | Deterministic Control | Governance" } },
  { id: "04-ai-not-app", title: "AI is not one app", act: "I", flags: ["core"], layout: "concept", content: { headline: "AI is not one app", body: "It's a category of tools covering Writing, Research, Data, Image, Video, Voice." } },
  { id: "05-tools-wall", title: "Tools Wall", act: "I", flags: ["core"], layout: "tools-wall", content: { headline: "The AI Tools Wall", body: "Explore the different tools available today." } },

  // Phase 07 - Act II
  { id: "06-generative-ai", title: "What is Generative AI", act: "II", flags: ["core"], layout: "concept", content: { headline: "What is Generative AI?", body: "An Input -> Model -> Output loop that creates novel text, image, and audio." } },
  { id: "07-llm-vs-slm", title: "LLM vs SLM", act: "II", flags: ["core"], layout: "compare", content: { headline: "Where does the data go?", body: "Cloud LLMs vs Local SLMs (Small Language Models)" } },
  { id: "08-transformer-intuition", title: "Transformer intuition", act: "II", flags: ["core"], layout: "concept", content: { headline: "Transformer Intuition", body: "4 steps to understanding how it works" } },
  { id: "09-token-lab", title: "Token Lab", act: "II", flags: ["core", "lab"], layout: "token-lab", content: { headline: "Tokenization Lab", body: "How AI sees words." } },
  { id: "10-context-window", title: "Context Window Meter", act: "II", flags: ["core"], layout: "concept", content: { headline: "Context Window Meter", body: "8K to 2M tokens" } },
  { id: "11-prompt-methods", title: "Prompt methodologies", act: "II", flags: ["core"], layout: "prompt-methods", content: { headline: "Prompt Methodologies", body: "Step-by-step approach to prompting." } },
  { id: "12-weak-vs-enterprise", title: "Weak vs Enterprise", act: "II", flags: ["core"], layout: "compare", content: { headline: "Weak vs Enterprise Prompting", body: "A poorly written prompt vs a highly structured one." } },
]

const dir = path.join(__dirname, '../content/scenes')

// Delete old 01 to 12 files to avoid duplicates with old names
const oldFiles = fs.readdirSync(dir).filter(f => {
    const num = parseInt(f.substring(0,2), 10);
    return num >= 1 && num <= 12;
});
oldFiles.forEach(f => fs.unlinkSync(path.join(dir, f)));

scenes.forEach((s, idx) => {
  const filename = `${String(idx+1).padStart(2, '0')}-${s.id.split('-').slice(1).join('-') || s.id}.json`
  const data = {
    id: s.id,
    title: s.title,
    act: s.act,
    flags: s.flags,
    layout: s.layout,
    content: s.content
  }
  fs.writeFileSync(path.join(dir, filename), JSON.stringify(data, null, 2))
})

console.log('Scenes 1-12 regenerated.')
