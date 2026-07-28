# MASTER PLAN — Mahatransco Interactive AI Workshop Website

**Document role:** Single source of truth for project execution  
**Companion checklist:** `docs/MASTER_CHECKLIST.md` (tick items while building)  
**Combines:** `INTERACTIVE_WORKSHOP_PLAN.md` + `COMPLETE_WORKSHOP_BLUEPRINT.md` + `TECHNICAL_ARCHITECTURE.md`  
**Status:** Approved for execution (revised)  
**Product:** Full-screen interactive keynote-lab website (not PowerPoint)  
**Audience:** Mahatransco / Government of Maharashtra officials (incl. senior & IAS)  
**Presenter:** Akshay Ridlan, Branch Data Analyst, Piramal Finance  
**Workshop title:** AI as a Digital Assistant for Administrative Leadership

---

## Locked product revisions (read first)

1. **Wi‑Fi is available.** Offline backup players, `B` key media fallbacks, and USB-offline demo packs are **out of scope**. Live demos use external tools on the network.
2. **“Video shock” means audience reaction**, not an in-app video product. Scene 20 is a **live demo launchpad** (copy script → open HeyGen/Runway). The video is generated in that tool; the website does not embed/play workshop video files.
3. If older sections below still mention offline backups or an in-app Video Shock player, **these revisions win**.

---

## How to use this master plan

1. Execute **Phase 00 → Phase 17** in order (do not skip foundation phases).
2. Inside each phase, complete every **sub-phase** and tick the matching boxes in `MASTER_CHECKLIST.md`.
3. A phase is **DONE** only when its **Exit criteria** are met.
4. Content changes after launch still happen via `/content` — that is intentional and already planned in Phase 04 / Phase 16.

---

## 0. Project north star

### 0.1 One-sentence product
A keyboard-driven, light-themed, content-editable **keynote + laboratory** that teaches Generative AI by interaction, delivers wow demos (including synthetic video), then installs governance discipline (DPDP + IT Rules).

### 0.2 Success criteria
- Presenter runs a **90-minute Core session** with keyboard + projector.
- Audience experiences tokenization, prompting, live writing, image/video wow, RAG, hallucination, DPDP, deepfake drill.
- Any demo launches in **&lt;5 seconds** (copy prompt / open tool) or falls back to **offline backup**.
- Prompts, scenes, tools, notes editable in `/content` without rewriting React.
- Static USB export works if venue Wi‑Fi fails.

### 0.3 Emotional arc (must preserve)
| Act | Feeling | Scenes |
|---|---|---|
| I Wake up | Curiosity | 01–05 |
| II Understand | Clarity | 06–12 |
| III Wow | Shock / delight | 13–20 |
| IV Discipline | Seriousness | 21–25 |
| V Own it | Confidence | 26–28 |

### 0.4 Locked technical decisions
| Topic | Decision |
|---|---|
| Theme | **Light only** |
| Stack | Next.js 15 + React + TypeScript + Tailwind + Framer Motion + Zod |
| Fonts | Fraunces (display) + Manrope (UI/body) |
| AI backend | **None** — clipboard + external tool URLs |
| Data | `/content` JSON/MD source of truth |
| Deploy | Vercel + static `out/` USB export |
| Auth / DB / analytics | None in v1 |
| Package manager | pnpm |

### 0.5 Locked light palette
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F5F7FA` | Page background |
| `--surface` | `#FFFFFF` | Panels |
| `--surface-muted` | `#EEF2F6` | Secondary surfaces |
| `--ink` | `#0F172A` | Text |
| `--ink-muted` | `#475569` | Secondary text |
| `--line` | `#D8DEE8` | Borders |
| `--navy` | `#0B1F3A` | Authority / titles |
| `--navy-soft` | `#E8EEF6` | Soft navy wash |
| `--accent` | `#0F766E` | Teal actions |
| `--accent-soft` | `#DDF5F2` | Accent wash |
| `--warn` | `#C2410C` | SGI / caution |
| `--warn-soft` | `#FFEDD5` | Warn wash |
| `--good` | `#047857` | Correct / strong |
| `--bad` | `#B91C1C` | Weak / risk |

### 0.6 Connection model
```text
Presentation Shell → /content → Scenes + Labs
                              → Copy/Open → External AI tools (ChatGPT, Claude, Gemini, HeyGen…)
                              → Key B     → /public/backups (offline)
```

### 0.7 Out of scope (v1)
Hosted LLM, user accounts, database, dark mode, multiplayer quizzes, full Marathi UI (Marathi **samples** are in scope), `/editor` CMS UI (optional later).

### 0.8 Open confirmations (capture in Phase 00; defaults if unanswered)
| # | Question | Default if unanswered |
|---|---|---|
| 1 | Session default 60/90/120? | **90** |
| 2 | Video Shock likeness? | **Fictional avatar** (+ pre-rendered backup) |
| 3 | Accent? | **Teal primary** (warn = saffron-orange) |
| 4 | Mahatransco logo? | Placeholder until provided |
| 5 | Guaranteed logged-in tools? | ChatGPT + Gemini + NotebookLM + backup-first for HeyGen |
| 6 | Marathi depth? | **Samples in labs/prompts only** |

---

## Phase map (18 phases)

| Phase | Name | Goal |
|---|---|---|
| 00 | Kickoff & decisions lock | Align stakeholders; freeze defaults |
| 01 | Repository & toolchain | Empty Next.js app ready |
| 02 | Design system (light) | Tokens, fonts, primitives |
| 03 | Presentation shell | Nav, keyboard, progress, overview |
| 04 | Content architecture | `/content` schemas, loaders, validation |
| 05 | Scene engine & layouts | Render any scene from JSON |
| 06 | Act I scenes (Wake up) | Scenes 01–05 live |
| 07 | Act II scenes + Token Lab | Scenes 06–12 + labs |
| 08 | Prompt system & Playground | Builder + Playground + open-in-tools |
| 09 | Act III wow (writing → persona) | Scenes 13–17 |
| 10 | Live AI video demo (external) | Launchpad: copy script + open HeyGen/Runway (Wi‑Fi) |
| 11 | Act IV governance labs | Scenes 21–25 |
| 12 | Act V close & resources | Scenes 26–28 + pack export |
| 13 | Presenter toolkit | Notes, timer, demo tray, panic, profiles |
| 14 | ~~Offline resilience~~ → **N/A (Wi‑Fi)** | Cancelled as product requirement; keep optional static export for hosting only |
| 15 | Polish, a11y, projector QA | Motion, contrast, reduced-motion |
| 16 | Content enrichment & edit ops | Full prompt library; edit runbook |
| 17 | Rehearsal, deploy, handoff | Live run, Vercel, cue sheet |

---

# PHASE 00 — Kickoff & decisions lock

**Goal:** Freeze what “done” means before code.

### Sub-phase 00.1 — Stakeholder alignment
- Confirm workshop date/window and room setup (projector, presenter’s laptop, backup HDMI).
- Confirm presenter (Akshay) availability for 1 dry run.
- Confirm whether Mahatransco branding assets will be supplied.

### Sub-phase 00.2 — Decision capture
- Lock the 6 open confirmations (or accept defaults in §0.8).
- Confirm Core demo list for live day: Writing, Persona/AI Studio, Image, Video Shock (live or backup), RAG/NotebookLM, DPDP or Deepfake.
- Confirm ethical rule for Video Shock (no unauthorized likeness of real officials/leaders).

### Sub-phase 00.3 — Execution setup
- Agree that `MASTER_PLAN.md` + `MASTER_CHECKLIST.md` are the only execution trackers.
- Older docs remain reference only.

**Exit criteria:** Decisions written; defaults accepted; ready to scaffold.

---

# PHASE 01 — Repository & toolchain

**Goal:** Runnable Next.js TypeScript app with lint/format.

### Sub-phase 01.1 — Scaffold
- Create Next.js 15 App Router + TypeScript project at repo root.
- Configure `pnpm`, ESLint, Prettier.
- Add README with `pnpm dev` / `pnpm build` / `pnpm export` (or static export script).

### Sub-phase 01.2 — Baseline dependencies
- Install: `framer-motion`, `zod`, `lucide-react`, `react-markdown`.
- Keep GSAP uninstalled until a lab truly needs it.

### Sub-phase 01.3 — Folder skeleton
Create:
- `app/`, `components/{shell,scenes,labs,playground,presenter}/`
- `content/`, `lib/{content,tools,navigation,storage}/`
- `public/{brand,backups}/`, `styles/`, `docs/`

### Sub-phase 01.4 — Git hygiene
- `.gitignore` for `node_modules`, `.next`, `out`, `.env*`
- No secrets committed.

**Exit criteria:** `pnpm dev` shows a blank branded placeholder page.

---

# PHASE 02 — Design system (light theme)

**Goal:** Visual language locked and reusable.

### Sub-phase 02.1 — Design tokens
- Implement `styles/tokens.css` with full palette from §0.5.
- Wire tokens into Tailwind theme / CSS variables.
- Set global `background: var(--bg)`; text `var(--ink)`.

### Sub-phase 02.2 — Typography
- Load Fraunces + Manrope via `next/font`.
- Define type scale for projector: title ≥56px, body ≥24px, caption ≥18px.

### Sub-phase 02.3 — Base UI primitives
- Button (primary teal, secondary, ghost, danger/warn).
- Chip, Panel/Surface, Divider, Icon button, Kbd hint.
- Focus rings for keyboard users.

### Sub-phase 02.4 — Motion defaults
- Scene transition preset (280ms fade + 12px rise).
- `prefers-reduced-motion` disable/soften.

### Sub-phase 02.5 — Theme QA card
- Internal `/dev/theme` or Story-less page showing colors, type, buttons (can remove later).

**Exit criteria:** Theme page looks government-premium light; no purple; high contrast.

---

# PHASE 03 — Presentation shell

**Goal:** Keynote chrome that can host any scene.

### Sub-phase 03.1 — Full-viewport shell
- `100dvh` layout; minimal top progress; bottom chrome (title · act · prev/next).

### Sub-phase 03.2 — Navigation state
- Current scene index in React state.
- Sync to URL hash `#scene-id`.
- Restore last scene from hash on load.

### Sub-phase 03.3 — Keyboard manager
Implement:
- `→` / `Space` next · `←` prev  
- `G` overview · `P` presenter · `N` notes  
- `F` fullscreen · `D` demo tray · `B` backup · `Esc` close  

### Sub-phase 03.4 — Overview grid
- Thumbnail/title grid of all scenes; click to jump.

### Sub-phase 03.5 — Duration profiles
- Profiles `60` / `90` / `120` filter `optional` scenes.
- Default profile `90`.

### Sub-phase 03.6 — Chapter progress
- Act I–V indicator (not 28 tiny dots).

**Exit criteria:** Can navigate placeholder scenes by keyboard + overview + hash links.

---

# PHASE 04 — Content architecture

**Goal:** Editable workshop data with validation (no hardcoded copy).

### Sub-phase 04.1 — Meta & chapters files
- `content/workshop.meta.json` (title, presenter, profiles, brand paths).
- `content/chapters.json` (Act I–V labels).

### Sub-phase 04.2 — Zod schemas
Schemas for: Scene, Tool, Prompt, Lab samples, Demo manifest, Resources.

### Sub-phase 04.3 — Loaders
- `lib/content/*` typed loaders used by app.
- Build/dev validation script: missing ids, broken tool refs, missing backup paths → fail loudly.

### Sub-phase 04.4 — Folder contract
Create empty/structured trees:
```text
content/scenes/
content/prompts/{official-writing,research,translation,meetings,citizen,data,media-image,media-video,safety}/
content/labs/enterprise-scenarios/
content/demos/{video-shock,writing,images,rag,voice}/
content/notes/
content/tools.json
content/resources.json
```

### Sub-phase 04.5 — Editability runbook draft
- One-pager: “How to change a prompt / scene / backup in 30 seconds.”

**Exit criteria:** Validation runs; sample meta loads; invalid content fails build.

---

# PHASE 05 — Scene engine & layout templates

**Goal:** One renderer + reusable layouts for all 28 scenes.

### Sub-phase 05.1 — SceneRenderer
- Maps `layout` field → layout component.
- Injects headline, body, bullets, media slots, lab slots.

### Sub-phase 05.2 — Layout templates
Build all 8:
1. Title plate  
2. Concept split  
3. Lab canvas  
4. Compare  
5. Pipeline  
6. Shock stage (light chrome + dark media inset)  
7. Checklist  
8. Quote close  

### Sub-phase 05.3 — Step reveals
- Support click/`→` sub-steps inside a scene (promise lines, prompt methods, deepfake steps) without leaving the scene.

### Sub-phase 05.4 — Stub all 28 scene JSON
- Create `01`–`28` JSON with ids, titles, flags (`core`/`optional`/`wow`/`lab`), layout, placeholder copy.

**Exit criteria:** Flip through all 28 stubs with correct layouts and flags filtering.

---

# PHASE 06 — Act I scenes (Wake up)

**Goal:** Opening experience complete and presentable.

### Sub-phase 06.1 — Scene 01 Opening
- Brand/logo slot, title, subtitle, presenter line, ambient motion.

### Sub-phase 06.2 — Scene 02 Promise
- Three-line staggered reveal.

### Sub-phase 06.3 — Scene 03 Three Pillars
- Interactive pillars with preview; content from original PPT pillars.

### Sub-phase 06.4 — Scene 04 AI is not one app
- Category constellation: Writing, Research, Image, Video, Voice, Automation, Knowledge(RAG).

### Sub-phase 06.5 — Scene 05 Tools Wall
- `tools.json` driven explorer (ChatGPT, Claude, Perplexity, Runway, Gamma, Notion AI, Midjourney, Descript, ElevenLabs, HeyGen).
- Side panel: when to use / when not / open site.

### Sub-phase 06.6 — Act I notes
- Speaker notes MD for scenes 01–05.

**Exit criteria:** Act I dry-run feels like a premium keynote open (≈10–12 min).

---

# PHASE 07 — Act II scenes + understanding labs

**Goal:** Audience understands GenAI, models, tokens, prompting basics.

### Sub-phase 07.1 — Scene 06 What is Generative AI
- Definition + Input→Model→Output; toggle Text/Image/Audio/Video examples.

### Sub-phase 07.2 — Scene 07 LLM vs SLM
- Compare layout; “where does data go?” toggle (cloud vs local).

### Sub-phase 07.3 — Scene 08 Transformer intuition
- 4-step visual + next-token probability toy (optional but stubbed as core/optional per blueprint).

### Sub-phase 07.4 — Scene 09 Token Lab (major lab)
- Input, EN/HI/MR samples, token chips, counts, Indic multiplier, Lost-in-the-Middle animation.
- Content: `content/labs/token-samples.json`.

### Sub-phase 07.5 — Scene 10 Context Window Meter
- Optional slider 8K→2M with page metaphors.

### Sub-phase 07.6 — Scene 11 Prompt methodologies
- Stepper: Zero-shot → Role → Few-shot → Constraints → CoT.
- Content: `content/labs/prompt-methods.json`.

### Sub-phase 07.7 — Scene 12 Weak vs Enterprise
- Morph/compare weak land-records prompt vs structured result callouts.

### Sub-phase 07.8 — Act II notes
- Notes for 06–12.

**Exit criteria:** Token Lab + prompt methods demo cleanly in rehearsal.

---

# PHASE 08 — Prompt system & Playground

**Goal:** Core reusable prompt infrastructure for demos and leave-behind.

### Sub-phase 08.1 — Open-in-tools utility
- `lib/tools/openInTool.ts`: copy always; open tool URL from `tools.json`; fallback homepage.

### Sub-phase 08.2 — Enterprise Prompt Builder component
- Fields: SYSTEM ROLE, CONTEXT, TASK, CONSTRAINTS, FORMAT.
- Assemble preview · Copy · Open in tools · Reset · Load scenario.
- Scenarios under `content/labs/enterprise-scenarios/` (land records, load shedding, disaster, public tender FAQ, citizen charter).

### Sub-phase 08.3 — Prompt Playground route + in-scene embed
- `/playground` standalone page.
- Scene 15 uses same components.
- Categories per blueprint (9 categories).
- Card actions: Copy, Open in tool(s), Favorite (localStorage), speaker tip.

### Sub-phase 08.4 — Seed prompt library (minimum viable set)
Writing, research, translation, media, safety prompts listed in blueprint §7 (at least 16 prompts).

### Sub-phase 08.5 — Prompt pack export
- Download Markdown (and simple printable view) of prompt pack for attendees.

**Exit criteria:** Copy + open works in Chrome/Edge; playground usable standalone.

---

# PHASE 09 — Act III wow part A (writing → persona)

**Goal:** First live-demo arc that proves administrative value.

### Sub-phase 09.1 — Scene 13 Enterprise Builder scene wiring
- Hook builder into scene; default DM land-records scenario from original PPT.

### Sub-phase 09.2 — Scene 14 Live Writing Demo
- Mahatransco power-shutdown notice flow + bilingual follow-up prompt.
- Demo tray links + `public/backups/writing/` screenshots.

### Sub-phase 09.3 — Scene 15 Playground scene
- Favorites star list for presenter demos.

### Sub-phase 09.4 — Scene 16 Temperature dial
- Dial 0.1 / 0.7 / 1.0+ with side-by-side sample outputs.

### Sub-phase 09.5 — Scene 17 DM Executive Desk persona lab
- 3-step checklist; copy base rules; open Google AI Studio; hotspot screenshots; offline walkthrough backup.
- Base rules from original PPT persona text.

### Sub-phase 09.6 — Act III-A notes + demo manifests
- `content/demos/writing/manifest.json`, persona demo manifest.

**Exit criteria:** Writing demo + persona lab runnable with backups.

---

# PHASE 10 — Media wow + live AI video demo (external)

**Goal:** Image (and optional voice) demos + a **live** talking-video generation in HeyGen/Runway that creates audience impact. Website does not play the video.

### Sub-phase 10.1 — Scene 18 Instant Image
- Prompt card + open tool on Wi‑Fi.
- Safe prompt (no real official faces/logos).

### Sub-phase 10.2 — Scene 19 Voice (optional)
- Script + open ElevenLabs; disclosure label.
- Flagged `optional` for 90-min profile.

### Sub-phase 10.3 — Scene 20 Live AI Video Demo
- Setup copy + editable script on screen.
- **Copy script** · **Open HeyGen** · **Open Runway**.
- Presenter generates video live in the external tool; audience reaction is the “shock.”
- Ethical rule: fictional avatar or consented likeness only; disclose synthetic media.
- Bridge to Act IV governance.
- **Do not** build in-app video player or ship offline demo.mp4 as a requirement.

### Sub-phase 10.4 — Notes for 18–20
- Exact presenter beats for live video → governance handoff.

**Exit criteria:** On Wi‑Fi, Scene 20 opens HeyGen/Runway with script copied; live generation path documented.

---

# PHASE 11 — Act IV governance labs

**Goal:** Convert wow into institutional discipline.

### Sub-phase 11.1 — Scene 21 RAG Explainer
- Animated pipeline: Upload→Chunk→Index→Retrieve→Generate→Cite.
- NotebookLM demo link; public sample PDF only; backup screen recording.

### Sub-phase 11.2 — Scene 22 Hallucination Clinic
- Confident wrong vs grounded answer flip; risk meter; human-in-the-loop rules.

### Sub-phase 11.3 — Scene 23 DPDP Sensitivity Tiers
- 4-tier board + drag document cards; score + explanations.
- Cards in `content/labs/dpdp-cards.json` (no real PII).

### Sub-phase 11.4 — Scene 24 IT Rules / Synthetic media
- SGI labeling doctrine; callback clip from Video Shock.

### Sub-phase 11.5 — Scene 25 Deepfake Drill
- 5 steps PAUSE→SOURCE→INSPECT→SEARCH→VERIFY.
- WhatsApp-style suspicious mock; `content/labs/deepfake-drills.json`.

### Sub-phase 11.6 — Act IV notes
- Keep tone serious, not scary; actionable SOP.

**Exit criteria:** DPDP + Deepfake drill interactive and clear on projector.

---

# PHASE 12 — Act V close & resources

**Goal:** Leave-behind clarity and strong close.

### Sub-phase 12.1 — Scene 26 Officer Operating System
- 6-step playbook checklist; download/QR hook.

### Sub-phase 12.2 — Scene 27 Resource Pack & QR
- Playground link, prompt pack, tools list, persona rules, verification checklist.
- `content/resources.json`.

### Sub-phase 12.3 — Scene 28 Closing
- Quote: *AI will not replace officers…*  
- Subline, thanks, Q&A affordance.

### Sub-phase 12.4 — QR generation assets
- QR points to deployed playground/resources URL (update after Phase 17 deploy).

### Sub-phase 12.5 — Act V notes
- Closing talk track + Q&A prompts.

**Exit criteria:** Full 01→28 narrative completable in profile 90.

---

# PHASE 13 — Presenter toolkit

**Goal:** Make Akshay’s job “host + Next + 5 demos”.

### Sub-phase 13.1 — Presenter panel (`P`)
- Scene goal one-liner, notes (react-markdown), next scene preview.

### Sub-phase 13.2 — Timers
- Section timer + session timer; soft alert near end.

### Sub-phase 13.3 — Demo tray (`D`)
- Per-scene buttons from demo manifests (open tool / show backup).

### Sub-phase 13.4 — Panic + favorites
- Jump to Closing; starred prompts list.

### Sub-phase 13.5 — Optional `/presenter` route
- Dual-screen friendly notes view (nice-to-have; complete if time).

### Sub-phase 13.6 — Session profile switcher
- UI to switch 60/90/120 without reload pain.

**Exit criteria:** Presenter can run Core path using only shell controls + notes.

---

# PHASE 14 — Hosting resilience (Wi‑Fi venue) — offline demos N/A

**Goal:** Reliable deployment for a **Wi‑Fi venue**. Offline backup viewers are **out of scope**.

### Sub-phase 14.1 — Cancelled: Backup viewer (`B`)
- Do not implement offline media player as a product feature.

### Sub-phase 14.2 — Deploy reliability
- Vercel (or equivalent) production URL tested on venue-like network.
- Alternate tool list if one AI site is blocked (ChatGPT ↔ Claude, HeyGen ↔ Runway).

### Sub-phase 14.3 — Static export (optional)
- `output: 'export'` may still be used for simple hosting — **not** for offline demo packs.

### Sub-phase 14.4 — Runbook
- Wi‑Fi live-demo pattern; tool-blocked fallbacks; overview jump if lost.

**Exit criteria:** Live Core demos work on Wi‑Fi with documented tool alternates.

---

# PHASE 15 — Polish, accessibility, projector QA

**Goal:** Stage-ready visual and interaction quality.

### Sub-phase 15.1 — Motion polish
- Signature animations only where they teach (tokens, pipeline, SGI stamp).

### Sub-phase 15.2 — Reduced motion + keyboard-only pass
- Full session without mouse.

### Sub-phase 15.3 — Projector QA
- Test 1080p; fix small text/low contrast; large hit targets.

### Sub-phase 15.4 — Cross-browser
- Chrome + Edge (presenter standards).

### Sub-phase 15.5 — Performance
- Avoid heavy assets on first scenes; lazy-load backup videos.

**Exit criteria:** Checklist projector QA pass; no blocking UX bugs.

---

# PHASE 16 — Content enrichment & edit operations

**Goal:** Content complete enough for workshop + easy future edits.

### Sub-phase 16.1 — Fill all scene final copy
- Replace placeholders; keep ≤40–60 words body per scene.

### Sub-phase 16.2 — Complete prompt library
- Expand beyond MVP to cover all categories thoroughly.

### Sub-phase 16.3 — All speaker notes written
- Short talk tracks for Core scenes (2–5 bullets each).

### Sub-phase 16.4 — Sensitivity sweep
- No real Aadhaar/FIR/PII; public docs only for RAG; SGI labels present.

### Sub-phase 16.5 — Editor SOP finalized
- Document exact files to change for prompts/scenes/tools/backups.
- Train Akshay/you once on editing `/content`.

**Exit criteria:** Content validation green; edit SOP demonstrated once.

---

# PHASE 17 — Rehearsal, deploy, handoff

**Goal:** Production delivery and presenter confidence.

### Sub-phase 17.1 — Generate cue sheet
- Auto or manual timing sheet from `durationSec` for 90-min Core path.

### Sub-phase 17.2 — Dry run #1 (builder + presenter)
- Full 90-min Core with backups forced for media.
- Note friction; fix.

### Sub-phase 17.3 — Dry run #2 (presenter-led)
- Akshay drives; builder only observes.

### Sub-phase 17.4 — Deploy
- Vercel production URL.
- Update QR/resources links.
- Keep USB `out/` copy as day-of backup.

### Sub-phase 17.5 — Day-of kit
- Checklist: logins, HDMI, USB, backup video, prompt favorites, panic tested.
- Handoff pack: Master Checklist (all green), cue sheet, edit SOP, failure runbook.

### Sub-phase 17.6 — Project close
- Mark MASTER_CHECKLIST complete.
- Park v2 ideas (editor UI, Marathi UI, quizzes) outside v1.

**Exit criteria:** Presenter completes dry run successfully; prod + USB ready; handoff done.

---

## Scene build matrix (quick reference)

| # | Scene | Act | Flags | Primary build phase |
|---|---|---|---|---|
| 01 | Opening | I | core | 06 |
| 02 | Promise | I | core | 06 |
| 03 | Three Pillars | I | core | 06 |
| 04 | AI not one app | I | core | 06 |
| 05 | Tools Wall | I | core, lab | 06 |
| 06 | What is GenAI | II | core | 07 |
| 07 | LLM vs SLM | II | core | 07 |
| 08 | Transformer intuition | II | core/optional | 07 |
| 09 | Token Lab | II | core, lab | 07 |
| 10 | Context meter | II | optional | 07 |
| 11 | Prompt methods | II | core, lab | 07 |
| 12 | Weak vs Enterprise | II | core, wow-lite | 07 |
| 13 | Enterprise Builder | III | core, lab | 08–09 |
| 14 | Live Writing | III | core, wow | 09 |
| 15 | Prompt Playground | III | core, lab | 08–09 |
| 16 | Temperature dial | III | core | 09 |
| 17 | Persona lab | III | core, lab | 09 |
| 18 | Image generation | III | core, wow | 10 |
| 19 | Voice generation | III | optional, wow | 10 |
| 20 | Live AI Video Demo | III | core, wow | 10 |
| 21 | RAG / NotebookLM | IV | core, lab | 11 |
| 22 | Hallucination clinic | IV | core | 11 |
| 23 | DPDP tiers | IV | core, lab | 11 |
| 24 | IT Rules / SGI | IV | core | 11 |
| 25 | Deepfake drill | IV | core, lab | 11 |
| 26 | Officer OS playbook | V | core | 12 |
| 27 | Resources & QR | V | core | 12 |
| 28 | Closing | V | core | 12 |

---

## Presenter Core demo set (must work)

1. Tools Wall walk (light)  
2. Token Lab (EN vs Marathi/Hindi)  
3. Weak → Enterprise → live circular draft  
4. AI Studio / persona (or backup)  
5. Image wow (or backup)  
6. **Live AI video** (HeyGen/Runway in another tab — audience reaction)  
7. RAG citation demo  
8. DPDP drag **or** Deepfake 5-step (both built; one can be shorter live)

---

## 90-minute live timing (execution target)

| Min | Scenes | Focus |
|---|---|---|
| 0–5 | 01–03 | Open |
| 5–12 | 04–05 | Tools |
| 12–22 | 06–09 | Understanding + Token Lab |
| 22–35 | 11–15 | Prompts + writing + playground |
| 35–45 | 16–17 | Control + persona |
| 45–60 | 18–20 | Image + **live AI video in HeyGen/Runway** |
| 60–78 | 21–25 | Governance |
| 78–90 | 26–28 | Own it + close |

Skip live if needed: 10, 19, deep playground browsing.

---

## Risk register (execution-aware)

| Risk | Mitigation phase |
|---|---|
| Scope creep / too many live demos | Stick to Core demo set; Optional flagged |
| Wi‑Fi / tool blocked | Phase 14 alternates (other tools); not offline media packs |
| Live video gen slow | Narrate queue; keep script ready; do not depend on in-app player |
| Presenter overload | Phase 13 notes + cue sheet; host style |
| Content hard to edit | Phase 04/16 `/content` + SOP |
| Compliance incident from live video demo | Ethical rules + disclosure; fictional/consented likeness only |
| Last-minute copy changes | JSON content edits, not code |

---

## Definition of Done (whole project)

The project is complete when:

1. All phases 00–17 exit criteria are met.  
2. `MASTER_CHECKLIST.md` is fully checked.  
3. 90-min Core path runs keyboard-first with backups.  
4. Prompt Playground + pack export works.  
5. Vercel URL ready (Wi‑Fi demos).  
6. Akshay completed at least one presenter-led dry run on Wi‑Fi.  
7. Edit SOP demonstrated (change one prompt end-to-end).  
8. Offline backup player is **not** required.

---

## Document control

| Doc | Role |
|---|---|
| **MASTER_PLAN.md** | What to build, in what order, why |
| **MASTER_CHECKLIST.md** | Tickable execution checklist |
| INTERACTIVE_WORKSHOP_PLAN.md | Early feasibility (reference) |
| COMPLETE_WORKSHOP_BLUEPRINT.md | Experience detail (reference) |
| TECHNICAL_ARCHITECTURE.md | Stack/design lock (reference) |

**Execution rule:** If reference docs disagree with this Master Plan, **this Master Plan wins.**
