import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/inter/variable.css";

import Button from "./components/Button";
import colors from "./colors";

const theme = extendTheme({
  colors,
  components: {
    Button,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "InterVariable",
    body: "InterVariable",
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("black", "white")(props),
        bg: mode("white", "gray.800")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        WebkitTapHighlightColor: "transparent",
        wordWrap: "break-word",
      },
    }),
  },
});

export default theme;
