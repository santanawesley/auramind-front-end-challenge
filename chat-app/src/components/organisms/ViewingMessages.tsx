import { useEffect, useRef } from "react";
import { VStack } from "@chakra-ui/react";

import ViewingIndividualMessages from "@/components/molecules/ViewingIndividualMessages";
import { Message } from "@/components/organisms/ChatWindow";

interface ViewingMessagesProps {
  messages: Message[];
  onMessageDelete: (index: number) => void;
}

const ViewingMessages: React.FC<ViewingMessagesProps> = ({
  messages,
  onMessageDelete,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <VStack
      spacing={4}
      overflow="auto"
      sx={{
        /* Esconder a barra de rolagem em diferentes navegadores */
        "&::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
        scrollbarWidth: "none" /* Firefox */,
        "-msOverflowStyle": "none" /* Internet Explorer 10+ */,
      }}
    >
      {messages.map((message, index) => (
        <ViewingIndividualMessages
          key={index}
          sender={message.sender}
          content={message.content}
          name={message.name}
          onDelete={() => onMessageDelete(index)}
        />
      ))}
      <div ref={messagesEndRef} />
    </VStack>
  );
};

export default ViewingMessages;
