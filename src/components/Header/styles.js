import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(90deg, #0f355a, #00aef0);
  color: #fff;
  font-family: "Inter", sans-serif;
  position: relative;
  z-index: 1000;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const LogoSubtitle = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: #ffd700;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`;

export const MenuHamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menu mobile
export const MobileMenu = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: #0f355a;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  ${NavLink} {
    color: #fff;
    &:hover {
      color: #ffd700;
    }
  }
`;
