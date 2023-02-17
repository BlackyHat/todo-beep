"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTasks = void 0;
const hooks_1 = require("./hooks");
const todos_selectors_1 = require("../redux/todos/todos-selectors");
const useTasks = () => {
    return {
        items: (0, hooks_1.useAppSelector)(todos_selectors_1.selectTasks),
        isLoadind: (0, hooks_1.useAppSelector)(todos_selectors_1.selectIsLoading),
        isError: (0, hooks_1.useAppSelector)(todos_selectors_1.selectError),
        filter: (0, hooks_1.useAppSelector)(todos_selectors_1.selectFilterValue),
    };
};
exports.useTasks = useTasks;
//# sourceMappingURL=useTasks.js.map