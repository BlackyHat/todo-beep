import { useTheme } from "../../hooks/useTheme";
import { ButtonBox, Buttons } from "./ButtonTheme.styled";

const ButtonTheme: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ButtonBox>
      <Buttons>
        <button className="button r" id="button-4" onClick={handleThemeClick}>
          <input type="checkbox" className="checkbox" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </button>
      </Buttons>
    </ButtonBox>
  );
};

export default ButtonTheme;
