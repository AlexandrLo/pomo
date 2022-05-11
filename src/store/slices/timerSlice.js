import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isRunning: false,
    stage: "pomo",
    pomoCounter: 0,
  },
  reducers: {
    updateStage: (state, action) => {
      state.stage = action.payload;
    },
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
    incrementPomoCounter: (state) => {
      state.pomoCounter++;
    },
    resetPomoCounter: (state) => {
      state.pomoCounter = 0;
    },
  },
});

export const {
  updateStage,
  toggleRunning,
  incrementPomoCounter,
  resetPomoCounter,
} = timerSlice.actions;

export default timerSlice.reducer;
