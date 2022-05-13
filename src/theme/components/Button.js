import { theme as defaultTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: {
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  sizes: {
    xl: {
      h: 16,
      minW: 16,
      fontSize: "xl",
    },
    lg: {
      h: "96px",
      minW: "128px",
      fontSize: "32px",
      borderRadius: "32px",
    },
    md: {
      h: "80px",
      minW: "80px",
      fontSize: "32px",
      borderRadius: "24px",
    },
    sm: {
      h: "34px",
      minW: "34px",
      fontSize: "18px",
      borderRadius: "8px",
    },
  },
  variants: {
    circle: (props) => ({
      ...defaultTheme.components.Button.variants.solid(props),
      borderRadius: "1000px",
      px: 0,
    }),
    primary: (props) => {
      return {
        color: mode("accent.900", "accent.50")(props),
        bg: "accentAlpha.700",
        _hover: {
          bg: "accentAlpha.600",
        },
        _active: {
          bg: "accentAlpha.500",
        },
      };
    },
    secondary: (props) => {
      return {
        color: mode("accent.900", "accent.50")(props),
        bg: "accentAlpha.100",
        _hover: {
          bg: "accentAlpha.200",
        },
        _active: {
          bg: "accentAlpha.300",
        },
      };
    },
    ghost: (props) => {
      return {
        color: mode("accent.900", "accent.50")(props),
        bg: "transparent",
        _hover: {
          bg: "accentAlpha.100",
        },
        _active: {
          bg: "accentAlpha.200",
        },
      };
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
    colorScheme: "accent",
  },
};
