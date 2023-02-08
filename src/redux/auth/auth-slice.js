import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    setLoggedOut: (state) => {
      state.user = { name: null, email: null };
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => state)
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => state)
      .addCase(refreshUser.rejected, (state, action) => state),
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
