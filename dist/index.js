"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const store_1 = __importDefault(require("redux/store"));
const App_1 = require("components/App");
require("./index.css");
client_1.default.createRoot(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.default }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, Object.assign({ basename: "todo-beep" }, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) })) })) }));
//# sourceMappingURL=index.js.map