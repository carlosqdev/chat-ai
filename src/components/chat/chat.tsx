"use client";

import { useState } from "react";
import { useChat } from "ai/react";

import InputUser from "../inputUser";
import ContainerMessages from "../containerMessages";

import { IconExpand, PlusIcon } from "../icons";

import styles from "./chat.module.css";

export default function Chat() {
  const [showSidebar, setShowSidebar] = useState(true);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  function handleShowChatHistory() {
    setShowSidebar(!showSidebar);
  }

  return (
    <section
      className={`${
        showSidebar
          ? styles["chat-layout"]
          : `${styles["chat-layout"]} ${styles["chat-layout__colapsed-sidebar"]}`
      }`}
    >
      <div
        className={`${
          showSidebar
            ? styles["chat-layout-sidebar"]
            : `${styles["chat-layout-sidebar"]} ${styles["chat-layout-sidebar__hidden"]}`
        }`}
      >
        <div className="h-full p-2">
          <div className="mb-1 flex flex-row gap-2">
            <button className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
              <PlusIcon />
              New chat
            </button>
            <button
              className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center"
              aria-label="Open sidebar"
              onClick={handleShowChatHistory}
            >
              <IconExpand />
            </button>
          </div>
        </div>
      </div>

      <div className={styles["chat-layout-messages"]}>
        {messages.length > 0 && <ContainerMessages messages={messages} />}
      </div>

      <div
        className={`${
          showSidebar
            ? `${styles["chat-layout-userPrompt"]} bg-gradient`
            : `${styles["chat-layout-userPrompt"]} ${styles["chat-layout-userPrompt__fullscreen"]} bg-gradient`
        }`}
      >
        <InputUser
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
