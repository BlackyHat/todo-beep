"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const todos_operations_1 = require("redux/todos/todos-operations");
const TaskForm_styled_1 = require("./TaskForm.styled");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const react_icons_1 = require("react-icons");
const bi_1 = require("react-icons/bi");
const hooks_1 = require("../../hooks/hooks");
const TaskForm = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.elements.text.value.trim();
        if (!text.length) {
            return;
        }
        react_toastify_1.toast.success("Task added!");
        dispatch((0, todos_operations_1.addTodo)(text));
        setInputValue("");
    };
    const textAreaHandler = (event) => {
        setInputValue(event.target.value);
    };
    return ((0, jsx_runtime_1.jsx)("section", { children: (0, jsx_runtime_1.jsxs)(TaskForm_styled_1.NewForm, Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(react_icons_1.IconContext.Provider, Object.assign({ value: { size: "32px" } }, { children: (0, jsx_runtime_1.jsx)(TaskForm_styled_1.SubmitBtn, Object.assign({ type: "submit" }, { children: (0, jsx_runtime_1.jsx)(bi_1.BiMessageSquareAdd, {}) })) })), (0, jsx_runtime_1.jsx)("textarea", { rows: 8, value: inputValue, onChange: textAreaHandler, name: "text", placeholder: "needs to write some details..." }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { theme: "dark", autoClose: 1500, limit: 1, position: "top-center" })] })) }));
};
exports.default = TaskForm;
//# sourceMappingURL=TaskForm.js.map