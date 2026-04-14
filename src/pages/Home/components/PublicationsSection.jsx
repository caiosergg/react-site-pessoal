import { useState } from "react";
import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  PublicationsList,
  PubItem,
  ViewAllLink,
  PubFilters,
  PubFilterBtn,
} from "../styles";
import publications from "../../../data/publications.json";

export default function PublicationsSection() {
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a
  );
  const [activeYear, setActiveYear] = useState(null);

  const filtered = activeYear
    ? publications.filter((p) => p.year === activeYear)
    : publications.slice(0, 4);

  return (
    <Section>
      <SectionInner>
        <SectionLabel>Produção Científica</SectionLabel>
        <SectionTitle>Publicações Recentes</SectionTitle>
        <SectionRule />

        <PubFilters>
          <PubFilterBtn
            $active={activeYear === null}
            onClick={() => setActiveYear(null)}
          >
            Recentes
          </PubFilterBtn>
          {years.slice(0, 6).map((year) => (
            <PubFilterBtn
              key={year}
              $active={activeYear === year}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </PubFilterBtn>
          ))}
        </PubFilters>

        <PublicationsList>
          {filtered.map((pub, i) => (
            <PubItem key={i}>
              <strong>{pub.title}</strong>
              <span>{pub.journal}</span>
              <span className="year">· {pub.year}{pub.status === "accepted" ? " (aceito)" : ""}</span>
            </PubItem>
          ))}
        </PublicationsList>

        <ViewAllLink to="/publications">Ver todas as publicações →</ViewAllLink>
      </SectionInner>
    </Section>
  );
}
