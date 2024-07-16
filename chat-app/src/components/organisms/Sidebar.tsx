import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GrAddCircle } from "react-icons/gr";

import Button from "@/components/atoms/Button";
import ChatList from "@/components/organisms/ChatList";
import SidebarToggle from "@/components/molecules/SidebarToggle";
import AuthButtons from "@/components/organisms/AuthButton";
import useWindowSize from "@/utils/useWindowSize";
import { useAuth } from "@/contexts/AuthContext";

interface SidebarProps {
  isSidebarExpanded: (isExpanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarExpanded }) => {
  const size = useWindowSize();
  const isMobile = size.width && size.width <= 768;

  const { user, changeConversation } = useAuth();
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false);
    }
  }, [size.width, isMobile]);

  useEffect(() => {
    isSidebarExpanded(isExpanded);
  }, [isExpanded]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const defineSize = () => {
    let sizeWidth;
    if (isMobile) {
      sizeWidth = isExpanded ? "92%" : "auto";
    } else {
      sizeWidth = isExpanded ? "25%" : "5%";
    }

    return sizeWidth;
  };

  const newChat = () => {
    changeConversation(null);
    setIsExpanded(false);
  };

  return (
    <Box
      h="calc(100vh - 32px)"
      w={defineSize()}
      borderRadius="8"
      bg="#02040F"
      transition="width 0.3s"
      display="flex"
      flexDirection="column"
      p={isExpanded ? "4" : "1.5"}
      position={isExpanded ? "absolute" : "inherit"}
      zIndex="3"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={isExpanded ? "flex-end" : "center"}
      >
        <SidebarToggle onToggle={toggleSidebar} isExpanded={isExpanded} />

        {user && (!isMobile || isExpanded) && (
          <Button
            mt="4"
            mb="4"
            mr="auto"
            ml={isExpanded ? "0" : "auto"}
            colorScheme="teal"
            size={isExpanded ? "md" : "sm"}
            width={isExpanded ? "100%" : "auto"}
            justifyContent="space-between"
            bg="#0A0C19"
            borderColor="#282934"
            borderWidth={isExpanded ? "2px" : "0"}
            p={isExpanded ? "6" : "0"}
            fontWeight="normal"
            onClick={newChat}
          >
            <Box as={GrAddCircle} />
            {isExpanded && "Novo Chat"}
          </Button>
        )}
      </Box>

      {isExpanded ? (
        user ? (
          <ChatList changeChat={() => setIsExpanded(false)} />
        ) : (
          <Text
            color="#F8F8FF"
            display="flex"
            maxW="90%"
            m="auto"
            textAlign="center"
          >
            Faça Login para gerar e visualizar o seu histórico.
          </Text>
        )
      ) : null}

      <AuthButtons isSidebarExpanded={isExpanded} />
    </Box>
  );
};

export default Sidebar;
