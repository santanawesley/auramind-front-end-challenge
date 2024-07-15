import { Box, Text } from "@chakra-ui/react";

interface ItemMenuProps {
  title: string;
  id: string;
  idActive: string | null;
  idClicked: (id: string) => void;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  title,
  id,
  idActive,
  idClicked,
}) => {
  return (
    <Box
      p="2"
      m="2"
      ml="0"
      borderRadius="12px"
      id={id}
      cursor="pointer"
      onClick={() => idClicked(id)}
      color="#F8F8FF"
      bg={idActive === id ? "gray.800" : "inherit"}
      _hover={{ bg: "gray.600" }}
      transition="background-color 0.2s ease"
    >
      <Text>{title}</Text>
    </Box>
  );
};

export default ItemMenu;
