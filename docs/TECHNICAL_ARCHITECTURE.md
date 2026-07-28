# Technical Architecture & Build Decisions

> **Execution docs (use these):** [`MASTER_PLAN.md`](./MASTER_PLAN.md) · [`MASTER_CHECKLIST.md`](./MASTER_CHECKLIST.md)  
> This file is retained as stack/design lock reference. If anything conflicts, **Master Plan wins**.

**Product:** Mahatransco Interactive AI Workshop Website  
**Status:** Locked for implementation (v1)  
**Theme:** Light-first (projector-friendly)  
**Related docs:** `COMPLETE_WORKSHOP_BLUEPRINT.md`, `INTERACTIVE_WORKSHOP_PLAN.md`

---

## 1. Build approach (how we will make it)

We will build a **static, content-driven presentation web app**:

1. **One Next.js app** hosts the full workshop (scenes + labs + playground + presenter tools).
2. **All workshop text/prompts/demos** live in `/content` files — not hardcoded in UI components.
3. **No custom AI backend** in v1. Live intelligence happens in external tools (ChatGPT, Gemini, Claude, etc.) opened from the site.
4. The site’s job is: **guide → explain → copy prompts → open tools (Wi‑Fi)**.
5. Ship primarily as a **Vercel URL**. Static export is optional for hosting — **not** an offline-demo product.

### Delivery order
| Phase | What we build |
|---|---|
| **P1 — Shell** | Next.js app, light theme tokens, scene engine, keyboard nav, progress |
| **P2 — Content scenes** | All Core scenes as layouts fed by `/content` |
| **P3 — Labs** | Token Lab, Prompt Builder, Playground, DPDP, Deepfake drill |
| **P4 — Presenter** | Notes, timer, demo tray (live tools) |
| **P5 — Rehearsal pack** | Cue sheet, sample prompts, Wi‑Fi dry run |

---

## 2. Technical stack (locked)

| Layer | Choice | Why |
|---|---|---|
| **Framework** | **Next.js 15 (App Router) + React 19 + TypeScript** | Modern, fast, easy routes, excellent static export |
| **Language** | **TypeScript (strict)** | Safer content contracts & fewer stage-day bugs |
| **Styling** | **Tailwind CSS v4 + CSS variables** | Rapid UI + one design-token source |
| **Components** | **Light custom UI** (no heavy design-system lock-in). Optional small primitives only | Keep bundle small; presentation UI is bespoke |
| **Motion** | **Framer Motion** | Scene transitions, lab animations, SGI stamp, reveals |
| **Complex timelines (only if needed)** | **GSAP** | Token split / RAG pipeline if Framer feels limiting |
| **Content** | **JSON + Markdown in `/content`** | Akshay/you edit prompts & copy without touching React |
| **Content loading** | Typed loaders in `lib/content/*` + Zod validation | Broken prompt/scene fails at build/dev, not on stage |
| **Icons** | **lucide-react** | Clean, consistent, light |
| **Fonts** | **next/font** — Display: `Fraunces` · Body/UI: `Manrope` | Distinctive but formal; not Inter/Roboto |
| **Markdown notes** | `react-markdown` | Presenter notes from `.md` files |
| **State** | React state + URL hash (`/#scene-id`) | Deep links + refresh-safe position |
| **Persistence** | `localStorage` | Favorites, last scene, timer prefs only |
| **Deploy** | **Vercel** (primary) | Preview URLs + production link |
| **Static export** | Optional `output: 'export'` | Hosting convenience only — not offline demos |
| **Package manager** | **pnpm** | Fast, strict |
| **Lint/format** | ESLint + Prettier | Consistency |
| **Repo tooling** | Git | Normal versioning |

### Explicitly NOT in v1
- No Prisma / database  
- No auth / login  
- No hosted LLM API keys in the app  
- No Mongo/Firebase requirement  
- No analytics by default (privacy-sensitive government room)  
- No dark-theme toggle (light only, as requested)

---

## 3. How pieces connect (system diagram)

```text
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION SHELL                       │
│  Keyboard · Progress · Overview · Presenter panel · Timer   │
└───────────────────────────┬─────────────────────────────────┘
                            │ reads scene order + meta
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    /content (source of truth)                │
│  scenes/*.json · prompts/** · labs/** · demos/** · notes/*  │
└─────────────┬───────────────────────────────┬───────────────┘
              │                               │
              ▼                               ▼
┌──────────────────────────┐     ┌────────────────────────────┐
│  SCENE COMPONENTS        │     │  LAB / PLAYGROUND MODULES  │
│  layouts by type         │     │  Token · Builder · Tiers…  │
│  (title, compare, lab…)  │     │                            │
└─────────────┬────────────┘     └─────────────┬──────────────┘
              │                                 │
              │  Copy prompt / Open tool        │
              ▼                                 ▼
┌─────────────────────────────────────────────────────────────┐
│              EXTERNAL AI TOOLS (browser tabs)                │
│   ChatGPT · Claude · Gemini · Perplexity · NotebookLM       │
│   AI Studio · Midjourney/Canva · HeyGen / Runway            │
│   Connection = HTTPS links + clipboard (Wi‑Fi)              │
└─────────────────────────────────────────────────────────────┘
```

### Connection model (important)
There is **no live API pipe** from our server into ChatGPT / HeyGen.

| Action | How it works |
|---|---|
| **Copy Prompt / Script** | `navigator.clipboard.writeText(...)` |
| **Open in ChatGPT / Claude / Gemini / HeyGen / …** | Open tool URL from `content/tools.json` (Wi‑Fi) |
| **Demo tray** | Scene-aware copy + open external tool |
| **Favorites** | `localStorage` on presenter laptop only |

**Offline backup viewer is out of scope** — venue Wi‑Fi is assumed. Live video demos happen in HeyGen/Runway; the site only launches them.

This is intentional: government demos stay under presenter login sessions; we never proxy private prompts through our backend.

---

## 4. App structure

```text
maha-transco-presentation/
├── app/
│   ├── layout.tsx                 # fonts, theme CSS vars, metadata
│   ├── page.tsx                   # main presentation shell
│   ├── playground/page.tsx        # standalone prompt playground
│   └── presenter/page.tsx         # optional dual-screen notes view
├── components/
│   ├── shell/                     # NavChrome, Progress, OverviewGrid, KeyboardManager
│   ├── scenes/                    # SceneRenderer + layout templates
│   ├── labs/                      # TokenLab, PromptBuilder, TierBoard, DeepfakeDrill…
│   ├── playground/                # PromptCard, CategoryNav, OpenInTools
│   └── presenter/                 # NotesDrawer, Timer, DemoTray, PanicButton
├── content/                       # ★ editable workshop data
├── lib/
│   ├── content/                   # loaders + Zod schemas
│   ├── tools/                     # openInTool(), buildToolUrl()
│   ├── navigation/                # scene index, profiles 60/90/120
│   └── storage/                   # localStorage helpers
├── public/
│   ├── brand/
│   └── backups/
├── styles/
│   └── tokens.css                 # color, type, spacing tokens
└── docs/
```

---

## 5. Color combination (light theme — locked)

**Direction:** Clean government-premium light UI. Navy for authority, teal for interaction, soft slate neutrals. No purple gradients. No dark mode.

### Core palette

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F5F7FA` | Page background (cool light gray-blue) |
| `--surface` | `#FFFFFF` | Cards / lab panels |
| `--surface-muted` | `#EEF2F6` | Secondary panels, chips track |
| `--ink` | `#0F172A` | Primary text |
| `--ink-muted` | `#475569` | Secondary text |
| `--line` | `#D8DEE8` | Borders / dividers |
| `--navy` | `#0B1F3A` | Titles, key labels, closing emphasis strips |
| `--navy-soft` | `#E8EEF6` | Navy tint backgrounds on light |
| `--accent` | `#0F766E` | Primary interactive (teal) — buttons, active step, focus |
| `--accent-soft` | `#DDF5F2` | Accent wash |
| `--warn` | `#C2410C` | Shock / SGI / caution (saffron-orange, sparingly) |
| `--warn-soft` | `#FFEDD5` | Warning backgrounds |
| `--good` | `#047857` | Strong prompt / correct tier |
| `--bad` | `#B91C1C` | Weak prompt / hallucination risk |

### Scene tinting (still light)
- **Most teaching scenes:** `--bg` + white surfaces  
- **Opening / Closing:** light background with strong navy typography (not full black slides)  
- **Video Shock:** keep light chrome; media stage can use a **dark inset frame** only for the video player so the clip reads cinematically, then SGI stamp in `--warn`

### Projector rules
- Body text on light ≥ `#0F172A` on `#FFFFFF` / `#F5F7FA`  
- Avoid thin gray text  
- Accent used for **one** focus action per view  
- Large hit targets for live clicking

### Example feel
Think **Apple Keynote light deck + government brief** — white space, navy headlines, teal “Try / Copy / Next” controls, orange only when something is dangerous or synthetic.

---

## 6. Typography & motion

| Role | Font | Usage |
|---|---|---|
| Display | **Fraunces** | Scene titles, closing quote |
| UI / Body | **Manrope** | Everything else |

Motion defaults:
- Scene change: 280ms fade + 12px rise  
- Lab feedback: 150–200ms  
- Shock stamp: short, decisive scale-in  
- Honor `prefers-reduced-motion`

---

## 7. Content editing connection (for you / sir)

```text
Edit file in /content  →  save  →  Next.js hot reload (dev)
                         →  commit  →  Vercel redeploy (prod)
```

Zod schemas validate:
- scene ids & order  
- prompt tool names exist in `tools.json`

Offline backup path validation is **not** required.

So “connection” between content and UI is: **typed content pipeline**, not a CMS database.

---

## 8. Runtime behaviour

1. App loads `workshop.meta.json` + scene index.  
2. Duration profile (`90`) filters `optional` scenes.  
3. Shell renders current scene via `SceneRenderer`.  
4. Labs read their own content slices.  
5. User actions either:
   - navigate scenes,
   - mutate local UI state (dial, tokens, drag-tier),
   - clipboard + open external tool (Wi‑Fi).
6. Presenter mode reads `content/notes/*.md` and demo tray actions.

No WebSocket. No shared multiplayer. One presenter laptop drives the room.

---

## 9. Environment & secrets

| Item | v1 decision |
|---|---|
| `.env` | Almost empty — optional `NEXT_PUBLIC_SITE_URL` only |
| API keys | **None in app** (presenter uses their own logged-in tool accounts) |
| Analytics | Off |

---

## 10. Quality bar before workshop day

- [ ] Keyboard-only full run (90 profile)  
- [ ] Projector test at 1080p  
- [ ] Core live demos work on Wi‑Fi (Copy + Open tools)  
- [ ] Scene 20 opens HeyGen/Runway with script  
- [ ] Prompt copy works in Chrome/Edge  
- [ ] Content validation passes on build  

---

## 11. Decision summary

| Topic | Decision |
|---|---|
| Theme | **Light only** |
| Colors | Cool gray-blue bg, white surfaces, navy authority, teal actions, orange warnings |
| Stack | Next.js + TS + Tailwind + Framer Motion + Zod content |
| AI connection | Clipboard + external tool URLs (no backend AI) |
| Live video | External HeyGen/Runway — site is launchpad only |
| Offline demos | **Out of scope** (Wi‑Fi venue) |
| Data | `/content` files as source of truth |
| Deploy | Vercel primary |
| Auth/DB | None in v1 |

This is the build contract. Implementation continues from remaining audit Wave A/B items.
