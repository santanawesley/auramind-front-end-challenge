import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

import MessageInput from "@/components/molecules/MessageInput";
import ViewingMessages from "@/components/organisms/ViewingMessages";

import { getAIResponse } from "@/utils/aiSimulator";
import { useAuth } from "@/contexts/AuthContext";
import { Conversation, Message } from "@/types";

type ChatWindowProps = {
  isSidebarExpanded: boolean;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ isSidebarExpanded }) => {
  const { user, updateConversations, idToChangeConversation } = useAuth();

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedConversations = user?.conversations;
    if (savedConversations?.length) {
      setConversations(savedConversations);
    }
    if (!user) {
      setConversations([]);
      setCurrentConversationId(null);
    }
  }, [user]);

  useEffect(() => {
    updateConversations(conversations);
  }, [conversations]);

  useEffect(() => {
    setCurrentConversationId(idToChangeConversation);
  }, [idToChangeConversation]);

  useEffect(() => {
    // Atualiza a conversa atual quando uma nova conversa for adicionada
    if (conversations.length && currentConversationId === null) {
      setCurrentConversationId(conversations[conversations.length - 1].id);
    }
  }, [conversations]);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  const getCurrentConversation = () => {
    return conversations.find(
      (conversation) => conversation.id === currentConversationId
    );
  };

  const sendMessage = () => {
    if (!currentConversationId) {
      // não esta como conversa atual então cria uma nova e add ao array
      const newConversationId = String(new Date().getTime());
      const newConversation: Conversation = {
        id: newConversationId,
        title: truncate(input, 25),
        messages: [
          { sender: "user", content: input },
          { sender: "ai", content: getAIResponse(input) },
        ],
      };
      setConversations([...conversations, newConversation]);
      setCurrentConversationId(newConversationId);
    } else {
      // se for a conversa atual ele edita ela
      const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === currentConversationId) {
          const updatedMessages: Message[] = [
            ...conversation.messages,
            { sender: "user", content: input },
            { sender: "ai", content: getAIResponse(input) },
          ];
          return { ...conversation, messages: updatedMessages };
        }
        return conversation;
      });
      setConversations(updatedConversations);
    }
    setInput("");
  };

  const handleDeleteMessage = (index: number) => {
    const updatedConversations = conversations.map((conversation) => {
      if (conversation.id === currentConversationId) {
        const updatedMessages = conversation.messages.filter(
          (_, i) => i !== index && i !== index + 1
        );
        return { ...conversation, messages: updatedMessages };
      }
      return conversation;
    });
    setConversations(updatedConversations);
  };

  return (
    <Flex
      h="100vh"
      justifyContent="flex-end"
      flexGrow="1"
      height="calc(100vh - 32px)"
      maxW={isSidebarExpanded ? "70%" : "90%"}
      m="auto"
    >
      <Box
        flex={1}
        justifyContent="flex-end"
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <ViewingMessages
          messages={getCurrentConversation()?.messages || []}
          onMessageDelete={handleDeleteMessage}
        />
        <MessageInput
          input={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={sendMessage}
        />
      </Box>
    </Flex>
  );
};

export default ChatWindow;
