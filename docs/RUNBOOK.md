# Workshop runbook (Wi‑Fi venue)

**Assumption:** Reliable Wi‑Fi is available. Live demos use external AI tools in a second browser window. The site does **not** ship an offline media player or USB-offline demo path as a product requirement.

## Live demo pattern

1. Workshop site on the projector.
2. Press **Copy** / open Demo Tray (`D`) → tool opens with script/prompt copied.
3. Paste/run in ChatGPT, Claude, Gemini, HeyGen, NotebookLM, etc.
4. Mirror or switch fullscreen when you want the room to see the result.

## If a specific tool is blocked

- Switch to an alternate tool from Demo Tray / Playground (e.g. Claude instead of ChatGPT, Runway instead of HeyGen).
- Or narrate with a screenshot you prepared personally — optional, not a built-in site feature.

## If you lose your place

- Press `G` for overview grid and jump.
- Press `P` for presenter notes.

## Live AI video (Scene 20)

- Website = script + “Open HeyGen/Runway” only.
- Video generation happens in the external tool.
- Always disclose synthetic/AI-generated media; no unauthorized likenesses.

## Static export / Vercel

- Deploy to Vercel for the session URL.
- `pnpm build` static `out/` is optional convenience — **not** required for offline demos.
