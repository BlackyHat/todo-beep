"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const auth_operations_1 = require("redux/auth/auth-operations");
const useAuth_1 = require("hooks/useAuth");
const RestrictedRoute_1 = require("./RestrictedRoute");
const PrivateRoute_1 = require("./PrivateRoute");
const Layout_1 = __importDefault(require("./Layout/Layout"));
const Loading_1 = __importDefault(require("./Loading/Loading"));
const hooks_1 = require("hooks/hooks");
const HomePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("pages/HomePage/HomePage"))));
const Tasks = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("pages/Tasks"))));
const LoginPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("pages/LoginPage/LoginPage"))));
const Register = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("pages/Register/Register"))));
const App = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { isRefreshing } = (0, useAuth_1.useAuth)();
    (0, react_1.useEffect)(() => {
        dispatch((0, auth_operations_1.refreshUser)());
    }, [dispatch]);
    return isRefreshing ? ((0, jsx_runtime_1.jsx)(Loading_1.default, {})) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, Object.assign({ path: "/", element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(HomePage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/todos", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.PrivateRoute, { component: Tasks, redirectTo: "/login" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(RestrictedRoute_1.RestrictedRoute, { component: LoginPage, redirectTo: "/todos" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/register", element: (0, jsx_runtime_1.jsx)(RestrictedRoute_1.RestrictedRoute, { component: Register, redirectTo: "/todos" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(HomePage, {}) })] })) }));
};
exports.App = App;
//# sourceMappingURL=App.js.map