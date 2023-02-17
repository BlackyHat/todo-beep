"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshUser = exports.logOut = exports.logIn = exports.register = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const auth_1 = require("firebase/auth");
const firebase_1 = require("../../firebase");
const auth_slice_1 = require("./auth-slice");
exports.register = (0, toolkit_1.createAsyncThunk)("auth/register", (credentials, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = credentials;
        yield (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, email, password);
        const user = { name, email };
        return { user };
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.logIn = (0, toolkit_1.createAsyncThunk)("auth/login", (credentials, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = credentials;
        yield (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, email, password);
        const name = email.split("@")[0];
        const user = { name, email };
        return { user };
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.logOut = (0, toolkit_1.createAsyncThunk)("auth/logout", (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_1.signOut)(firebase_1.auth);
        return;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.refreshUser = (0, toolkit_1.createAsyncThunk)("auth/refresh", (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    firebase_1.auth.onAuthStateChanged((user) => {
        if (user === null || user === void 0 ? void 0 : user.email) {
            const currentUser = {
                email: user.email,
                name: user.email.split("@")[0],
            };
            thunkAPI.dispatch((0, auth_slice_1.setLoggedIn)(currentUser));
        }
        else {
            thunkAPI.dispatch((0, auth_slice_1.setLoggedOut)());
        }
    });
}));
//# sourceMappingURL=auth-operations.js.map