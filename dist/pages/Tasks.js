"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("hooks/hooks");
const react_1 = require("react");
const TaskForm_1 = __importDefault(require("components/TaskForm/TaskForm"));
const TaskList_1 = __importDefault(require("components/TaskList/TaskList"));
const Section_1 = __importDefault(require("components/Section/Section"));
const todos_operations_1 = require("redux/todos/todos-operations");
const Tasks = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, todos_operations_1.fetchTodos)());
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h2", { children: "Tasks" }) }), (0, jsx_runtime_1.jsxs)(Section_1.default, { children: [(0, jsx_runtime_1.jsx)(TaskForm_1.default, {}), (0, jsx_runtime_1.jsx)(TaskList_1.default, {})] })] }));
};
exports.default = Tasks;
//# sourceMappingURL=Tasks.js.map