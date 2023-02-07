import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "./todos/todos-slice";
import { filtersReducer } from "./todos/filter-slice";
import { authReducer } from "./auth/auth-slice";

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
