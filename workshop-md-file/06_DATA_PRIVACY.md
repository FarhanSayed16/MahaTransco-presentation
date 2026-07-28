**IAS AI WORKSHOP — SPEAKER KIT** 

**06 — Data Privacy for Government AI Use** 

# **06 — Data Privacy for Government AI Use** 

Serious tone. This is the section where the audience needs clarity, not enthusiasm. 

## **The core rule** 

_Treat every free, public AI tool as if it were an open phone line. Assume anything you type could, in principle, be stored, reviewed, or used to improve the model — unless you are on a plan that explicitly guarantees otherwise._ 

## **Never upload to a free/public AI tool** 

- Confidential government files (classified, restricted, or "for official use only" marked documents) 

- Citizen Aadhaar numbers or any other government ID data 

- Police investigation records, FIR content, or evidence 

- Cabinet documents or pre-decisional policy drafts 

- Internal financial reports or budget documents not yet public 

- Medical records of any individual 

- Personal data of citizens (name + address + phone + ID combinations especially) 

- Vendor-confidential business information 

Tender evaluation files or bid documents before award 

## **Why this matters legally, not just practically** 

- **DPDP Act, 2023 (Digital Personal Data Protection Act):** India's primary law governing collection, storage, and processing of personal data. As a "data fiduciary" role holder in government work, officers handling citizen data have direct obligations under this Act — pasting citizen personal data into a public AI tool is very likely a violation, since the tool provider becomes an uncontracted third-party processor of that data. 

- **Official Secrets Act & departmental confidentiality rules:** Independent of AI, these already govern classified/restricted material — AI tools do not create an exception. 

- **India AI Governance Guidelines (Nov 2025, MeitY/IndiaAI Mission):** Built around a "Do No Harm" principle and human-centricity; it explicitly expects sectoral/departmental judgment on sensitive-data handling rather than a blanket rule, which is exactly why an officer's own discipline matters so much. 

## **The right question isn't "AI or no AI" — it's "which tier of AI"** 

|**Data sensitivity**|**Recommended approach**|
|---|---|
|Public information, published reports, generic drafting|Free consumer AI tools (ChatGPT, Gemini, etc.) are fine|
|Departmental-internal but non-confidential (e.g., internal memos, non-<br>sensitive scheme data)|Enterprise/business-tier AI subscriptions with a no-training-on-data guarantee|
|Citizen personal data, confidential files, investigation material|On-premise/local LLMs run on government infrastructure only, or explicitly government-<br>approved platforms|
|Classified/Cabinet-level material|No AI tool at all unless a specific government-certified system exists for that exact<br>purpose|



## **What "enterprise AI" actually guarantees (and what it doesn't)** 

- Enterprise/business-tier subscriptions typically contractually commit that your inputs are **not** used to train the underlying model, and offer stronger data-retention controls. 

- They do **not** automatically make a tool suitable for classified data — that still requires an on-premise or specifically government-certified deployment. 

Always confirm the specific data-retention and training-use terms for the exact plan your department is subscribed to; terms vary and change. 

## **On-premise / Local LLMs — the practical government answer** 

Running an AI model entirely on department-owned servers, with no data leaving the network, is increasingly viable for departments handling sensitive data regularly. This is the direction most large public-sector deployments are heading globally, and is the safest answer whenever the question is "can we use AI on citizen data at scale." 

## **A simple habit to leave the audience with** 

Before typing anything into an AI tool, ask: **"Would I be comfortable if this exact text appeared on a public website tomorrow?"** If no, it doesn't go into a free AI tool. 

AI as an Administrative Officer's Digital Assistant — Workshop Documentation 

