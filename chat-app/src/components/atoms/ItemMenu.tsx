import { Box, Flex, Text } from "@chakra-ui/react";
import { GrTrash } from "react-icons/gr";

interface ItemMenuProps {
  title: string;
  id: string;
  idActive: string | null;
  idSelected: (id: string) => void;
  deleteItem: (id: string) => void;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  title,
  id,
  idActive,
  idSelected,
  deleteItem,
}) => {
  return (
    <Flex alignItems="center" gap="10px">
      <Box
        as={GrTrash}
        w={"16px"}
        h={"16px"}
        aria-label="Apagar item"
        onClick={() => deleteItem(id)}
        bg="none"
        cursor="pointer"
        color="#ccc"
      />

      <Box
        p="2"
        pl="3"
        m="0.5"
        ml="0"
        borderRadius="12px"
        id={id}
        cursor="pointer"
        onClick={() => idSelected(id)}
        color="#F8F8FF"
        bg={idActive === id ? "gray.800" : "inherit"}
        _hover={{ bg: "gray.600" }}
        transition="background-color 0.2s ease"
        flex="1"
      >
        <Text>{title}</Text>
      </Box>
    </Flex>
  );
};

export default ItemMenu;
