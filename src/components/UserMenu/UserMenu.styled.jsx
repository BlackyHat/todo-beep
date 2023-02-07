import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled(Flex)`
  gap: 16px;
`;
export const Text = styled.p`
  font-weight: 500;
  margin: 0;
  color: var(--text-color);
  text-transform: uppercase;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  color: var(--text-color);
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  display: block;
  transition: background-color 350ms linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(129, 230, 217, 0.12);
  }
`;
export const ButtonLogOut = styled(Button)`
  display: flex;
  align-items: center;

  font-weight: 500;
  justify-content: space-between;
  gap: 8px;

  border: 1px solid currentcolor;
`;

export const Show = styled.div`
  display: block;
  @media (min-width: 680px) {
    display: none;
  }
`;
export const Hide = styled.div`
  display: none;

  @media (min-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
`;
