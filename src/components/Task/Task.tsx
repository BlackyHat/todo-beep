import { useAppDispatch } from "hooks/hooks";
import { deleteTodo, toggleCompleted } from "redux/todos/todos-operations";

import { ITodoListProps } from "types/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Wrapper } from "./Task.styled";
import { MdClose } from "react-icons/md";

const Task: React.FC<ITodoListProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    toast.success("Task deleted!");
    dispatch(deleteTodo(task.id));
  };
  const handleToggle = () => {
    toast.success("Task changed!");
    dispatch(toggleCompleted(task));
  };

  return (
    <Wrapper>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>
        <MdClose size={24} />
      </button>
      <ToastContainer
        theme="dark"
        autoClose={1500}
        limit={1}
        position="top-center"
      />
    </Wrapper>
  );
};

export default Task;
