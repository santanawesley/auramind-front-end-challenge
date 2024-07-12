import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import Form from "@/components/molecules/Form";
import LogoutIcon from "@/assets/icons/sign-out.svg";

type AuthButtonsProps = {
  isExpanded: boolean;
};

const AuthButtons: React.FC<AuthButtonsProps> = ({ isExpanded }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [showForm, setShowForm] = useState<"login" | "signup" | null>(null);

  const handleLogin = () => {
    setShowForm(showForm === "login" ? null : "login");
  };
  const handleSignup = () => {
    setShowForm(showForm === "signup" ? null : "signup");
  };
  const handleLogout = () => setIsAuthenticated(false);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowForm(null);
  };

  return (
    <Box mt="auto">
      {isAuthenticated ? (
        <Box
          display="flex"
          justifyContent="space-around"
          gap={4}
          bg={isExpanded ? "#F9FAFA" : "inherit"}
          paddingY="4"
          borderRadius="8"
        >
          <Box display="flex" alignItems="center" gap="2">
            <Avatar
              src="/images/default-avatar.png"
              width={isExpanded ? "12" : "9"}
              height={isExpanded ? "12" : "9"}
            />
            {isExpanded ? (
              <Text>
                Seja bem-vindo,
                <Text fontWeight="bold">Wesley</Text>
              </Text>
            ) : (
              ""
            )}
          </Box>
          {isExpanded ? (
            <IconButton
              aria-label="Logout"
              icon={<LogoutIcon />}
              onClick={handleLogout}
            />
          ) : (
            ""
          )}
        </Box>
      ) : isExpanded ? (
        <Box display="flex" flexDirection="column" gap="2">
          <Button colorScheme="blue" onClick={handleLogin}>
            Entrar
          </Button>
          {showForm === "login" && (
            <Form onSubmit={handleFormSubmit} type="login" />
          )}

          <Button colorScheme="green" onClick={handleSignup}>
            Cadastrar
          </Button>
          {showForm === "signup" && (
            <Form onSubmit={handleFormSubmit} type="signup" />
          )}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default AuthButtons;
