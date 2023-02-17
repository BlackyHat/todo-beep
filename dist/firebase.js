"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyBYQ3eFYck0aA4Nsw3JHm2Uo7c9oVb1x0w",
    authDomain: "todo-app-beep.firebaseapp.com",
    projectId: "todo-app-beep",
    storageBucket: "todo-app-beep.appspot.com",
    messagingSenderId: "513773284795",
    appId: "1:513773284795:web:fb285a5ed07048fb13289e",
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(app);
exports.auth = (0, auth_1.getAuth)();
//# sourceMappingURL=firebase.js.map