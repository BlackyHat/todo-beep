import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { setLoggedIn, setLoggedOut } from "./auth-slice";

interface IUser {
  email: string;
}
interface ICredentials extends IUser {
  name?: string;
  password: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: ICredentials, thunkAPI) => {
    try {
      const { email, password, name } = credentials;

      await createUserWithEmailAndPassword(auth, email, password);
      const user = { name, email };
      return { user };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: ICredentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      await signInWithEmailAndPassword(auth, email, password);
      const name = email.split("@")[0];
      const user = { name, email };
      return { user };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    auth.onAuthStateChanged((user) => {
      if (user?.email) {
        const currentUser = {
          email: user.email,
          name: user.email.split("@")[0],
        };
        thunkAPI.dispatch(setLoggedIn(currentUser));
      } else {
        thunkAPI.dispatch(setLoggedOut());
      }
    });
  }
);
