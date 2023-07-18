import type { Message } from "ai";

import CardMessage from "./cardMessage";

interface PropsContainerMessages {
  messages: Message[];
}

export default function ContainerMessages({
  messages,
}: PropsContainerMessages) {
  return (
    <ul>
      {messages.map((message) => (
        <CardMessage
          key={message.id}
          content={message.content}
          role={message.role}
        />
      ))}
    </ul>
  );
}
