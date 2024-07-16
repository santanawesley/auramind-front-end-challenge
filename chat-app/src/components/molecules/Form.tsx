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
            color="#F8F8FF"
          />
        )}
        <Input
          type="email"
          placeholder="Informe seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="#F8F8FF"
        />
        <Input
          type="password"
          placeholder="Informe sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          color="#F8F8FF"
        />
        <Box
          as="button"
          type="submit"
          disabled={!email || !password}
          bg={!email || !password ? "#6C757D" : "#007BFF"}
          _hover={{ bg: !email || !password ? "#6C757D" : "#0056b3" }}
          _active={{
            bg: !email || !password ? "#6C757D" : "#0056b3",
            transform: "scale(0.98)",
          }}
          cursor={!email || !password ? "default" : "pointer"}
          w="full"
          h="40px"
          borderRadius="5px"
          color="#F8F8FF"
        >
          Enviar
        </Box>
      </VStack>
    </Box>
  );
};

export default Form;
