import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    relogin: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    relogout: (state) => {
      state.user = { name: null, email: null };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => state),
});

export const { relogin, relogout } = authSlice.actions;

export const authReducer = authSlice.reducer;
