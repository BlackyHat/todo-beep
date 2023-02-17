"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AppBar_1 = __importDefault(require("components/AppBar/AppBar"));
const Layout_styled_1 = require("./Layout.styled");
const Layout = () => {
    return ((0, jsx_runtime_1.jsxs)(Layout_styled_1.Container, { children: [(0, jsx_runtime_1.jsx)(AppBar_1.default, {}), (0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: null }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }))] }));
};
exports.default = Layout;
//# sourceMappingURL=Layout.js.map