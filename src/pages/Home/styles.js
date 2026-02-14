import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  primary,
  secondary,
  dark,
  text,
  background,
  textLight,
  tertiary,
} from "../../layouts/Theme";

export const Container = styled.div`
  width: 100%;
`;

// Hero
export const Content = styled.div`
  background: ${background};
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8rem;
  padding: 4rem 8rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Photo = styled.img`
  width: 570px;
  height: 570px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid ${dark};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    width: 240px;
    height: 240px;
    margin-bottom: 2rem;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: ${text};
  letter-spacing: -0.5px;

  @media (max-width: 900px) {
    font-size: 2.3rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 0.4rem;
  color: ${text};
`;

export const Bio = styled.p`
  margin-top: 1.8rem;
  color: ${text};
  line-height: 1.75;
  font-size: 1.05rem;
`;

export const BioEn = styled.p`
  margin-top: 0.55rem;
  max-width: 520px;
  color: ${textLight};
  opacity: 0.7;
  font-size: 0.88rem;
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 5rem;
`;

export const Button = styled(Link)`
  background: ${primary};
  color: ${text};
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  transition: 0.25s ease;

  &:hover {
    background: ${secondary};
    color: ${text};
    transform: translateY(-2px);
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

// Seções
export const Section = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: ${background};

  &:nth-child(even) {
    background: ${tertiary};
  }

  h2 {
    color: ${text};
  }

  &:nth-child(even) h2 {
    color: ${dark};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

// Research
export const ResearchList = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  list-style: none;
`;

export const ResearchItem = styled.li`
  padding: 0.8rem 1.4rem;
  border-left: 4px solid ${secondary};
  background: ${secondary}20;
  border-radius: 10px;
  color: ${dark};
  font-weight: 600;
  transition: 0.25s ease;

  &:hover {
    transform: translateX(4px);
    border-color: ${primary};
  }
`;

//Highlights
export const Stats = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, ${primary}, ${secondary});
  color: ${text};
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
  }

  .stat-value {
    font-size: 2.4rem;
    font-weight: 800;
  }

  .stat-label {
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 0.4rem;
  }
`;

//Publications
export const PublicationsList = styled.div`
  max-width: 900px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PubItem = styled.div`
  padding: 1.2rem;
  background: ${secondary}20;
  border-radius: 12px;
  border-left: 5px solid ${secondary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: 0.25s ease;

  &:hover {
    border-color: ${primary};
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  strong {
    display: block;
    font-size: 1.1rem;
    color: ${dark};
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 0.9rem;
    color: ${dark};
  }
`;

// Academic Links
export const AcademicLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AcademicLink = styled.a`
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  background: ${primary};
  color: ${text};
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    background: ${secondary};
    color: ${text};
  }
`;

// Modal
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: ${primary}20;
  backdrop-filter: blur(20px);
  border-radius: 20px;
  max-width: 480px;
  width: 90%;
  padding: 32px;
  color: ${text};
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${background};
  border: none;
  font-size: 20px;
  color: ${text};
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${dark};
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 24px;
  color: ${text};
`;

export const DetailsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DetailItem = styled.li`
  background: ${primary}15;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${text};
  font-size: 0.95rem;
  border-left: 3px solid ${secondary};
  transition: all 0.2s;

  &:hover {
    transform: translateX(4px);
    background: ${dark};
  }
`;
