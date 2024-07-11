import { Box, IconButton } from "@chakra-ui/react";

import ResizeIcon from "../assets/icons/resize.svg";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps) => {
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      w={isExpanded ? "25%" : "5%"}
      bg="gray.700"
      transition="width 0.3s"
      zIndex="1000"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <IconButton
        aria-label="Toggle sidebar"
        icon={<ResizeIcon />}
        onClick={toggleSidebar}
        m="4"
      />
    </Box>
  );
};

export default Sidebar;
