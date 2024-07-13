import { Box, Text, Flex } from "@chakra-ui/react";

import DeleteIcon from "@/assets/icons/trash.svg";
import IconButton from "@/components/atoms/IconButton";
import Avatar from "@/components/atoms/Avatar";

import { Message } from "@/components/organisms/ChatWindow";

interface ViewingIndividualMessagesProps extends Message {
  onDelete?: () => void;
}

const ViewingIndividualMessages: React.FC<ViewingIndividualMessagesProps> = ({
  sender,
  content,
  name,
  onDelete,
}) => {
  return (
    <Flex
      align="start"
      justifyContent="flex-start"
      flexDirection={sender === "user" ? "row-reverse" : "row"}
      mb={4}
      ml={sender === "user" ? "auto" : "inherit"}
      mr={sender === "ai" ? "auto" : "inherit"}
      gap="6"
      alignItems="flex-end"
    >
      {sender === "ai" ? (
        <Avatar
          // Abaixo Ícone de um robo
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
            </svg>
          }
        />
      ) : (
        // Caso o usuário não esteje logado, ele utiliza um avatar de usuário padrão ao invés das iniciais do nome
        <Avatar name={name} />
      )}

      <Box
        bg="#FFFFFF"
        border="1px solid #DDDDDD"
        borderRight={sender === "user" ? "6px solid #02040F" : ""}
        borderLeft={sender === "ai" ? "6px solid #082567" : ""}
        p={3}
        borderRadius="md"
        position="relative"
        flex={1}
        maxW="95%"
        margin="auto"
      >
        {sender === "user" && (
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Toggle Sidebar"
            onClick={onDelete}
            bg="none"
            cursor="pointer"
            position="absolute"
            bottom="1"
            left={"-45px"}
          />
        )}
        <Text pr="40px">{content}</Text>
      </Box>
    </Flex>
  );
};

export default ViewingIndividualMessages;
