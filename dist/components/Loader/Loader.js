"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_loader_spinner_1 = require("react-loader-spinner");
const Loader = () => {
    return ((0, jsx_runtime_1.jsx)(react_loader_spinner_1.MutatingDots, { height: "100", width: "100", color: "#0d0d0d", secondaryColor: "#000000", radius: "12", ariaLabel: "mutating-dots-loading", wrapperStyle: { margin: "auto" }, wrapperClass: "Loader", visible: true }));
};
exports.default = Loader;
//# sourceMappingURL=Loader.js.map