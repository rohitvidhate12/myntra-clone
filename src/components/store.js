import { configureStore } from "@reduxjs/toolkit";
import BagReducer from "./Slices/BagSlice";
import ItemSlice from "./Slices/ItemSlice";
import RegisteredUsersReducer from "./Slices/RegisteredUsersSlice";

export const store = configureStore({
  reducer: {
    bag: BagReducer,
    item: ItemSlice,
    registeredUsers: RegisteredUsersReducer,
  },
});
