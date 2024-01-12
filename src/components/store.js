import { configureStore } from "@reduxjs/toolkit";
import BagReducer from "./Slices/BagSlice";
import ItemSlice from "./Slices/ItemSlice";

export const store = configureStore({
  reducer: {
    bag: BagReducer,
    item: ItemSlice,
  },
});
