import type { RootState } from "../store";

export const selectFilterValue = (state: RootState) => state.filters.status;

export const selectTasks = (state: RootState) => state.todos.items;

export const selectIsLoading = (state: RootState) => state.todos.isLoading;

export const selectError = (state: RootState) => state.todos.error;
