import { Box } from "@chakra-ui/react";

import IconButton from "@/components/atoms/IconButton";
import Button from "@/components/atoms/Button";
import ChatList from "@/components/organisms/ChatList";
import AuthButtons from "@/components/organisms/AuthButton";
import ResizeIcon from "@/assets/icons/list.svg";
import AddIcon from "@/assets/icons/plus-circle.svg";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
  return (
    <Box
      position="fixed"
      left="4"
      top="4"
      h="calc(100vh - 32px)"
      w={isExpanded ? "25%" : "5%"}
      borderRadius="8"
      bg="#02040F"
      transition="width 0.3s"
      zIndex="2"
      display="flex"
      flexDirection="column"
      p="4"
    >
      <Box textAlign="right" mb="4" gap="2">
        <IconButton
          aria-label="Toggle sidebar"
          icon={<ResizeIcon />}
          onClick={toggleSidebar}
          bg="inherit"
        />
        <Button
          rightIcon={<AddIcon />}
          mt="4"
          colorScheme="teal"
          size={isExpanded ? "md" : "sm"}
          width={isExpanded ? "100%" : "auto"}
          justifyContent="space-between"
          bg="#0A0C19"
          borderColor="#282934"
          borderWidth={isExpanded ? "2px" : "0"}
          p={isExpanded ? "6" : "0"}
          marginLeft={isExpanded ? "0" : "-2"}
          fontWeight="normal"
        >
          {isExpanded && "Novo Chat"}
        </Button>
      </Box>

      {isExpanded ? <ChatList /> : ""}
      <AuthButtons isExpanded={isExpanded} />
    </Box>
  );
};

export default Sidebar;
