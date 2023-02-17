import styled from "styled-components";

export const SectionTodo = styled.section`
  display: flex;
  gap: 32px;
  justify-content: center;
  max-width: 960px;
  width: 100%;
  margin: 32px auto;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }
`;
