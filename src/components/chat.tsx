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
    <Box as="div" border="10px solid red" width="100%" minHeight="100vh">
      <Box
        width="90%"
        margin="0 auto"
        border="10px solid blue"
        display="grid"
        gap="1rem"
      >
        <ContainerMessages messages={messages} />

        <Prompt
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
}
