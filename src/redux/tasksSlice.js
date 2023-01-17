import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, toggleCompleted } from "./operations";

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
  extraReducers: {
    // handlePending
    [fetchTodos.pending]: handlePending,
    [addTodo.pending]: handlePending,
    [deleteTodo.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    // handleRejected
    [fetchTodos.rejected]: handleRejected,
    [addTodo.rejected]: handleRejected,
    [deleteTodo.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    // FETCH contacts
    [fetchTodos.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // ADD contacts
    [addTodo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      state.items.push(action.payload);
    },
    // DELETE contacts
    [deleteTodo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    // TOGGLE completed
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});
export const tasksReducer = tasksSlice.reducer;
