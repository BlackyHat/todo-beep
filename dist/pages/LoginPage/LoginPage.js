"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const auth_operations_1 = require("redux/auth/auth-operations");
const formik_1 = require("formik");
const LoginPage_styled_1 = require("./LoginPage.styled");
const hooks_1 = require("hooks/hooks");
const form_schema_1 = require("utils/form.schema");
const initialValues = {
    email: "",
    password: "",
};
const LoginPage = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleSubmit = (values, { resetForm }) => {
        const { email, password } = values;
        dispatch((0, auth_operations_1.logIn)({ email, password }));
        resetForm();
    };
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, Object.assign({ initialValues: initialValues, validationSchema: form_schema_1.schemaLoginUser, onSubmit: handleSubmit }, { children: ({ isSubmitting }) => ((0, jsx_runtime_1.jsxs)(LoginPage_styled_1.BestForm, { children: [(0, jsx_runtime_1.jsxs)(LoginPage_styled_1.InputItem, { children: [(0, jsx_runtime_1.jsx)(LoginPage_styled_1.BestField, { label: "E-mail", type: "email", name: "email", required: true, placeholder: "input your e-mail" }), (0, jsx_runtime_1.jsx)(LoginPage_styled_1.FormErrorMsg, { name: "email", component: "div" })] }), (0, jsx_runtime_1.jsxs)(LoginPage_styled_1.InputItem, { children: [(0, jsx_runtime_1.jsx)(LoginPage_styled_1.BestField, { label: "Password", name: "password", type: "password", required: true, placeholder: "input your password" }), (0, jsx_runtime_1.jsx)(LoginPage_styled_1.FormErrorMsg, { name: "password", component: "div" }), " "] }), (0, jsx_runtime_1.jsx)(LoginPage_styled_1.BestButton, Object.assign({ type: "submit", disabled: isSubmitting }, { children: "Log in" })), (0, jsx_runtime_1.jsx)(LoginPage_styled_1.LinkToRegister, Object.assign({ as: react_router_dom_1.Link, to: "/register" }, { children: "Create an account" }))] })) })));
};
exports.default = LoginPage;
//# sourceMappingURL=LoginPage.js.map