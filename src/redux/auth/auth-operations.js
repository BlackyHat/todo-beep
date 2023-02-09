import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { setLoggedIn, setLoggedOut } from "./auth-slice";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { email, password, name } = credentials;

      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      const user = { name, email };
      console.log(user);

      return { user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      await signInWithEmailAndPassword(auth, email, password);
      const { displayName: name } = auth.currentUser;
      const user = { name, email };
      console.log(user);

      return { user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const currentUser = {
          email: user.email,
          name: user.displayName,
        };
        console.log(currentUser);
        thunkAPI.dispatch(setLoggedIn(currentUser));
      } else {
        thunkAPI.dispatch(setLoggedOut());
      }
    });
  }
);
