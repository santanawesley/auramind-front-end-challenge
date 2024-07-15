import { Box } from "@chakra-ui/react";

import ItemMenu from "@/components/atoms/ItemMenu";

import { useAuth } from "@/contexts/AuthContext";

const ChatList: React.FC = () => {
  const { user, changeConversation } = useAuth();

  const chatsTitles = user?.conversations
    ?.filter((conversation) => conversation.title)
    .map((conversation) => ({
      id: conversation.id,
      title: conversation.title,
    }))
    .reverse();

  return (
    <Box overflowY="auto" h="full" w="full">
      {chatsTitles?.map((chat) => (
        <ItemMenu
          key={chat.id}
          title={chat.title}
          idClicked={changeConversation}
          id={chat.id}
        />
      ))}
    </Box>
  );
};

export default ChatList;
