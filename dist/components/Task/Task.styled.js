"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Wrapper = styled_components_1.default.div `
  display: flex;
  align-items: center;
  gap: 12px;

  & p {
    flex-grow: 1;
    color: white;
  }

  & input:checked + p {
    text-decoration: line-through;
  }
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    color: var(--todo-item-color);
    transition: color 500ms linear;

    &:hover {
      color: #b60606;
    }
    &:active {
      color: #b60606;
    }
  }
  & input {
    width: 48px;
    height: 24px;
    cursor: pointer;
    appearance: none;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid var(--todo-item-color);
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  & input::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--todo-item-color);
  }

  & input:checked::before {
    transform: scale(1);
  }
`;
//# sourceMappingURL=Task.styled.js.map