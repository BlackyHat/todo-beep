import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
// import { StatusFilter } from "components/StatusFilter/StatusFilter";
// import { TaskCounter } from "components/TaskCounter/TaskCounter";
import Loader from "components/Loader/Loader";

import {
  getTasks,
  getIsLoading,
  getError,
  getStatusFilter,
} from "redux/selectors";
import css from "./TaskList.module.css";
import { statusFilters } from "redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <section className={css.section}>
      {/* <TaskCounter />
      <h2 className={css.title}>Filter by status</h2>
      <StatusFilter /> */}
      {isLoading && !error && <Loader />}
      {!isLoading && (
        <ul className={css.list}>
          {visibleTasks.map((task) => (
            <li className={css.listItem} key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
