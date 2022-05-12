import React from "react";

import PropTypes from "prop-types";
import { updateSetting } from "store/slices/settingsSlice";
import { useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
} from "@chakra-ui/react";

function SettingInput({ name, friendlyName, type, value, onChange }) {
  const dispatch = useDispatch();

  const numberHandler = (e) => dispatch(updateSetting({ name, value: e }));
  const switchHandler = (e) => {
    console.log(e);
    dispatch(updateSetting({ name, value: e.target.checked }));
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="1.5rem"
    >
      <FormLabel htmlFor={name} mb="0" w="100%" lineHeight="4rem">
        {friendlyName}
      </FormLabel>

      {type == "number" && (
        <NumberInput
          maxW="6rem"
          value={value}
          onChange={onChange ? onChange : numberHandler}
        >
          <NumberInputField id={name} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}

      {type == "bool" && (
        <Switch
          id={name}
          isChecked={value}
          onChange={onChange ? onChange : switchHandler}
        />
      )}
    </FormControl>
  );
}

SettingInput.propTypes = {
  name: PropTypes.string,
  friendlyName: PropTypes.string,
  type: PropTypes.oneOf(["bool", "number"]),
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onChange: PropTypes.func,
};

SettingInput.defaultProps = {
  type: "number",
};

export default SettingInput;
