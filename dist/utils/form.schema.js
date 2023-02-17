"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRegisterUser = exports.schemaLoginUser = void 0;
const Yup = __importStar(require("yup"));
exports.schemaLoginUser = Yup.object().shape({
    email: Yup.string()
        .required("E-mail name required")
        .min(4, "E-mail name is too short")
        .max(32, "E-mail name is too long"),
    password: Yup.string()
        .required("Password is required")
        .min(7, "Password is too short, must be 7-32 symbols")
        .max(32, "Password is too long, must be 7-32 symbols"),
});
exports.schemaRegisterUser = exports.schemaLoginUser.shape({
    name: Yup.string()
        .required("Login name required")
        .min(4, "Login name is too short")
        .max(32, "Login name is too long"),
});
//# sourceMappingURL=form.schema.js.map