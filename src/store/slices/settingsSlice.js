import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    pomoLength: 25,
    pomoCount: 4,
    shortBreak: 5,
    longBreak: 15,
    autoResume: false,
    sound: true,
    notify: true,
  },
  reducers: {
    updatePomoLength: (state, action) => {
      state.pomoLength = action.payload;
    },
    updatePomoCount: (state, action) => {
      state.pomoCount = action.payload;
    },
    updateShortBreak: (state, action) => {
      state.shortBreak = action.payload;
    },
    updateLongBreak: (state, action) => {
      state.longBreak = action.payload;
    },
    toggleAutoResume: (state) => {
      state.autoResume = !state.autoResume;
    },
    toggleSound: (state) => {
      state.sound = !state.sound;
    },
    toggleNotify: (state) => {
      state.notify = !state.notify;
    },
  },
});

export const {
  updatePomoLength,
  updatePomoCount,
  updateShortBreak,
  updateLongBreak,
  toggleAutoResume,
  toggleSound,
  toggleNotify,
} = settingsSlice.actions;

export default settingsSlice.reducer;