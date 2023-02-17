import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "./todos/todos-slice";
import { filtersReducer } from "./todos/filter-slice";
import { authReducer } from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    todos: tasksReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
