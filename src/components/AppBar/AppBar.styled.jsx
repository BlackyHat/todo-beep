import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 8px 8px 16px 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  color: var(--text-color);
  position: relative;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: var(--text-color);
`;

export const BestLink = styled(NavLink)`
  color: var(--text-color);
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    color: #7f2798;
    font-weight: 500;
  }
`;
