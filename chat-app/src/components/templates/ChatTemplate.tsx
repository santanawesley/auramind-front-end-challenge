import { useState } from "react";
import { Box } from "@chakra-ui/react";

import Sidebar from "@/components/organisms/Sidebar";
import ChatWindow from "@/components/organisms/ChatWindow";

export default function ChatTemplate() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const infoSidebarExpanded = (value: boolean) => {
    setIsSidebarExpanded(value);
  };

  return (
    <Box display="flex" p="4" gap="5" maxW="1440px" m="auto">
      <Sidebar isSidebarExpanded={infoSidebarExpanded} />
      <ChatWindow isSidebarExpanded={isSidebarExpanded} />
    </Box>
  );
}
