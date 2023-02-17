import Task from "components/Task";
import { ITodo } from "types/data";

// import { StatusFilter } from "components/StatusFilter/StatusFilter";
// import { TaskCounter } from "components/TaskCounter/TaskCounter";
import Loader from "components/Loader";

import {
  selectTasks,
  selectIsLoading,
  selectError,
  selectFilterValue,
} from "redux/todos/todos-selectors";

// import css from "./TaskList.module.css";
import { STATUS } from "redux/todos/todos-constants";
import { useAppSelector } from "hooks/hooks";
import { SectionTaskList, TaskListItem } from "./TaskList.styled";

const getVisibleTasks = (tasks: ITodo[], status: STATUS): Array<ITodo> => {
  switch (status) {
    case STATUS.ACTIVE:
      return tasks.filter((task) => !task.completed);
    case STATUS.COMPLETED:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList: React.FC = () => {
  const tasks = useAppSelector(selectTasks);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const statusFilter = useAppSelector(selectFilterValue);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <SectionTaskList>
      {/* <TaskCounter />
      <h2 className={css.title}>Filter by status</h2>
      <StatusFilter /> */}
      {isLoading && !error && <Loader />}
      {!isLoading && (
        <TaskListItem>
          {visibleTasks?.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </TaskListItem>
      )}
    </SectionTaskList>
  );
};

export default TaskList;
