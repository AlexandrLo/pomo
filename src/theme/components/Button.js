import { theme as defaultTheme } from "@chakra-ui/react";

export default {
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
};
