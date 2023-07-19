import { Avatar, Box, Flex, ListItem } from "@chakra-ui/react";
import type { Message } from "ai";

type PropsCardMessage = Omit<Message, "id" | "createdAt">;

export default function CardMessage({ content, role }: PropsCardMessage) {
  return (
    <ListItem borderBottom="1px solid #d9d9e3" minHeight="84px" display="flex">
      <Flex
        gap="1.5rem"
        margin="0 auto"
        alignItems="center"
        width={{ base: "calc(100% - 50px)", lg: "760px" }}
        padding="24px 16px"
      >
        <Flex
          height="100%"
          justifyContent="space-between"
          flexDirection="column"
        >
          {role === "user" ? (
            <Avatar
              width="40px"
              height="40px"
              rounded="sm"
              name="Carlos Quintero"
              src="https://bit.ly/tioluwani-kolawole"
            />
          ) : (
            <Avatar
              width="40px"
              height="40px"
              rounded="sm"
              name="AI"
              src="https://bit.ly/tioluwani-kolawole"
            />
          )}
          <Box display="none">Hidden</Box>
        </Flex>
        <Box height="fit-content" lineHeight="28px">
          {content}
        </Box>
      </Flex>
    </ListItem>
  );
}
