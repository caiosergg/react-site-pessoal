import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  Stats,
  StatCard,
} from "../styles";
import highlights from "../../../data/highlights.json";

export default function HighlightsSection({ setSelected }) {
  return (
    <Section>
      <SectionInner>
        <SectionLabel>Números</SectionLabel>
        <SectionTitle>Destaques Acadêmicos</SectionTitle>
        <SectionRule />
        <Stats>
          {highlights.map((h, i) => (
            <StatCard key={i} onClick={() => setSelected(h)}>
              <div className="stat-value">{h.value}</div>
              <div className="stat-label">{h.label}</div>
            </StatCard>
          ))}
        </Stats>
      </SectionInner>
    </Section>
  );
}
