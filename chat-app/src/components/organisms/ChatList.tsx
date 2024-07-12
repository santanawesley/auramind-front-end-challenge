import { Box } from "@chakra-ui/react";

import MessagesTitles from "@/components/atoms/MessagesTitles";

const chats = [
  { id: 1, title: "Mensagem 1..." },
  { id: 2, title: "Mensagem 2..." },
  { id: 3, title: "Mensagem 3..." },
];

const ChatList: React.FC = () => {
  return (
    <Box overflowY="auto" h="full" w="full">
      {chats.map((chat) => (
        <MessagesTitles key={chat.id} title={chat.title} />
      ))}
    </Box>
  );
};

export default ChatList;
