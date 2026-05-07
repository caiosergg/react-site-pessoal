import React from "react";
import {
  Container,
  PageHeader,
  PageTitle,
  PageSubtitle,
  Divider,
  Section,
  SectionTitle,
  Grid,
  Card,
  CardLabel,
  CardValue,
  Timeline,
  TimelineItem,
  TimelineYear,
  TimelineText,
} from "./styles";

export default function About() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>Sobre Mim</PageTitle>
        <Divider />
        <PageSubtitle>
          Professor, pesquisador e matemático com dedicação à educação superior
          e à pesquisa em Análise Matemática desde 2009.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Perfil Acadêmico</SectionTitle>
        <p>
          Sou Professor Associado III da Universidade Federal de Campina Grande
          (UFCG) e pesquisador nível 1D do CNPq — uma das mais altas distinções
          para pesquisadores ativos no Brasil. Integro o quadro docente da UFCG
          desde 2009, atuando tanto na graduação quanto na pós-graduação em
          Matemática.
        </p>
        <p>
          Minha trajetória acadêmica é marcada pelo compromisso com a produção
          científica de qualidade, a formação de novos pesquisadores e o avanço
          do conhecimento em Análise Matemática, em especial na teoria de
          equações diferenciais parciais não lineares.
        </p>
      </Section>

      <Section>
        <SectionTitle>Formação Acadêmica</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineYear>2008–2011</TimelineYear>
            <TimelineText>
              <strong>Doutorado em Matemática</strong>
              <span>Universidade de Brasília (UnB), com co-tutela UFCG</span>
              <span>Orientador: Prof. José Valdo Abreu Gonçalves</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2006–2007</TimelineYear>
            <TimelineText>
              <strong>Mestrado em Matemática</strong>
              <span>Universidade Federal de Campina Grande (UFCG)</span>
              <span>Orientador: Prof. Claudianor de Oliveira Alves</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2001–2005</TimelineYear>
            <TimelineText>
              <strong>Bacharelado em Matemática</strong>
              <span>Universidade Federal de Campina Grande (UFCG)</span>
            </TimelineText>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>Pós-Doutorado</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineYear>2019</TimelineYear>
            <TimelineText>
              <strong>Pesquisador Visitante — USP São Carlos</strong>
              <span>Bolsista FAPESP (Grant 2018/11664-0)</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2017</TimelineYear>
            <TimelineText>
              <strong>Estágio Pós-Doutoral — USP São Carlos</strong>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2012–2013</TimelineYear>
            <TimelineText>
              <strong>Estágio Pós-Doutoral — IMPA</strong>
              <span>Instituto Nacional de Matemática Pura e Aplicada</span>
            </TimelineText>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>Linha de Pesquisa</SectionTitle>
        <p>
          Meu trabalho está centrado em Análise não linear, com ênfase nos
          seguintes temas: problemas com fronteira livre, equações
          quase-lineares, espaços de Orlicz–Sobolev e métodos variacionais.
          Investigo propriedades estruturais e qualitativas de soluções de
          equações diferenciais parciais elípticas, contribuindo para o
          desenvolvimento teórico da área e suas conexões com a Física e a
          Geometria.
        </p>
      </Section>

      <Section>
        <SectionTitle>Gestão Acadêmica</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineYear>2023–atual</TimelineYear>
            <TimelineText>
              <strong>Coordenador do Doutorado Associado UFCG/UFPB</strong>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2020–2023</TimelineYear>
            <TimelineText>
              <strong>Coordenador da Pós-Graduação em Matemática — UFCG</strong>
              <span>Mestrado Acadêmico em Matemática</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2015–2016</TimelineYear>
            <TimelineText>
              <strong>Chefe da Unidade Acadêmica de Matemática (UAMAT) — UFCG</strong>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2012–2013</TimelineYear>
            <TimelineText>
              <strong>Coordenador de Pesquisa e Extensão — UAMAT/UFCG</strong>
            </TimelineText>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>Visitas Internacionais</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineYear>jan. 2025</TimelineYear>
            <TimelineText>
              <strong>Michigan State University</strong>
              <span>Department of Mathematics — Michigan, EUA</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>abr. 2022</TimelineYear>
            <TimelineText>
              <strong>Universidad de Chile</strong>
              <span>Departamento de Ingeniería Matemática — Santiago, Chile</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>mai. 2019</TimelineYear>
            <TimelineText>
              <strong>Universidad de Sevilla</strong>
              <span>Dpto. de Ecuaciones Diferenciales e Análisis Numérico — Espanha</span>
            </TimelineText>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>Orientações</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineYear>2024–atual</TimelineYear>
            <TimelineText>
              <strong>Supervisão de Pós-Doutorado — Lucas da Silva</strong>
              <span>Universidade Federal de Campina Grande (UFCG)</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2023–atual</TimelineYear>
            <TimelineText>
              <strong>Doutorado em andamento — Rodrigo Marques Faustino da Silva</strong>
              <span>Universidade Federal de Campina Grande (UFCG)</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2023</TimelineYear>
            <TimelineText>
              <strong>Doutorado concluído — Pedro Fellype da Silva Pontes</strong>
              <span>Existence, nonexistence and multiplicity results of solutions via variational methods on non-smooth functionals</span>
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2013–2025</TimelineYear>
            <TimelineText>
              <strong>8 dissertações de mestrado orientadas</strong>
              <span>Universidade Federal de Campina Grande (UFCG)</span>
            </TimelineText>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle>Números</SectionTitle>
        <Grid>
          <Card>
            <CardValue>30</CardValue>
            <CardLabel>Artigos publicados</CardLabel>
          </Card>
          <Card>
            <CardValue>1D</CardValue>
            <CardLabel>Pesquisador CNPq</CardLabel>
          </Card>
          <Card>
            <CardValue>16+</CardValue>
            <CardLabel>Anos de docência</CardLabel>
          </Card>
          <Card>
            <CardValue>156</CardValue>
            <CardLabel>Citações</CardLabel>
          </Card>
        </Grid>
      </Section>
    </Container>
  );
}
