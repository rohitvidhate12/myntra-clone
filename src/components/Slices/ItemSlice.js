import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../../Data/DefaultItems";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: DEFAULT_ITEMS,
  },
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});

export const { addInitialItems } = itemSlice.actions;
export default itemSlice.reducer;
