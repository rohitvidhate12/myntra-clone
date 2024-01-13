import { createSlice } from "@reduxjs/toolkit";
import { REGISTERED_USERA_LIST } from "../../Data/RegisteredUsers";

const registeredUsers = createSlice({
  name: "item",
  initialState: {
    registeredUsers: REGISTERED_USERA_LIST,
    isLoggedIn: false,
  },
  reducers: {
    initialRegisteredUsers: (state, action) => {
      return state;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { initialRegisteredUsers, setLoggedIn } = registeredUsers.actions;
export default registeredUsers.reducer;
