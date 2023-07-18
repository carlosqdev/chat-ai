"use client";

import { Box } from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from "react";

interface PropsPrompt {
  input: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function Prompt({
  handleInputChange,
  handleSubmit,
  input,
}: PropsPrompt) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputPrompt">Say something...</label>
      <input id="inputPrompt" value={input} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
}
