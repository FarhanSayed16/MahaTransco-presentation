**IAS AI WORKSHOP — SPEAKER KIT** 

**04 — AI Knowledge Guide** 

# **04 — AI Knowledge Guide** 

This is for YOU, not the audience. Master this so you can answer any question thrown at you, but only ever surface the simplified, one-line version live (see 01_MASTER_PRESENTATION.md ). Each concept below has: what it is, a governance analogy you can use if asked, and why it matters for this audience. 

## **1. Tokens** 

**What it is:** AI models don't read text letter by letter or word by word — they break it into chunks called tokens (roughly ¾ of a word in English). "Administration" might be one token; "disbursement" might split into two. 

**Analogy:** Think of tokens like the individual punched cards or line-items in an old file-processing system — the model reads and writes in these fixed units, and everything (cost, speed, memory) is measured in them. 

**Why it matters here:** Every AI subscription/API is billed by tokens. It also explains why very long documents sometimes get summarized unevenly — the model is managing a token budget, not reading like a human. 

## **2. Context Window** 

**What it is:** The maximum number of tokens (input + output combined) a model can "hold in mind" during one conversation. Once you exceed it, the model starts forgetting the earliest parts. 

**Analogy:** It's like a physical file the officer is holding — after a point, older pages fall off the desk to make room for new ones being added. 

**Why it matters here:** If an officer pastes a 200-page report directly into a chat tool with a small context window, the model may lose track of the beginning. This is exactly why document tools like NotebookLM are built differently — they index the whole document rather than holding it all in active memory at once. 

## **3. Temperature** 

**What it is:** A setting that controls how "creative" vs. how "predictable" a model's output is. Low temperature = safe, repetitive, literal. High temperature = varied, creative, occasionally odd. 

**Analogy:** Low temperature is a cautious junior officer sticking strictly to precedent; high temperature is a more experimental one trying a new approach each time. 

**Why it matters here:** For official drafting, always favor lower-temperature, more literal outputs. For creative/awareness content (posters, campaign slogans), higher temperature can help. 

## **4. Hallucination** 

**What it is:** When a model states something false with full confidence — a wrong date, an invented citation, a fabricated statistic — because it is predicting plausible-sounding text, not retrieving verified facts. 

**Analogy:** Like a well-spoken subordinate who answers confidently in a meeting without actually checking the file — sounds right, isn't always right. 

**Why it matters here:** This is the single most important caution for this audience. Never let an AI-generated number, date, legal section, or citation go into an official document unverified. 

## **5. RAG (Retrieval-Augmented Generation)** 

**What it is:** Instead of relying purely on what the model "remembers" from training, RAG lets the model first search/retrieve real documents (a database, a set of PDFs, the internet) and then generate its answer grounded in those retrieved sources. 

**Analogy:** The difference between an officer answering from memory versus an officer who first pulls the actual file from the record room before answering. 

**Why it matters here:** NotebookLM is a RAG tool — its answers are grounded in the uploaded document, which is why it can cite page numbers. This is a strong selling point for trust with this audience. 

## **6. Reasoning Models** 

**What it is:** Newer AI models (sometimes labelled "thinking" or "reasoning" modes) that work through a problem in multiple internal steps before 

answering, useful for multi-step analytical tasks (e.g., "given this grievance data, identify the three districts with the fastest-rising complaint volume and suggest why"). 

**Why it matters here:** Useful for genuine analysis tasks, not just drafting. Slower and sometimes more expensive, but more reliable on multi-step logic. 

## **7. Vision, Image, Video, and Speech Models** 

**Vision models** _read_ images (e.g., "what does this scanned form say," "is this signature present"). 

- **Image models** _generate_ images from text (Gemini, Nano Banana, ChatGPT Images). 

- **Video models** _generate_ short video clips from text (Google Veo, Pika, Runway). 

- **Speech/audio models** convert text to speech or clone/synthesize voices (ElevenLabs) — the same category of tool that makes voice deepfakes possible, which is why it's covered again in 07_DEEPFAKE_AND_AI_MISUSE.md . 

## **8. AI Agents** 

**What it is:** Instead of a single question-answer exchange, an "agent" is an AI system that can take a multi-step action on its own — search, retrieve a file, fill a form, send an email — chaining several tools together toward a goal, sometimes with human approval at checkpoints. 

**Analogy:** The difference between asking a clerk one question versus asking them to "handle the entire correspondence file for this quarter" and checking in only when they're unsure. 

**Why it matters here:** This is the direction the technology is heading — from "AI answers my question" to "AI completes my task." Relevant for future automation of routine reporting/dashboarding work, but still needs human oversight for anything official. 

## **9. Function Calling** 

**What it is:** The technical mechanism that lets an AI model trigger a specific external action (e.g., "look up the weather," "query a database," "send this to an API") rather than only producing text. 

**Why it matters here:** This is what underlies things like automated dashboard refreshes or an AI assistant that can actually check a live scheme database rather than guessing. 

## **10. MCP (Model Context Protocol)** 

**What it is:** An open standard that lets AI models connect to external tools and data sources (email, calendars, internal databases, document stores) in a consistent way, rather than each integration being custom-built. 

**Analogy:** Think of it as a standard file-transfer protocol between departments — instead of every office having its own incompatible format, everyone speaks the same protocol. 

**Why it matters here:** This is a "basic awareness" topic — if asked, describe it as the emerging standard that will make government-specific AI integrations (e.g., an AI assistant that can safely query a scheme database) more feasible and secure over time. 

## **11. Enterprise AI, On-Premise AI, and Government-Approved AI** 

**Enterprise AI:** Paid business-tier versions of tools like ChatGPT/Gemini with contractual guarantees that your data is not used to train the model. 

**On-premise / Local LLMs:** Models that run entirely on government-owned servers/hardware, with no data ever leaving the network. 

- **Government-approved AI:** Platforms vetted and cleared for use with official or citizen data under emerging IndiaAI Mission governance guidelines. 

**Why it matters here:** This is the practical answer to "so should we just never use AI for real work?" — no; use the right tier of AI for the sensitivity of the data. Full detail in 06_DATA_PRIVACY.md . 

## **12. Copyright and AI-Generated Content** 

**What it is:** AI-generated text/images/video may draw on copyrighted training data, and ownership of AI-generated output is still a legally evolving area in India and globally. 

**Why it matters here:** Avoid using AI-generated content that closely mimics a specific named artist's style or a copyrighted character in any official government publication; treat AI output as a first draft you have rights to edit and publish, not a final asset to publish unmodified in high-stakes contexts without review. 

## **13. Deepfakes and Responsible AI** 

Full section in 07_DEEPFAKE_AND_AI_MISUSE.md . In brief: the same generative capability behind today's demos can fabricate convincing fake 

audio/video of real people, and India's IT Rules were amended in February 2026 specifically to require labelling and faster takedown of such synthetic content. 

## **14. Government AI Landscape in India (context for this audience)** 

- **IndiaAI Mission (MeitY):** The umbrella national program for AI adoption, safety, and compute access. 

- **India AI Governance Guidelines (unveiled 5 November 2025):** A national framework built around a "Do No Harm" principle, human-centricity, and using existing law wherever possible rather than a single new AI Act — seven ethical principles ("sutras") and six governance pillars, with a short/medium/long-term action plan. 

- **India–AI Impact Summit 2026 (19–20 Feb, New Delhi):** India positioning itself as a convener of global AI governance norms, especially for the Global South. 

- **IT Rules (Intermediary Guidelines) Amendment 2026:** Notified 10 Feb 2026, effective 20 Feb 2026 — brings "synthetically generated information" (deepfakes and AI-altered media) formally under the IT Rules, with mandatory, persistent labelling and much shorter takedown windows for the worst content (down to 2 hours for non-consensual/morphed imagery). 

- **DPDP Act, 2023:** India's Digital Personal Data Protection Act — the primary law governing how any personal data (including what you might type into an AI tool) can be collected, used, and protected. This is your legal anchor point in the data privacy section. 

**Why this matters for your credibility:** Senior IAS officers will respect that you know the actual policy landscape, not just the consumer tools. Referencing the IndiaAI Governance Guidelines and the Feb 2026 IT Rules amendment by name signals you've done your homework. 

## **15. Responsible AI — the one-line framework to fall back on** 

If asked "how do we use this responsibly," the simplest defensible answer: **verify before you rely, protect what shouldn't leave the building, and disclose when something is AI-generated.** Everything else in this guide supports one of those three principles. 

AI as an Administrative Officer's Digital Assistant — Workshop Documentation 

