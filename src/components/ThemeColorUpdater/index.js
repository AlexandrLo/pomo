import React from "react";

import { Helmet } from "react-helmet-async";
import { useColorMode, useToken } from "@chakra-ui/react";

function ThemeColorUpdater() {
  const [light, dark] = useToken("colors", ["accent.100", "accent.950"]);

  const { colorMode } = useColorMode();

  return (
    <Helmet>
      <meta name="theme-color" content={colorMode === "light" ? light : dark} />
    </Helmet>
  );
}

export default ThemeColorUpdater;
