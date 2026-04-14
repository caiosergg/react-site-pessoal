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
} from "./styles";

export default function About() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>Sobre Mim</PageTitle>
        <Divider />
        <PageSubtitle>
          Professor, pesquisador e matemático com mais de 16 anos de dedicação à
          educação superior e à pesquisa em Análise Matemática.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Formação & Carreira</SectionTitle>
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
        <SectionTitle>Números</SectionTitle>
        <Grid>
          <Card>
            <CardValue>+40</CardValue>
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
            <CardValue>150+</CardValue>
            <CardLabel>Citações</CardLabel>
          </Card>
        </Grid>
      </Section>
    </Container>
  );
}
