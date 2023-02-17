"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../hooks");
const ButtonTheme_1 = __importDefault(require("../ButtonTheme"));
const UserMenu_1 = __importDefault(require("../UserMenu/UserMenu"));
const AppBar_styled_1 = require("./AppBar.styled");
const AppBar = () => {
    const { isLoggedIn } = (0, hooks_1.useAuth)();
    return ((0, jsx_runtime_1.jsxs)(AppBar_styled_1.Header, { children: [(0, jsx_runtime_1.jsxs)(AppBar_styled_1.Title, { children: [(0, jsx_runtime_1.jsx)(AppBar_styled_1.HomeLink, Object.assign({ to: "/" }, { children: "BeepPlan" })), " ", (0, jsx_runtime_1.jsx)(ButtonTheme_1.default, {})] }), (0, jsx_runtime_1.jsx)(AppBar_styled_1.Navigation, { children: isLoggedIn ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AppBar_styled_1.BestLink, Object.assign({ to: "/todos" }, { children: "Tasks" })), (0, jsx_runtime_1.jsx)(UserMenu_1.default, {})] })) : ((0, jsx_runtime_1.jsx)(AppBar_styled_1.BestLink, Object.assign({ to: "/login" }, { children: "Login" }))) })] }));
};
exports.default = AppBar;
//# sourceMappingURL=AppBar.js.map