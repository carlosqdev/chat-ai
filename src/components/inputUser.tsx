"use client";

import { ChangeEvent, FormEvent } from "react";
import { SendIcon } from "./icons";

interface PropsInputUser {
  input: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
}

export default function InputUser({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
}: PropsInputUser) {
  return (
    <section className="m-auto max-w-3xl w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row max-w-3xl m-auto mb-2 "
      >
        <div className="relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-gptlightgray border-gray-900/50">
          <input
            placeholder="Send a message"
            value={input}
            onChange={handleInputChange}
            className="w-full h-[24px] resize-none bg-transparent m-0 border-0 outline-none"
          />

          <button
            className={`opacity-40 absolute p-1 rounded-md bottom-0 h-full right-2.5 ${
              isLoading
                ? "pointer-events-none"
                : "hover:shadow-2xl rounded-full"
            }`}
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </section>
  );
}
