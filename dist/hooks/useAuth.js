"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const react_redux_1 = require("react-redux");
const auth_selectors_1 = require("../redux/auth/auth-selectors");
const useAuth = () => {
    return {
        isLoggedIn: (0, react_redux_1.useSelector)(auth_selectors_1.selectIsLoggedIn),
        user: (0, react_redux_1.useSelector)(auth_selectors_1.selectUser),
        isRefreshing: (0, react_redux_1.useSelector)(auth_selectors_1.selectIsRefreshing),
    };
};
exports.useAuth = useAuth;
//# sourceMappingURL=useAuth.js.map