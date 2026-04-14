import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  ContactWrapper,
  ContactInfo,
  ContactInfoItem,
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
          <ContactInfo>
            <ContactInfoItem>
              Universidade Federal de Campina Grande
            </ContactInfoItem>
            <ContactInfoItem>
              Unidade Acadêmica de Matemática — UAMAT
            </ContactInfoItem>
            <ContactInfoItem>
              Av. Aprígio Veloso, 882 · Bodocongó · Campina Grande, PB
            </ContactInfoItem>
            <ContactInfoItem muted>(83) 2101-1030</ContactInfoItem>
          </ContactInfo>
          <ContactLinks>
            {links.map((link, i) => (
              <ContactLink
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </ContactLink>
            ))}
          </ContactLinks>
        </ContactWrapper>
      </SectionInner>
    </Section>
  );
}
