import { useAppSelector } from "./hooks";
import {
  selectTasks,
  selectIsLoading,
  selectError,
  selectFilterValue,
} from "../redux/todos/todos-selectors";

export const useTasks = () => {
  return {
    items: useAppSelector(selectTasks),
    isLoadind: useAppSelector(selectIsLoading),
    isError: useAppSelector(selectError),
    filter: useAppSelector(selectFilterValue),
  };
};
