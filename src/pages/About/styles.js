import styled from "styled-components";
import { dark, secondary, tertiary, primary, text, textLight } from "../../layouts/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const PageTitle = styled.h1`
  font-family: "Lora", Georgia, serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: ${dark};
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: ${secondary};
  margin: 1.2rem auto;
`;

export const PageSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${textLight};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const Section = styled.div`
  margin-bottom: 3rem;

  p {
    color: ${text};
    line-height: 1.8;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Lora", Georgia, serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: ${dark};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(201, 150, 58, 0.3);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
`;

export const Card = styled.div`
  background: ${tertiary};
  border-radius: 10px;
  padding: 1.75rem 1.25rem;
  text-align: center;
  border-top: 4px solid ${secondary};
  transition: all 0.22s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const CardValue = styled.div`
  font-family: "Lora", Georgia, serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${primary};
`;

export const CardLabel = styled.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${dark};
  opacity: 0.7;
  margin-top: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 0.5rem;
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
`;

export const TimelineYear = styled.span`
  font-family: "Lora", Georgia, serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${secondary};
  min-width: 82px;
  padding-top: 3px;
  flex-shrink: 0;
`;

export const TimelineText = styled.div`
  font-size: 0.95rem;
  color: ${dark};
  line-height: 1.55;

  strong {
    display: block;
    font-weight: 600;
    margin-bottom: 0.15rem;
  }

  span {
    display: block;
    color: ${textLight};
    font-size: 0.87rem;
  }
`;
