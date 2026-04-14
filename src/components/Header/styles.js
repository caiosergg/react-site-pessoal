import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { secondary, dark, textLight } from "../../layouts/Theme";

export const Container = styled.header`
  width: 100%;
  padding: 0 2.5rem;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${dark};
  border-bottom: 3px solid ${secondary};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const LogoTitle = styled.span`
  font-family: "Lora", Georgia, serif;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2px;
`;

export const LogoSubtitle = styled.span`
  font-size: 0.72rem;
  color: ${textLight};
  letter-spacing: 0.6px;
  text-transform: uppercase;
  opacity: 0.85;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(RouterLink)`
  color: ${textLight};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.45rem 1rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: ${secondary};
    border-bottom: 2px solid ${secondary};
  }
`;

export const MenuHamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 24px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: ${dark};
  border-left: 3px solid ${secondary};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.3);

  ${NavLink} {
    color: ${textLight};
    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.07);
    }
  }
`;
