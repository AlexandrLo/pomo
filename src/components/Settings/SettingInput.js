import React from "react";
import PropTypes from "prop-types";
import {
  Switch,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function SettingInput(props) {
  const { id, friendlyName, type, ...inputProps } = props;
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="1rem"
      h="2.5rem"
    >
      <FormLabel htmlFor={id} mb="0">
        {friendlyName}
      </FormLabel>

      {type == "number" && (
        <NumberInput maxW="6rem" {...inputProps}>
          <NumberInputField id={id} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}

      {type == "switch" && <Switch id={id} {...inputProps} />}
    </FormControl>
  );
}

SettingInput.propTypes = {
  id: PropTypes.string,
  friendlyName: PropTypes.string,
  type: PropTypes.oneOf(["switch", "number"]),
};

SettingInput.defaultProps = {
  type: "number",
};

export default SettingInput;
