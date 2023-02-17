import styled from "styled-components";

export const SectionTaskList = styled.section`
  display: grid;
  gap: 4px;
  align-items: center;
`;
export const TaskListItem = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    border-radius: 4px;
    padding: 0 12px;
    background-color: var(--todo-item-bg-color);
    margin-bottom: 8px;
    transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 350ms cubic-bezier(0.23, 1, 0.32, 1);
    &:last-child {
      margin-bottom: 0px;
    }
  }
  & li + li {
    border-top: 1px solid #2f2f37;
  }

  & > li:hover {
    transform: translateY(-6%) scale(1.02);
    box-shadow: 0px 4px 12px 0px rgba(131, 166, 175, 0.45);
  }
`;

// p {
//   color: var(--todo-item-color);
// }

// .title {
//   margin: 0;
//   font-size: 16px;
//   color: var(--text-color);
// }
