**IAS AI WORKSHOP — SPEAKER KIT** 

**08 — Prompt Engineering Guide** 

# **08 — Prompt Engineering Guide** 

For you to master, and to explain simply in Phase 5 of the session. Every technique below is illustrated using the same running example — the rainfall circular — so you can reuse it live. 

## **The five techniques, in the order to teach them** 

### **1. Zero-shot prompting (the default)** 

Just asking directly, no examples given. 

_"Draft an official circular informing citizens that heavy rainfall is expected over the next three days."_ 

This is what most people already do. It works reasonably well for simple tasks. 

### **2. Role prompting** 

Telling the model _who_ it should act as changes tone, vocabulary, and structure dramatically. 

_"You are a senior government press information officer. Draft an official circular..."_ 

Compare outputs with and without the role — the role version is noticeably more formal and structured. This is the single easiest upgrade to teach the audience. 

### **3. Context and constraints** 

Give the model the details that matter: audience, length, tone, format, what to avoid. 

_"Draft a circular for district residents, under 150 words, formal tone, avoiding technical meteorological jargon, ending with a helpline number placeholder."_ 

The more specific the constraints, the less editing you'll need afterward. 

### **4. Few-shot prompting** 

Giving the model 1–3 examples of the style/format you want, before asking for a new one. 

_"Here is an example of our department's circular format: [paste one real example]. Using the same tone and structure, draft a new circular about the upcoming rainfall."_ 

Extremely useful for matching an office's existing house style exactly. 

### **5. Chain-of-thought / step-by-step prompting** 

For anything analytical (not just drafting), explicitly ask the model to reason in steps before concluding. 

_"First list every deadline mentioned in this document. Then, for each deadline, note which department is responsible. Finally, summarize which deadlines are most urgent."_ 

This produces far more reliable analytical output than asking for the conclusion directly, and it's the technique to highlight when discussing the NotebookLM demo. 

## **Iteration — the real skill** 

The single most important lesson: **the first response is a draft, not a final answer.** The text demo's four follow-ups (Marathi, Hindi, WhatsApp, Twitter) is iteration in action — each follow-up refines or reformats the previous output rather than starting over. Teach the audience to think in 

follow-ups, not single perfect prompts. 

## **A reusable prompt template for officers** 

_"You are a [role]. [Task in one sentence]. Audience: [who reads this]. Tone: [formal/simple/urgent]. Length: [word/character limit]. Format: [circular/email/social post/table]. Avoid: [jargon/technical terms/anything specific]."_ 

## **Common mistakes to warn the audience about** 

- **Vague prompts** ("write something about the scheme") produce generic, unusable output — specificity is everything. 

- **Treating the first output as final** — always iterate at least once. 

- **Assuming factual accuracy** — a well-formatted, confident-sounding answer is not the same as a verified one (this links directly back to hallucination in 04_AI_KNOWLEDGE_GUIDE.md ). 

- **Pasting large confidential documents directly into chat** instead of using a document-intelligence tool designed for that purpose (links to 06_DATA_PRIVACY.md ). 

AI as an Administrative Officer's Digital Assistant — Workshop Documentation 

