import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    pomoLength: {
      friendlyName: "Pomodoro length",
      type: "number",
      value: 25,
    },
    pomoCount: {
      friendlyName: "Pomodoros until long break",
      type: "number",
      value: 4,
    },
    shortBreak: {
      friendlyName: "Short break length",
      type: "number",
      value: 5,
    },
    longBreak: {
      friendlyName: "Long break length",
      type: "number",
      value: 15,
    },
    autoResume: {
      friendlyName: "Auto resume timer",
      type: "bool",
      value: false,
    },
    sound: {
      friendlyName: "Sound",
      type: "bool",
      value: true,
    },
    notify: {
      friendlyName: "Notifications",
      type: "bool",
      value: true,
    },
  },
  reducers: {
    updateSetting: (state, action) => {
      state[action.payload.name].value = action.payload.value;
    },
  },
});

export const {
  updateSetting,
  updatePomoLength,
  updatePomoCount,
  updateShortBreak,
  updateLongBreak,
  toggleAutoResume,
  toggleSound,
  toggleNotify,
} = settingsSlice.actions;

export default settingsSlice.reducer;
