"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("hooks/hooks");
const useAuth_1 = require("hooks/useAuth");
const auth_operations_1 = require("redux/auth/auth-operations");
const im_1 = require("react-icons/im");
const UserMenu_styled_1 = require("./UserMenu.styled");
const UserMenu = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { user } = (0, useAuth_1.useAuth)();
    const hadleLogOut = () => dispatch((0, auth_operations_1.logOut)());
    return ((0, jsx_runtime_1.jsxs)(UserMenu_styled_1.Box, { children: [(0, jsx_runtime_1.jsx)(UserMenu_styled_1.Show, { children: (0, jsx_runtime_1.jsx)(UserMenu_styled_1.Button, Object.assign({ "aria-label": "log out", onClick: hadleLogOut }, { children: (0, jsx_runtime_1.jsx)(im_1.ImExit, { size: 18 }) })) }), (0, jsx_runtime_1.jsxs)(UserMenu_styled_1.Hide, { children: [(0, jsx_runtime_1.jsxs)(UserMenu_styled_1.Text, { children: [user.name, " "] }), (0, jsx_runtime_1.jsxs)(UserMenu_styled_1.ButtonLogOut, Object.assign({ type: "button", onClick: hadleLogOut }, { children: ["Log Out ", (0, jsx_runtime_1.jsx)(im_1.ImExit, { size: 18 })] }))] })] }));
};
exports.default = UserMenu;
//# sourceMappingURL=UserMenu.js.map