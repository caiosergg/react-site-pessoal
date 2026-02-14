import {
  Section,
  SectionTitle,
  PublicationsList,
  PubItem,
  Buttons,
  Button,
} from "../styles";

import publications from "../../../data/publications.json";

export default function PublicationsSection() {
  return (
    <Section>
      <SectionTitle>Publicações Recentes</SectionTitle>
      <PublicationsList>
        {publications.slice(0, 3).map((pub, i) => (
          <PubItem key={i}>
            <strong>{pub.title}</strong>
            <span>
              {pub.journal} — {pub.year}
            </span>
          </PubItem>
        ))}
      </PublicationsList>
      <Buttons>
        <Button to="/publications">Ver Todas</Button>
      </Buttons>
    </Section>
  );
}
