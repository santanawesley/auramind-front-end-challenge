import { Box, Text, Flex } from "@chakra-ui/react";
import { GrTrash } from "react-icons/gr";

import Avatar from "@/components/atoms/Avatar";
import RobotSvg from "@/assets/icons/Robot";
import { Message } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

interface ViewingIndividualMessagesProps extends Message {
  onDelete?: () => void;
}

const ViewingIndividualMessages: React.FC<ViewingIndividualMessagesProps> = ({
  sender,
  content,
  onDelete,
}) => {
  const { user } = useAuth();

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
      width="70%"
    >
      {sender === "ai" ? (
        <Avatar icon={<RobotSvg />} />
      ) : (
        // Caso o usuário não esteje logado, ele utiliza um avatar de usuário padrão ao invés das iniciais do nome
        <Avatar name={user?.name} />
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
          <Box
            as={GrTrash}
            w={"22px"}
            h={"22px"}
            aria-label="Apagar mensagem"
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
