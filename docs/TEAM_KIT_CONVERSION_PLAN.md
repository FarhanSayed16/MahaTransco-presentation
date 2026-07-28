# TEAM KIT → WORKSHOP CONVERSION PLAN

**Purpose:** Convert inspiration from the team speaker kit (`workshop-md-file/`) into improvements for our interactive MahaTransco workshop — without rebuilding a PowerPoint or abandoning what already works.

**Sources (reference only):**
- `workshop-md-file/PRESENTATION_ROADMAP.md` … `11_APPENDIX.md`
- Current product: 28 scenes under `content/scenes/`, labs, playground, `docs/MASTER_PLAN.md`, `docs/COMPLETE_WORKSHOP_BLUEPRINT.md`

**Rule of conversion:** Take what explains AI better for skeptical senior officers. Do **not** wholesale copy the 14-slide PPT, dark theme, or offline-backup operating model.

**Status:** Conversion **implemented** (Phases A–D) · Hook = image-scene pedagogy · Multi-channel = MahaTransco outage adaptation · No new scenes  
**Related:** `TECHNICAL_ARCHITECTURE.md` · `COMPLETE_WORKSHOP_BLUEPRINT.md` · `AUDIT_FIXES_AND_IMPROVEMENTS.md` · `workshop-md-file/`  
**Decisions locked for implementation:**
1. Hook style **A** — teach “is this real?” at Scene `18-image` (no cold-open micro-scene).  
2. Multi-channel demo = **MahaTransco outage advisory** cascade (not rainfall verbatim).  
3. Prefer enrich existing scenes; stay at 28 scenes.

---

## 0. Verdict (executed)

| Axis | Team kit | Our workshop | Decision |
|---|---|---|---|
| Format | 14-slide PPT + speaker script | 28-scene interactive keynote-lab | **Keep our product form** |
| Narrative | Demo first → theory later | Theory labs → wow → discipline | **Keep theory labs; borrow demo narratives** |
| Framing | IAS / District Administration | MahaTransco / GoM | **Keep MahaTransco; borrow IAS-grade examples where they fit** |
| Strength | Live demo scripts, never-upload list, IT Rules detail, 55 use cases, Q&A | Interactive labs, enterprise prompts, DPDP cards, playground | **Merge: their copy + our interactions** |
| Weakness | Thin on durable mental models | Thin on hook psychology, multi-channel demo, regulatory specificity | **Fixed in this conversion** |

**North-star sentence from the team (keep as presenter mantra):**  
> *AI can already do a meaningful part of an officer's paperwork, translation, and analysis workload today — for free, in minutes, if you know how to ask.*

**Close line (already aligned):**  
> *AI will not replace officers. Officers who understand AI will outperform officers who don't.*

---

## 1. What the team kit is really good at

1. **Audience psychology** — skeptical IAS officers; show real result before theory; participation (show of hands).
2. **Demo-first stories** with copy-paste prompts:
   - Rainfall circular → Marathi / Hindi / WhatsApp / tweet (iteration = the skill).
   - NotebookLM: summarize → deadlines with pages → FAQ → briefing note.
   - Image/video with governance subjects.
3. **Concrete privacy** — open-phone-line metaphor; explicit never-upload list; “public website tomorrow?” habit.
4. **Regulatory specificity** — SGI term, persistent labelling, provenance, 2-hour takedown, IndiaAI Guidelines (Nov 2025).
5. **Leave-behinds** — 55 use cases, tool directory, Q&A bank, glossary.

## 2. What our workshop is already better at

1. Interactive labs (Token Lab, Prompt Methods, Enterprise Builder, DPDP cards, Deepfake drill).
2. Durable concepts (LLM vs SLM, transformer intuition, temperature, persona, hallucination clinic).
3. MahaTransco-native scenarios (shutdown notice, load-shedding, etc.).
4. Product ops locked: light theme, Wi‑Fi live demos, no hosted LLM, Scene 20 = HeyGen/Runway launchpad.
5. Playground + resource pack as lasting leave-behind infrastructure.

**Do not tear these down** to recreate a 14-slide deck.

---

## 3. Gap map (team topic → our scene)

| Team beat | Our scene | Gap |
|---|---|---|
| Hook “is this real?” photoreal image | `01-opening` / `18-image` | Opening is a title card — **no belief-calibration hook** |
| Show-of-hands (ChatGPT / image / official work) | `02-promise` | **Missing** — personal vs official use gap |
| Landscape (6 specialists) | `04` + `05-tools-wall` | Covered; Code/Agents columns thin (OK for Core) |
| Text multi-format cascade | `14-live-writing-demo` | **Partial** — shutdown + bilingual only; no WhatsApp/tweet cascade |
| Image / video demos | `18`, `20` | Covered; refine prompts to team quality |
| NotebookLM 4-prompt script | `21-rag-explainer` | **Partial** — concept yes; exact 4 prompts missing |
| Prompt engineering | `11`–`13` | Stronger than team; keep; add their **iteration** story |
| Tokens / hallucination | `09`, `10`, `22` | Stronger than team |
| Never-upload privacy | `23-dpdp-tiers` | Tiers good; **never-upload list + habit line thin** |
| IT Rules / SGI detail | `24-it-rules` | **Thin** — no SGI, dates, 2-hour rule |
| Deepfake checklist | `25-deepfake-drill` | Good; add escalate + “target + verifier” framing |
| 55 use cases | Playground / `27` | **Mostly missing** as curated handout |
| Q&A bank | Presenter notes | **Missing** |
| IndiaAI policy name-drop | `24` / `26` | **Missing** |
| Gemini + NotebookLM in tool directory | `content/tools.json` | **Missing** from tools file |

---

## 4. Conversion principles (locked for this plan)

1. **Inspiration, not duplication** — port teaching beats and copy quality, not slide count or dark PPT look.
2. **Prefer enrich existing scenes** over adding scenes (stay near 28 for 90-min Core).
3. **MahaTransco-native adaptation** — rainfall cascade → **outage / monsoon advisory** for transmission utility context where relevant.
4. **Demo first *moments*, not demo-first *whole arc*** — keep Act II labs; make Act III demos as strong as the team kit.
5. **Respect locked product decisions** (see §8 Do-not-port).
6. **Content lives in `/content`** — rewrites are mostly JSON/MD, not layout rewrites, unless UI clearly blocks the teaching beat.

---

## 5. Recommended changes (prioritized)

### P0 — Must convert (credibility + demo power)

#### P0-1 · Multi-channel live writing cascade
**Source:** `03_LIVE_DEMOS.md` §1 + `08_PROMPT_ENGINEERING.md` (iteration)  
**Destination:** `14-live-writing-demo` + `content/demos/writing/` + speaker notes  
**Change:**
- Keep MahaTransco scenario (planned shutdown / heavy-weather advisory).
- Add follow-up chain: **Marathi → Hindi → WhatsApp (&lt;40 words) → X/Twitter (&lt;280)**.
- Teaching line: *one notice, four audiences, under two minutes — judgment stays with the officer; retyping dies.*
**Why:** This is the team’s best proof that prompting = iteration, not magic.

#### P0-2 · NotebookLM four-prompt pack
**Source:** `03_LIVE_DEMOS.md` §4  
**Destination:** `21-rag-explainer` demo tray + notes + optional playground “docs” prompts  
**Change:** Ship exact prompts:
1. Summarize in 5 bullets for a senior officer  
2. List every deadline/date with **page number**  
3. 8 field-officer FAQs with short answers  
4. One-page formal briefing note  
**Why:** Citations answer “can I trust this?” better than any RAG animation alone.

#### P0-3 · Never-upload list + habit on DPDP scene
**Source:** `06_DATA_PRIVACY.md`  
**Destination:** `23-dpdp-tiers` content + resource checklist  
**Change:**
- On-screen sparse **never upload** list (Aadhaar, FIR/evidence, Cabinet, medical, tender eval, citizen PII combos…).
- Habit line: *“Would I be comfortable if this exact text appeared on a public website tomorrow?”*
- Metaphor: free AI = **open phone line**.
**Why:** Tiers teach *which tool*; the list teaches *what never leaves the building*.

#### P0-4 · Rewrite IT Rules scene with SGI specifics
**Source:** `07_DEEPFAKE_AND_AI_MISUSE.md`  
**Destination:** `24-it-rules`  
**Change:** Include (accurate, sparse bullets):
- Term **Synthetically Generated Information (SGI)**  
- **Persistent** labelling (entire duration; not removable)  
- Provenance/metadata where feasible  
- **2-hour** takedown for worst non-consensual intimate deepfake content  
- One-line IndiaAI Governance Guidelines (Nov 2025) / “Do No Harm”  
**Why:** Senior officers need actionable law, not vague “label your content.”

#### P0-5 · Align `tools.json` with demos
**Source:** `09_AI_TOOL_DIRECTORY.md`  
**Destination:** `content/tools.json` + Tools Wall  
**Change:** Add **Gemini** and **NotebookLM** (and optionally Canva/Gamma as “slides”) so Copy/Open buttons match the script.  
**Why:** Scene copy already mentions them; tool file must not lag.

---

### P1 — Should convert (opening psychology + leave-behinds)

#### P1-1 · Personal vs official use “poll” beat
**Source:** `01_MASTER_PRESENTATION.md` Phase 2 + Slide 3  
**Destination:** Enrich `02-promise` (preferred) **or** tiny optional scene `02b` only if timing allows  
**Change:** Three reveal steps / show-of-hands cues:
1. Used ChatGPT or similar?  
2. Generated an image?  
3. Used AI for **official** work?  
Speaker line: *that gap is why this session exists.*  
**Scene count impact:** **+0** if merged into `02`.

#### P1-2 · Optional “is this real?” hook
**Source:** Phase 1 hook + `03` opening image prompt  
**Destination options (pick one when implementing):**
- **A (preferred for Core):** Teach the same beat at start of `18-image` (“before I open the tool — would you trust this image?”) using a **pre-generated** public sample — no new Act I scene.  
- **B:** Short cold-open before title (new micro-scene) — only if 90-min profile still fits.  
**Do not** require live image gen for the hook; pre-gen is fine.

#### P1-3 · Deepfake framing + escalate step
**Source:** `07`  
**Destination:** `25-deepfake-drill` intro + step list  
**Change:** Officers are **targets** and **verification points**; add escalate-through-proper-channel; closing callback to earlier demos (*same tools, opposite intent*).

#### P1-4 · Reusable officer prompt template
**Source:** `08_PROMPT_ENGINEERING.md`  
**Destination:** `13-enterprise-builder` + playground leave-behind  
**Change:** Role · Task · Audience · Tone · Length · Format · Avoid — as sticky template card.

#### P1-5 · Curate use cases (not all 55 on screen)
**Source:** `05_GOVERNMENT_USE_CASES.md`  
**Destination:** Playground categories + Scene `27` one-pager  
**Change:** Port **12–20** highest-value cases (drafting multi-channel, RTI FAQ, grievance clustering, myth-vs-fact, deepfake rebuttal draft, disaster advisory). Tag MahaTransco-relevant ones first.

#### P1-6 · Q&A preparation bank
**Source:** `10_QNA_PREPARATION.md`  
**Destination:** `content/notes/qna.md` + Presenter panel / closing notes  
**Change:** Strong answers for: final-doc admissibility, free-tier training, gov-approved tools, won’t replace translation/design cells, hallucination, accountability, “are you selling?”

#### P1-7 · One-page cheat sheet
**Source:** `11_APPENDIX.md` + README “handout” promise  
**Destination:** `27-resource-pack` downloadable  
**Contents:** Tool map · never-upload · verification checklist · QR to playground.

---

### P2 — Nice to have (120-min / ask-only depth)

| Item | Source | Destination |
|---|---|---|
| Gamma “doc → 6-slide outline” extension | `03` §4 | Demo note on `21` |
| Governance metaphors (tokens = line items; RAG = record room; hallucination = confident subordinate) | `04` | Speaker notes `09`/`21`/`22` |
| Agents / MCP awareness | `04` | Presenter notes only — **not** a Core scene |
| Grievance / analytics prompt cluster | `05` | Extra playground prompts |
| Vaccination-poster style image prompt | `03` §2 | Optional playground image card |
| Veo as alternate video tool note | `09` | Optional note; product stays HeyGen/Runway primary |

---

## 6. Scene-by-scene conversion checklist

| Scene | Action | Priority |
|---|---|---|
| `01-opening` | Minor: reframe line “working session, not a sales pitch”; keep LogoLockup | P1 |
| `02-promise` | Add poll / gap beat | P1 |
| `03-pillars` | Keep | — |
| `04-ai-not-app` | Optional: Secretariat metaphor one line | P2 |
| `05-tools-wall` | Align with updated `tools.json` | P0 |
| `06`–`10` | Keep labs; borrow metaphors into notes | P2 |
| `11-prompt-methods` | Keep; ensure notes stress **iteration** | P1 |
| `12`–`13` | Keep; add reusable template card | P1 |
| `14-live-writing-demo` | **Rewrite demo script** to multi-channel cascade | **P0** |
| `15-playground` | Absorb curated use cases + template | P1 |
| `16`–`17` | Keep | — |
| `18-image` | Stronger relief-camp prompt; optional hook pedagogy | P1 |
| `19-voice` | Keep (awareness); no live cloning | — |
| `20-video-shock` | Keep launchpad model; improve script quality from team | P1 |
| `21-rag-explainer` | **Add NotebookLM 4-prompt pack** | **P0** |
| `22-hallucination` | Keep; verify habit already strong | — |
| `23-dpdp-tiers` | **Never-upload + habit + open phone line** | **P0** |
| `24-it-rules` | **Full SGI / labelling / 2-hour rewrite** | **P0** |
| `25-deepfake-drill` | Framing + escalate | P1 |
| `26-officer-playbook` | Add IndiaAI one-liner if not on `24` | P1 |
| `27-resource-pack` | One-pager cheat sheet | P1 |
| `28-closing` | Keep quote; point to Q&A bank | P1 |

**New scenes recommended:** **0** (preferred). Absolute max **+1** (poll/hook) only if Core timing still works — then demote something else to optional (e.g. `19-voice` or `16-temperature` already optional-friendly).

**Merges / deletes:** None required. Do not collapse to 14 slides.

---

## 7. Implementation phases (when you say go)

### Phase A — Safety & law (½ day)
- Rewrite `23`, `24`, enrich `25`
- Update `tools.json` + Tools Wall entries
- Update matching speaker notes

### Phase B — Demo power (½–1 day)
- Multi-channel writing demo pack + UI steps if needed
- NotebookLM prompt pack on `21` / DemoTray
- Image/video prompt polish

### Phase C — Opening psychology (¼ day)
- Poll beat on `02`
- Decide hook A vs B; implement chosen path

### Phase D — Leave-behinds (½ day)
- Curate 12–20 use cases into playground
- Q&A notes file
- One-page cheat sheet in `public/resources/`
- Officer template card

### Phase E — Rehearsal pass
- Cue sheet + runbook update with new demo order inside Act III
- Presenter dry run: rainfall/outage cascade + NotebookLM + privacy pause
- Confirm no confidential samples in NotebookLM upload set

---

## 8. Explicitly DO NOT port

| Team item | Why |
|---|---|
| Dark navy PPT aesthetic | Locked light theme |
| 14-slide-only structure | Product is interactive keynote-lab |
| “Assume Wi‑Fi fails” + screenshot USB packs as delivery gate | Locked Wi‑Fi-first; no BackupViewer |
| Hosted LLM / in-app generation | Locked: copy → external tools |
| Live voice-clone / face-swap demos | Wrong lesson; team itself forbids |
| Naming real serving officials as deepfake examples | Reputation / ethics |
| Moving **all** theory after demos | Would gut Acts I–II labs that already teach better |
| All 55 use cases as on-screen slides | Handout/playground only |
| Full agents/MCP lecture as Core scene | Ask-only depth |
| Veo as mandatory video path | Keep HeyGen/Runway as primary launchpad |

---

## 9. Success criteria (after conversion)

An officer leaving the room can answer:

1. **Which tool** for text / image / video / documents?  
2. **What never** to paste into free AI?  
3. **How to verify** a suspicious forward (and what SGI labelling means)?  
4. **How to ask** (role + constraints + iterate across channels)?  

And the website still feels like a **premium interactive workshop**, not a converted PPT.

---

## 10. Decision needed from you

Please confirm:

1. **Approve Phase A → D** as the conversion backlog?  
2. Hook style: **A** (teach at image scene) or **B** (cold-open micro-scene)?  
3. Multi-channel demo: keep **MahaTransco outage** adaptation, or use team’s **rainfall circular** verbatim?  
4. Any team sections you want **excluded** even from leave-behinds (e.g. full 55 use cases, Q&A “are you selling”)?

Once you answer, implementation starts with **Phase A (P0 safety/law)** then **Phase B (demo power)**.

---

## Appendix — Team kit file → primary consumer

| Team file | Primary consumer in our product |
|---|---|
| `PRESENTATION_ROADMAP.md` | Presenter mantra + cue sheet tone |
| `01_MASTER_PRESENTATION.md` | Speaker notes enrichment |
| `02_PPT_CONTENT.md` | One-idea discipline for on-screen copy |
| `03_LIVE_DEMOS.md` | Scenes `14`, `18`, `20`, `21` |
| `04_AI_KNOWLEDGE_GUIDE.md` | Notes / optional deepen |
| `05_GOVERNMENT_USE_CASES.md` | Playground + handout |
| `06_DATA_PRIVACY.md` | Scene `23` + resources |
| `07_DEEPFAKE_AND_AI_MISUSE.md` | Scenes `24`, `25` |
| `08_PROMPT_ENGINEERING.md` | Scenes `11`–`14`, template |
| `09_AI_TOOL_DIRECTORY.md` | `tools.json`, Tools Wall, cheat sheet |
| `10_QNA_PREPARATION.md` | Presenter Q&A bank |
| `11_APPENDIX.md` | Glossary + one-pager |

---

*Generated from comparison of `workshop-md-file/` against the current 28-scene interactive workshop. Master Plan still wins on product architecture conflicts.*
