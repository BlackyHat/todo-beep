"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("hooks/hooks");
const todos_selectors_1 = require("redux/todos/todos-selectors");
const TaskCounter_styled_1 = require("./TaskCounter.styled");
const TaskCounter = () => {
    const tasks = (0, hooks_1.useAppSelector)(todos_selectors_1.selectTasks);
    const count = tasks.reduce((acc, task) => {
        if (task.completed) {
            acc.completed += 1;
        }
        else {
            acc.active += 1;
        }
        return acc;
    }, { active: 0, completed: 0 });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(TaskCounter_styled_1.TextLabel, { children: ["Active: ", count.active] }), (0, jsx_runtime_1.jsxs)(TaskCounter_styled_1.TextLabel, { children: ["Completed: ", count.completed] })] }));
};
exports.default = TaskCounter;
//# sourceMappingURL=TaskCounter.js.map