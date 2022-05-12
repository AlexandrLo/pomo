import React from "react";

import { DotsThreeOutline } from "phosphor-react";
import { Button, useDisclosure } from "@chakra-ui/react";

import SettingsModal from "components/SettingsModal";

function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="secondary" size="md" onClick={onOpen}>
        <DotsThreeOutline weight="fill" />
      </Button>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default MenuButton;
