import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  stage: "POMO",
  prevStage: "LONG_BREAK",
  pomoCounter: 1,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
    nextStage: (state, action) => {
      state.prevStage = state.stage;

      switch (state.stage) {
        default:
        case "POMO":
          if (state.pomoCounter >= action.payload.pomoCount.value) {
            state.stage = "LONG_BREAK";
          } else {
            state.stage = "SHORT_BREAK";
          }
          break;

        case "SHORT_BREAK":
        case "LONG_BREAK":
          if (state.pomoCounter >= action.payload.pomoCount.value) {
            state.pomoCounter = 1;
          } else {
            state.pomoCounter++;
          }
          state.stage = "POMO";
          break;
      }
    },
    resetTimer: () => initialState,
  },
});

export const { toggleRunning, nextStage, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
