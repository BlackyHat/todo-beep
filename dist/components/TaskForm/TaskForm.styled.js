"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitBtn = exports.NewForm = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.NewForm = styled_components_1.default.form `
  display: flex;
  flex-direction: column;
  gap: 4px;

  & textarea {
    flex-grow: 1;
    padding: 8px;
    font: inherit;
    background-color: inherit;
    border-radius: 6px;
    color: var(--text-color);

    &:focus {
      outline-color: #1976d2;
    }
  }
`;
exports.SubmitBtn = styled_components_1.default.button `
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: translateY(-6%) scale(1.02);
  }
`;
//# sourceMappingURL=TaskForm.styled.js.map