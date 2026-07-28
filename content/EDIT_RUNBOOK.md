# Content edit runbook (30-second changes)

## Change a prompt
1. Edit the JSON under `content/prompts/...`
2. Save — refresh the Playground / scene.
3. Ensure `promptText` is the **full** prompt (no trailing `...`).

## Change Scene 20 live video script
1. Edit `content/scenes/20-video-shock.json` → `content.body` (the spoken script).
2. Save and refresh.
3. On stage: **Copy script** → **Open HeyGen/Runway** (Wi‑Fi). The site does not play the video.

## Change tools / URLs
1. Edit `content/tools.json`.

## Change speaker notes
1. Edit `content/notes/<scene-id>.md`.
2. Ensure prebuild copies notes to `public/notes/` before production build (`pnpm build`).

## Not used anymore
- Offline backup paths / `public/backups` demo packs are **not** a product requirement.
- Do not add BackupViewer / `B` key flows.
