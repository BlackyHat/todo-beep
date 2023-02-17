"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("components/Button"));
const hooks_1 = require("../../hooks/hooks");
const filter_slice_1 = require("../../redux/todos/filter-slice");
const todos_constants_1 = require("../../redux/todos/todos-constants");
const todos_selectors_1 = require("../../redux/todos/todos-selectors");
const StatusFilter_styled_1 = require("./StatusFilter.styled");
const StatusFilter = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const filter = (0, hooks_1.useAppSelector)(todos_selectors_1.selectFilterValue);
    const handleFilterChange = (filter) => dispatch((0, filter_slice_1.updateFilter)(filter));
    return ((0, jsx_runtime_1.jsxs)(StatusFilter_styled_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { selected: filter === todos_constants_1.STATUS.ALL, onClick: () => handleFilterChange(todos_constants_1.STATUS.ALL), title: "All" }), (0, jsx_runtime_1.jsx)(Button_1.default, { selected: filter === todos_constants_1.STATUS.ACTIVE, onClick: () => handleFilterChange(todos_constants_1.STATUS.ACTIVE), title: "Active" }), (0, jsx_runtime_1.jsx)(Button_1.default, { selected: filter === todos_constants_1.STATUS.COMPLETED, onClick: () => handleFilterChange(todos_constants_1.STATUS.COMPLETED), title: "Completed" })] }));
};
exports.default = StatusFilter;
//# sourceMappingURL=StatusFilter.js.map