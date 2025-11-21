import { Container, Nav, Logo, NavLink } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo>Professor Nome</Logo>

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/publications">Publicações</NavLink>
      </Nav>
    </Container>
  );
}
