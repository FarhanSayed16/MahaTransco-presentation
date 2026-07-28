const fs = require('fs')
const path = require('path')

const scenes = [
  { id: "26-officer-playbook", title: "Officer OS Playbook", act: "V", flags: ["core"], layout: "officer-playbook", content: { headline: "The Officer Operating System", body: "6-step standard operating procedure." } },
  { id: "27-resource-pack", title: "Resource Pack", act: "V", flags: ["core"], layout: "resource-pack", content: { headline: "Resource Pack", body: "Scan to download." } },
  { id: "28-closing", title: "Closing", act: "V", flags: ["core"], layout: "quote", content: { headline: "AI will not replace officers...", body: "...officers using AI will replace officers who don't." } }
]

const dir = path.join(__dirname, '../content/scenes')

const oldFiles = fs.readdirSync(dir).filter(f => {
    const num = parseInt(f.substring(0,2), 10);
    return num >= 26 && num <= 28;
});
oldFiles.forEach(f => fs.unlinkSync(path.join(dir, f)));

scenes.forEach((s, idx) => {
  const filename = `${String(idx+26).padStart(2, '0')}-${s.id.split('-').slice(1).join('-') || s.id}.json`
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

console.log('Scenes 26-28 regenerated.')
