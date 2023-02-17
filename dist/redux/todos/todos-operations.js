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
exports.toggleCompleted = exports.deleteTodo = exports.addTodo = exports.fetchTodos = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../firebase");
exports.fetchTodos = (0, toolkit_1.createAsyncThunk)("todos/fetchAll", (_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(firebase_1.db, `/${(_a = firebase_1.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid}auth`));
        const data = querySnapshot.docs.map((el) => {
            const item = el.data();
            return {
                text: item.text,
                completed: item.completed,
                id: el.id,
            };
        });
        return data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
exports.addTodo = (0, toolkit_1.createAsyncThunk)("todos/addTodo", (text, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const data = yield (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_1.db, `/${(_b = firebase_1.auth.currentUser) === null || _b === void 0 ? void 0 : _b.uid}auth`), {
            text,
            completed: false,
        });
        return { id: data.id, text, completed: false };
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}));
exports.deleteTodo = (0, toolkit_1.createAsyncThunk)("todos/deleteTodo", (todoId, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const docRef = (0, firestore_1.doc)(firebase_1.db, `/${(_c = firebase_1.auth.currentUser) === null || _c === void 0 ? void 0 : _c.uid}auth`, todoId);
        yield (0, firestore_1.deleteDoc)(docRef);
        return docRef.id;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.toggleCompleted = (0, toolkit_1.createAsyncThunk)("todos/toggleCompleted", (todo, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const docRef = (0, firestore_1.doc)(firebase_1.db, `/${(_d = firebase_1.auth === null || firebase_1.auth === void 0 ? void 0 : firebase_1.auth.currentUser) === null || _d === void 0 ? void 0 : _d.uid}auth`, todo.id);
        yield (0, firestore_1.updateDoc)(docRef, {
            completed: !todo.completed,
        });
        return Object.assign(Object.assign({}, todo), { completed: !todo.completed });
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
//# sourceMappingURL=todos-operations.js.map