import { useDispatch } from "react-redux";
import { addTodo } from "redux/operations";
//
import { Button } from "components/Button/Button";
//
import css from "./TaskForm.module.css";
import { IconContext } from "react-icons";
import { BiMessageSquareAdd } from "react-icons/bi";

export const TaskForm = () => {
  const dispatch = useDispatch();
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTodo(form.elements.text.value));
    form.reset();
  };

  return (
    <section className={css.section}>
      <form className={css.form} onSubmit={handleSubmit}>
        <IconContext.Provider
          value={{ size: "32px", className: "buttonSubmit--icon" }}
        >
          <Button type="submit" className={css.buttonSubmit}>
            <BiMessageSquareAdd />
          </Button>
        </IconContext.Provider>

        <textarea
          className={css.field}
          rows="8"
          type="text"
          name="text"
          placeholder="needs to write some details..."
        />
      </form>{" "}
    </section>
  );
};
