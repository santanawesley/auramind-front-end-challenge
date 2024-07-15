import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GrLogout } from "react-icons/gr";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import Form from "@/components/molecules/Form";

import { useAuth } from "@/contexts/AuthContext";
import { User } from "@/types";

type AuthButtonsProps = {
  isSidebarExpanded: boolean;
};

const AuthButtons: React.FC<AuthButtonsProps> = ({ isSidebarExpanded }) => {
  const { user, login, logout, register } = useAuth();

  const [userData, setUserData] = useState<User | null>();
  const [showForm, setShowForm] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleRegister = ({ name, email, password }: User) => {
    register({ name, email, password });
    setShowForm(null);
  };

  const handleLogin = ({ email, password }: User) => {
    const success = login(email, password);
    if (!success) {
      alert("E-mail e/ou senha incorretos");
    } else {
      setShowForm(null);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleLoginForm = () => {
    setShowForm(showForm === "login" ? null : "login");
  };

  const handleRegisterForm = () => {
    setShowForm(showForm === "signup" ? null : "signup");
  };

  const nameTruncate = () => {
    const name = userData?.name?.split(" ");
    return !name
      ? ""
      : name?.length > 1
      ? `${name[0]} ${name[name.length - 1]}`
      : name;
  };

  return (
    <Box mt="auto">
      {userData?.isAuthenticated ? (
        <Box
          display="flex"
          justifyContent="space-around"
          gap={4}
          bg={isSidebarExpanded ? "#F9FAFA" : "inherit"}
          paddingY="4"
          borderRadius="8"
        >
          <Box display="flex" alignItems="center" gap="2">
            {/* Caso o usuário não esteje logado, ele utiliza um avatar de usuário 
            padrão ao invés das iniciais do nome */}
            <Avatar
              src="/images/default-avatar.png"
              width={isSidebarExpanded ? "12" : "9"}
              height={isSidebarExpanded ? "12" : "9"}
              name={userData?.name}
            />
            {isSidebarExpanded ? (
              <Text>
                Seja bem-vindo,
                <br />
                <Box as="span" fontWeight="bold">
                  {nameTruncate()}
                </Box>
              </Text>
            ) : (
              ""
            )}
          </Box>
          {isSidebarExpanded ? (
            <IconButton
              aria-label="Logout"
              icon={<GrLogout />}
              onClick={handleLogout}
            />
          ) : (
            ""
          )}
        </Box>
      ) : isSidebarExpanded ? (
        <Box display="flex" flexDirection="column" gap="2">
          <Button colorScheme="blue" onClick={handleLoginForm}>
            Entrar
          </Button>
          {showForm === "login" && <Form onSubmit={handleLogin} type="login" />}

          <Button colorScheme="green" onClick={handleRegisterForm}>
            Cadastrar
          </Button>
          {showForm === "signup" && (
            <Form onSubmit={handleRegister} type="signup" />
          )}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default AuthButtons;
