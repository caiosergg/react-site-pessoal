import {
  Container,
  Content,
  Photo,
  Info,
  Name,
  Title,
  Bio,
  Buttons,
  Button,
} from "./styles";

import photo from "../../assets/images/jefferson.png";

export default function Home() {
  return (
    <Container>
      <Content>
        <Photo src={photo} alt="Jefferson Abrantes dos Santos" />

        <Info>
          <Name>Jefferson Abrantes dos Santos</Name>
          <Title>Professor de Matemática — UFCG</Title>

          <Bio>
            Jefferson Abrantes dos Santos é Professor Associado III da
            Universidade Federal de Campina Grande (UFCG) e pesquisador nível 1D
            do CNPq. Desenvolve pesquisas em Análise, com ênfase em problemas
            com fronteira livre, problemas quase-lineares, espaços de
            Orlicz–Sobolev e métodos variacionais.
          </Bio>

          <Buttons>
            <Button to="/publications">Ver Publicações</Button>
            <Button to="/about" secondary>
              Sobre o Professor
            </Button>
          </Buttons>
        </Info>
      </Content>
    </Container>
  );
}
