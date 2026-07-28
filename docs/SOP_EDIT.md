# MahaTransco Content Editing SOP

This Standard Operating Procedure (SOP) outlines how non-technical editors can modify the presentation content, prompts, and notes without breaking the application build.

## 1. Modifying Scenes (Text & Layout)
Scenes are defined as JSON files in the `content/scenes/` directory. 
- Open the scene file (e.g., `01-title.json`).
- You may safely edit the `content.headline` and `content.body` fields.
- **Warning**: Do not change the `id`, `act`, `flags`, or `layout` fields unless you are a developer, as these strictly govern the UI rendering engine.
- Save the file. Changes reflect instantly on the local development server.

## 2. Modifying Prompts (Playground & Tools)
All interactive prompts and tools are stored in `content/tools.json` and the `content/labs/` directory.
- Open `content/tools.json`.
- You can add or modify objects in the array. 
- Ensure you provide a `name`, `description`, `category`, and valid `prompts`.
- Never use real PII (Aadhaar, FIR numbers, etc.) in sample prompts.

## 3. Editing Presenter Notes
Presenter notes are rendered directly in the Presenter Panel (`P` key).
- Navigate to `content/notes/`.
- Open the `.md` file corresponding to the scene you wish to edit (e.g., `01-title.md`).
- Edit the text using standard Markdown (bullet points, bold text).
- Save the file.

## 4. Validating Changes
Before deploying or building the USB export, you **must** validate your changes to ensure no JSON syntax errors were introduced.
1. Open the terminal.
2. Run `npx tsx lib/content/validate.ts`.
3. If the script outputs `All content validated successfully!`, your changes are safe to deploy.
