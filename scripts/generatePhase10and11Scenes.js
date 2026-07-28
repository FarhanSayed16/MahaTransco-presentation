const fs = require('fs')
const path = require('path')

const scenes = [
  // Phase 10
  { id: "18-image", title: "Instant Image", act: "III", flags: ["core", "wow"], layout: "image-generation", content: { headline: "Instant Imagery", body: "Photorealistic generations in seconds." } },
  { id: "19-voice", title: "Instant Voice", act: "III", flags: ["optional"], layout: "voice-generation", content: { headline: "Instant Voice", body: "Cloning from a 30-second sample." } },
  { id: "20-video-shock", title: "Video Shock", act: "III", flags: ["core", "shock"], layout: "video-shock", content: { headline: "Hyper-Realistic Synthetic Video", body: "The ease of generating synthetic media necessitates strict governance." } },
  
  // Phase 11
  { id: "21-rag-explainer", title: "RAG Explainer", act: "IV", flags: ["core"], layout: "rag-explainer", content: { headline: "Retrieval-Augmented Generation", body: "Grounding AI in facts." } },
  { id: "22-hallucination-clinic", title: "Hallucination Clinic", act: "IV", flags: ["core"], layout: "hallucination-clinic", content: { headline: "Hallucination Clinic", body: "Confident but wrong vs Grounded and cited." } },
  { id: "23-dpdp-tiers", title: "DPDP Tiers", act: "IV", flags: ["core", "lab"], layout: "dpdp-tiers", content: { headline: "Data Sensitivity Tiers", body: "Classifying documents before uploading." } },
  { id: "24-it-rules", title: "IT Rules", act: "IV", flags: ["core"], layout: "it-rules", content: { headline: "Synthetic Media Governance", body: "Adhering to IT Rules 2021." } },
  { id: "25-deepfake-drill", title: "Deepfake Drill", act: "IV", flags: ["core", "lab"], layout: "deepfake-drill", content: { headline: "Deepfake Drill", body: "SOP for suspected synthetic media." } },
]

const dir = path.join(__dirname, '../content/scenes')

const oldFiles = fs.readdirSync(dir).filter(f => {
    const num = parseInt(f.substring(0,2), 10);
    return num >= 18 && num <= 25;
});
oldFiles.forEach(f => fs.unlinkSync(path.join(dir, f)));

scenes.forEach((s, idx) => {
  const filename = `${String(idx+18).padStart(2, '0')}-${s.id.split('-').slice(1).join('-') || s.id}.json`
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

console.log('Scenes 18-25 regenerated.')
