"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkGoBack = exports.InputItem = exports.BestButton = exports.FormErrorMsg = exports.BestField = exports.BestForm = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const formik_1 = require("formik");
exports.BestForm = (0, styled_components_1.default)(formik_1.Form) `
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  gap: 16px;
  color: red;
  padding: 24px 0;
`;
exports.BestField = (0, styled_components_1.default)(formik_1.Field) `
  padding: 4px 12px;
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: none;
  box-sizing: border-box;

  position: relative;
`;
exports.FormErrorMsg = (0, styled_components_1.default)(formik_1.ErrorMessage) `
  font-size: 10px;
  position: absolute;
`;
exports.BestButton = styled_components_1.default.button `
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--button-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;
`;
exports.InputItem = styled_components_1.default.div `
  position: relative;
`;
exports.LinkGoBack = styled_components_1.default.a `
  margin: 0 auto;
  text-decoration: none;
  color: var(--text-color);
  font-size: 12px;
  padding: 4px 8px;
`;
//# sourceMappingURL=Register.styled.js.map