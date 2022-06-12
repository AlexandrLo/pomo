import React from "react";

import { DotsThreeOutline } from "phosphor-react";
import {
  Button,
  VisuallyHidden,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import SettingsModal from "components/SettingsModal";

function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue(["sm", "md"]);

  return (
    <>
      <Button variant="secondary" size={size} onClick={onOpen}>
        <DotsThreeOutline weight="fill" />
        <VisuallyHidden>Menu</VisuallyHidden>
      </Button>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default MenuButton;
