import { Box, Text } from "@chakra-ui/react";

interface MessagesTitlesProps {
  title: string;
}

const MessagesTitles: React.FC<MessagesTitlesProps> = ({ title }) => {
  return (
    <Box p="2" borderBottom="1px solid" borderColor="gray.200">
      <Text>{title}</Text>
    </Box>
  );
};

export default MessagesTitles;
