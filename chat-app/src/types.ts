export interface Message {
  sender: "user" | "ai";
  content: string;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

export type User = {
  name?: string;
  email: string;
  password: string;
  isAuthenticated?: boolean;
  conversations?: Conversation[]
}
