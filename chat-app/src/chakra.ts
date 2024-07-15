import { extendTheme } from "@chakra-ui/react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

// Configuração global
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "#F8F8FF",
        color: "#292929",
        fontFamily: "Inter, sans-serif",
        margin: 0,
        padding: 0,
      },
      svg: {
        width: "28px",
        height: "28px",
      }
    },
  },
});


export default theme;
