import { useState } from "react";
import { addTodo } from "redux/todos/todos-operations";
//
import { NewForm, SubmitBtn } from "./TaskForm.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import { IconContext } from "react-icons";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/hooks";

const TaskForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  //
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.BaseSyntheticEvent
  ) => {
    event.preventDefault();
    const form = event.target;
    const text: string = form.elements.text.value.trim();
    if (!text.length) {
      return;
    }
    toast.success("Task added!");
    dispatch(addTodo(text));
    setInputValue("");
  };

  const textAreaHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <NewForm onSubmit={handleSubmit}>
        <IconContext.Provider value={{ size: "32px" }}>
          <SubmitBtn type="submit">
            <BiMessageSquareAdd />
          </SubmitBtn>
        </IconContext.Provider>

        <textarea
          rows={8}
          value={inputValue}
          onChange={textAreaHandler}
          name="text"
          placeholder="needs to write some details..."
        />
        <ToastContainer
          theme="dark"
          autoClose={1500}
          limit={1}
          position="top-center"
        />
      </NewForm>
    </section>
  );
};

export default TaskForm;
