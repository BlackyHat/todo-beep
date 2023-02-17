"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const todos_slice_1 = require("./todos/todos-slice");
const filter_slice_1 = require("./todos/filter-slice");
const auth_slice_1 = require("./auth/auth-slice");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        todos: todos_slice_1.tasksReducer,
        filters: filter_slice_1.filtersReducer,
        auth: auth_slice_1.authReducer,
    },
});
exports.default = store;
//# sourceMappingURL=store.js.map