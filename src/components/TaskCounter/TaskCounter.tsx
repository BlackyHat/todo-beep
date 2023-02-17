import { useAppSelector } from "hooks/hooks";
import { selectTasks } from "redux/todos/todos-selectors";
import { TextLabel } from "./TaskCounter.styled";

const TaskCounter: React.FC = () => {
  const tasks = useAppSelector(selectTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <>
      <TextLabel>Active: {count.active}</TextLabel>
      <TextLabel>Completed: {count.completed}</TextLabel>
    </>
  );
};

export default TaskCounter;
