import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => {
    const { scrollBehavior } = props;

    return {
      overlay: {
        bg: mode("blackAlpha.50", "whiteAlpha.50")(props),
        zIndex: "modal",
      },
      dialog: {
        borderRadius: "1.5rem",
        bg: mode("accent.50", "accent.950")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        color: "inherit",
        my: "3.75rem",
        zIndex: "modal",
        maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
        boxShadow: mode("lg", "dark-lg")(props),
        "&:focus:not([data-focus-visible-added])": {
          boxShadow: mode("lg", "dark-lg")(props),
        },
      },
      header: {
        p: "1.5rem",
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      closeButton: {
        position: "absolute",
        top: "1.5rem",
        insetEnd: "1.5rem",
        boxSize: "2.25rem",
      },
    };
  },
};
