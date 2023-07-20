import type { Message } from "ai";
import { LogoOpenAI } from "./icons";

type PropsCardMessage = Omit<Message, "id" | "createdAt">;

export default function CardMessage({ content, role }: PropsCardMessage) {
  return (
    <li
      className={`text-gray-100 ${
        role === "assistant" ? "bg-gptlightgray" : "bg-gptgray"
      }`}
    >
      <article className="flex max-w-3xl gap-4 p-6 m-auto">
        {role === "user" ? (
          <span className="w-[40px] h=[40px] rounded-sm bg-orange-500">CQ</span>
        ) : (
          <LogoOpenAI />
        )}
        <div className="min-h-[20px] flex flex-1 flex-col items-start gap-4 whitespace-pre-wrap">
          <div className="w-full break-words prose-invert">{content}</div>
        </div>
      </article>
    </li>
  );
}
