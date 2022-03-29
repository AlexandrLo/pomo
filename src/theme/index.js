import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "InterVariable",
    body: "InterVariable",
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: 16,
          minW: 16,
          fontSize: "xl",
        },
      },
      variants: {
        circle: (props) => ({
          ...defaultTheme.components.Button.variants.solid(props),
          borderRadius: "1000px",
          px: 0,
        }),
      },
    },
  },
});

export default theme;
