import { Section, SectionTitle, AcademicLinks, AcademicLink } from "../styles";
import links from "../../../data/academicLinks.json";

export default function AcademicLinksSection() {
  return (
    <Section>
      <SectionTitle>Links Acadêmicos</SectionTitle>
      <AcademicLinks>
        {links.map((link, i) => (
          <AcademicLink key={i} href={link.href} target="_blank">
            {link.label}
          </AcademicLink>
        ))}
      </AcademicLinks>
    </Section>
  );
}
