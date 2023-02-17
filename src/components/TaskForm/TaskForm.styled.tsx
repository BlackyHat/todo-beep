import styled from "styled-components";

export const NewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & textarea {
    flex-grow: 1;
    padding: 8px;
    font: inherit;
    background-color: inherit;
    border-radius: 6px;
    color: var(--text-color);

    &:focus {
      outline-color: #1976d2;
    }
  }
`;
export const SubmitBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: translateY(-6%) scale(1.02);
  }
`;
