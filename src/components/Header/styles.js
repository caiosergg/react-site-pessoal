import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(RouterLink)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &.active {
    color: #000;
    font-weight: 600;
  }

  &:hover {
    opacity: 0.7;
  }
`;
