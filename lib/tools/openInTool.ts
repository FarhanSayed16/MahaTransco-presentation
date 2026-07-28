import { ToolSchema } from "../content/schemas";
import { z } from "zod";

export async function openInTool(text: string, toolId: string, tools: z.infer<typeof ToolSchema>[]) {
  try {
    if (text) {
      await navigator.clipboard.writeText(text);
    }
  } catch (err) {
    console.warn("Failed to copy text:", err);
  }
  
  const tool = tools.find(t => t.id === toolId);
  if (tool && tool.url) {
    window.open(tool.url, "_blank");
  }
}
