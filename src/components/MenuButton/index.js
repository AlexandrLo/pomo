import React from "react";

import { DotsThreeOutline } from "phosphor-react";
import { Button, useBreakpointValue, useDisclosure } from "@chakra-ui/react";

import SettingsModal from "components/SettingsModal";

function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue(["sm", "md"]);

  return (
    <>
      <Button variant="secondary" size={size} onClick={onOpen}>
        <DotsThreeOutline weight="fill" />
      </Button>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default MenuButton;
