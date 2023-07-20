import Chat from "@/components/chat/chat";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="bg-gptgray">
      <Chat />
    </main>
  );
}
