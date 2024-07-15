import { useState } from "react";
import { Box, IconButton, Flex } from "@chakra-ui/react";

import MessageInput from "@/components/molecules/MessageInput";
import ViewingMessages from "@/components/organisms/ViewingMessages";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import { getAIResponse } from "@/utils/aiSimulator";

export interface Message {
  sender: "user" | "ai";
  content: string;
  name: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

type ChatWindowProps = {
  isSidebarExpanded: boolean;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ isSidebarExpanded }) => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "15",
      title: "Teste 1",
      messages: [
        {
          sender: "user",
          content: "Primeira pergunta.",
          name: "Wesley Santana",
        },
        {
          sender: "ai",
          content: "Primeira resposta.",
          name: "Wesley Santana",
        },
      ],
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setConversations([
      {
        id: "3",
        title: "New message",
        messages: [
          {
            sender: "user",
            content: input,
            name: "Wesley Santana",
          },
          {
            sender: "ai",
            content: getAIResponse(input),
            name: "Wesley Santana",
          },
        ],
      },
    ]);
    setInput("");
  };

  const handleDeleteMessage = (index: number) => {
    console.log("");
  };

  const scrollToBottom = () => {
    console.log("");
  };

  return (
    <Flex
      h="100vh"
      justifyContent="flex-end"
      flexGrow="1"
      height="calc(100vh - 32px)"
      maxW={isSidebarExpanded ? "70%" : "90%"}
      m="auto"
      position="relative"
    >
      <Box
        flex={1}
        justifyContent="flex-end"
        display="flex"
        flexDirection="column"
      >
        <ViewingMessages
          messages={conversations[0].messages}
          onMessageDelete={handleDeleteMessage}
        />
        <MessageInput
          input={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={sendMessage}
        />
      </Box>
      <IconButton
        aria-label="Ir para última mensagem"
        icon={<ArrowDownIcon />}
        onClick={scrollToBottom}
        position="absolute"
        bottom="80px"
        left="50%"
        transform="translateX(-50%)"
        bg="#fff"
        border="2px solid gray"
        borderRadius="100%"
        p="1"
      />
    </Flex>
  );
};

export default ChatWindow;
