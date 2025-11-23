import { useState } from "react";

import {
  Container,
  Content,
  Photo,
  Info,
  Name,
  Title,
  Bio,
  BioEn,
  Buttons,
  Button,
  Section,
  SectionTitle,
  ResearchList,
  ResearchItem,
  Stats,
  StatCard,
  PublicationsList,
  PubItem,
  AcademicLinks,
  AcademicLink,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  CloseBtn,
  DetailsList,
  DetailItem,
} from "./styles";

import highlights from "../../data/highlights.json";

import photo from "../../assets/images/jefferson.png";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <>
      <Container>
        <Content>
          <Photo src={photo} alt="Jefferson Abrantes dos Santos" />

          <Info>
            <Name>Jefferson Abrantes dos Santos</Name>

            <Title>
              Professor Associado III — Universidade Federal de Campina Grande
            </Title>

            <Bio>
              Sou Professor Associado III da Universidade Federal de Campina
              Grande (UFCG) e pesquisador nível 1D do CNPq. Atuo em Análise, com
              foco em problemas com fronteira livre, equações quase-lineares,
              espaços de Orlicz–Sobolev e métodos variacionais. Minha pesquisa
              concentra-se em questões estruturais e qualitativas envolvendo
              equações diferenciais parciais não lineares, buscando contribuir
              para o desenvolvimento teórico da área e para o avanço de suas
              aplicações.
            </Bio>

            <BioEn>
              I am an Associate Professor at the Federal University of Campina
              Grande (UFCG) and a Level 1D Research Fellow of CNPq. My work
              focuses on Analysis, with emphasis on free boundary problems,
              quasilinear equations, Orlicz–Sobolev spaces, and variational
              methods. My research investigates structural and qualitative
              properties of nonlinear partial differential equations, aiming to
              advance the theoretical foundations of the field and contribute to
              its broader applications.
            </BioEn>
            <Button
              style={{ paddingTop: "0.85rem", paddingBottom: "0.85rem" }}
              to="/about"
            >
              Saiba mais
            </Button>
          </Info>
        </Content>
      </Container>

      {/* Áreas de Pesquisa */}
      <Section>
        <SectionTitle>Áreas de Pesquisa</SectionTitle>

        <ResearchList>
          <ResearchItem>Problemas com fronteira livre</ResearchItem>
          <ResearchItem>Equações diferenciais elípticas</ResearchItem>
          <ResearchItem>Espaços de Orlicz–Sobolev</ResearchItem>
          <ResearchItem>Métodos variacionais</ResearchItem>
          <ResearchItem>Análise não linear</ResearchItem>
        </ResearchList>
      </Section>

      {/* Destaques Acadêmicos */}
      <Section>
        <SectionTitle>Destaques Acadêmicos</SectionTitle>

        <Stats>
          {highlights.map((h, index) => (
            <StatCard key={index} onClick={() => setSelected(h)}>
              <div className="stat-content">
                <div className="stat-value">{h.value}</div>
                <div className="stat-label">{h.label}</div>
              </div>
            </StatCard>
          ))}
        </Stats>
      </Section>

      {/* Modal */}
      {selected && (
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={closeModal}>×</CloseBtn>

            <ModalTitle>{selected.label}</ModalTitle>

            <DetailsList>
              {selected.details.map((d, i) => (
                <DetailItem key={i}>{d}</DetailItem>
              ))}
            </DetailsList>
          </ModalBox>
        </ModalOverlay>
      )}

      {/* Publicações Recentes */}
      <Section>
        <SectionTitle>Publicações Recentes</SectionTitle>

        <PublicationsList>
          <PubItem>
            <strong>
              Global multiplicity of positive solutions for a sublinear elliptic
              equation in ℝⁿ
            </strong>
            <span>Journal of Differential Equations — 2025</span>
          </PubItem>

          <PubItem>
            <strong>
              Global branching for discontinuous problems with critical
              exponential growth
            </strong>
            <span>Journal of Differential Equations — 2025</span>
          </PubItem>

          <PubItem>
            <strong>
              Lipschitz regularity of solutions to two-phase free boundary
              problems governed by a non-uniformly elliptic operator
            </strong>
            <span>Nonlinear Analysis — 2025</span>
          </PubItem>
        </PublicationsList>

        <Buttons>
          <Button to="/publications">Ver Todas</Button>
        </Buttons>
      </Section>

      {/* Links */}
      <Section>
        <SectionTitle>Links Acadêmicos</SectionTitle>

        <AcademicLinks>
          <AcademicLink
            href="http://lattes.cnpq.br/2817964461789644"
            target="_blank"
          >
            Lattes
          </AcademicLink>

          <AcademicLink
            href="https://orcid.org/0000-0003-1759-8291"
            target="_blank"
          >
            ORCID
          </AcademicLink>
        </AcademicLinks>
      </Section>
    </>
  );
}
