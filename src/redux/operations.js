import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://63c53c1af3a73b3478512246.mockapi.io/contacts/",
});

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await todoApi.get("/todo-beep");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text, thunkAPI) => {
    try {
      const { data } = await todoApi.post("/todo-beep", { text });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      const { data } = await todoApi.delete(`/todo-beep/${todoId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "todos/toggleCompleted",
  async (todo, thunkAPI) => {
    try {
      const { data } = await todoApi.put(`/todo-beep/${todo}`, {
        completed: !todo.completed,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
