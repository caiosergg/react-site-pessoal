import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionRule,
  SectionInner,
  AcademicLinks,
  AcademicLink,
} from "../styles";
import links from "../../../data/academicLinks.json";

export default function AcademicLinksSection() {
  return (
    <Section>
      <SectionInner>
        <SectionLabel>Perfis</SectionLabel>
        <SectionTitle>Links Acadêmicos</SectionTitle>
        <SectionRule />
        <AcademicLinks>
          {links.map((link, i) => (
            <AcademicLink key={i} href={link.href} target="_blank">
              {link.label}
            </AcademicLink>
          ))}
        </AcademicLinks>
      </SectionInner>
    </Section>
  );
}
