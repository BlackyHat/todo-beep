import { ButtonTheme } from "components/ButtonTheme/ButtonTheme";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>
          Tasks to beep <ButtonTheme />
        </h2>
      </section>
    </header>
  );
};
