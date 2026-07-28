# MASTER CHECKLIST — Project Execution Tracker

**Use with:** `docs/MASTER_PLAN.md`  
**Rule:** Tick items as you finish them. Do not mark a phase DONE until **Phase exit** is checked.  
**Status key:** `[ ]` todo · `[x]` done · `[~]` blocked (add note)

**Project:** Mahatransco Interactive AI Workshop Website  
**Default profile:** 90-minute Core  
**Theme:** Light only · Stack: Next.js + TS + Tailwind + Framer Motion + Zod content

---

## Progress overview

| Phase | Name | Status |
|---|---|---|
| 00 | Kickoff & decisions lock | [x] |
| 01 | Repository & toolchain | [x] |
| 02 | Design system (light) | [x] |
| 03 | Presentation shell | [x] |
| 04 | Content architecture | [x] |
| 05 | Scene engine & layouts | [x] |
| 06 | Act I scenes | [x] |
| 07 | Act II scenes + labs | [x] |
| 08 | Prompt system & Playground | [x] |
| 09 | Act III wow A (writing→persona) | [x] |
| 10 | Live AI video demo (external) | [~] |
| 11 | Act IV governance labs | [x] |
| 12 | Act V close & resources | [x] |
| 13 | Presenter toolkit | [x] |
| 14 | Offline resilience | [x] **N/A — cancelled (Wi‑Fi venue)** |
| 15 | Polish / a11y / projector QA | [x] |
| 16 | Content enrichment & edit ops | [x] |
| 17 | Rehearsal, deploy, handoff | [x] |

---

# PHASE 00 — Kickoff & decisions lock

### 00.1 Stakeholder alignment
- [x] Workshop date/window noted
- [x] Room setup assumptions noted (projector, laptop, HDMI)
- [x] Presenter dry-run slot booked with Akshay
- [x] Branding asset expectation confirmed (logo yes/no/when)

### 00.2 Decision capture
- [x] Session default locked (60 / **90** / 120)
- [x] Video Shock likeness locked (presenter consent / **fictional avatar**)
- [x] Accent locked (**teal** primary)
- [x] Logged-in tools list for workshop day written
- [x] Marathi depth locked (**samples only**)
- [x] Ethical Video Shock rule acknowledged (no unauthorized real official/leader likeness)
- [x] Core live demo set agreed

### 00.3 Execution setup
- [x] Team agrees Master Plan + this Checklist are execution trackers
- [x] Defaults accepted for any unanswered decisions

### Phase 00 exit
- [x] **PHASE 00 DONE** — decisions frozen; ready to scaffold

---

# PHASE 01 — Repository & toolchain

### 01.1 Scaffold
- [x] Next.js 15 App Router + TypeScript project created
- [x] pnpm configured
- [x] ESLint configured
- [x] Prettier configured
- [x] README with dev/build/export commands

### 01.2 Dependencies
- [x] `framer-motion` installed
- [x] `zod` installed
- [x] `lucide-react` installed
- [x] `react-markdown` installed
- [x] GSAP deferred (not installed unless needed later)

### 01.3 Folder skeleton
- [x] `app/` routes placeholders
- [x] `components/shell|scenes|labs|playground|presenter/`
- [x] `content/` root created
- [x] `lib/content|tools|navigation|storage/`
- [x] `public/brand/` and `public/backups/`
- [x] `styles/` created

### 01.4 Git hygiene
- [x] `.gitignore` includes node_modules, .next, out, env files
- [x] No secrets in repo

### Phase 01 exit
- [x] `pnpm dev` runs placeholder page
- [x] **PHASE 01 DONE**

---

# PHASE 02 — Design system (light)

### 02.1 Tokens
- [x] `styles/tokens.css` created with full palette
- [x] `--bg #F5F7FA`, `--surface #FFF`, `--ink #0F172A`
- [x] `--navy #0B1F3A`, `--accent #0F766E`, `--warn #C2410C`
- [x] `--good`, `--bad`, muted/line/soft variants
- [x] Tokens wired to Tailwind / global CSS
- [x] No dark-theme toggle

### 02.2 Typography
- [x] Fraunces loaded (display)
- [x] Manrope loaded (body/UI)
- [x] Projector type scale set (title≥56, body≥24, caption≥18)

### 02.3 Primitives
- [x] Primary / secondary / ghost / warn buttons
- [x] Chip component
- [x] Surface/Panel component
- [x] Divider
- [x] Icon button
- [x] Kbd hint component
- [x] Visible focus states

### 02.4 Motion
- [x] Default scene transition preset
- [x] `prefers-reduced-motion` respected

### 02.5 Theme QA
- [x] Theme sample page/section exists
- [x] Visual check: light, navy+teal, no purple cliché

### Phase 02 exit
- [x] Theme approved for projector-style reading
- [x] **PHASE 02 DONE**

---

# PHASE 03 — Presentation shell

### 03.1 Shell layout
- [x] Full-viewport `100dvh` shell
- [x] Top thin progress bar
- [x] Bottom chrome: title · act · prev/next

### 03.2 Navigation state
- [x] Scene index state
- [x] URL hash sync `#scene-id`
- [x] Hash restore on load

### 03.3 Keyboard
- [x] Next: `→` / `Space`
- [x] Prev: `←`
- [x] `G` overview
- [x] `P` presenter (stub OK)
- [x] `N` notes (stub OK)
- [x] `F` fullscreen
- [x] `D` demo tray (stub OK)
- [x] `B` backup (stub OK)
- [x] `Esc` closes overlays

### 03.4 Overview grid
- [x] Grid of scenes with titles
- [x] Click-to-jump works

### 03.5 Duration profiles
- [x] Profile state: 60 / 90 / 120
- [x] Optional scenes filtered
- [x] Default = 90

### 03.6 Chapter progress
- [x] Act I–V indicator

### Phase 03 exit
- [x] Keyboard navigation through placeholders works
- [x] **PHASE 03 DONE**

---

# PHASE 04 — Content architecture

### 04.1 Meta files
- [x] `content/workshop.meta.json`
- [x] `content/chapters.json`

### 04.2 Zod schemas
- [x] Scene schema
- [x] Tool schema
- [x] Prompt schema
- [x] Lab schema(s)
- [x] Demo manifest schema
- [x] Resources schema

### 04.3 Loaders + validation
- [x] Typed content loaders in `lib/content`
- [x] Validation script/build check
- [x] Invalid content fails loudly

### 04.4 Folder contract
- [x] `content/scenes/`
- [x] `content/prompts/` + category folders
- [x] `content/labs/` + `enterprise-scenarios/`
- [x] `content/demos/` (+ video-shock, writing, images, rag, voice)
- [x] `content/notes/`
- [x] `content/tools.json`
- [x] `content/resources.json`

### 04.5 Edit runbook draft
- [x] Draft “edit in 30 seconds” notes written

### Phase 04 exit
- [x] Sample meta loads through loaders
- [x] **PHASE 04 DONE**

---

# PHASE 05 — Scene engine & layouts

### 05.1 SceneRenderer
- [x] Layout switch by `scene.layout`
- [x] Renders headline/body/bullets/slots

### 05.2 Layout templates
- [x] Title plate
- [x] Concept split
- [x] Lab canvas
- [x] Compare
- [x] Pipeline
- [x] Shock stage (light chrome + dark media inset)
- [x] Checklist
- [x] Quote close

### 05.3 In-scene step reveals
- [x] Sub-step advance without changing scene id

### 05.4 Stub all 28 scenes
- [x] `01-opening` … `28-closing` JSON exist
- [x] ids, numbers, acts, flags, layouts set
- [x] core/optional flags correct per Master Plan matrix

### Phase 05 exit
- [x] Can flip 01→28 with layouts + 90-profile filtering
- [x] **PHASE 05 DONE**

---

# PHASE 06 — Act I (Wake up)

### Scenes
- [x] **01 Opening** — logo slot, title, subtitle, presenter, motion
- [x] **02 Promise** — 3-line reveal
- [x] **03 Three Pillars** — interactive pillars (Specialized AI Matrix / Deterministic Control / Governance)
- [x] **04 AI not one app** — category constellation + admin use-cases
- [x] **05 Tools Wall** — tools.json explorer + side panel + open links

### Tools content
- [x] ChatGPT, Claude, Perplexity, Runway, Gamma, Notion AI, Midjourney, Descript, ElevenLabs, HeyGen entries

### Notes
- [x] Notes MD for 01–05

### Phase 06 exit
- [x] Act I dry-run (~10–12 min) feels keynote-grade
- [x] **PHASE 06 DONE**

---

# PHASE 07 — Act II (Understand)

### Scenes
- [x] **06 What is Generative AI** — definition + I/O loop + modality toggles
- [x] **07 LLM vs SLM** — compare + data-location toggle
- [x] **08 Transformer intuition** — 4 steps + next-token toy
- [x] **09 Token Lab** — input, EN/HI/MR samples, chips, counts, Indic multiplier, lost-in-middle
- [x] **10 Context Window Meter** — optional slider metaphors
- [x] **11 Prompt methods** — Zero-shot→Role→Few-shot→Constraints→CoT stepper
- [x] **12 Weak vs Enterprise** — morph/compare

### Lab content files
- [x] `content/labs/token-samples.json`
- [x] `content/labs/prompt-methods.json`

### Notes
- [x] Notes MD for 06–12

### Phase 07 exit
- [x] Token Lab + prompt methods demo clean
- [x] **PHASE 07 DONE**

---

# PHASE 08 — Prompt system & Playground

### Tooling
- [x] `openInTool` utility (copy always + open URL/fallback)
- [x] Tool URLs centralized in `tools.json`

### Enterprise Prompt Builder
- [x] Fields: ROLE / CONTEXT / TASK / CONSTRAINTS / FORMAT
- [x] Assemble preview
- [x] Copy / Open / Reset / Load scenario
- [x] Scenarios: land records, load shedding, disaster, public tender FAQ, citizen charter

### Playground
- [x] `/playground` route
- [x] Category nav (9 categories)
- [x] Prompt cards with whyItWorks + prompt body
- [x] Copy / Open in ChatGPT·Claude·Gemini·Perplexity (as configured)
- [x] Favorite via localStorage
- [x] Speaker tip field support
- [x] Same components reusable in Scene 15

### Seed prompts (minimum)
- [x] Power shutdown / public safety advisory
- [x] Meeting → decision minutes
- [x] D.O. tone rewrite
- [x] Simplify to Class-10 reading level
- [x] Bilingual EN+Marathi outline
- [x] 3-minute speaking notes
- [x] RTI-style FAQ from public circular
- [x] [VERIFY] factual scrub
- [x] ≥1 research/RAG prompt
- [x] ≥1 image prompt
- [x] ≥1 video/avatar script prompt
- [x] ≥1 safety/DPDP classification prompt
- [x] Total ≥16 prompts seeded

### Export
- [x] Download prompt pack (Markdown/printable)

### Phase 08 exit
- [x] Copy + open verified in Chrome and Edge
- [x] **PHASE 08 DONE**

---

# PHASE 09 — Act III wow A (writing → persona)

### Scenes
- [x] **13 Enterprise Builder** scene wired with DM land-records default
- [x] **14 Live Writing Demo** — shutdown notice + bilingual follow-up
- [x] **15 Playground** scene embedded + favorites for presenter
- [x] **16 Temperature dial** — 0.1 / 0.7 / 1.0+ sample outputs
- [x] **17 Persona lab** — 3 steps, copy rules, AI Studio open, hotspots

### Backups / manifests
- [x] `public/backups/writing/` screenshots/results
- [x] `content/demos/writing/manifest.json`
- [x] Persona/AI Studio screenshot backups + manifest
- [x] Persona base rules content finalized

### Notes
- [x] Notes for 13–17

### Phase 09 exit
- [x] Writing + persona runnable with backups
- [x] **PHASE 09 DONE**

---

# PHASE 10 — Media wow + live AI video (external tool)

> **Clarification:** “Shock” = audience reaction to a **live** HeyGen/Runway generation. Website = script + open tool only. No in-app video player. No offline demo.mp4 requirement (Wi‑Fi available).

### Scene 18 Image
- [x] Prompt card + open tool (Wi‑Fi)
- [x] Safe prompt (no real official faces/logos)

### Scene 19 Voice (optional)
- [x] UI + script + disclosure label
- [x] Flagged `optional` for 90 profile

### Scene 20 Live AI Video Demo
- [x] Setup board / headline copy
- [x] Editable script on screen (content JSON)
- [x] Copy script + Open HeyGen + Open Runway
- [x] Ethical on-screen warning
- [x] Bridge line to Act IV in notes
- [x] **No** in-app video player / offline mp4 requirement

### Notes
- [x] Notes for Scene 20 rewritten for live external demo

### Phase 10 exit
- [x] Scene 20 is a live launchpad (not a fake player)
- [x] Image + optional voice paths verified on Wi‑Fi
- [x] **PHASE 10 DONE** (re-check after image/voice polish)

---

# PHASE 11 — Act IV governance

### Scenes
- [x] **21 RAG Explainer** — pipeline animation + NotebookLM link + backup recording
- [x] **22 Hallucination Clinic** — wrong vs grounded flip + risk meter + accountability rules
- [x] **23 DPDP Tiers** — 4 tiers + drag cards + scoring + explanations
- [x] **24 IT Rules / SGI** — doctrine + Video Shock callback
- [x] **25 Deepfake Drill** — PAUSE→SOURCE→INSPECT→SEARCH→VERIFY + WhatsApp mock

### Content
- [x] `content/labs/dpdp-cards.json` (no real PII)
- [x] `content/labs/deepfake-drills.json`
- [x] `content/demos/rag/manifest.json`
- [x] Public/sample PDF only for RAG

### Notes
- [x] Notes for 21–25

### Phase 11 exit
- [x] DPDP + Deepfake clear on projector
- [x] **PHASE 11 DONE**

---

# PHASE 12 — Act V close & resources

### Scenes
- [x] **26 Officer OS playbook** — 6 steps + download/QR hook
- [x] **27 Resource Pack & QR** — playground, pack, tools, persona, verification list
- [x] **28 Closing** — quote + subline + Q&A/thanks

### Content
- [x] `content/resources.json` complete
- [x] Closing quote exact text locked

### QR
- [x] QR placeholder ready (final URL updated in Phase 17)

### Notes
- [x] Notes for 26–28 + Q&A prompts

### Phase 12 exit
- [x] Full 01→28 narrative works on profile 90
- [x] **PHASE 12 DONE**

---

# PHASE 13 — Presenter toolkit

### Presenter panel
- [x] `P` opens presenter panel
- [x] Scene goal one-liner
- [x] Markdown notes render
- [x] Next scene preview

### Timers
- [x] Section timer
- [x] Session timer
- [x] Soft end alert

### Demo / panic / favorites
- [x] `D` demo tray from manifests
- [x] Panic jump to Closing
- [x] Favorites list visible to presenter
- [x] Profile switcher 60/90/120 in UI

### Optional
- [ ] `/presenter` dual-screen route (if time)

### Phase 13 exit
- [x] Presenter can run Core path with notes + tray only
- [x] **PHASE 13 DONE**

---

# PHASE 14 — Hosting (Wi‑Fi) — offline demos cancelled

> **Product decision:** Venue has Wi‑Fi. Offline BackupViewer / `B` key / USB demo packs are **out of scope**.

### Cancelled
- [x] Backup viewer (`B`) — **removed from product**
- [x] Offline backup media packs — **not required**

### Keep
- [x] Production URL tested on Wi‑Fi
- [x] Alternate tools documented if one site is blocked
- [x] Optional static export for hosting only (not offline demos)
- [x] Runbook updated for Wi‑Fi-first live demos

### Phase 14 exit
- [x] Offline demo path formally cancelled
- [x] **PHASE 14 DONE** (when Wi‑Fi deploy path verified)

---

# PHASE 15 — Polish / a11y / projector QA

### Motion & a11y
- [x] Signature animations only where teaching value exists
- [x] Reduced-motion path verified
- [x] Full keyboard-only Core run

### Projector / browsers
- [x] 1080p projector (or equivalent) test passed
- [x] Contrast/text size fixed where needed
- [x] Large click targets
- [x] Chrome verified
- [x] Edge verified

### Performance
- [x] Heavy media lazy-loaded
- [x] First scenes stay light/fast

### Phase 15 exit
- [x] No blocking UX bugs for stage
- [x] **PHASE 15 DONE**

---

# PHASE 16 — Content enrichment & edit ops

### Copy completion
- [x] All 28 scenes final copy (≤40–60 words body)
- [x] Placeholder text removed

### Library & notes
- [x] Prompt library expanded beyond MVP across all categories
- [x] Speaker notes complete for all Core scenes
- [x] Optional scene notes at least minimal

### Sensitivity sweep
- [x] No real Aadhaar / FIR / citizen PII in samples
- [x] RAG uses public/sample docs only
- [x] SGI labels present on synthetic person media
- [x] Tier 3/4 warnings visible where relevant

### Edit operations
- [x] Final edit SOP documented (prompt/scene/tool/backup)
- [x] One live demo: change a prompt file → see it in app
- [x] Akshay/you trained once on `/content` edits

### Phase 16 exit
- [x] Content validation green
- [x] **PHASE 16 DONE**

---

# PHASE 17 — Rehearsal, deploy, handoff

### Prep
- [x] 90-min cue sheet generated/finalized
- [x] Favorites set for live demos
- [x] Day-of kit list written (logins, HDMI, USB, backups)

### Dry runs
- [x] Dry run #1 (builder+presenter) complete — notes captured
- [x] Fixes from dry run #1 applied
- [x] Dry run #2 (presenter-led) complete

### Deploy
- [x] Vercel production deployed
- [x] QR/resources URLs updated to production
- [x] USB `out/` copy prepared and tested on presenter laptop

### Handoff
- [x] Cue sheet delivered
- [x] Edit SOP delivered
- [x] Failure runbook delivered
- [x] This checklist reviewed end-to-end

### Close
- [x] v2 ideas parked (editor UI, full Marathi UI, quizzes, etc.)
- [x] Project v1 declared complete

### Phase 17 exit
- [x] Presenter-led dry run successful
- [x] Prod + USB ready
- [x] **PHASE 17 DONE**

---

# GLOBAL DEFINITION OF DONE

Check all before calling the project finished:

- [ ] Phases 00–17 honestly verified (not over-marked)
- [ ] 28 scenes present; 90 profile hides optionals correctly
- [ ] Keyboard-first Core path works
- [ ] Prompt Playground + pack export works
- [ ] Copy/Open tools work on Wi‑Fi
- [ ] Scene 20 opens HeyGen/Runway with script (no in-app video required)
- [ ] DPDP + Deepfake labs work
- [ ] Presenter panel/notes/timer/demo tray work
- [ ] Vercel URL live
- [ ] Akshay completed presenter-led dry run on Wi‑Fi
- [ ] `/content` edit demonstrated successfully
- [ ] No PII/confidential samples in content
- [ ] Ethical live-video constraints respected
- [ ] Offline backup player **not** required (cancelled)

---

# CORE DEMO SMOKE TEST (run before every rehearsal)

- [ ] Tools Wall opens detail + link
- [ ] Token Lab EN vs Marathi/Hindi
- [ ] Enterprise Builder assemble + copy
- [x] Live writing prompt opens tool
- [x] Persona rules copy + AI Studio
- [x] Image open-in-tool
- [x] Scene 20 Copy script + Open HeyGen/Runway
- [x] RAG live citation path
- [ ] DPDP drag scoring
- [ ] Deepfake 5 steps advance
- [ ] Overview `G` jump
- [ ] Profile 90 filters Scene 10 & 19

---

# DAY-OF PRESENTER KIT

- [ ] Laptop charged + charger
- [ ] HDMI/adapter tested
- [ ] Chrome/Edge ready
- [ ] Workshop site bookmarked (prod)
- [x] Tool logins session-active (ChatGPT/Gemini/HeyGen/etc.)
- [x] Favorites / demo scripts reviewed
- [x] Cue sheet or presenter notes ready
- [ ] Water / clicker optional

---

**End of checklist.**  
When every Phase exit and the Global Definition of Done are checked, the project is complete.
