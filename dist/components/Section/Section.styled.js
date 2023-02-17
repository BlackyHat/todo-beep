"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionTodo = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SectionTodo = styled_components_1.default.section `
  display: flex;
  gap: 32px;
  justify-content: center;
  max-width: 960px;
  width: 100%;
  margin: 32px auto;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }
`;
//# sourceMappingURL=Section.styled.js.map