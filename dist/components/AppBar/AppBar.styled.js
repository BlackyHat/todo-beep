"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestLink = exports.HomeLink = exports.Navigation = exports.Title = exports.Header = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.Header = styled_components_1.default.header `
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 8px 8px 16px 8px;
`;
exports.Title = styled_components_1.default.h2 `
  margin: 0;
  font-size: 16px;
  color: var(--text-color);
  position: relative;
`;
exports.Navigation = styled_components_1.default.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: var(--text-color);
`;
exports.HomeLink = (0, styled_components_1.default)(react_router_dom_1.NavLink) `
  color: var(--text-color);
  text-decoration: none;
`;
exports.BestLink = (0, styled_components_1.default)(exports.HomeLink) `
  text-transform: uppercase;

  &.active {
    color: #7f2798;
    font-weight: 500;
  }
`;
//# sourceMappingURL=AppBar.styled.js.map