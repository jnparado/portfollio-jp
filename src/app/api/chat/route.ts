import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { generateText } from "ai";
import { xai } from "@ai-sdk/xai";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

function fallbackReply(lastUserMessage: string) {
  const lower = lastUserMessage.toLowerCase();
  if (lower.includes("email") || lower.includes("contact")) {
    return `You can email Jeson at ${site.email}.`;
  }
  if (lower.includes("skills") || lower.includes("stack") || lower.includes("tech")) {
    return `Jeson works with Bubble.io, AI automation (n8n), mobile (Android Studio, Xcode, React Native), and web (Next.js/TypeScript), plus Firebase and APIs.`;
  }
  if (lower.includes("location") || lower.includes("based")) {
    return `Jeson is based in ${site.location}.`;
  }
  if (lower.includes("available") || lower.includes("hire") || lower.includes("work")) {
    return "Jeson is open to opportunities. Share what you’re building and the timeline, and he’ll reply by email.";
  }
  return "Thanks for your message. To enable AI chat, set `XAI_API_KEY` (Grok) in `.env.local`. For now, you can contact Jeson via email.";
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { messages?: IncomingMessage[] }
    | null;

  const messages = body?.messages ?? [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const lastUserMessage = lastUser?.content?.trim() ?? "";

  const xaiApiKey = process.env.XAI_API_KEY;
  const xaiModel = process.env.XAI_MODEL ?? "grok-4-mini";

  const openAiApiKey = process.env.OPENAI_API_KEY;
  const openAiModel = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  if (!lastUserMessage) {
    return NextResponse.json({ reply: "Ask me something about Jeson." });
  }

  const systemPrompt =
    `You are a helpful portfolio assistant for ${site.name}. ` +
    `Answer concisely and professionally. If you don't know something, say so and suggest emailing ${site.email}. ` +
    `Location: ${site.location}. Role: ${site.role}.`;

  try {
    if (xaiApiKey) {
      const { text } = await generateText({
        model: xai(xaiModel),
        temperature: 0.4,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      });

      return NextResponse.json({ reply: text?.trim() || fallbackReply(lastUserMessage) });
    }

    if (openAiApiKey) {
      const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openAiApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: openAiModel,
          temperature: 0.4,
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      });

      if (!upstream.ok) {
        return NextResponse.json({ reply: fallbackReply(lastUserMessage) }, { status: 200 });
      }

      const data = (await upstream.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };

      const reply =
        data.choices?.[0]?.message?.content?.trim() ||
        fallbackReply(lastUserMessage);

      return NextResponse.json({ reply });
    }

    return NextResponse.json({ reply: fallbackReply(lastUserMessage) });
  } catch {
    return NextResponse.json({ reply: fallbackReply(lastUserMessage) });
  }
}

