import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => {
    return {
      stepper: {
        border: "none",
        color: "inherit",
        _hover: {
          bg: mode("blackAlpha.100", "whiteAlpha.100")(props),
        },
        _active: {
          bg: mode("blackAlpha.300", "whiteAlpha.300")(props),
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
      },
    };
  },
  variants: {
    outline: (props) => {
      return {
        field: {
          border: "2px solid",
          borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
          bg: "inherit",
          _placeholder: {
            color: mode("blackAlpha.300", "whiteAlpha.300")(props),
          },
          _hover: {
            borderColor: "accentAlpha.400",
          },
          _focus: {
            zIndex: 1,
            borderColor: "accentAlpha.700",
            boxShadow: "none",
          },
        },
      };
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: "md",
        px: "1.5rem",
        h: "3rem",
        borderRadius: "0.75rem",
      },
      stepper: {
        borderRadius: "0.25rem",
        _first: {
          borderTopEndRadius: "0.75rem",
        },
        _last: {
          borderBottomEndRadius: "0.75rem",
        },
      },
    },
  },
};
