# Refined Scene Content — Complete Set (Scenes 01–28), Simple English

**This replaces the earlier Batch 1 file.** Every scene has been rewritten in plain, direct English — no idioms, no clever phrasing, no "high-end" vocabulary. Short sentences. Say the thing directly.

Example of the change you asked for:
- Before: *"What You'll Walk Away With Today"*
- Now: *"What Will You Learn Today?"*

That same standard has been applied across all 28 scenes below. Each block is ready to paste as the `"content"` object into the matching JSON file — `id`, `title`, `act`, `flags`, and `layout` are untouched.

---

## 01-opening.json
```json
{
  "headline": "AI as a Digital Assistant for Administrative Leadership",
  "body": "This is a practical session for MahaTransco and Government of Maharashtra officers. It is not a sales talk. You will see real AI tools, ready-to-use prompts, and clear rules on what should never be uploaded to any AI tool.",
  "speaker": "Akshay Ridlan"
}
```

## 02-promise.json
```json
{
  "headline": "What Will You Learn Today?",
  "body": "You will learn three simple skills you can use at your desk tomorrow. No coding needed. Let us start with a quick show of hands.",
  "bullets": [
    "Show of hands: who has used ChatGPT or a similar tool at least once?",
    "Show of hands: who has made an image using AI?",
    "Show of hands: who has used AI for real office work — a draft, a translation, or a summary?",
    "By the end of today, you will be able to: write a notice in minutes, summarise a long file with page numbers you can check, and make outreach images safely."
  ]
}
```

## 03-pillars.json
```json
{
  "headline": "Three Things to Remember Today",
  "body": "Using AI well needs three things together: the right tool, staying in control of the output, and following the rules for government data. Miss any one of these, and AI becomes a risk instead of a help.",
  "bullets": [
    "The Right Tool — use the best AI tool for the job, not just the one you know",
    "Full Control — learn prompts, tokens, and settings so the output stays predictable",
    "Governance First — follow the DPDP Act 2023 and IT Rules at every step"
  ]
}
```

## 04-ai-not-app.json
```json
{
  "headline": "AI Is Not One App",
  "body": "Think of it like your Secretariat. There are many desks, and each one does a different job — not one desk that does everything. Text, images, video, documents, and research each need a different tool. ChatGPT is only one tool among many. It is often not the best one for the job.",
  "bullets": [
    "Writing and tone drafts → ChatGPT, Claude, Gemini",
    "Research with sources you can check → Perplexity",
    "Long documents with page numbers → NotebookLM",
    "Images, video, and voice → Midjourney/Gemini, Runway, HeyGen, ElevenLabs"
  ]
}
```

## 05-tools-wall.json
```json
{
  "headline": "AI Tools — A Quick Guide",
  "body": "A simple guide: which tool to use for which task, and which to avoid. Click on any tool to see how officers are using it.",
  "bullets": [
    "Writing → ChatGPT, Claude",
    "Research → Perplexity, NotebookLM",
    "Media → Midjourney, Runway, HeyGen, ElevenLabs",
    "Presentations and notes → Gamma, Notion AI, Descript"
  ]
}
```

## 06-generative-ai.json
```json
{
  "headline": "What Is Generative AI?",
  "body": "AI that can write, draw, or speak — based on what you ask it to do. Think of it as a fast assistant. It needs clear instructions every time, or the result will be generic.",
  "bullets": [
    "You give it a prompt. It creates a response.",
    "It guesses the most likely answer. It does not \"know\" facts the way a database does.",
    "Better instructions give better results, every time."
  ]
}
```

## 07-llm-vs-slm.json
```json
{
  "headline": "Cloud AI vs Local AI — Where Does Your Data Go?",
  "body": "This is first a security decision, then a technology choice. Check how sensitive the data is before you pick a tool.",
  "bullets": [
    "Cloud AI (GPT-4, Claude, Gemini) — most powerful, but your data leaves the building and sits on someone else's server",
    "Local AI (Llama, Gemma, Phi) — runs on your own laptop, data never leaves — best for sensitive files",
    "Rule of thumb: check the data first, then choose the tool"
  ]
}
```

## 08-transformer-intuition.json
```json
{
  "headline": "How Does AI Answer You?",
  "body": "Sounding confident is not the same as being correct. AI does not look up facts. It builds an answer one small piece at a time, by guessing what comes next. That is why it can sound right and still be wrong.",
  "bullets": [
    "Your question comes in",
    "It is broken into small pieces — more on this in the next lab",
    "The model guesses the next likely piece, again and again",
    "All these pieces together become the final answer"
  ]
}
```

## 09-token-lab.json
```json
{
  "headline": "Token Lab — See How AI Reads Your Text",
  "body": "AI does not read full words. It reads small pieces called tokens. Hindi and Marathi text usually takes 2 to 3 times more tokens than the same line in English.",
  "bullets": [
    "Try it: type an English circular, then the same line in Hindi, then in Marathi",
    "Context window is the AI's working memory for this chat. Bigger is not always better.",
    "For a big PDF, do not paste the whole file. Use RAG or NotebookLM instead."
  ]
}
```

## 10-context-window.json
```json
{
  "headline": "How Much Can AI Read at Once?",
  "body": "A bigger memory helps, but for a 200-page policy file, a tool like NotebookLM still works better than pasting the whole file in.",
  "bullets": [
    "8,000 tokens is about 10 to 12 pages — enough for a memo or a short letter",
    "128,000 tokens is about 190 to 200 pages — a thick case file, but AI can miss details in the middle",
    "1 to 2 million tokens is about 1,500 pages or more — very long, but still check the answer. Never trust a blind paste."
  ]
}
```

## 11-prompt-methods.json
```json
{
  "headline": "Five Ways to Write a Better Prompt",
  "body": "You do not need to write a long message. The result gets better the moment you give AI a role, an example, and a clear limit.",
  "bullets": [
    "Zero-shot — just ask directly. Fast, but often generic.",
    "Role prompting — \"Act as a senior district officer writing a public notice\"",
    "Few-shot — paste 1 to 3 examples of the exact format you want",
    "Constraints — set the word limit, the tone, and what to leave out",
    "Chain-of-Thought — ask it to explain its steps before the final answer. Good for anything with numbers or many parts."
  ]
}
```

## 12-weak-vs-enterprise.json
```json
{
  "headline": "Weak Prompt vs Enterprise Prompt",
  "body": "A vague question gets a vague answer. A clear, structured prompt gets you a draft you can actually use.",
  "bullets": [
    "Weak: \"Write a letter about land records\" → a generic essay nobody would sign",
    "Enterprise: Role + Context + Task + Constraints + Format → a draft ready to review",
    "The difference is not luck. It is structure, and you can learn it in five minutes."
  ]
}
```

## 13-enterprise-builder.json
```json
{
  "headline": "Build Your Own Enterprise Prompt",
  "body": "Fill in five parts — Role, Context, Task, Constraints, Format. Then click Assemble, Copy, and open it in ChatGPT or Claude.",
  "bullets": [
    "Try a ready-made example: land records, load shedding, disaster relief, or citizen charter",
    "Keep the constraints tight: set a word limit, a tone, and say no invented facts",
    "AI writes the draft. The officer who signs it is still responsible."
  ]
}
```

## 14-live-writing-demo.json
```json
{
  "headline": "One Notice, Four Versions, in Minutes",
  "body": "Copy a MahaTransco outage notice. Open ChatGPT or Claude. Then make more versions: Marathi, Hindi, WhatsApp, and a short social media post. You stay in control — you do not need to retype everything.",
  "bullets": [
    "Example: a notice about a planned power cut for a transmission line",
    "Next versions: Marathi → Hindi → WhatsApp (under 40 words) → X/Twitter (under 280 characters)",
    "Ask the room: would you sign a cleaned-up version of the English draft?"
  ]
}
```

## 15-playground-embed.json
```json
{
  "headline": "Prompt Playground — Prompts to Take Home",
  "body": "Ready-made prompts for official writing, research, translation, meetings, citizen replies, media, and safety checks. Copy any prompt and open it in your preferred AI tool.",
  "bullets": [
    "Browse prompts by category",
    "One click: Copy, then Open in ChatGPT, Claude, or Perplexity",
    "Take the full set home at /playground"
  ]
}
```

## 16-temperature-dial.json
```json
{
  "headline": "Temperature — How Creative Should AI Be?",
  "body": "Use low temperature for official letters and factual work. Use higher temperature for creative campaigns. Do not use high temperature for figures, legal sections, or citizen names.",
  "bullets": [
    "0.1 → factual and repeatable — safest for government letters",
    "0.7 → creative campaign writing and brainstorming",
    "1.0 and above → unpredictable and risky — avoid for official work"
  ]
}
```

## 17-persona-lab.json
```json
{
  "headline": "Lab: Make Your Own AI Assistant",
  "body": "Set the right tone and safety rules once. Then every draft starts correctly, and you do not need to repeat yourself each time.",
  "bullets": [
    "Open Google AI Studio → New Prompt → System Instructions",
    "Paste rules: formal tone, mark unchecked facts as [VERIFY], never invent numbers",
    "Set temperature to 0.15, then save as \"DM Executive Desk\""
  ]
}
```

## 18-image.json
```json
{
  "headline": "Before You Trust an Image, Ask: Is It Real?",
  "body": "AI can make a photo-like image from a two-line prompt in seconds. This is useful for a first draft of a campaign image. It is also why checking images matters.",
  "bullets": [
    "Question: would you have believed this was a real photo?",
    "Demo: an infrastructure or relief scene (no real officer's face)",
    "Open Gemini, Midjourney, or ChatGPT Images. A person still approves it before it is published."
  ]
}
```

## 19-voice.json
```json
{
  "headline": "AI Voice — Quick Advisories in Any Language",
  "body": "Paste a short advisory. Make a Marathi or Hindi voice version in seconds. Always say it was made using AI before you publish it on any official channel.",
  "bullets": [
    "Write a 20 to 30 second advisory script",
    "Make the voice using ElevenLabs or a similar tool",
    "Always add a label: \"This audio was made using AI\""
  ]
}
```

## 20-video-shock.json
```json
{
  "headline": "Watch AI Make a Talking Video, Live",
  "body": "Namaskar. This is a short public advisory from MahaTransco. Planned maintenance may affect power supply in selected areas tonight between 10 PM and 2 AM. For updates, please check official MahaTransco channels only. Thank you."
}
```

## 21-rag-explainer.json
```json
{
  "headline": "Read 90 Pages in 60 Seconds",
  "body": "NotebookLM and similar tools search your uploaded files first, then answer with the page number as proof. That page number is what lets you check if the answer is correct.",
  "bullets": [
    "Upload only public policy documents. Never upload confidential files.",
    "Try four prompts: summary → deadlines with page numbers → FAQ → short briefing note",
    "Page numbers make checking faster. They do not replace the officer's judgment."
  ]
}
```

## 22-hallucination-clinic.json
```json
{
  "headline": "When AI Sounds Right but Is Wrong",
  "body": "AI can write something that sounds correct but is completely wrong. You are still the signing officer. Always check before you send.",
  "bullets": [
    "Never send AI-written budget figures, legal sections, or citizen names without checking the original file",
    "Compare: an AI answer with no source, and a RAG answer with a page number",
    "Golden rule: a person must always check the AI's work in government tasks"
  ]
}
```

## 23-dpdp-tiers.json
```json
{
  "headline": "Check the Data First, Then Choose the AI",
  "body": "Treat every free AI tool like an open phone line that anyone can hear. Before you paste anything, ask: would I be fine if this exact text appeared on a public website tomorrow?",
  "bullets": [
    "Never upload to free AI: Aadhaar or citizen ID numbers, FIR or evidence, Cabinet drafts, medical records, tender evaluation sheets, unpublished budget numbers, or anything that identifies a citizen",
    "Level 1, Public → normal AI tools are fine",
    "Level 2, Internal → use enterprise AI with a no-training agreement",
    "Level 3, Confidential → use only a local, on-site AI",
    "Level 4, Classified → no internet-connected AI at all"
  ]
}
```

## 24-it-rules.json
```json
{
  "headline": "AI-Made Content — What the Rules Say",
  "body": "New IT Rules, notified in February 2026, call deepfakes and other AI-changed audio or video \"Synthetically Generated Information,\" or SGI. Platforms must label this content clearly. Officers must check before they share it further.",
  "bullets": [
    "SGI must carry a label for its full length — not a one-time mark that can be removed",
    "Where possible, the file's origin should show that it is synthetic",
    "For the worst kind of non-consensual content, platforms must remove it within 2 hours",
    "IndiaAI Guidelines, November 2025: Do No Harm — a person must still decide on sensitive data use",
    "Your duty: label AI-made official content, check viral messages through official channels, and report — do not share it further first"
  ]
}
```

## 25-deepfake-drill.json
```json
{
  "headline": "Deepfake Drill — You Can Be a Target or a Checker",
  "body": "Senior officers are often targets of fake voice notes and videos. Citizens also call officers when something suspicious is shared. Use this checklist before you forward or act on anything.",
  "bullets": [
    "PAUSE — a message that says \"forward this immediately\" is often a trick",
    "SOURCE — is it from a verified official channel, or just a forward from someone?",
    "CHECK — look for lip-sync issues, glitches, or unnatural sound",
    "SEARCH — do a reverse image or video search, and check official posts",
    "CONFIRM — check through a second official channel, like the control room or the PIO",
    "REPORT — report it to IT or the cyber cell. Do not share it publicly first."
  ]
}
```

## 26-officer-playbook.json
```json
{
  "headline": "Your Daily AI Playbook",
  "body": "A simple one-page guide, based on IndiaAI's Do No Harm rule: pick the tool, pick the right data level, write a clear prompt, check the answer, then act.",
  "bullets": [
    "Step 1: Pick the right tool for the job",
    "Step 2: Pick the right level based on how sensitive the data is (Level 1 to 4)",
    "Step 3: Use Role, Context, Task, Audience, Tone, Length, Format, and what to Avoid",
    "Step 4: For long documents, use NotebookLM or a similar tool — public files only",
    "Step 5: Check the facts. Label AI-made content where needed.",
    "Step 6: Save your best prompts and assistants. Never upload anything from the never-upload list."
  ]
}
```

## 27-resource-pack.json
```json
{
  "headline": "MahaTransco Officer Toolkit — Take It Home",
  "body": "A quick guide, a never-upload list, the daily playbook, a checklist, and the Prompt Playground. Scan the QR code or open the links.",
  "bullets": [
    "One-page quick guide (tools, privacy, checking facts, deepfakes)",
    "Never-upload checklist and the daily playbook",
    "Prompt Playground with ready prompts for multiple channels and NotebookLM",
    "Question and answer list for presenters"
  ]
}
```

## 28-closing.json
```json
{
  "headline": "AI Will Not Replace Officers. Officers Who Understand AI Will Do Better Than Those Who Don't.",
  "body": "Everything you saw today is free or almost free. It works in Marathi and Hindi too, and takes only minutes to learn. The real work is discipline: always check before you rely on it, and know what you must never share.",
  "quote": "AI will not replace officers. Officers who understand AI will do better than those who don't."
}
```

---

**Note on titles:** the top-level `"title"` field in each JSON (used for navigation) was left untouched — only the audience-facing `"content"` was rewritten. If any of those feel too clever too (e.g. "Hallucination Clinic," "Token Lab"), flag them and I'll simplify those too.
