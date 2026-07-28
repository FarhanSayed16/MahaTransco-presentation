# Complete Workshop Experience Blueprint

> **Execution docs (use these):** [`MASTER_PLAN.md`](./MASTER_PLAN.md) · [`MASTER_CHECKLIST.md`](./MASTER_CHECKLIST.md)  
> This file is retained as detailed experience reference. If anything conflicts, **Master Plan wins**.

**Product:** Interactive AI Workshop Website for Mahatransco / Government of Maharashtra  
**Presenter:** Akshay Ridlan (Piramal Finance)  
**Document type:** Full content, flow, design, wow-demo & editability blueprint  
**Related:** `docs/INTERACTIVE_WORKSHOP_PLAN.md` (build/feasibility). This file is the **what the audience will see and do**.

---

## 0. What this document decides

This is the master script for the website — not limited to the original 15 PPT slides. It defines:

1. The **emotional journey** (curiosity → understanding → wow → responsibility)
2. Every **scene** the presenter will show, in order
3. Exact **interactions**, demos, and shock moments
4. How the **UI looks and behaves**
5. How **you edit prompts, text, demos, and order** later without touching code
6. Offline / backup plan so the show never dies

**Design principle:** Officers should leave saying:  
*“I finally understand what this AI actually is — and I just saw what it can do in front of me.”*

---

## 1. Experience philosophy

### 1.1 One sentence product
A full-screen, keyboard-driven **keynote + laboratory**: teach AI by making the room *use* it, then teach them to *control* and *govern* it.

### 1.2 Emotional arc (critical)

| Act | Feeling | What happens |
|---|---|---|
| **Act I — Wake up** | Curiosity | “AI is not one ChatGPT box — it’s a toolkit.” |
| **Act II — Understand** | Clarity | Tokens, models, prompts become visible and simple |
| **Act III — Wow** | Shock / delight | Live writing, image, voice, **video of a person speaking** |
| **Act IV — Power with discipline** | Seriousness | Hallucinations, DPDP, deepfakes, IT Rules |
| **Act V — Own it** | Confidence | They leave with prompts, persona, and a method |

The **wow** is intentional — but never irresponsible. Every shock demo ends with a governance beat: *this power is why verification and law exist.*

### 1.3 Rules for every scene
- One job per scene (one headline, one idea)
- Prefer **show** over **tell**
- Max ~40–60 words of body text on screen at once
- Always have: **Presenter note**, **Live demo path**, **Offline backup**
- All editable copy lives in content files (see Section 9)

---

## 2. How the website works (system behaviour)

### 2.1 Modes

| Mode | Who | What |
|---|---|---|
| **Presentation mode** (default) | Audience on projector | Full-screen scenes, minimal chrome |
| **Presenter mode** (`P`) | Akshay | Notes, timer, next scene, demo links, panic jump |
| **Overview mode** (`G`) | Akshay | Thumbnail grid of all scenes — click to jump |
| **Playground mode** (`/` or menu) | Demo / attendees later | Standalone Prompt Playground (also shareable URL) |
| **Edit preview** (local only) | You while preparing | Content folder edits hot-reload |

### 2.2 Navigation
- `→` / `Space` / click Next → next scene  
- `←` / click Prev → previous scene  
- `G` → overview grid  
- `P` → presenter panel  
- `N` → toggle speaker notes overlay  
- `F` → browser fullscreen  
- `D` → open “Demo tray” for current scene  
- `B` → show offline backup for current scene  
- `Esc` → close overlays  
- URL deep links: `/#scene-token-lab`, `/#scene-video-shock`, etc.

### 2.3 Progress UI (always quiet)
- Thin top progress bar
- Bottom: scene title · chapter label · prev/next
- Chapter dots: Act I · II · III · IV · V (not 30 tiny dots)

### 2.4 Dual-window workshop pattern (recommended live setup)
1. **Window A — Workshop site** (projector)
2. **Window B — Live AI tools** (ChatGPT / Gemini / Claude / HeyGen / etc. on laptop; mirrored when needed)
3. Site always has **Copy Prompt** so you paste into Window B in 2 seconds
4. If network dies → press `B` → pre-recorded result plays on Window A

---

## 3. Design look & feel

### 3.1 Visual identity
**Name on screen:** *AI as a Digital Assistant for Administrative Leadership*  
**Mood:** Cabinet briefing × Apple Keynote × control-room clarity  
**Not:** startup purple, neon cyberpunk, comic illustrations, emoji walls

### 3.2 Color system
| Token | Use |
|---|---|
| Deep Navy `#0B1F3A` | Authority scenes, titles, closing |
| Cool Paper `#F7F8FA` | Teaching / lab scenes |
| Accent Teal `#0D9488` | Interactive focus, CTAs, live “pulse” |
| Saffron signal `#E07A3D` | Warnings, wow callouts, “shock” labels (sparingly) |
| Ink `#111827` | Body text on paper |
| Success / Danger | Structured prompt good vs weak; grounded vs hallucination |

### 3.3 Typography
- **Display:** Strong modern serif or distinctive sans for titles (e.g. Fraunces / Instrument Serif / similar — *not* Inter)
- **UI / body:** Clean geometric sans (e.g. Manrope / Satoshi / Geist)
- Projector minimums: Title ≥ 56px, body ≥ 24px, captions ≥ 18px

### 3.4 Motion language
- Scene enter: soft fade + slight rise (200–400ms)
- Labs: chips, meters, pipelines animate on interaction
- Wow scenes: slightly longer cinematic transitions
- Respect `prefers-reduced-motion`

### 3.5 Scene layout templates (reuse across chapters)
1. **Title plate** — full navy, huge typography  
2. **Concept split** — left text, right visual/lab  
3. **Lab canvas** — interaction dominates; text is toolbar  
4. **Compare** — two columns (LLM vs SLM, Weak vs Strong)  
5. **Pipeline** — horizontal animated steps  
6. **Shock stage** — dark, media center, warning strip  
7. **Checklist** — numbered steps, one active at a time  
8. **Quote close** — minimal navy + one sentence  

---

## 4. Full session map — every scene

**Total scenes:** 28 (flexible; chapters can be skipped via Overview)  
**Recommended live duration:** 90 minutes (short path marks scenes as *Core* vs *Optional*)

Legend: **Core** = always show · **Optional** = if time · **Wow** = intended gasp · **Lab** = hands-on / interactive

---

### ACT I — WAKE UP (Scenes 01–05)

#### Scene 01 — Opening Title  
**Type:** Core · Title plate  
**On screen:**
- Mahatransco mark (if approved) + workshop title  
- Subtitle: *AI as a Digital Assistant for The Administrative Officer*  
- Presenter: Akshay Ridlan · Branch Data Analyst, Piramal Finance  
**Interaction:** Ambient motion only; press Next to begin  
**Presenter says:** Welcome; this is not a PowerPoint — you will *use* AI today.  
**Editable:** `content/scenes/01-opening.json`

#### Scene 02 — The Promise  
**Type:** Core  
**On screen (3 lines only):**
1. Draft better official communication in minutes  
2. Research and summarise long policy files with citations  
3. Create images, voice, and video for citizen communication — safely  
**Interaction:** Three lines reveal one-by-one on click/`→`  
**Editable:** promise bullets in content file

#### Scene 03 — Agenda: Three Pillars  
**Type:** Core  
**Pillars (from original PPT):**
1. **Specialized AI Matrix** — right tool for the job  
2. **Deterministic Control** — prompts, tokens, local SLMs  
3. **Governance & Integrity** — DPDP Act 2023 + IT Rules 2026  
**Interaction:** Click a pillar → brief preview tooltip / jump later  
**Editable:** pillar titles + descriptions

#### Scene 04 — “AI is not one app”  
**Type:** Core  
**On screen:** Animated constellation of tool categories  
**Categories:** Writing · Research · Image · Video · Voice · Automation · Knowledge (RAG)  
**Interaction:** Hover/click category → 1 administrative use-case appears  
**Presenter goal:** Break the ChatGPT-only mental model  

#### Scene 05 — Tools Wall (“Save this”)  
**Type:** Core · Lab-lite  
**On screen:** Premium dark list (from your reference image), expandable:

| Tool | One-liner (default) | Admin angle |
|---|---|---|
| ChatGPT | Answers anything, instantly | Circulars, brainstorming, tone drafts |
| Claude | Your smartest coworker | Long docs, careful reasoning |
| Perplexity | Google, but it thinks | Policy research with sources |
| Runway | Hollywood in your browser | Training / awareness shorts |
| Gamma | Pitch decks in 60 seconds | Internal brief decks |
| Notion AI | Your second brain | Meeting notes → action points |
| Midjourney | Art without the artist | Campaign visuals / concept art |
| Descript | Delete words, not clips | Edit speech videos fast |
| ElevenLabs | Any voice, any language | Marathi/Hindi IVR / explainers |
| HeyGen | AI avatars that speak | Officer-style briefing videos |

**Interaction:** Click tool → side panel with “When to use / When not to use / Open site”  
**Editable:** `content/tools.json` (add/remove tools anytime)

---

### ACT II — UNDERSTAND (Scenes 06–12)

#### Scene 06 — What is Generative AI?  
**Type:** Core  
**Simple definition on screen:**  
*Software that creates new text, images, audio, or video from patterns learned in data — guided by your instructions (prompts).*  
**Visual:** Input → Model → Output loop animation  
**Interaction:** Toggle examples: Text / Image / Audio / Video  

#### Scene 07 — LLM vs SLM  
**Type:** Core · Compare  
**Left — LLM (GPT-4o, Claude, Gemini):** cloud, deepest reasoning, huge context, data leaves building  
**Right — SLM (Llama/Gemma/Phi class):** laptop/edge, air-gapped, sovereignty, best for sensitive local data  
**Interaction:** Toggle “Where does my data go?” animation (cloud vs local lock)  
**Key line:** *Architecture is a governance decision, not a fashion choice.*

#### Scene 08 — How a response is born (Transformer intuition)  
**Type:** Core · Optional deepen  
**On screen:** 4-step visual only  
1. Prompt arrives  
2. Broken into tokens  
3. Model predicts next token (probability)  
4. Stream of tokens = answer  
**Interaction:** “Generate next token” button shows probability bars for fake example words  
**Goal:** Officers understand “confident ≠ true”

#### Scene 09 — Token Lab  
**Type:** Core · Lab  
**UI:**
- Text box  
- Sample chips: English circular · Hindi DO · Marathi notice  
- Token chips light up  
- Counter: tokens · ~words · Indic multiplier (~2–3×)  
**Teaching beats:**
- Models read tokens, not “full words”
- Context window = working memory  
- Huge PDFs → don’t paste raw; use RAG / NotebookLM  
**Interaction:** “Lost in the Middle” button animates forgetting the start of a long doc  
**Editable samples:** `content/labs/token-samples.json`

#### Scene 10 — Context Window Meter  
**Type:** Optional  
**Visual:** Slider from 8K → 128K → 1M → 2M with metaphors (page counts)  
**Line:** Bigger window helps — but retrieval (RAG) still wins for 200-page policies.

#### Scene 11 — Prompt Architecture: 5 Methodologies  
**Type:** Core · Lab  
**Steps (advance one at a time):**
1. **Zero-shot** — “Write a notice about rain.” → generic risk  
2. **Role prompting** — “Act as a Senior IAS Officer…”  
3. **Few-shot** — paste 1–3 example circular formats  
4. **Constraints** — word count, tone, exclusions  
5. **Chain-of-Thought** — “Think step-by-step before final answer”  
**Interaction:** Each method swaps the live example prompt + predicted quality meter  
**Editable:** `content/labs/prompt-methods.json`

#### Scene 12 — Weak vs Enterprise Prompt  
**Type:** Core · Wow-lite  
**Left (Weak):** “Write a letter about land records.” → *generic unusable essay*  
**Right (Structured):** Enterprise Template → *ready-to-sign operational order*  
**Interaction:** Flip card / morph animation Weak → Structured  
**Then open:** Scene 13 builder

---

### ACT III — WOW (Scenes 13–20)

This act is where the room should lean forward.

#### Scene 13 — Enterprise Prompt Builder (Lab)  
**Type:** Core · Lab  
**Form fields (from original deck):**
- `[SYSTEM ROLE]`  
- `[CONTEXT]`  
- `[TASK]`  
- `[CONSTRAINTS]`  
- `[FORMAT]`  

**Default filled example (editable):**
- Role: Executive Assistant to the District Magistrate  
- Context: Digital land records scheme in 3 blocks  
- Task: Formal guidance note for SDMs — rollout phases  
- Constraints: ≤350 words; imperative; formal; no legal preamble  
- Format: Bulleted action points by priority  

**Buttons:** Assemble · Copy · Open in ChatGPT / Claude / Gemini · Reset · Load another scenario  
**Scenario library (editable):** Land records · Load shedding advisory · Disaster relief staging · Tender FAQ (public only) · Citizen charter rewrite  
**Editable:** `content/prompts/enterprise-scenarios/*.json`

#### Scene 14 — Live Writing Demo (Circular / D.O.)  
**Type:** Core · Wow  
**Flow:**
1. On site: pick scenario “Power shutdown public notice (Mahatransco tone)”  
2. Copy prompt → open ChatGPT/Claude  
3. Show draft appear in seconds  
4. Second prompt: “Make it bilingual outline EN + Marathi headings”  
**Backup:** Pre-saved before/after screenshots + final PDF-looking preview image in `public/backups/writing/`  
**Presenter tip:** Ask one officer in the room: “Would you sign a cleaned version of this?”

#### Scene 15 — Prompt Playground (Full)  
**Type:** Core · Lab  
**Layout:** Left categories · Center prompt cards · Right actions  

**Categories (v1):**
1. Official writing (circulars, D.O., speaking notes)  
2. Policy & research  
3. Translation & simplification (EN/HI/MR)  
4. Meetings → decisions  
5. Citizen communication  
6. Data explanation (no invented numbers)  
7. Image prompts  
8. Video / avatar scripts  
9. Safety & verification prompts  

**Each card fields:**
- `id`, `title`, `category`, `difficulty`, `whyItWorks`, `prompt`, `tools[]`, `tags[]`, `favorite`  
**Actions:** Copy · Open in tool · Mark favorite · Show speaker tip  
**Attendee leave-behind:** `/playground` + Download Prompt Pack  

**Editable forever:** `content/prompts/**/*.md` or `.json` — this is your “new PPT content”

#### Scene 16 — Temperature & Control (AI Studio intuition)  
**Type:** Core  
**UI:** Big dial  
- `0.1` = factual, repetitive, safe for governance drafts  
- `0.7` = creative campaign copy  
- `1.0+` = wild / risky for official work  
**Interaction:** Dial changes sample outputs side-by-side  
**Bridge:** “Now we lock this into a persistent persona…”

#### Scene 17 — Lab: Build “DM Executive Desk” Persona  
**Type:** Core · Lab  
**3 steps on screen:**
1. Open Google AI Studio → New Prompt → System Instructions  
2. Paste Base Rules (from content)  
3. Set Temperature `0.15` → Save as **DM Executive Desk**  

**Base Rules (default, editable):**  
*You are the Exec. Asst. to the DM. Use formal Indian Governance tone. Translate jargon to action points. Highlight unverified facts in [VERIFY]. Never invent metrics.*  

**On-site helpers:** Copy rules · Open AI Studio · Show annotated screenshot hotspots · Offline walkthrough video  

#### Scene 18 — Instant Image Generation  
**Type:** Core · Wow  
**Demo prompt (editable):**  
*Photojournalistic wide-angle of a district flood relief staging area. Inflatable boats, uniformed NDRF personnel coordinating logistics, overcast sky, documentary realism — no logos, no readable faces of real officials.*  

**Show:** Midjourney / Gemini image / Canva AI result in ~15–30s  
**Backup gallery:** 3 pre-generated images  
**Teaching line:** Visuals that used to take a procurement cycle can start as a draft in seconds — humans still approve.

#### Scene 19 — Voice Generation (ElevenLabs-style)  
**Type:** Optional · Wow  
**Demo:** Paste a 20-second citizen advisory → generate Marathi or Hindi voiceover  
**On screen:** Waveform + transcript  
**Backup:** Pre-rendered audio file  
**Caution label:** Always disclose synthetic voice in official use where required

#### Scene 20 — LIVE AI VIDEO DEMO (external tool)
**Type:** Core · Wow · Peak audience moment  

**What “shock” means:** The *audience reaction* when the presenter generates a talking video **live** in HeyGen/Runway — not a video player built into this website.

**Website role only:**
- Show a short script
- **Copy script** / **Open HeyGen** / **Open Runway**
- Ethical reminder + bridge to Act IV

**Presenter does live:** generate video in the external tool on Wi‑Fi, play it for the room, then teach verification / IT Rules.

**Do not build:** in-app video player, offline demo.mp4 packs, BackupViewer for this scene.

---

### ACT IV — POWER WITH DISCIPLINE (Scenes 21–25)

#### Scene 21 — RAG Explainer (NotebookLM)  
**Type:** Core · Lab  
**Animation pipeline:**  
Upload policy PDF → Chunk → Embed/Index → Retrieve relevant passages → Generate answer → **Cite page**  

**Live demo:** NotebookLM on a public/sample policy PDF (never confidential)  
**Key line:** RAG reduces hallucination by forcing the model to ground answers in *your* documents.  
**Backup:** Screen recording of citation answer  

#### Scene 22 — Hallucination Clinic  
**Type:** Core · Wow-lite  
**Demo pattern:**
1. Ask model a tricky factual admin question without sources  
2. Show fluent wrong/overconfident answer  
3. Flip to grounded RAG answer with citation  
**On screen:** Pie / meter — Factual grounded vs Ungrounded risk  
**Rules on screen:**
- Never publish AI budget figures / legal sections / citizen names without file verification  
- Human-in-the-loop: AI drafts; officer remains legally accountable  

#### Scene 23 — DPDP Sensitivity Tiers  
**Type:** Core · Lab  
**Interactive matrix:**

| Tier | Environment | Examples |
|---|---|---|
| 1 Public | Consumer AI OK | Gazetted policy, press releases |
| 2 Internal | Enterprise AI + no-training clause | Memos, draft schemes |
| 3 Confidential | On-prem / local SLM only | Aadhaar, PII, FIRs, tender evaluations |
| 4 Classified | Air-gapped only | Cabinet / national security |

**Interaction:** Drag sample document cards onto tiers; site scores correct/incorrect with explanation  
**Editable cards:** `content/labs/dpdp-cards.json`

#### Scene 24 — Synthetic Media & IT Rules 2026  
**Type:** Core  
**On screen:** Mandate summary — SGI labeling + rapid takedown expectations (as per workshop doctrine)  
**Callback:** Replay 3-second clip from Video Shock with label emphasized  
**Line:** Capability without process is institutional risk.

#### Scene 25 — Deepfake Drill (5 Steps)  
**Type:** Core · Lab  
**Interactive checklist (advance one step):**
1. **PAUSE** — halt forward impulse; check urgency traps  
2. **SOURCE** — verified official channel?  
3. **INSPECT** — lip sync, unnatural audio, artifacts  
4. **SEARCH** — reverse image/video / metadata  
5. **VERIFY** — confirm via offline/official communication  

**Interaction:** Present a suspicious WhatsApp-style mock card; room chooses steps; reveal best practice  
**Editable scenarios:** `content/labs/deepfake-drills.json`

---

### ACT V — OWN IT (Scenes 26–28)

#### Scene 26 — Officer Operating System (Playbook)  
**Type:** Core  
**One-page system on screen:**
1. Choose tool by job  
2. Choose environment by data tier  
3. Use Enterprise Template  
4. Prefer RAG for long files  
5. Verify facts; label synthetic media  
6. Save reusable personas & prompts  

**Interaction:** Checklist can be downloaded / QR  

#### Scene 27 — Resource Pack & QR  
**Type:** Core  
**Includes:**
- Prompt Playground link  
- Prompt pack download (Markdown/PDF)  
- Tool list (“Save this”)  
- Persona rules  
- Verification checklist  
**Editable:** `content/resources.json`

#### Scene 28 — Closing  
**Type:** Core · Title plate  
**Quote (from original deck):**  
> AI will not replace officers.  
> Officers who understand AI will outperform officers who don't.  

**Subline:** *The future of administrative leadership*  
**End actions:** Q&A · Thank Mahatransco · Optional contact/QR  

---

## 5. Timing scripts

### 5.1 90-minute Core path (recommended)

| Min | Scenes | Focus |
|---|---|---|
| 0–5 | 01–03 | Open + promise + pillars |
| 5–12 | 04–05 | Tools landscape |
| 12–22 | 06–09 | GenAI + LLM/SLM + Token Lab |
| 22–35 | 11–15 | Prompt methods + Builder + Playground live writing |
| 35–45 | 16–17 | Temperature + AI Studio persona |
| 45–60 | 18–20 | Image + **Video Shock** |
| 60–78 | 21–25 | RAG, hallucination, DPDP, IT Rules drill |
| 78–90 | 26–28 | Playbook, resources, close + Q&A |

Skip if short on time: 10, 19, deeper playground browsing.

### 5.2 60-minute Express path
01–03 → 05 → 07 → 09 → 12–14 → 17 → 20 → 22–23 → 25 → 28

### 5.3 120-minute Deep lab path
Full 28 scenes + audience volunteers try Prompt Builder + one officer-assisted verification drill.

---

## 6. Wow / shock inventory (planned reactions)

| Moment | Scene | Expected reaction | Responsible framing |
|---|---|---|---|
| Tools wall density | 05 | “I only knew ChatGPT” | Map each to admin work |
| Indic token cost | 09 | Surprise at Marathi/Hindi token use | Explains limits & cost |
| Weak → Enterprise morph | 12–13 | “That’s the difference” | Process > magic |
| Live circular draft | 14 | “That would take my desk half a day” | Human edits remain |
| Image in seconds | 18 | Visual gasp | Approval still human |
| **Talking avatar video** | **20** | **Biggest shock** | SGI label + bridge to law |
| Confident wrong answer | 22 | Discomfort | Accountability |
| Drag-tier mistakes | 23 | Self-check humility | DPDP practical |
| Deepfake drill | 25 | Operational seriousness | Staff SOP takeaway |

---

## 7. Prompt & demo content plan (what you will stock)

### 7.1 Writing prompts (examples to include in Playground)
- Public safety advisory (Mahatransco)
- Internal meeting → decision minutes
- D.O. letter tone rewrite
- Simplify a policy paragraph to Class 10 reading level
- Bilingual outline EN + Marathi
- Speaking notes for 3-minute address
- RTI-style FAQ from a public circular (no confidential data)
- “Highlight [VERIFY] items” factual scrub prompt

### 7.2 Media prompts
- Flood relief staging photojournalistic still
- Substation safety poster (text-safe composition)
- 10-second traffic diversion cinematic prompt
- Avatar script: 25-sec helpline awareness (SGI)

### 7.3 Research / RAG prompts
- “Extract deadlines and responsible offices; cite sections”
- “Compare two public circulars; table differences”
- “List unresolved questions the document does not answer”

### 7.4 Safety prompts
- “List what must be human-verified before publishing”
- “Rewrite to remove speculative claims”
- “Classify this content into DPDP tier 1–4 and justify”

All of the above live in content files — add more anytime.

---

## 8. Presenter control center (what you see that they don’t)

When `P` is pressed:
- Current scene title + goal in one line  
- Speaker notes (markdown)  
- Estimated time for scene vs actual elapsed  
- **Demo tray:** buttons that open tool URLs or reveal backup media  
- **Favorites:** starred prompts for this session  
- **Panic:** jump to Closing  
- **Session profile:** 60 / 90 / 120 (hides Optional scenes automatically)

Speaker notes stored at: `content/notes/<scene-id>.md`

---

## 9. Easy content editing system (so you never “edit the PPT in code”)

This is a first-class product requirement.

### 9.1 Principle
**You change workshop content by editing files in `/content` — not by hunting through React components.**

### 9.2 Content folder contract

```text
content/
  workshop.meta.json          # title, presenter, duration profiles, brand
  chapters.json               # Act I–V labels & colors
  scenes/
    01-opening.json
    02-promise.json
    ...
    28-closing.json
  tools.json                  # Save-this tools wall
  prompts/
    index.json                # categories order
    official-writing/
      power-shutdown-notice.json
      do-letter-rewrite.json
    research/
    translation/
    media-image/
    media-video/
    safety/
  labs/
    token-samples.json
    prompt-methods.json
    dpdp-cards.json
    deepfake-drills.json
    enterprise-scenarios/
      land-records.json
      load-shedding.json
  demos/
    video-shock/
      scripts.json
      manifest.json           # tool links + backup paths
    writing/
    images/
    rag/
  notes/
    01-opening.md
    ...
  resources.json
```

### 9.3 What a scene JSON contains (example shape)

```json
{
  "id": "video-shock",
  "number": 20,
  "act": "III",
  "title": "Video Shock Stage",
  "durationSec": 480,
  "flags": ["core", "wow"],
  "layout": "shock-stage",
  "headline": "A person can appear to speak words they never said.",
  "body": "Watch a synthetic briefing being generated — then labelled.",
  "bullets": [],
  "demo": {
    "primaryTool": "heygen",
    "backupMedia": "/backups/video-shock/demo.mp4",
    "sgiLabel": true
  },
  "notesFile": "notes/20-video-shock.md"
}
```

### 9.4 What a prompt JSON contains

```json
{
  "id": "power-shutdown-notice",
  "title": "Public Power Shutdown Notice",
  "category": "official-writing",
  "favorite": true,
  "tools": ["chatgpt", "claude", "gemini"],
  "whyItWorks": "Role + constraints + format force usable official tone.",
  "prompt": "You are a communications officer at Mahatransco..."
}
```

### 9.5 How you change something in 30 seconds
| You want to… | You edit… |
|---|---|
| Change a prompt | the prompt JSON/MD file |
| Add a new prompt | new file + reference in `prompts/index.json` |
| Reorder scenes | `number` / order array in `chapters` or scenes index |
| Hide a scene for a short session | `"flags": ["optional"]` or duration profile |
| Change Video Shock script | `content/demos/video-shock/scripts.json` |
| Replace offline backup video | drop new file in `public/backups/...` + update manifest |
| Change closing quote | `28-closing.json` |
| Change presenter name/title | `workshop.meta.json` |
| Add a new tool to Save-this wall | `tools.json` |

### 9.6 Optional later: local Content Desk UI
A simple `/editor` page (local/dev only) with forms for prompts & scenes — still writes the same JSON files.  
**v1 can ship file-based only**; editor UI is Phase-2 convenience.

### 9.7 Validation
On build/dev start, validate all scene IDs, prompt references, and backup file paths exist — so a missing video doesn’t surprise you on stage.

---

## 10. Offline / failure runbook (built into the site)

| Failure | Instant action |
|---|---|
| Wi‑Fi down | Continue site from local/USB static build |
| ChatGPT blocked | Use Claude/Gemini buttons or backup screenshots |
| Video generation queue slow | Press `B` → play pre-rendered shock video |
| Tool login expired | Backup gallery + explain live attempt later |
| Presenter loses place | `G` overview grid |

Every Core wow scene **must** ship with backup media before rehearsal day.

---

## 11. Data accuracy & sensitivity standards

- No real Aadhaar, FIR, tender-evaluation, or citizen PII in samples  
- Prefer fictional districts / anonymised scenarios  
- Public circulars only for RAG demos  
- Always show SGI labeling on synthetic person media  
- Prefer consented presenter likeness or fictional avatar for talking-head demos  
- Explicit on-screen reminders for Tier 3/4 restrictions  

---

## 12. What we will build inside the website (feature checklist)

### Shell
- [ ] Full-screen scene engine + transitions  
- [ ] Keyboard + on-screen next/prev  
- [ ] Chapter progress + overview grid  
- [ ] Presenter mode (notes, timer, demo tray, panic)  
- [ ] Deep links per scene  
- [ ] Duration profiles (60/90/120)  

### Labs & interactives
- [ ] Tools wall explorer  
- [ ] LLM vs SLM compare  
- [ ] Token Lab (+ Indic samples)  
- [ ] Prompt methods stepper  
- [ ] Enterprise Prompt Builder  
- [ ] Prompt Playground (copy + open-in-tools)  
- [ ] Temperature dial  
- [ ] AI Studio hotspot walkthrough  
- [ ] RAG pipeline animation  
- [ ] Hallucination clinic  
- [ ] DPDP tier drag-and-drop  
- [ ] Deepfake 5-step drill  

### Wow media stage
- [ ] Image demo deck + backups  
- [ ] Voice demo optional + backups  
- [ ] **Video Shock Stage** + SGI overlay + backups  

### Content system
- [ ] `/content` JSON/MD as source of truth  
- [ ] Hot reload in development  
- [ ] Build-time validation of assets  
- [ ] Prompt pack export for attendees  

### Polish
- [ ] Projector theme testing  
- [ ] Reduced motion  
- [ ] Static export / USB package  
- [ ] Rehearsal cue sheet generated from scene durations  

---

## 13. Website proceeding flow (audience perspective)

Think of the site as a **guided theatre**, not a website to browse:

1. Room goes dark-navy → title appears → presenter introduced  
2. Promise of the day lands in three lines  
3. Pillars show the journey map  
4. Tools explode the ChatGPT myth  
5. Simple science: models, tokens, probability  
6. They *type* and see tokens split  
7. They see weak prompts fail and enterprise prompts win  
8. Live official draft appears in a real AI tool  
9. Playground becomes a toolbox they can reuse  
10. Persona is locked for consistent governance tone  
11. Image appears in seconds  
12. **A synthetic person delivers a briefing video** → silence → SGI stamp  
13. Mood shifts: RAG, lies that sound true, DPDP tiers, deepfake SOP  
14. They receive a playbook + prompt pack  
15. Closing quote → Q&A  

That is the proceeding of the website.

---

## 14. Open decisions (need your confirmation before build)

1. **Session length default:** 60 / 90 / 120? (plan assumes 90)  
2. **Video Shock likeness:** Presenter face (best) vs fictional avatar?  
3. **Accent color:** Teal (tech-trust) vs Saffron (state signal) as primary accent?  
4. **Mahatransco logo / brand guidelines** availability  
5. **Which live tools are guaranteed logged-in on workshop day** (ChatGPT, Claude, Gemini, HeyGen, NotebookLM, Midjourney, etc.)  
6. **Marathi depth:** sample prompts only vs partial UI labels  

---

## 15. Final summary

We will not recreate 15 static slides. We will build a **28-scene interactive keynote-lab** with five acts:

1. Wake up to the AI toolkit  
2. Understand models & tokens  
3. Feel the wow (writing, image, **synthetic video person**)  
4. Install discipline (RAG, hallucination, DPDP, IT Rules)  
5. Leave with an operating system + editable prompt library  

And because every prompt, script, tool, note, and scene lives in `/content`, **you can change the workshop like editing a modern deck — instantly — without rewriting the website.**

When you approve this blueprint (and answer Section 14), implementation can follow scene-by-scene starting with the shell + Act I.
