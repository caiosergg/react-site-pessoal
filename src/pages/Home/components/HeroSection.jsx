import {
  Photo,
  Info,
  Name,
  Title,
  Bio,
  BioEn,
  Button,
  Content,
} from "../styles";
import photo from "../../../assets/images/jefferson.png";

export default function HeroSection() {
  return (
    <Content>
      <Photo src={photo} alt="Jefferson Abrantes dos Santos" />
      <Info>
        <Name>Jefferson Abrantes dos Santos</Name>
        <Title>Professor Associado III — UFCG</Title>
        <Bio>
          Sou Professor Associado III da Universidade Federal de Campina Grande
          (UFCG) e pesquisador nível 1D do CNPq. Atuo em Análise, com foco em
          problemas com fronteira livre, equações quase-lineares, espaços de
          Orlicz–Sobolev e métodos variacionais. Minha pesquisa concentra-se em
          questões estruturais e qualitativas envolvendo equações diferenciais
          parciais não lineares, buscando contribuir para o desenvolvimento
          teórico da área e para o avanço de suas aplicações.
        </Bio>
        <BioEn>
          I am an Associate Professor at the Federal University of Campina
          Grande (UFCG) and a Level 1D Research Fellow of CNPq. My work focuses
          on Analysis, with emphasis on free boundary problems, quasilinear
          equations, Orlicz–Sobolev spaces, and variational methods. My research
          investigates structural and qualitative properties of nonlinear
          partial differential equations, aiming to advance the theoretical
          foundations of the field and contribute to its broader applications.
        </BioEn>
        <Button to="/about">Saiba mais</Button>
      </Info>
    </Content>
  );
}
