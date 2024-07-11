// src/components/molecules/MessageItem.tsx
import { Box, Text } from "@chakra-ui/react";

interface MessageItemProps {
  title: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ title }) => {
  return (
    <Box p="2" borderBottom="1px solid" borderColor="gray.200">
      <Text>{title}</Text>
    </Box>
  );
};

export default MessageItem;
