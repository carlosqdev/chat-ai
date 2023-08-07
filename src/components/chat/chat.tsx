"use client";

import { useState } from "react";
import { useChat } from "ai/react";

import InputUser from "../inputUser";
import ContainerMessages from "../containerMessages";

import ButtonExpand from "../buttonExpand";
import ButtonNewChat from "../buttonNewChat";
import { updateLocalStorage } from "@/utils/updateLocalStorage";

import styles from "./chat.module.css";

export default function Chat() {
  const [showSidebar, setShowSidebar] = useState(true);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat-cohere",
      onFinish: () => {
        updateLocalStorage(messages);
      },
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
      {showSidebar && (
        <div
          className={`${
            showSidebar
              ? styles["chat-layout-sidebar"]
              : `${styles["chat-layout-sidebar"]} ${styles["chat-layout-sidebar__hidden"]}`
          }`}
        >
          <div className="h-full p-2">
            <div className="mb-1 flex flex-row gap-2">
              <ButtonNewChat />
              <ButtonExpand handleShowChatHistory={handleShowChatHistory} />
            </div>
          </div>
        </div>
      )}

      {!showSidebar && (
        <div className="absolute left-2 top-2 z-10 hidden md:inline-block">
          <ButtonExpand handleShowChatHistory={handleShowChatHistory} />
        </div>
      )}

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
