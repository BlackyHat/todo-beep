"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  display: grid;
  gap: 16px;
  /* max-width: 800px; */
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
`;
//# sourceMappingURL=Layout.styled.js.map