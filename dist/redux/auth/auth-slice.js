"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducer = exports.setLoggedOut = exports.setLoggedIn = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const auth_operations_1 = require("./auth-operations");
const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    isRefreshing: false,
};
const authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.user = action.payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
        },
        setLoggedOut: (state) => {
            state.user = { name: null, email: null };
            state.isRefreshing = false;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => builder
        .addCase(auth_operations_1.register.pending, (state) => state)
        .addCase(auth_operations_1.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
    })
        .addCase(auth_operations_1.register.rejected, (state) => state)
        .addCase(auth_operations_1.logIn.pending, (state) => state)
        .addCase(auth_operations_1.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
    })
        .addCase(auth_operations_1.logIn.rejected, (state) => state)
        .addCase(auth_operations_1.logOut.pending, (state) => state)
        .addCase(auth_operations_1.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
    })
        .addCase(auth_operations_1.logOut.rejected, (state) => state)
        .addCase(auth_operations_1.refreshUser.pending, (state) => {
        state.isRefreshing = true;
    })
        .addCase(auth_operations_1.refreshUser.fulfilled, (state) => state)
        .addCase(auth_operations_1.refreshUser.rejected, (state) => state),
});
_a = authSlice.actions, exports.setLoggedIn = _a.setLoggedIn, exports.setLoggedOut = _a.setLoggedOut;
exports.authReducer = authSlice.reducer;
//# sourceMappingURL=auth-slice.js.map