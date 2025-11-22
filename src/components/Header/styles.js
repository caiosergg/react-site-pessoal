import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  padding: 1.2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const LogoTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  letter-spacing: -0.3px;
`;

export const LogoSubtitle = styled.span`
  font-size: 0.85rem;
  color: #555;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(RouterLink)`
  color: #444;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding-bottom: 3px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: #0057ff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #000;
  }

  &.active::after {
    width: 100%;
  }
`;
