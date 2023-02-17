"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_loader_spinner_1 = require("react-loader-spinner");
const Loading_styled_1 = require("./Loading.styled");
const Loading = () => {
    return ((0, jsx_runtime_1.jsx)(Loading_styled_1.Flex, { children: (0, jsx_runtime_1.jsx)(react_loader_spinner_1.RevolvingDot, { height: "300", width: "300", radius: 24, color: "#55adb8", secondaryColor: "", ariaLabel: "revolving-dot-loading", wrapperStyle: {}, wrapperClass: "", visible: true }) }));
};
exports.default = Loading;
//# sourceMappingURL=Loading.js.map