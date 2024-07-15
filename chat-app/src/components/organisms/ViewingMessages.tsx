import { useEffect, useRef, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { GrLinkBottom } from "react-icons/gr";

import IconButton from "@/components/atoms/IconButton";
import ViewingIndividualMessages from "@/components/molecules/ViewingIndividualMessages";

import { Message } from "@/types";

interface ViewingMessagesProps {
  messages: Message[];
  onMessageDelete: (index: number) => void;
}

const ViewingMessages: React.FC<ViewingMessagesProps> = ({
  messages,
  onMessageDelete,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!containerRef.current || !messagesEndRef.current) return;

    const container = containerRef.current;
    const lastMessage = messagesEndRef.current;

    const isLastMessageVisible =
      lastMessage.getBoundingClientRect().bottom <=
      container.getBoundingClientRect().bottom;

    setIsScrolled(!isLastMessageVisible);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      handleScroll();
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <VStack
        spacing={4}
        overflow="auto"
        ref={containerRef}
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
            onDelete={() => onMessageDelete(index)}
          />
        ))}

        <Box ref={messagesEndRef} />
      </VStack>
      {isScrolled && (
        <IconButton
          aria-label="Ir para últimas mensagens"
          icon={<GrLinkBottom />}
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
      )}
    </>
  );
};

export default ViewingMessages;
