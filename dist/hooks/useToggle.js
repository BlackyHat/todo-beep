"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
const useToggle = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);
    return { isOpen, onOpen, onClose, toggle };
};
exports.useToggle = useToggle;
//# sourceMappingURL=useToggle.js.map