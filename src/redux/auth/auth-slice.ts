import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "types/data";
import { register, logIn, logOut, refreshUser } from "./auth-operations";

const initialState: IAuthState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<IUser>) => {
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
      .addCase(register.pending, (state) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => state)
      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => state)
      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => state)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state) => state)
      .addCase(refreshUser.rejected, (state) => state),
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
