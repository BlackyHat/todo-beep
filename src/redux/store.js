import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
    filters: filtersReducer,
  },
});
