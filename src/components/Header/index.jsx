import {
  Container,
  LogoBox,
  LogoTitle,
  LogoSubtitle,
  Nav,
  NavLink,
} from "./styles";

export default function Header() {
  return (
    <Container>
      <LogoBox>
        <LogoTitle>Jefferson Abrantes dos Santos</LogoTitle>
        <LogoSubtitle>Professor de Matemática - UFCG</LogoSubtitle>
      </LogoBox>

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/publications">Publicações</NavLink>
      </Nav>
    </Container>
  );
}
