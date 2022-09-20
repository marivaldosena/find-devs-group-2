import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const UserData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addLoggedUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addLoggedUser } = UserData.actions;
export const userStateData = (state) => state.user.user;
export default UserData.reducer;
