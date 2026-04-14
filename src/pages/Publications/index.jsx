import React from "react";
import {
  Container,
  PageHeader,
  PageTitle,
  Divider,
  PubList,
  PubCard,
  PubTitle,
  PubMeta,
  PubYear,
} from "./styles";
import publications from "../../data/publications.json";

export default function Publications() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>Publicações</PageTitle>
        <Divider />
      </PageHeader>
      <PubList>
        {publications.map((pub, i) => (
          <PubCard key={i}>
            <PubYear>{pub.year}</PubYear>
            <div>
              <PubTitle>{pub.title}</PubTitle>
              <PubMeta>{pub.journal}</PubMeta>
            </div>
          </PubCard>
        ))}
      </PubList>
    </Container>
  );
}
