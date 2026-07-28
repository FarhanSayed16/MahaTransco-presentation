const fs = require('fs');
const path = require('path');

const scenesDir = path.join(__dirname, '../content/scenes');
const notesDir = path.join(__dirname, '../content/notes');

if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir, { recursive: true });
}

const scenes = fs.readdirSync(scenesDir).filter(f => f.endsWith('.json'));

scenes.forEach(file => {
  const content = JSON.parse(fs.readFileSync(path.join(scenesDir, file), 'utf-8'));
  const id = content.id;
  
  const markdown = `# ${content.title}

## Objective
*Briefly explain the core takeaway for this scene.*

## Talking Points
- **Point 1**: Establish context for ${content.title}.
- **Point 2**: Explain the core mechanism or concept.
- **Point 3**: Relate back to the MahaTransco administrative use-case.

## Actions / Hotkeys
- Press \`Space\` to advance when finished.
${content.flags.includes('wow') || content.flags.includes('shock') ? "- Press `D` to open the Demo Tray if live generation is needed.\n- Press `B` for offline backup if the network fails." : ""}

---
*Suggested time allocation: ~3 minutes*
`;

  fs.writeFileSync(path.join(notesDir, `${id}.md`), markdown);
});

console.log(`Enriched notes for ${scenes.length} scenes.`);
