import {
  Container,
  LogoBox,
  LogoTitle,
  LogoSubtitle,
  Nav,
  NavLink,
  MenuHamburger,
  MobileMenu,
} from "./styles";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <LogoBox>
        <LogoTitle>Jefferson Abrantes</LogoTitle>
        <LogoSubtitle>Professor de Matemática - UFCG</LogoSubtitle>
      </LogoBox>

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/publications">Publicações</NavLink>
      </Nav>

      {/* Menu para mobile */}
      <MenuHamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </MenuHamburger>

      {menuOpen && (
        <MobileMenu>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            Sobre
          </NavLink>
          <NavLink to="/publications" onClick={() => setMenuOpen(false)}>
            Publicações
          </NavLink>
        </MobileMenu>
      )}
    </Container>
  );
}
