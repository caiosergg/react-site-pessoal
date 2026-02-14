import { Section, SectionTitle, Stats, StatCard } from "../styles";
import highlights from "../../../data/highlights.json";

export default function HighlightsSection({ setSelected }) {
  const openModal = (highlight) => setSelected(highlight);

  return (
    <Section>
      <SectionTitle>Destaques Acadêmicos</SectionTitle>

      <Stats>
        {highlights.map((h, i) => (
          <StatCard key={i} onClick={() => openModal(h)}>
            <div className="stat-content">
              <div className="stat-value">{h.value}</div>
              <div className="stat-label">{h.label}</div>
            </div>
          </StatCard>
        ))}
      </Stats>
    </Section>
  );
}
