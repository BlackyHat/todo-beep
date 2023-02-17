"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("hooks/hooks");
const todos_operations_1 = require("redux/todos/todos-operations");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const Task_styled_1 = require("./Task.styled");
const md_1 = require("react-icons/md");
const Task = ({ task }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleDelete = () => {
        react_toastify_1.toast.success("Task deleted!");
        dispatch((0, todos_operations_1.deleteTodo)(task.id));
    };
    const handleToggle = () => {
        react_toastify_1.toast.success("Task changed!");
        dispatch((0, todos_operations_1.toggleCompleted)(task));
    };
    return ((0, jsx_runtime_1.jsxs)(Task_styled_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: task.completed, onChange: handleToggle }), (0, jsx_runtime_1.jsx)("p", { children: task.text }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleDelete }, { children: (0, jsx_runtime_1.jsx)(md_1.MdClose, { size: 24 }) })), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { theme: "dark", autoClose: 1500, limit: 1, position: "top-center" })] }));
};
exports.default = Task;
//# sourceMappingURL=Task.js.map