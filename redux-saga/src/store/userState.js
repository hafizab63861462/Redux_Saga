import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    getUsersFetch(state) {
      state.isLoading = true;
    },
    getUsersSuccess(state, action) {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUsersFaliure(state) {
      state.isLoading = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
