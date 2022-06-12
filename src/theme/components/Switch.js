import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => ({
    track: {
      bg: mode("blackAlpha.200", "whiteAlpha.200")(props),
      _checked: {
        bg: "accentAlpha.700",
      },
    },
    thumb: {
      bg: mode("accent.50", "accent.950")(props),
    },
  }),
};
