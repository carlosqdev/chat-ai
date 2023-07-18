import { ListItem } from "@chakra-ui/react";
import type { Message } from "ai";

type PropsCardMessage = Omit<Message, "id" | "createdAt">;

export default function CardMessage({ content, role }: PropsCardMessage) {
  return (
    <ListItem border="10px solid cyan">
      {role === "user" ? "User:" : "AI:"}
      {content}
    </ListItem>
  );
}
