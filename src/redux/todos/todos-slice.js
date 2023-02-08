import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
} from "./todos-operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "todos",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(addTodo.pending, handlePending)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.rejected, handleRejected)
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (todo) => todo.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      }),
});
export const tasksReducer = tasksSlice.reducer;
