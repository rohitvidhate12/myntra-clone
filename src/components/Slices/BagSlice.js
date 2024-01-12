import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    items: [],
  },
  reducers: {
    addToBag: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBag: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToBag, removeFromBag } = bagSlice.actions;
export default bagSlice.reducer;
