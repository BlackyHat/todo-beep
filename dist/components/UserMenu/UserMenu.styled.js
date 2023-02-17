"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hide = exports.Show = exports.ButtonLogOut = exports.Button = exports.Text = exports.Box = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Flex = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: center;
`;
exports.Box = (0, styled_components_1.default)(Flex) `
  gap: 16px;
`;
exports.Text = styled_components_1.default.p `
  font-weight: 500;
  margin: 0;
  color: var(--text-color);
  text-transform: uppercase;
`;
exports.Button = styled_components_1.default.button `
  outline: none;
  border: none;
  color: var(--text-color);
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  display: block;
  transition: background-color 350ms linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(129, 230, 217, 0.12);
  }
`;
exports.ButtonLogOut = (0, styled_components_1.default)(exports.Button) `
  display: flex;
  align-items: center;

  font-weight: 500;
  justify-content: space-between;
  gap: 8px;

  border: 1px solid currentcolor;
`;
exports.Show = styled_components_1.default.div `
  display: block;
  @media (min-width: 680px) {
    display: none;
  }
`;
exports.Hide = styled_components_1.default.div `
  display: none;

  @media (min-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
`;
//# sourceMappingURL=UserMenu.styled.js.map