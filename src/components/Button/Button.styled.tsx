import styled from "styled-components";

export const Btn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: inherit;
  transition: color 500ms linear, background-color 500ms linear;

  &.isSelected {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  &:hover {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  &:active {
    background-color: #1565c0;
    color: var(--text-color);
  }
`;
