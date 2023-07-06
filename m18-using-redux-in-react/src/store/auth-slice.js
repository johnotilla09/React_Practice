import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
  };
  
  // This slice is for authentication
const authSlice = createSlice({
  name: "authhentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

// export authSlice actions
export const authActions = authSlice.actions;

export default authSlice.reducer;
  