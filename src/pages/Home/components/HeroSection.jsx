import {
  Photo,
  Info,
  Name,
  Title,
  Bio,
  BioEn,
  Button,
  ButtonOutline,
  Content,
  Divider,
  Buttons,
} from "../styles";
import photo from "../../../assets/images/jefferson.png";

export default function HeroSection() {
  return (
    <Content>
      <Photo src={photo} alt="Jefferson Abrantes dos Santos" />
      <Info>
        <Name>Jefferson Abrantes dos Santos</Name>
        <Title>Professor Associado III — UFCG · Pesquisador CNPq 1D</Title>
        <Divider />
        <Bio>
          Professor Associado III da Universidade Federal de Campina Grande
          (UFCG) e pesquisador nível 1D do CNPq. Atuo em Análise, com foco em
          problemas com fronteira livre, equações quase-lineares, espaços de
          Orlicz–Sobolev e métodos variacionais. Minha pesquisa concentra-se em
          questões estruturais e qualitativas envolvendo equações diferenciais
          parciais não lineares.
        </Bio>
        <BioEn>
          Associate Professor at UFCG and Level 1D CNPq Research Fellow. My work
          focuses on Analysis, with emphasis on free boundary problems,
          quasilinear equations, Orlicz–Sobolev spaces, and variational methods.
        </BioEn>
        <Buttons>
          <Button to="/about">Sobre mim</Button>
          <ButtonOutline to="/publications">Publicações</ButtonOutline>
        </Buttons>
      </Info>
    </Content>
  );
}
