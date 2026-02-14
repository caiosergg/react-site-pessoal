import { Container, Links } from "./styles";

export default function Footer() {
  return (
    <Container>
      <p>
        © {new Date().getFullYear()} — Jefferson Abrantes. Todos os direitos
        reservados.
      </p>
    </Container>
  );
}
