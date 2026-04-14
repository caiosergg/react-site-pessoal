import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  PublicationsList,
  PubItem,
  ViewAllLink,
} from "../styles";
import publications from "../../../data/publications.json";

export default function PublicationsSection() {
  return (
    <Section>
      <SectionInner>
        <SectionLabel>Produção Científica</SectionLabel>
        <SectionTitle>Publicações Recentes</SectionTitle>
        <SectionRule />
        <PublicationsList>
          {publications.slice(0, 3).map((pub, i) => (
            <PubItem key={i}>
              <strong>{pub.title}</strong>
              <span>{pub.journal}</span>
              <span className="year">· {pub.year}</span>
            </PubItem>
          ))}
        </PublicationsList>
        <ViewAllLink to="/publications">Ver todas as publicações →</ViewAllLink>
      </SectionInner>
    </Section>
  );
}
