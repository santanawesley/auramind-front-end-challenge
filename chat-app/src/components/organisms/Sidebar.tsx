import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import Button from "@/components/atoms/Button";
import ChatList from "@/components/organisms/ChatList";
import SidebarToggle from "@/components/molecules/SidebarToggle";
import AuthButtons from "@/components/organisms/AuthButton";
import AddIcon from "@/assets/icons/plus-circle.svg";

interface SidebarProps {
  isSidebarExpanded: (isExpanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    isSidebarExpanded(isExpanded);
  }, [isExpanded]);

  return (
    <Box
      h="calc(100vh - 32px)"
      w={isExpanded ? "25%" : "5%"}
      borderRadius="8"
      bg="#02040F"
      transition="width 0.3s"
      display="flex"
      flexDirection="column"
      p="4"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={isExpanded ? "flex-end" : "center"}
      >
        <SidebarToggle onToggle={toggleSidebar} />

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
        >
          {/* 
            Não foi utilizado o rightIcon={<AddIcon />} dentro do button devido a 
            dificuldade de remover o marginLeft padrão dentro de uma estrutura interna. 
            Já da forma abaixo <Box as={AddIcon} /> foi possível
          */}
          <Box as={AddIcon} marginLeft={0} />
          {isExpanded && "Novo Chat"}
        </Button>
      </Box>

      {isExpanded ? <ChatList /> : ""}
      <AuthButtons isSidebarExpanded={isExpanded} />
    </Box>
  );
};

export default Sidebar;
