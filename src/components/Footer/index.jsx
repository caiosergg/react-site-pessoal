import { Container, Links } from "./styles";

export default function Footer() {
  return (
    <Container>
      <p>
        © {new Date().getFullYear()} — Jefferson Abrantes. Todos os direitos
        reservados.
      </p>
      <Links>
        <a href="https://github.com/" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank">
          LinkedIn
        </a>
      </Links>
    </Container>
  );
}
