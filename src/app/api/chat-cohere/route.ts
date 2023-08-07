export const runtime = "edge";

// Build a prompt from the messages
function buildPrompt(
  messages: { content: string; role: "system" | "user" | "assistant" }[]
) {
  return (
    messages
      .map(({ content, role }) => {
        if (role === "user") {
          return `Human: ${content}`;
        } else {
          return `Assistant: ${content}`;
        }
      })
      .join("\n\n") + "Assistant:"
  );
}

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Request the Cohere API for the response based on the prompt
  const response = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.COHERE_API_KEY!}`,
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify({
      model: "command-nightly",
      prompt: buildPrompt(messages),
      return_likelihoods: "NONE",
      max_tokens: 200,
      temperature: 0.9,
      top_p: 1,
    }),
  });

  const result = await response.json();
  return new Response(result.generations[0].text.substring(0));
}
