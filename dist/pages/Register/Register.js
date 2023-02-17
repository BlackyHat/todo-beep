"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const auth_operations_1 = require("redux/auth/auth-operations");
const react_router_dom_1 = require("react-router-dom");
const formik_1 = require("formik");
const Register_styled_1 = require("./Register.styled");
const hooks_1 = require("hooks/hooks");
const form_schema_1 = require("utils/form.schema");
const initialValues = {
    name: "",
    password: "",
    email: "",
};
const Register = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleSubmit = (values, { resetForm }) => {
        const { name, email, password } = values;
        dispatch((0, auth_operations_1.register)({ name, email, password }));
        resetForm();
    };
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, Object.assign({ initialValues: initialValues, validationSchema: form_schema_1.schemaRegisterUser, onSubmit: handleSubmit }, { children: ({ isSubmitting }) => ((0, jsx_runtime_1.jsxs)(Register_styled_1.BestForm, { children: [(0, jsx_runtime_1.jsxs)(Register_styled_1.InputItem, { children: [(0, jsx_runtime_1.jsx)(Register_styled_1.BestField, { label: "Login", type: "text", name: "name", required: true, placeholder: "input your login" }), (0, jsx_runtime_1.jsx)(Register_styled_1.FormErrorMsg, { name: "name", component: "div" })] }), (0, jsx_runtime_1.jsxs)(Register_styled_1.InputItem, { children: [(0, jsx_runtime_1.jsx)(Register_styled_1.BestField, { label: "Password", name: "password", type: "password", required: true, placeholder: "input your password" }), (0, jsx_runtime_1.jsx)(Register_styled_1.FormErrorMsg, { name: "password", component: "div" })] }), (0, jsx_runtime_1.jsxs)(Register_styled_1.InputItem, { children: [(0, jsx_runtime_1.jsx)(Register_styled_1.BestField, { label: "E-mail", name: "email", type: "email", required: true, placeholder: "input your e-mail" }), (0, jsx_runtime_1.jsx)(Register_styled_1.FormErrorMsg, { name: "email", component: "div" })] }), (0, jsx_runtime_1.jsx)(Register_styled_1.BestButton, Object.assign({ type: "submit", disabled: isSubmitting }, { children: "Sign up" })), (0, jsx_runtime_1.jsx)(Register_styled_1.LinkGoBack, Object.assign({ as: react_router_dom_1.Link, to: "/login" }, { children: "Go Back" }))] })) })));
};
exports.default = Register;
//# sourceMappingURL=Register.js.map