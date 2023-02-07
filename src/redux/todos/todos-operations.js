import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, `/${auth.currentUser.uid}auth`)
      );
      const data = querySnapshot.docs.map((el) => ({
        ...el.data(),
        id: el.id,
      }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
///=============================
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text, thunkAPI) => {
    try {
      const data = await addDoc(
        collection(db, `/${auth.currentUser.uid}auth`),
        {
          text,
          completed: false,
        }
      );
      return { id: data.id, text, completed: false };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      const docRef = doc(db, `/${auth.currentUser.uid}auth`, todoId);

      await deleteDoc(docRef);
      return docRef.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const toggleCompleted = createAsyncThunk(
  "todos/toggleCompleted",
  async (todo, thunkAPI) => {
    try {
      const docRef = doc(db, `/${auth.currentUser.uid}auth`, todo.id);
      await updateDoc(docRef, {
        completed: !todo.completed,
      });
      return { ...todo, completed: !todo.completed };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
