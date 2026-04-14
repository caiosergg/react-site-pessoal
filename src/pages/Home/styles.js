import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  primary,
  secondary,
  tertiary,
  dark,
  background,
  textLight,
  accent,
} from "../../layouts/Theme";

export const Container = styled.div`
  width: 100%;
`;

// ── HERO ────────────────────────────────────────────────────────────
export const Content = styled.div`
  background: ${dark};
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding: 5rem 8rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 60% 55% at 75% 50%,
        rgba(42, 107, 172, 0.08) 0%,
        transparent 70%
      ),
      radial-gradient(
        ellipse 40% 40% at 20% 80%,
        rgba(122, 96, 64, 0.06) 0%,
        transparent 60%
      );
    pointer-events: none;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
    gap: 2.5rem;
  }
`;

export const Photo = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${secondary};
  /* corrigido: era rgba(201,150,58,...) hardcoded */
  box-shadow:
    0 0 0 8px ${secondary}20,
    0 16px 40px rgba(0, 0, 0, 0.35);
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;

export const Info = styled.div`
  flex: 1;
  max-width: 580px;
`;

export const Name = styled.h1`
  font-family: "Lora", Georgia, serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
  line-height: 1.15;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Title = styled.p`
  font-size: 0.88rem;
  font-weight: 400;
  margin-top: 0.5rem;
  color: ${secondary};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: ${secondary};
  margin: 1.2rem 0;

  @media (max-width: 900px) {
    margin: 1rem auto;
  }
`;

export const Bio = styled.p`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.78;
  font-size: 1rem;
  margin-bottom: 0;
`;

export const BioEn = styled.p`
  margin-top: 0.75rem;
  color: ${textLight};
  opacity: 0.65;
  font-size: 0.85rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 0;
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Button = styled(Link)`
  background: ${secondary};
  color: ${dark};
  padding: 0.75rem 1.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.3px;
  transition: all 0.22s ease;
  display: inline-block;

  &:hover {
    /* corrigido: era #e0aa44 hardcoded */
    background: ${accent};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px ${secondary}40;
  }
`;

export const ButtonOutline = styled(Link)`
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.85);
  padding: 0.75rem 1.6rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.92rem;
  transition: all 0.22s ease;
  display: inline-block;

  &:hover {
    border-color: ${secondary};
    color: ${secondary};
    transform: translateY(-2px);
  }
`;

// ── SEÇÕES ───────────────────────────────────────────────────────────
export const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  background: ${background};

  &:nth-child(even) {
    background: ${tertiary};
  }
`;

export const SectionInner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${secondary};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: "Lora", Georgia, serif;
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.6rem;
  color: ${dark};
`;

export const SectionRule = styled.div`
  width: 40px;
  height: 3px;
  background: ${secondary};
  margin: 0 auto 2.8rem;
`;

// ── RESEARCH ─────────────────────────────────────────────────────────
export const ResearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
  list-style: none;
  margin-top: 0.5rem;
`;

export const ResearchItem = styled.li`
  padding: 0.7rem 1.3rem;
  border: 1.5px solid ${secondary}50;
  background: #fff;
  border-radius: 6px;
  color: ${dark};
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.22s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: ${secondary};
    /* corrigido: era rgba(201,150,58,0.15) hardcoded */
    background: ${secondary}0D;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px ${secondary}25;
  }
`;

// ── HIGHLIGHTS ───────────────────────────────────────────────────────
export const Stats = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
`;

export const StatCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.28s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-top: 4px solid ${secondary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
    border-top-color: ${primary};
  }

  .stat-value {
    font-family: "Lora", Georgia, serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${primary};
    line-height: 1;
  }

  .stat-label {
    font-size: 0.88rem;
    font-weight: 600;
    color: ${dark};
    opacity: 0.75;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }
`;

// ── PUBLICATIONS ─────────────────────────────────────────────────────
export const PublicationsList = styled.div`
  max-width: 860px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PubItem = styled.div`
  padding: 1.4rem 1.6rem;
  background: #fff;
  border-radius: 8px;
  border-left: 5px solid ${secondary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.22s ease;

  &:hover {
    border-left-color: ${primary};
    transform: translateX(4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  strong {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: ${dark};
    margin-bottom: 0.35rem;
    line-height: 1.4;
  }

  span {
    font-size: 0.85rem;
    color: ${secondary};
    font-weight: 600;
  }

  .year {
    font-size: 0.82rem;
    color: #888;
    margin-left: 0.5rem;
    font-weight: 400;
  }
`;

export const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 0.92rem;
  color: ${primary};
  letter-spacing: 0.3px;

  &:hover {
    color: ${secondary};
  }
`;


// ── PUB FILTERS ──────────────────────────────────────────────────────
export const PubFilters = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const PubFilterBtn = styled.button`
  padding: 0.4rem 1.1rem;
  border-radius: 99px;
  border: 1.5px solid ${(p) => (p.$active ? primary : secondary + "60")};
  background: ${(p) => (p.$active ? primary : "transparent")};
  color: ${(p) => (p.$active ? "#fff" : dark)};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  letter-spacing: 0.3px;

  &:hover {
    border-color: ${primary};
    background: ${primary};
    color: #fff;
    transform: none;
  }
`;
// ── CONTACT ───────────────────────────────────────────────────────────
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const ContactEmail = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${dark};
  letter-spacing: 0.2px;
  transition: color 0.2s;

  &:hover {
    color: ${secondary};
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContactLink = styled.a`
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  border: 1.5px solid ${primary};
  background: transparent;
  color: ${primary};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.22s ease;

  &:hover {
    background: ${primary};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${primary}30;
  }
`;

// ── MODAL ─────────────────────────────────────────────────────────────
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  /* corrigido: usa dark do tema em vez de rgba hardcoded */
  background: ${dark}B8;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  max-width: 480px;
  width: 92%;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);
  border-top: 5px solid ${secondary};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${tertiary};
  border: none;
  font-size: 18px;
  color: ${dark};
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${secondary};
    color: #fff;
    transform: none;
  }
`;

export const ModalTitle = styled.h2`
  font-family: "Lora", Georgia, serif;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${dark};
`;

export const DetailsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DetailItem = styled.li`
  background: ${tertiary};
  padding: 0.85rem 1.1rem;
  border-radius: 0;
  color: ${dark};
  font-size: 0.94rem;
  border-left: 3px solid ${secondary};
  transition: all 0.18s;

  &:hover {
    transform: translateX(3px);
    background: ${secondary}18;
  }
`;
