"use client";

import { useState } from "react";
import { useChat } from "ai/react";

import InputUser from "../inputUser";
import ContainerMessages from "../containerMessages";

import { IconExpand } from "../icons";

import styles from "./chat.module.css";

export default function Chat() {
  const [showSidebar, setShowSidebar] = useState(false);

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
        <div>
          <button aria-label="Open sidebar" onClick={handleShowChatHistory}>
            <IconExpand />
          </button>
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
