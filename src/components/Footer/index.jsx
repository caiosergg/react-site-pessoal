import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      © {new Date().getFullYear()} — Jefferson Abrantes dos Santos. Todos os
      direitos reservados.
    </Container>
  );
}
