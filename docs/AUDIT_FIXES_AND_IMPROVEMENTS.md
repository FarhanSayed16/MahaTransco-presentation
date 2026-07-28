# AUDIT: Fix Plan Status (Phases 01–17)

**Last updated:** 2026-07-27 (implementation pass complete)  
**Related:** `MASTER_PLAN.md` · `MASTER_CHECKLIST.md`

---

## Short answer

**Core audit gaps from Waves A–C are fixed in code.**  
Build passes (`pnpm validate` + `pnpm build`). Remaining items are optional polish (logo asset, production QR image after deploy, dual-screen `/presenter`).

---

## Status legend

| Tag | Meaning |
|---|---|
| **DONE** | Implemented |
| **CANCELLED** | Not required |
| **OPEN** | Still outstanding (optional / post-deploy) |

---

# Fixed this pass

| ID | Item | Status |
|---|---|---|
| P0-1 | Full prompts (18, no `...`) | **DONE** |
| P0-2 | Core scene copy (28 scenes) | **DONE** |
| P0-3 | Overview real titles + index | **DONE** |
| P0-4 | Export Pack MD + resources files | **DONE** (QR = link until prod URL) |
| P0-5 | Interactive labs (Token, methods, DPDP, Deepfake, compare, writing, persona, image, RAG, hallucination, tools wall) | **DONE** |
| P1-1 | Presenter polish (panic, notes overlay N, demo tray extended) | **DONE** |
| P1-2 | Profile filter drives nav | **DONE** |
| P1-3 | Hash `#scene-id` | **DONE** |
| P1-4 | `pnpm validate` | **DONE** |
| P1-5 | Enterprise scenarios + PromptBuilder | **DONE** |
| P1-6 | Speaker notes rewritten | **DONE** |
| P1-8 | Reduced motion | **DONE** |
| P2-1 | Package rename | **DONE** |
| P2-2 | Prettier config + format script | **DONE** |
| P2-3 | NavChrome real titles | **DONE** |
| A* | Offline cancelled; Scene 20 launchpad; DemoTray bug | **DONE** (prior) |

---

# Still open (non-blocking)

| ID | Item | Notes |
|---|---|---|
| P1-7 | Brand logo file | Text title works; drop logo in `public/brand/` when available |
| P1-9 | Projector QA live | Run once on venue projector |
| P0-4 QR image | Replace text URL with QR after Vercel deploy | |
| P3-1 | `/presenter` dual-screen | Optional |
| P2-5 | Empty folder cleanup | Cosmetic |

---

# How to verify

```bash
pnpm validate
pnpm build
pnpm dev
```

Keyboard: `Space` next · `G` overview · `P` presenter · `N` notes · `D` demo tray · `#20-video-shock` deep link

Playground: `/playground` → Export Pack (MD)

---

## Bottom line

Workshop is **implementation-complete** for Wi‑Fi live demos. Do a presenter dry run on the projector before the event; add logo/QR when you have production URL.
