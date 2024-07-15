import { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";

import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

import { User } from "@/types";

interface FormProps {
  onSubmit: (user: User) => void;
  type: "login" | "signup";
}

const Form: React.FC<FormProps> = ({ onSubmit, type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendUserData = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      password,
    });
  };

  return (
    <Box as="form" onSubmit={sendUserData}>
      <VStack spacing="4">
        {type === "signup" && (
          <Input
            type="text"
            placeholder="Informe seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="Informe seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Informe sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" colorScheme="blue">
          Enviar
        </Button>
      </VStack>
    </Box>
  );
};

export default Form;
