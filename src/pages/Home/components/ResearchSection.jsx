import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  ResearchList,
  ResearchItem,
} from "../styles";
import researchAreas from "../../../data/researchAreas.json";

export default function ResearchSection() {
  return (
    <Section>
      <SectionInner>
        <SectionLabel>Interesses</SectionLabel>
        <SectionTitle>Áreas de Pesquisa</SectionTitle>
        <SectionRule />
        <ResearchList>
          {researchAreas.map((area, i) => (
            <ResearchItem key={i}>{area.label}</ResearchItem>
          ))}
        </ResearchList>
      </SectionInner>
    </Section>
  );
}
