const fs = require('fs')
const path = require('path')

const scenes = [
  { id: "13-enterprise-builder", title: "Enterprise Prompt Builder", act: "III", flags: ["core", "wow"], layout: "enterprise-builder", content: { headline: "Structured Enterprise Prompting", body: "Building predictable outcomes." } },
  { id: "14-live-writing-demo", title: "Live Writing Demo", act: "III", flags: ["core", "wow"], layout: "live-writing", content: { headline: "Live: Shutdown Notice & Follow-up", body: "Drafting an official shutdown notice." } },
  { id: "15-playground-embed", title: "Prompt Playground", act: "III", flags: ["core"], layout: "playground", content: { headline: "Prompt Playground", body: "Your library of verified prompts." } },
  { id: "16-temperature-dial", title: "Temperature Dial", act: "III", flags: ["core"], layout: "temperature-dial", content: { headline: "Controlling Creativity: Temperature", body: "How randomness affects outputs." } },
  { id: "17-persona-lab", title: "DM Executive Desk Persona", act: "III", flags: ["core", "lab"], layout: "persona-lab", content: { headline: "Persona Lab: Executive Desk", body: "Configuring system instructions." } }
]

const dir = path.join(__dirname, '../content/scenes')

const oldFiles = fs.readdirSync(dir).filter(f => {
    const num = parseInt(f.substring(0,2), 10);
    return num >= 13 && num <= 17;
});
oldFiles.forEach(f => fs.unlinkSync(path.join(dir, f)));

scenes.forEach((s, idx) => {
  const filename = `${String(idx+13).padStart(2, '0')}-${s.id.split('-').slice(1).join('-') || s.id}.json`
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

console.log('Scenes 13-17 regenerated.')
