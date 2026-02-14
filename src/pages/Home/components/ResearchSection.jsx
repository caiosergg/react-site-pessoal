import { Section, SectionTitle, ResearchList, ResearchItem } from "../styles";
import researchAreas from "../../../data/researchAreas.json";

export default function ResearchSection() {
  return (
    <Section>
      <SectionTitle>Áreas de Pesquisa</SectionTitle>
      <ResearchList>
        {researchAreas.map((area, i) => (
          <ResearchItem key={i}>{area.label}</ResearchItem>
        ))}
      </ResearchList>
    </Section>
  );
}
