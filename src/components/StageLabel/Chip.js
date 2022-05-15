import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Brain, Coffee } from "phosphor-react";
import { HStack, Text, useColorModeValue } from "@chakra-ui/react";

function Chip({ stage }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState(<Brain size={24} />);

  const textColor = useColorModeValue("accent.900", "accent.50");

  useEffect(() => {
    switch (stage) {
      default:
      case "POMO":
        setName("Focus");
        setIcon(<Brain size={32} />);
        break;
      case "SHORT_BREAK":
        setName("Short Break");
        setIcon(<Coffee size={32} />);
        break;
      case "LONG_BREAK":
        setName("Long Break");
        setIcon(<Coffee size={32} />);
        break;
    }
  }, [stage]);

  return (
    <HStack
      px={["0.75rem", "1rem"]}
      py={["0.25rem", "0.5rem"]}
      spacing="0.5rem"
      border="2px solid"
      borderRadius="full"
      borderColor={textColor}
      bg="accentAlpha.100"
      color={textColor}
    >
      {icon}
      <Text variant="label">{name}</Text>
    </HStack>
  );
}

Chip.propTypes = {
  stage: PropTypes.oneOf(["POMO", "SHORT_BREAK", "LONG_BREAK"]),
};

export default Chip;
