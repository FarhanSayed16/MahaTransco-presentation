# Interactive AI Workshop Website — Project Plan

> **Execution docs (use these):** [`MASTER_PLAN.md`](./MASTER_PLAN.md) · [`MASTER_CHECKLIST.md`](./MASTER_CHECKLIST.md)  
> This file is retained as early feasibility reference only.

**Workshop:** AI as a Digital Assistant for Administrative Leadership  
**Audience:** Mahatransco / Government of Maharashtra officials (incl. senior & IAS officers)  
**Presenter:** Akshay Ridlan, Branch Data Analyst, Piramal Finance  
**Status:** Feasibility confirmed — ready for build  
**Source content:** `docs/AI as a Digital Assistant for Administrative Leadership.pptx` (15 slides) + AI tools reference image

---

## 1. Verdict: Is this possible?

**Yes — fully achievable.** This is a well-defined product: a full-screen, keyboard-navigable presentation app with embedded interactive labs. Nothing in the brief requires exotic infrastructure.

| Requirement | Feasibility | Approach |
|---|---|---|
| Full-screen “slide” sections with smooth transitions | High | Next.js App Router + Framer Motion / GSAP |
| Prompt Playground (copy + open in ChatGPT/Gemini/Claude/Perplexity) | High | Static prompt library + deep links / clipboard APIs |
| Tokenization & transformer visualizations | High | Client-side simulators (no live model required) |
| Live demos during session | High | Embedded demo links + presenter “open demo” shortcuts |
| Offline / weak-network resilience | High | Static export, cached screenshots, service worker optional |
| Speaker notes, timer, hidden presenter controls | High | Presenter mode (`P` key) + localStorage |
| Premium, government-appropriate design | High | Custom design system (navy-led, not generic AI purple) |

**What we will not do (and do not need):** host our own LLM, train models, or depend on an always-on backend for the core workshop experience. Live AI answers come from opening real tools (ChatGPT, Gemini, etc.) in a second window.

---

## 2. Goals & success criteria

### Primary goals
1. Replace the PowerPoint with a **keynote-grade interactive website**.
2. Teach AI fundamentals through **interaction**, not walls of text.
3. Keep the presenter in control: next/prev, jump, notes, timer, offline fallbacks.
4. Stay suitable for a **formal government audience** — premium, calm, credible.

### Success looks like
- Presenter can run a 60–90 minute session using only keyboard + one projector.
- Audience can see tokenization, prompt structure, RAG, and compliance tiers visually.
- Any demo can be launched in &lt;5 seconds from the Prompt Playground.
- If Wi‑Fi drops, the site still runs; demos fall back to saved screenshots / short videos.

---

## 3. Content map (PPT → interactive sections)

The existing deck becomes the **content spine**. Each slide maps to one or more full-screen scenes.

| # | PPT slide | Website section / scene | Interaction upgrade |
|---|---|---|---|
| 01 | Title — *AI as a Digital Assistant for The Administrative Officer* | **Opening / Title** | Full-bleed hero, brand lockup (Mahatransco + workshop title), subtle motion entrance |
| 02 | Executive Overview (Specialized AI Matrix, Deterministic Control, Governance) | **Agenda / Three Pillars** | Clickable pillars that preview the journey; progress overview |
| 03 | Different AI for Different Jobs (Writing, Research, Image, Video, Automation) | **AI Tools Matrix** | Interactive category explorer; merge with “SAVE THIS NOW” tools list (ChatGPT, Claude, Perplexity, Runway, Gamma, Notion AI, Midjourney, Descript, ElevenLabs, HeyGen) |
| 04 | Architectural Selection: LLM vs SLM | **LLM vs SLM** | Side-by-side compare toggle; privacy / air-gap callouts animated |
| 05 | Tokens & Context Window | **Token Lab** | Live tokenizer: type Hindi/Marathi/English → see token count & ~3× regional cost; “lost in the middle” animation |
| 06 | Prompt Architecture — 5 Methodologies | **Prompt Methods** | Step-through of Zero-Shot → Role → Few-Shot → Constraints → CoT with live example swaps |
| 07 | Enterprise Template blueprint | **Enterprise Prompt Builder** | Interactive template: `[SYSTEM ROLE] [CONTEXT] [TASK] [CONSTRAINTS] [FORMAT]` — fill fields → assemble prompt → copy / open in tool |
| 08 | Deep Dive: Google AI Studio | **AI Studio Tour** | Annotated UI walkthrough (screenshots + hotspots); temperature dial demo (0.1 vs 0.9) |
| 09 | Lab: Persistent Persona (“DM Executive Desk”) | **Hands-on Lab** | 3-step checklist UI; ready system instruction to copy; backup screenshots if offline |
| 10 | Instant Media Generation | **Media Demo Deck** | Prompt cards for Midjourney / Canva AI / Veo-style prompts; open-in-tool + offline result gallery |
| 11 | Zero-Hallucination Parsing via RAG (NotebookLM) | **RAG Explainer** | Animated pipeline: Docs → Chunk → Retrieve → Generate + Cite; NotebookLM demo link |
| 12 | Mitigating Hallucination Failures | **Trust & Verify** | Interactive “confident wrong answer” demo; Human-in-the-Loop checklist |
| 13 | Data Privacy & Compliance (DPDP Act 2023) | **Sensitivity Tiers** | 4-tier interactive matrix (Public → Classified); drag-a-document-to-tier exercise |
| 14 | Navigating Synthetic Media (IT Rules 2026) | **Deepfake Drill** | 5-step PAUSE → SOURCE → INSPECT → SEARCH → VERIFY interactive workflow |
| 15 | Closing quote | **Close / Q&A** | Quote scene + QR for resources / prompt pack download |

### Content already extracted from the deck (to reuse as-is)

- **Enterprise template example:** System Role = Exec. Asst. to DM; Context = digital land records scheme; Task = guidance note for SDMs; Constraints = 350 words, formal, no legal preamble; Format = bulleted priorities.
- **Weak vs structured prompt contrast** (land records letter).
- **Persona system instruction:** formal Indian governance tone; highlight unverified facts in `[VERIFY]`; never invent metrics.
- **Sensitivity tiers** and **5-step synthetic media workflow** (structured tables — ideal for UI).
- **Closing line:** *“AI will not replace officers. Officers who understand AI will outperform officers who don't.”*

---

## 4. Product experience design

### 4.1 Presentation shell (always present, visually quiet)
- Full viewport scenes (`100dvh`)
- Bottom-minimal chrome: section title · progress dots · prev/next
- Keyboard: `→` / `Space` next · `←` previous · `1–9` jump · `P` presenter · `N` notes · `F` fullscreen · `G` overview grid · `Esc` exit overlays
- Overview mode: thumbnail grid of all sections for quick jump
- Optional second-screen presenter view (notes + next slide preview + timer)

### 4.2 Signature interactive modules

#### A. Prompt Playground
- Categories: Circulars & D.O. letters · Policy drafts · Research · Translation (Marathi/Hindi) · Media · Compliance / verification
- Each prompt card: title, short why-it-works, full prompt, tags
- Actions: **Copy** · **Open in ChatGPT** · **Gemini** · **Claude** · **Perplexity** (URL-encoded where supported; otherwise copy + open homepage)
- “Presenter favorite” star list for live demos
- Export pack as Markdown / PDF for attendees after session

#### B. Token Lab
- Input box with sample buttons (English circular / Marathi notice / Hindi DO letter)
- Visual token chips; count + estimated cost multiplier for Indic scripts
- Context window meter (8K → 2M) and “lost in the middle” simulation
- Callout: use NotebookLM / Document RAG for large PDFs

#### C. Enterprise Prompt Builder
- Form fields matching the PPT template blocks
- Live assembled prompt preview
- One-click copy / open-in-tool
- Before/after: Weak input vs Structured result

#### D. Compliance & Trust modules
- DPDP sensitivity tier board
- Hallucination risk meter (grounded vs ungrounded)
- IT Rules 2026 verification checklist (interactive)

### 4.3 Presenter toolkit (hidden until toggled)
- Speaker notes per section (markdown)
- Section timer + total session timer (soft alerts at 5 min remaining)
- Demo links panel (AI Studio, NotebookLM, ChatGPT, etc.)
- Offline backup: screenshot / short MP4 gallery per demo section
- “Panic button”: jump to closing + Q&A
- Laser-pointer style highlight mode (optional)

---

## 5. Design direction

**Tone:** Institutional premium — closer to a cabinet briefing + Apple Keynote than a startup landing page.

### Visual principles
- One composition per scene; no dashboard clutter
- Brand / workshop title as a strong signal on the opening scene
- Expressive typography (display + clean body) — avoid default Inter/Roboto look
- Atmosphere via subtle gradients, grid, or soft geometric motifs — not flat gray slides
- Motion with purpose: section enter/exit, token split, pipeline flow (2–3 signature animations)
- Prefer diagrams, timelines, and interactive widgets over paragraphs

### Color (proposed)
Aligned with government credibility and the deck’s navy lean — **not** purple-AI cliché:

| Token | Role | Suggestion |
|---|---|---|
| `--navy` | Primary authority | Deep navy (`#0B1F3A` / `#000066`-adjacent) |
| `--paper` | Surfaces | Cool off-white (`#F7F8FA`) |
| `--accent` | Focus / CTAs | Maharashtra-saffron or electric teal (pick one; stay consistent) |
| `--success` / `--danger` | Weak vs strong prompt, hallucination | Green / red used sparingly |
| `--ink` | Body text | Near-black on paper; white on navy scenes |

### Accessibility (mandatory for this audience)
- High contrast on projector
- Large type (min ~24px body on presentation scenes)
- Reduced-motion preference respected
- No critical info only in hover

---

## 6. Technical architecture

### Recommended stack
| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | Fast static export, great DX, easy Vercel deploy |
| Styling | **Tailwind CSS + CSS variables** | Speed + design tokens |
| Motion | **Framer Motion** (UI) + **GSAP** (complex timelines if needed) | Smooth section transitions & labs |
| Content | **MDX / JSON content files** | Easy to edit prompts, notes, section copy without touching UI |
| State | React + URL hash/search for section index | Shareable deep links (`/#tokens`) |
| Deploy | **Vercel** (primary) + optional static USB / local `out/` folder | Online + offline presenter copy |
| Analytics | Optional, privacy-safe, off by default | Government session sensitivity |

### Project structure (proposed)

```text
/
├── app/                      # Next.js routes
│   ├── page.tsx              # Presentation shell
│   ├── presenter/            # Optional presenter view
│   └── playground/           # Standalone prompt playground (shareable)
├── components/
│   ├── shell/                # Nav, progress, keyboard, overview
│   ├── scenes/               # One component per workshop section
│   ├── labs/                 # TokenLab, PromptBuilder, TierBoard…
│   └── presenter/            # Notes, timer, demo panel
├── content/
│   ├── sections.json         # Order, titles, timing hints
│   ├── prompts/              # Categorized prompt library
│   ├── notes/                # Speaker notes (MD)
│   └── demos/                # Links + offline asset manifests
├── public/
│   ├── backups/              # Screenshots / short videos for offline
│   └── brand/                # Logos
└── docs/
    ├── INTERACTIVE_WORKSHOP_PLAN.md   ← this file
    └── …source PPT / references
```

### Offline strategy
1. Prefer **static export** so the whole site runs from a folder/USB.
2. Bundle backup images/videos for Google AI Studio, NotebookLM, media demos.
3. Prompt Playground works fully offline for copy; “Open in …” needs network.
4. Optional lightweight service worker for asset caching on venue Wi‑Fi.

### Security & compliance note for the build
- Do **not** collect participant prompts or PII.
- No server-side logging of workshop inputs by default.
- Tier-3/4 messaging must reinforce: never paste Aadhaar / FIR / classified data into public AI tools.

---

## 7. Delivery plan (phased)

### Phase 0 — Align (0.5 day)
- Confirm session length (60 / 90 / 120 min)
- Confirm branding (Mahatransco logo usage, presenter bio line)
- Confirm which live tools will be demoed on the day
- Approve color/typography direction with one mock opening scene

### Phase 1 — Foundation (2–3 days)
- Next.js scaffold, design tokens, presentation shell
- Keyboard navigation, progress, overview grid
- Port all 15 sections as structured scenes (content-accurate, light motion)
- Presenter notes + timer (MVP)

### Phase 2 — Interactive labs (3–4 days)
- Prompt Playground (categories, copy, open-in-tool)
- Token Lab (EN + Indic samples)
- Enterprise Prompt Builder (template from slide 7)
- LLM vs SLM compare + Sensitivity Tiers board
- RAG pipeline animation + Hallucination / Verify module
- Synthetic media 5-step drill

### Phase 3 — Presenter polish & offline (1–2 days)
- Demo link panel + backup screenshot galleries
- Presenter mode (notes, next-up, panic jump)
- Fullscreen projector QA, reduced-motion, font scaling
- Static export + USB dry-run

### Phase 4 — Rehearsal pack (1 day)
- Cue sheet: recommended timing per section
- “If Wi‑Fi fails” runbook
- Attendee leave-behind: prompt pack download / QR
- Final content pass with Akshay (tone, Marathi examples, live demo order)

**Estimated total:** ~8–11 focused build days for a polished workshop-ready v1.

---

## 8. Suggested session flow (90 minutes)

| Time | Section | Mode |
|---|---|---|
| 0:00–0:05 | Title + Agenda (3 pillars) | Present |
| 0:05–0:15 | AI Tools Matrix + live “which tool for which job” | Interact |
| 0:15–0:25 | LLM vs SLM + Token Lab | Interact |
| 0:25–0:40 | Prompt methods + Enterprise Builder + Playground demos | Live demos |
| 0:40–0:55 | Google AI Studio persona lab | Hands-on / projected |
| 0:55–1:05 | Media generation showcase | Demo / backups |
| 1:05–1:15 | RAG (NotebookLM) + Hallucination | Demo + discuss |
| 1:15–1:25 | DPDP tiers + IT Rules deepfake drill | Interact |
| 1:25–1:30 | Closing quote + Q&A + resource QR | Close |

---

## 9. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Venue Wi‑Fi fails | Static site on USB/laptop; offline screenshot/video backups; copy-prompt still works |
| “Open in ChatGPT” URL limits | Always support Copy; open tool homepage as fallback |
| Projector contrast / small text | Large type scale, navy/paper themes tested at 1080p and 4K |
| Scope creep (building a real LLM app) | Keep labs client-side; live intelligence stays in external tools |
| Content sensitivity | Explicit tier messaging; no sample prompts that include real PII |
| Last-minute deck changes | Content in JSON/MDX so copy updates don’t require redesign |

---

## 10. Out of scope for v1 (possible later)

- User accounts / login for officials
- Server-hosted LLM chat inside the website
- Real-time multiplayer audience quizzes (nice-to-have v2)
- Full bilingual UI (English-first v1; Marathi labels/examples inside labs is in scope)
- Recording / LMS integration

---

## 11. Immediate next steps

1. **Approve this plan** (scope, phases, 90-min flow).
2. Provide / confirm: Mahatransco logo, presenter photo optional, final session duration.
3. Choose accent color (saffron vs teal) on a quick visual sample.
4. Start **Phase 1** — scaffold the presentation shell and port the 15 scenes from the PPT.

---

## 12. Summary

The PowerPoint already defines a strong narrative: tools → models → tokens → prompts → enterprise template → AI Studio lab → media → RAG → hallucination → DPDP → synthetic media → close.  

The website should **preserve that narrative**, but replace static slides with **full-screen interactive scenes**, a **Prompt Playground**, and **presenter-grade controls** so the workshop stays impressive even under imperfect network conditions.

**Bottom line:** This is not only possible — it is a better fit for the teaching goals than PowerPoint. The plan above is the build roadmap from the existing deck to a premium interactive workshop platform.
