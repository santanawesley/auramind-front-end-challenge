import { Box, Text } from "@chakra-ui/react";

interface ItemMenuProps {
  title: string;
  id: string;
  idClicked: (id: string) => void;
}

const ItemMenu: React.FC<ItemMenuProps> = ({ title, id, idClicked }) => {
  return (
    <Box
      p="2"
      borderBottom="1px solid"
      borderColor="gray.200"
      id={id}
      cursor="pointer"
      onClick={() => idClicked(id)}
    >
      <Text>{title}</Text>
    </Box>
  );
};

export default ItemMenu;
