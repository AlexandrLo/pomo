import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import Button from "./components/Button";
import Modal from "./components/Modal";
import Text from "./components/Text";
import colors from "./colors";

const theme = extendTheme({
  colors,
  components: {
    Button,
    Modal,
    Text,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Roboto Flex', sans-serif",
    body: "'Roboto Flex', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("accent.900", "accent.50")(props),
        bg: mode("accent.50", "accent.950")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
        WebkitTapHighlightColor: "transparent",
        wordWrap: "break-word",
      },
    }),
  },
});

export default theme;
