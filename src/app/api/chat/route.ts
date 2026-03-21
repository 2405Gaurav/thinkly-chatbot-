import { streamText, convertToModelMessages, UIMessage } from "ai";
import { openai } from "@/lib/openai";
import { getSystemPrompt, ChatMode } from "@/lib/promptBuilder";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, mode = "dsa" } = body as {
      messages: UIMessage[];
      mode?: ChatMode;
    };

    const systemPrompt = getSystemPrompt(mode);
    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
