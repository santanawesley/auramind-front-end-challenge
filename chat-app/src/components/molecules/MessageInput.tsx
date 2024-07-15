import { Flex } from "@chakra-ui/react";
import { GrUploadOption } from "react-icons/gr";

import Input from "@/components/atoms/Input";
import IconButton from "@/components/atoms/IconButton";

interface MessageInputProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  input,
  onChange,
  onSend,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      onSend();
    }
  };

  const checkEmptyMessage = () => {
    input.trim() && onSend();
  };

  return (
    <Flex mt={4} position="relative" alignItems="center">
      <Input
        placeholder="Digite sua mensagem..."
        value={input}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        flex="1"
        mr="2"
        pr="42px"
        h="54px"
        border="2px solid #02040F"
      />
      <IconButton
        icon={<GrUploadOption />}
        aria-label="Enviar mensagem"
        onClick={checkEmptyMessage}
        position="absolute"
        right="12px"
        border="none"
        bg="#F9FAFA"
        zIndex="2"
      />
    </Flex>
  );
};

export default MessageInput;
