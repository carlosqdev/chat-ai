import type { Message } from "ai";

type PropsCardMessage = Omit<Message, "id" | "createdAt">;

export default function CardMessage({ content, role }: PropsCardMessage) {
  return (
    <li>
      {role === "user" ? "User:" : "AI:"}
      {content}
    </li>
  );
}
