import { Box, VStack } from "@chakra-ui/react";

import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  type: "login" | "signup";
}

const Form: React.FC<FormProps> = ({ onSubmit, type }) => {
  return (
    <Box as="form" onSubmit={onSubmit}>
      <VStack spacing="4">
        {type === "signup" && <Input placeholder="Informe seu Nome" />}
        <Input type="email" placeholder="Informe seu E-mail" />
        <Input type="password" placeholder="Informe sua Senha" />
        <Button type="submit" colorScheme="blue">
          Enviar
        </Button>
      </VStack>
    </Box>
  );
};

export default Form;
