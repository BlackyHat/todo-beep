"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = exports.ButtonBox = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ButtonBox = styled_components_1.default.div `
  position: absolute;
  top: 8px;
  left: 160px;
`;
exports.Buttons = styled_components_1.default.div `
  .button-cover:before {
    counter-increment: button-counter;
    content: counter(button-counter);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d7e3e3;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
  }

  .button-cover,
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    position: relative;
    top: 50%;
    width: 74px;
    height: 36px;
    margin: -20px auto 0 auto;
    overflow: hidden;
    border: none;
  }

  .button.r,
  .button.r .layer {
    border-radius: 100px;
  }

  .button.b2 {
    border-radius: 2px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: #adadad;
    transition: 0.3s ease all;
    z-index: 1;
  }
  /* Button 4 */
  #button-4 .knobs:before,
  #button-4 .knobs:after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #5d5d5d;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #button-4 .knobs:before {
    content: "OFF";
  }

  #button-4 .knobs:after {
    content: "ON";
  }

  #button-4 .knobs:after {
    top: -28px;
    right: 4px;
    left: auto;
    background-color: #3d0065;
  }

  #button-4 .checkbox:checked + .knobs:before {
    top: -28px;
  }

  #button-4 .checkbox:checked + .knobs:after {
    top: 4px;
  }

  #button-4 .checkbox:checked ~ .layer {
    background-color: #f2f2f2;
  }
`;
//# sourceMappingURL=ButtonTheme.styled.js.map