import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

import SettingInput from "./SettingInput";

function SettingsModal({ isOpen, onClose }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const settings = useSelector((state) => state.settings);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <VStack spacing="0" align="stretch" pb="1.5rem">
          <SettingInput
            name="darkModeSwitch"
            friendlyName="Enable dark mode"
            type="bool"
            value={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          {Object.entries(settings).map(
            ([name, setting]) =>
              setting.type && (
                <SettingInput
                  key={name}
                  name={name}
                  friendlyName={setting.friendlyName}
                  value={setting.value}
                  type={setting.type}
                />
              ),
          )}
        </VStack>
      </ModalContent>
    </Modal>
  );
}

SettingsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SettingsModal;
