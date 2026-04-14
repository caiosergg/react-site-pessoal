import styled from "styled-components";
import { dark, secondary, tertiary, primary } from "../../layouts/Theme";

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
  color: #5a7080;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const Section = styled.div`
  margin-bottom: 3rem;

  p {
    color: #3a4a5a;
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
  border-bottom: 2px solid ${secondary}40;
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
