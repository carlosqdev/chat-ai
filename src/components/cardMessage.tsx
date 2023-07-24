import type { Message } from "ai";

import { LogoOpenAI } from "./icons";
import ButtonCopyContent from "./buttonCopyContent";

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
          <div className="bg-green-800 text-white h-[30px] w-[30px] flex place-content-center rounded-sm pt-1">
            C
          </div>
        ) : (
          <LogoOpenAI />
        )}
        <div className="min-h-[20px] flex flex-1 flex-col items-start gap-4 whitespace-pre-wrap">
          <div className="w-full break-words prose-invert">{content}</div>
        </div>

        {role !== "user" && <ButtonCopyContent content={content} />}
      </article>
    </li>
  );
}
