import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      © {new Date().getFullYear()} — Professor Nome. Todos os direitos
      reservados.
    </Container>
  );
}
