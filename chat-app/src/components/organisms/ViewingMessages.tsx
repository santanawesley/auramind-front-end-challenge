import { useEffect, useRef, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { GrLinkBottom } from "react-icons/gr";

import { AnimatePresence } from "framer-motion";
import Avatar from "@/components/atoms/Avatar";
import IconButton from "@/components/atoms/IconButton";
import RobotSvg from "@/assets/icons/Robot";
import ViewingIndividualMessages from "@/components/molecules/ViewingIndividualMessages";

import { Message } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

interface ViewingMessagesProps {
  messages: Message[];
  onMessageDelete: (index: number) => void;
}

const ViewingMessages: React.FC<ViewingMessagesProps> = ({
  messages,
  onMessageDelete,
}) => {
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!containerRef.current || !messagesEndRef.current) return;

    const container = containerRef.current;
    const lastMessage = messagesEndRef.current;

    setTimeout(() => {
      const isLastMessageVisible =
        lastMessage.getBoundingClientRect().bottom <=
        container.getBoundingClientRect().bottom;

      setIsScrolled(!isLastMessageVisible);
    }, 250);
  };

  return (
    <>
      {messages.length ? (
        <>
          <VStack
            spacing={4}
            overflow="auto"
            ref={containerRef}
            sx={{
              "&::-webkit-scrollbar": {
                width: "0px",
                height: "0px",
              },
              scrollbarWidth: "none",
              "-msOverflowStyle": "none",
            }}
          >
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <ViewingIndividualMessages
                  key={index}
                  sender={message.sender}
                  content={message.content}
                  onDelete={() => onMessageDelete(index)}
                  index={index}
                />
              ))}
            </AnimatePresence>
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
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
              _hover={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              transition="box-shadow 0.2s ease"
            />
          )}
        </>
      ) : (
        <Box
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="5"
        >
          <Avatar icon={<RobotSvg />} />

          {user ? (
            <Text textAlign="center">
              Conversa sem mensagem. <br />
              Envie uma nova mensagem ou selecione outra conversa do seu
              histórico.
            </Text>
          ) : (
            <Text> Envie uma nova mensagem para podermos conversar. </Text>
          )}
        </Box>
      )}
    </>
  );
};

export default ViewingMessages;
