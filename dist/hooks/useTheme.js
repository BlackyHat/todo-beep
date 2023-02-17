"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const isDarkTheme = window === null || window === void 0 ? void 0 : window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";
const useTheme = () => {
    const [theme, setTheme] = (0, react_1.useState)(localStorage.getItem("app-theme") || defaultTheme);
    (0, react_1.useLayoutEffect)(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
    }, [theme]);
    return { theme, setTheme };
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map