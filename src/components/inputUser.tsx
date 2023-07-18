"use client";

import { ChangeEvent, FormEvent } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

interface PropsInputUser {
  input: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function InputUser({
  handleInputChange,
  handleSubmit,
  input,
}: PropsInputUser) {
  return (
    <Box border="10px solid orange">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="custom placeholder"
          _placeholder={{ opacity: 1, color: "gray.500" }}
          id="inputPrompt"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          isLoading={false}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
