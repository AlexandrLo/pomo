import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  updatePomoLength,
  updatePomoCount,
  updateShortBreak,
  updateLongBreak,
  toggleAutoResume,
  toggleSound,
  toggleNotify,
} from "app/slices/settingsSlice";
import SettingInput from "./SettingInput";
import About from "./About";

function SettingsModal(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.300");

  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
            <SettingInput
              id="pomo-length"
              friendlyName="Pomodoro length"
              value={settings.pomoLength}
              onChange={(e) => {
                dispatch(updatePomoLength(e));
              }}
            />

            <SettingInput
              id="pomo-count"
              friendlyName="Pomodoros until long break"
              value={settings.pomoCount}
              onChange={(e) => {
                dispatch(updatePomoCount(e));
              }}
            />
            <SettingInput
              id="short-break-length"
              friendlyName="Short break length"
              value={settings.shortBreak}
              onChange={(e) => {
                dispatch(updateShortBreak(e));
              }}
            />
            <SettingInput
              id="long-break-length"
              friendlyName="Long break length"
              value={settings.longBreak}
              onChange={(e) => {
                dispatch(updateLongBreak(e));
              }}
            />
            <SettingInput
              id="auto-resume"
              friendlyName="Auto resume timer"
              type="switch"
              isChecked={settings.autoResume}
              onChange={() => {
                dispatch(toggleAutoResume());
              }}
            />
            <SettingInput
              id="sound"
              friendlyName="Sound"
              type="switch"
              isChecked={settings.sound}
              onChange={() => {
                dispatch(toggleSound());
              }}
            />
            <SettingInput
              id="notify"
              friendlyName="Notifications"
              type="switch"
              isChecked={settings.notify}
              onChange={() => {
                dispatch(toggleNotify());
              }}
            />
          </VStack>
          <About />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;
