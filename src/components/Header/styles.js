import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { primary, secondary, dark, textLight } from "../../layouts/Theme";

export const Container = styled.header`
  width: 100%;
  padding: 0 2.5rem;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid rgba(26, 58, 92, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 16px rgba(13, 27, 42, 0.06);
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const LogoTitle = styled.span`
  font-family: "Lora", Georgia, serif;
  color: ${dark};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2px;
`;

export const LogoSubtitle = styled.span`
  font-size: 0.72rem;
  color: ${textLight};
  letter-spacing: 0.6px;
  text-transform: uppercase;
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
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.45rem 1rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${primary};
    background: rgba(26, 58, 92, 0.06);
  }

  &.active {
    color: ${primary};
    border-bottom-color: ${secondary};
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
    background-color: ${dark};
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
  background: #ffffff;
  border-top: 3px solid ${primary};
  border-left: 1px solid rgba(26, 58, 92, 0.1);
  border-bottom: 1px solid rgba(26, 58, 92, 0.1);
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 0.25rem;
  box-shadow: 0 8px 24px rgba(13, 27, 42, 0.12);

  ${NavLink} {
    color: ${textLight};
    &:hover {
      color: ${primary};
      background: rgba(26, 58, 92, 0.06);
    }
  }
`;
