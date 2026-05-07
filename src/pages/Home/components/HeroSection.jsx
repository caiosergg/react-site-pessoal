import {
  Photo,
  Name,
  Title,
  Bio,
  BioEn,
  Button,
  ButtonOutline,
  Content,
  Divider,
  Buttons,
  LeftPanel,
  RightPanel,
  PanelBadge,
} from "../styles";
import photo from "../../../assets/images/jefferson.png";

export default function HeroSection() {
  return (
    <Content>
      <LeftPanel>
        <Photo src={photo} alt="Jefferson Abrantes dos Santos" />
        <PanelBadge>UFCG · Pesquisador CNPq 1D</PanelBadge>
      </LeftPanel>
      <RightPanel>
        <Name>Jefferson Abrantes dos Santos</Name>
        <Title>Professor Associado III — UFCG · Pesquisador CNPq 1D</Title>
        <Divider />
        <Bio>
          Professor Associado III da Universidade Federal de Campina Grande
          (UFCG), doutor em Matemática pela Universidade de Brasília (2011) e
          pesquisador nível 1D do CNPq. Realizou estágios de pós-doutorado no
          IMPA e na USP. Atuo em Análise não linear, com foco em problemas com
          fronteira livre, equações quase-lineares, espaços de Orlicz–Sobolev e
          métodos variacionais. Coordenador do Doutorado Associado UFCG/UFPB.
        </Bio>
        <BioEn>
          Associate Professor at UFCG and Level 1D CNPq Research Fellow (Grant
          304774/2022-7). PhD from University of Brasília (2011). Postdoctoral
          research at IMPA and USP. Research focuses on free boundary problems,
          quasilinear equations, Orlicz–Sobolev spaces, and variational methods.
        </BioEn>
        <Buttons>
          <Button to="/about">Sobre mim</Button>
          <ButtonOutline to="/publications">Publicações</ButtonOutline>
        </Buttons>
      </RightPanel>
    </Content>
  );
}
