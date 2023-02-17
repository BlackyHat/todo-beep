"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksReducer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const todos_operations_1 = require("./todos-operations");
const initialState = { items: [], isLoading: false, error: null };
const handlePending = (state) => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
const tasksSlice = (0, toolkit_1.createSlice)({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(todos_operations_1.fetchTodos.pending, handlePending)
        .addCase(todos_operations_1.addTodo.pending, handlePending)
        .addCase(todos_operations_1.deleteTodo.pending, handlePending)
        .addCase(todos_operations_1.toggleCompleted.pending, handlePending)
        .addCase(todos_operations_1.fetchTodos.rejected, handleRejected)
        .addCase(todos_operations_1.addTodo.rejected, handleRejected)
        .addCase(todos_operations_1.deleteTodo.rejected, handleRejected)
        .addCase(todos_operations_1.toggleCompleted.rejected, handleRejected)
        .addCase(todos_operations_1.fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
        .addCase(todos_operations_1.addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
    })
        .addCase(todos_operations_1.deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex((todo) => todo.id === action.payload);
        state.items.splice(index, 1);
    })
        .addCase(todos_operations_1.toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex((todo) => todo.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
    }),
});
exports.tasksReducer = tasksSlice.reducer;
//# sourceMappingURL=todos-slice.js.map