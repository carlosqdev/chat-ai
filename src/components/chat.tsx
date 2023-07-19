"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";

import InputUser from "./inputUser";
import ContainerMessages from "./containerMessages";

import { IconExpand } from "./icons";

export default function Chat() {
  const [showSidebar, setShowSidebar] = useState(true);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  function handleShowChatHistory() {
    setShowSidebar(!showSidebar);
  }

  return (
    <Grid
      templateAreas={`"sidebar chat"
                    "sidebar inputUser"`}
      gridTemplateRows={"1fr 192px"}
      gridTemplateColumns={`${showSidebar ? "260px 1fr" : "50px 1fr"}`}
      minHeight="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl={`${showSidebar ? "2" : "0"}`}
        area={"sidebar"}
        border="1px solid blue"
      >
        <Flex>
          <Button
            aria-label="Open sidebar"
            marginLeft="auto"
            onClick={handleShowChatHistory}
          >
            <IconExpand />
          </Button>
        </Flex>
      </GridItem>

      <GridItem pl="2" area={"chat"}>
        {messages.length > 0 && <ContainerMessages messages={messages} />}
      </GridItem>

      <GridItem pl="2" area={"inputUser"}>
        <InputUser
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </GridItem>
    </Grid>
  );
}
