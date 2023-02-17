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
import { ITodo } from "../../types/data";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, `/${auth.currentUser?.uid}auth`)
      );
      const data = querySnapshot.docs.map((el) => {
        const item = el.data();

        return {
          text: item.text,
          completed: item.completed,
          id: el.id,
        } as ITodo;
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
///=============================
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text: string, { rejectWithValue }) => {
    try {
      const data = await addDoc(
        collection(db, `/${auth.currentUser?.uid}auth`),
        {
          text,
          completed: false,
        }
      );
      return { id: data.id, text, completed: false };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId: string, thunkAPI) => {
    try {
      const docRef = doc(db, `/${auth.currentUser?.uid}auth`, todoId);

      await deleteDoc(docRef);
      return docRef.id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const toggleCompleted = createAsyncThunk(
  "todos/toggleCompleted",
  async (todo: ITodo, thunkAPI) => {
    try {
      const docRef = doc(db, `/${auth?.currentUser?.uid}auth`, todo.id);
      await updateDoc(docRef, {
        completed: !todo.completed,
      });
      return { ...todo, completed: !todo.completed };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
