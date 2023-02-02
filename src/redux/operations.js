import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase";

// const todoApi = axios.create({
//   baseURL: "https://63c53c1af3a73b3478512246.mockapi.io/contacts/",
// });

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
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
// export const fetchTodos = createAsyncThunk(
//   "todos/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await todoApi.get("/todo-beep");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

///=============================
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text, thunkAPI) => {
    try {
      // const { data } = await todoApi.post("/todo-beep", { text });
      const data = await addDoc(collection(db, "todos"), {
        text,
        completed: false,
      });
      return { id: data.id, text, completed: false };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan",
// });
// console.log("Document written with ID: ", docRef.id);
// export const addTodo = createAsyncThunk(
//   "todos/addTodo",
//   async (text, thunkAPI) => {
//     try {
//       const { data } = await todoApi.post("/todo-beep", { text });
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      const docRef = doc(db, "todos", todoId);

      await deleteDoc(docRef);
      console.log(docRef.id);
      return docRef.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const deleteTodo = createAsyncThunk(
//   "todos/deleteTodo",
//   async (todoId, thunkAPI) => {
//     try {
//       const { data } = await todoApi.delete(`/todo-beep/${todoId}`);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const toggleCompleted = createAsyncThunk(
  "todos/toggleCompleted",
  async (todo, thunkAPI) => {
    try {
      const docRef = doc(db, "todos", todo.id);
      await updateDoc(docRef, {
        completed: !todo.completed,
      });
      return { ...todo, completed: !todo.completed };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// // export const toggleCompleted = createAsyncThunk(
//   "todos/toggleCompleted",
//   async (todo, thunkAPI) => {
//     try {
//       const { data } = await todoApi.put(`/todo-beep/${todo.id}`, {
//         completed: !todo.completed,
//       });
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
