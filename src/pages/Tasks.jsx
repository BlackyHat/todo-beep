import { useDispatch } from "react-redux";
// import { useContacts } from 'hooks';
import { useEffect } from "react";

// import Loading from 'components/Loading';
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
