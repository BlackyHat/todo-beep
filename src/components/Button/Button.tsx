import { IButtonProps } from "types/data";
import { Btn } from "./Button.styled";

const Button: React.FC<IButtonProps> = ({
  selected = false,
  title = "button",
  ...otherProps
}) => {
  return <Btn {...otherProps}>{title}</Btn>;
};

export default Button;
