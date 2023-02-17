"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Task_1 = __importDefault(require("components/Task"));
const Loader_1 = __importDefault(require("components/Loader"));
const todos_selectors_1 = require("redux/todos/todos-selectors");
const todos_constants_1 = require("redux/todos/todos-constants");
const hooks_1 = require("hooks/hooks");
const TaskList_styled_1 = require("./TaskList.styled");
const getVisibleTasks = (tasks, status) => {
    switch (status) {
        case todos_constants_1.STATUS.ACTIVE:
            return tasks.filter((task) => !task.completed);
        case todos_constants_1.STATUS.COMPLETED:
            return tasks.filter((task) => task.completed);
        default:
            return tasks;
    }
};
const TaskList = () => {
    const tasks = (0, hooks_1.useAppSelector)(todos_selectors_1.selectTasks);
    const isLoading = (0, hooks_1.useAppSelector)(todos_selectors_1.selectIsLoading);
    const error = (0, hooks_1.useAppSelector)(todos_selectors_1.selectError);
    const statusFilter = (0, hooks_1.useAppSelector)(todos_selectors_1.selectFilterValue);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
    return ((0, jsx_runtime_1.jsxs)(TaskList_styled_1.SectionTaskList, { children: [isLoading && !error && (0, jsx_runtime_1.jsx)(Loader_1.default, {}), !isLoading && ((0, jsx_runtime_1.jsx)(TaskList_styled_1.TaskListItem, { children: visibleTasks === null || visibleTasks === void 0 ? void 0 : visibleTasks.map((task) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(Task_1.default, { task: task }) }, task.id))) }))] }));
};
exports.default = TaskList;
//# sourceMappingURL=TaskList.js.map