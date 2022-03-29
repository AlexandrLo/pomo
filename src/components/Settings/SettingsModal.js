import React from "react";
import {
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  StackDivider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import SettingInput from "./SettingInput";

function SettingsModal(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.300");
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="1.75rem">
          <VStack
            divider={<StackDivider borderColor={borderColor} />}
            py="1rem"
            spacing="1rem"
            align="stretch"
            border="1px"
            borderRadius="md"
            borderColor={borderColor}
            overflow="clip"
          >
            <SettingInput
              id="dark-mode-switch"
              friendlyName="Enable dark mode"
              type="switch"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
            <SettingInput id="lap-length" friendlyName="Lap length" />

            <SettingInput
              id="session-count"
              friendlyName="Sessions until long break"
            />
            <SettingInput
              id="short-break-length"
              friendlyName="Short break length"
            />
            <SettingInput
              id="long-break-length"
              friendlyName="Long break length"
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;
