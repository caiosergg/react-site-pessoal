import styled from "styled-components";
import { dark, secondary, primary, textLight } from "../../layouts/Theme";

export const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const PageTitle = styled.h1`
  font-family: "Lora", Georgia, serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${dark};
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: ${secondary};
  margin: 1rem auto 0;
`;

export const PubList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const PubCard = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: #fff;
  border-radius: 8px;
  padding: 1.4rem 1.6rem;
  border-left: 5px solid ${secondary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.22s ease;

  &:hover {
    border-left-color: ${primary};
    transform: translateX(4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);
  }
`;

export const PubYear = styled.span`
  font-family: "Lora", Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${secondary};
  min-width: 46px;
  padding-top: 2px;
`;

export const PubTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: ${dark};
  line-height: 1.45;
  margin-bottom: 0.3rem;
`;

export const PubMeta = styled.p`
  font-size: 0.85rem;
  color: ${textLight};
  margin-bottom: 0;
  font-style: italic;
`;
