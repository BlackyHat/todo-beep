import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { Section } from "components/Section/Section";
import { fetchTodos } from "redux/todos/todos-operations";

const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Tasks</h2>
      </div>
      <Section>
        <TaskForm />
        <TaskList />
      </Section>
    </div>
  );
};

export default Tasks;
