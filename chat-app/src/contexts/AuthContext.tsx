import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useToast } from "@chakra-ui/react";

import { User, Conversation } from "@/types";

interface AuthContextType {
  user: User | null;
  register: (user: Omit<User, "isAuthenticated">) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateConversations: (conversations: Conversation[]) => void;
  changeConversation: (id: string | null) => void;
  idToChangeConversation: string | null;
  deleteConversation: (id: string | null) => void;
  idToDeleteConversation: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const toast = useToast();

  const [user, setUser] = useState<User | null>(null);
  const [idToChangeConversation, setIdToChangeConversation] = useState<
    string | null
  >(null);
  const [idToDeleteConversation, setIdToDeleteConversation] = useState<
    string | null
  >(null);

  useEffect(() => {
    const authenticatedUserEmail = localStorage.getItem(
      "authenticatedUserEmail"
    );
    if (authenticatedUserEmail) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const authenticatedUser = users.find(
        (u: User) => u.email === authenticatedUserEmail
      );

      if (authenticatedUser) {
        setUser(authenticatedUser);
      }
    }
  }, []);

  const register = (newUser: Omit<User, "isAuthenticated">) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (!newUser.email || !newUser.password)
      return showToast("Informe todos os seus");

    const foundUser = users.find((u: User) => u.email === newUser.email);

    if (foundUser) return showToast("Usuário já cadastrado!");

    const user = { ...newUser, isAuthenticated: true, conversations: [] };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("authenticatedUserEmail", user.email);
    setUser(user);
  };

  const showToast = (description: string) => {
    toast({
      title: "Atenção",
      description: description,
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: User) => u.email === email && u.password === password
    );

    if (foundUser) {
      foundUser.isAuthenticated = true;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("authenticatedUserEmail", foundUser.email);
      setUser(foundUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    if (user) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = users.find((u: User) => u.email === user.email);

      if (foundUser) {
        foundUser.isAuthenticated = false;
        localStorage.setItem("users", JSON.stringify(users));
      }
      localStorage.removeItem("authenticatedUserEmail");
      setIdToChangeConversation(null);
      setUser(null);
    }
  };

  const updateConversations = (conversations: Conversation[]) => {
    if (user) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = users.map((u: User) => {
        if (u.email === user.email) {
          return { ...u, conversations };
        }
        return u;
      });
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUser((prevUser) => (prevUser ? { ...prevUser, conversations } : null));
    }
  };

  const changeConversation = (idToChangeConversation: string | null) => {
    setIdToChangeConversation(idToChangeConversation);
  };

  const deleteConversation = (idToDeleteConversation: string | null) => {
    setIdToDeleteConversation(idToDeleteConversation);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        updateConversations,
        changeConversation,
        idToChangeConversation,
        deleteConversation,
        idToDeleteConversation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
