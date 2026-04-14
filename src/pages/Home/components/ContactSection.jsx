import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  ContactWrapper,
  ContactEmail,
  ContactLinks,
  ContactLink,
} from "../styles";
import links from "../../../data/academicLinks.json";

export default function ContactSection() {
  return (
    <Section>
      <SectionInner>
        <SectionLabel>Contato</SectionLabel>
        <SectionTitle>Entre em Contato</SectionTitle>
        <SectionRule />
        <ContactWrapper>
          <ContactEmail href="mailto:jefferson.abrantes@ufcg.edu.br">
            jefferson.abrantes@ufcg.edu.br
          </ContactEmail>
          <ContactLinks>
            {links.map((link, i) => (
              <ContactLink key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </ContactLink>
            ))}
          </ContactLinks>
        </ContactWrapper>
      </SectionInner>
    </Section>
  );
}
