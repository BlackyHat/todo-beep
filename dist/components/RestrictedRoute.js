"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictedRoute = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useAuth_1 = require("hooks/useAuth");
const react_router_dom_1 = require("react-router-dom");
const RestrictedRoute = ({ component: Component, redirectTo = "/", }) => {
    const { isLoggedIn } = (0, useAuth_1.useAuth)();
    return isLoggedIn ? (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: redirectTo, replace: true }) : (0, jsx_runtime_1.jsx)(Component, {});
};
exports.RestrictedRoute = RestrictedRoute;
//# sourceMappingURL=RestrictedRoute.js.map