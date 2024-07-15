import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/contexts/AuthContext";
import type { AppProps } from "next/app";

import theme from "../chakra";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
