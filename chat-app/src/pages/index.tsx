import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import Sidebar from "@/components/organisms/Sidebar";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box display="flex" p="4">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <Box
        ml={isExpanded ? "25%" : "5%"}
        pl="4"
        transition="margin-left 0.3s"
        flex="1"
        minH="calc(100vh - 32px)"
      >
        <Text>Chat Propriamente Dito</Text>
      </Box>
    </Box>
  );
}
