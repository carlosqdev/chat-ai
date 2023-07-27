import type { Message } from "ai";

export function updateLocalStorage(chat: Message[]) {
  const messages = chat;

  localStorage.setItem("chat-messages", JSON.stringify(messages));
}
