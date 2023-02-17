"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsRefreshing = exports.selectUser = exports.selectIsLoggedIn = void 0;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
exports.selectIsLoggedIn = selectIsLoggedIn;
const selectUser = (state) => state.auth.user;
exports.selectUser = selectUser;
const selectIsRefreshing = (state) => state.auth.isRefreshing;
exports.selectIsRefreshing = selectIsRefreshing;
//# sourceMappingURL=auth-selectors.js.map