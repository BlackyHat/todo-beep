"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRoute = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useAuth_1 = require("hooks/useAuth");
const react_router_dom_1 = require("react-router-dom");
const PrivateRoute = ({ component: Component, redirectTo = "/", }) => {
    const { isLoggedIn, isRefreshing } = (0, useAuth_1.useAuth)();
    const shouldRedirect = !isRefreshing && !isLoggedIn;
    return shouldRedirect ? (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: redirectTo, replace: true }) : (0, jsx_runtime_1.jsx)(Component, {});
};
exports.PrivateRoute = PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map