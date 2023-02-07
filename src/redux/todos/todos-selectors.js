export const getStatusFilter = (state) => state.filters.status;

export const getTasks = (state) => state.todos.items;

export const getIsLoading = (state) => state.todos.isLoading;

export const getError = (state) => state.todos.error;
