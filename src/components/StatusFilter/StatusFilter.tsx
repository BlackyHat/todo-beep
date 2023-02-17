import Button from "components/Button";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import { updateFilter } from "../../redux/todos/filter-slice";
import { STATUS } from "../../redux/todos/todos-constants";
import { selectFilterValue } from "../../redux/todos/todos-selectors";
import { Wrapper } from "./StatusFilter.styled";

const StatusFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilterValue);

  const handleFilterChange = (filter: STATUS) => dispatch(updateFilter(filter));
  return (
    <Wrapper>
      <Button
        selected={filter === STATUS.ALL}
        onClick={() => handleFilterChange(STATUS.ALL)}
        title="All"
      />
      <Button
        selected={filter === STATUS.ACTIVE}
        onClick={() => handleFilterChange(STATUS.ACTIVE)}
        title="Active"
      />
      <Button
        selected={filter === STATUS.COMPLETED}
        onClick={() => handleFilterChange(STATUS.COMPLETED)}
        title="Completed"
      />
    </Wrapper>
  );
};

export default StatusFilter;
