import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Brain, Coffee } from "phosphor-react";
import { HStack, Text, useColorModeValue } from "@chakra-ui/react";

function Chip({ stage }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState(<Brain size={24} />);

  const textColor = useColorModeValue("accent.900", "accent.50");
  const bgColor = useColorModeValue("accent.50", "accent.950");

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
      border="3px solid"
      bg={bgColor}
      color={textColor}
      borderColor={textColor}
      transitionProperty="background, color, borderColor"
      transitionDuration="normal"
      px="1rem"
      py="0.5rem"
      borderRadius="1rem"
      spacing="0.5rem"
    >
      {icon}
      <Text fontSize="1.5rem" fontWeight={500} whiteSpace="nowrap">
        {name}
      </Text>
    </HStack>
  );
}

Chip.propTypes = {
  stage: PropTypes.oneOf(["POMO", "SHORT_BREAK", "LONG_BREAK"]),
};

export default Chip;
