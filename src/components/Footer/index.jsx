import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <p>© {new Date().getFullYear()} — Jefferson Abrantes dos Santos</p>
      <span>Professor Associado III · UFCG · CNPq 1D</span>
    </Container>
  );
}
