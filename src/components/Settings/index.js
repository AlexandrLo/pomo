import React from "react";

import { FiSettings } from "react-icons/fi";
import { Button, useDisclosure } from "@chakra-ui/react";

import SettingsModal from "./SettingsModal";

function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button variant="circle" colorScheme="gray" onClick={onOpen}>
        <FiSettings />
      </Button>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Settings;
