import { useSelector } from "react-redux";
import {
  selectTasks,
  selectIsLoading,
  selectError,
  selectFilterValue,
} from "redux/Tasks/Tasks-selectors";

export const useTasks = () => {
  return {
    items: useSelector(selectTasks),
    isLoadind: useSelector(selectIsLoading),
    isError: useSelector(selectError),
    filter: useSelector(selectFilterValue),
  };
};
