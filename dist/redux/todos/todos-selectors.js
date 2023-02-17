"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectError = exports.selectIsLoading = exports.selectTasks = exports.selectFilterValue = void 0;
const selectFilterValue = (state) => state.filters.status;
exports.selectFilterValue = selectFilterValue;
const selectTasks = (state) => state.todos.items;
exports.selectTasks = selectTasks;
const selectIsLoading = (state) => state.todos.isLoading;
exports.selectIsLoading = selectIsLoading;
const selectError = (state) => state.todos.error;
exports.selectError = selectError;
//# sourceMappingURL=todos-selectors.js.map