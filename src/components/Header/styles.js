import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

const headerBg = "#C8C1B8";
const headerText = "#1E1E25";
const headerTextLight = "#6C6E79";
const headerPrimary = "#0F355A";

export const Container = styled.header`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${headerBg};

  position: static;
  z-index: 1000;

  border: none;
  box-shadow: none;
  margin: 0;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const LogoTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${headerText};
  letter-spacing: -0.3px;
`;

export const LogoSubtitle = styled.span`
  font-size: 0.85rem;
  color: ${headerTextLight};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(RouterLink)`
  color: ${headerText};
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
    background-color: ${headerPrimary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${headerText};
  }

  &.active::after {
    width: 100%;
  }
`;
