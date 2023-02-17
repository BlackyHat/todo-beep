"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useTheme_1 = require("../../hooks/useTheme");
const ButtonTheme_styled_1 = require("./ButtonTheme.styled");
const ButtonTheme = () => {
    const { theme, setTheme } = (0, useTheme_1.useTheme)();
    const handleThemeClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return ((0, jsx_runtime_1.jsx)(ButtonTheme_styled_1.ButtonBox, { children: (0, jsx_runtime_1.jsx)(ButtonTheme_styled_1.Buttons, { children: (0, jsx_runtime_1.jsxs)("button", Object.assign({ className: "button r", id: "button-4", onClick: handleThemeClick }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "checkbox" }), (0, jsx_runtime_1.jsx)("div", { className: "knobs" }), (0, jsx_runtime_1.jsx)("div", { className: "layer" })] })) }) }));
};
exports.default = ButtonTheme;
//# sourceMappingURL=ButtonTheme.js.map