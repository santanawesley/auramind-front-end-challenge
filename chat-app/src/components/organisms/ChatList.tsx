import { Box, Text } from "@chakra-ui/react";

import ItemMenu from "@/components/atoms/ItemMenu";

import { useAuth } from "@/contexts/AuthContext";

type ChatListProps = {
  changeChat: () => void;
};

const ChatList: React.FC<ChatListProps> = ({ changeChat }) => {
  const {
    user,
    changeConversation,
    idToChangeConversation,
    deleteConversation,
  } = useAuth();

  const chatsTitles = user?.conversations
    ?.filter((conversation) => conversation.title)
    .map((conversation) => ({
      id: conversation.id,
      title: conversation.title,
    }))
    .reverse();

  const changeUserConversation = (id: string) => {
    changeConversation(id);
    changeChat();
  };

  return (
    <Box
      overflowY="auto"
      mt="2"
      mb="3"
      pr="1.5"
      h="full"
      w="full"
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #f1f1f1",
      }}
    >
      {chatsTitles?.map((chat) => (
        <ItemMenu
          key={chat.id}
          title={chat.title}
          idSelected={changeUserConversation}
          id={chat.id}
          idActive={idToChangeConversation}
          deleteItem={deleteConversation}
        />
      ))}
    </Box>
  );
};

export default ChatList;
