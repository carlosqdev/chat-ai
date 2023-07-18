"use client";

import { Box } from "@chakra-ui/react";
import { useChat } from "ai/react";
import Prompt from "./prompt";
import ContainerMessages from "./containerMessages";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Box as="div" border="red.300" width="100%" minHeight="100vh">
      <ContainerMessages messages={messages} />

      <Prompt
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
}
