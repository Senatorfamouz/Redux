import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 100,
  },
  reducers: {
    increasebyten: (state) => {
      state.value += 10;
    },
   decreasebyten: (state) => {
      state.value -= 10;
    },

   resetValue: (state) => {
      state.value = 100;
    },
    increasebyAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increasebyten, decreasebyten, resetValue, increasebyAmount } = countSlice.actions;
export default countSlice.reducer;