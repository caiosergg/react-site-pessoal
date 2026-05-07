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
  min-height: 88vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background: linear-gradient(160deg, ${dark} 0%, ${primary} 100%);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  width: 38%;
  flex-shrink: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  padding: 4rem 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 80% 60% at 50% 0%,
      rgba(201, 150, 58, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 3rem 2rem 2.5rem;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 5rem 4rem 4.5rem;

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 3rem;
    align-items: center;
    text-align: center;
  }
`;

export const PanelBadge = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${secondary};
  text-align: center;
  opacity: 0.85;
  position: relative;
  z-index: 1;
`;

export const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${secondary};
  box-shadow:
    0 0 0 10px rgba(201, 150, 58, 0.12),
    0 20px 50px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    width: 170px;
    height: 170px;
  }
`;

export const Name = styled.h1`
  font-family: "Lora", Georgia, serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  line-height: 1.15;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Title = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.65);
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
    align-self: center;
  }
`;

export const Bio = styled.p`
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.78;
  font-size: 1rem;
  margin-bottom: 0;
`;

export const BioEn = styled.p`
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
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
  color: #fff;
  padding: 0.75rem 1.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.3px;
  transition: all 0.22s ease;
  display: inline-block;

  &:hover {
    background: #e0aa4a;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonOutline = styled(Link)`
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 0.75rem 1.6rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.92rem;
  transition: all 0.22s ease;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: #fff;
    color: #fff;
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
  border: 1.5px solid rgba(201, 150, 58, 0.3);
  background: #fff;
  border-radius: 6px;
  color: ${dark};
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.22s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: ${secondary};
    background: rgba(201, 150, 58, 0.06);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(201, 150, 58, 0.15);
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
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
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
    opacity: 0.7;
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
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);
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
    color: ${textLight};
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
    color: ${accent};
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
  border: 1.5px solid ${(p) => (p.$active ? primary : "rgba(26, 58, 92, 0.25)")};
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
    box-shadow: 0 6px 16px rgba(26, 58, 92, 0.2);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
`;

export const ContactInfoItem = styled.p`
  font-size: ${(p) => (p.muted ? "0.88rem" : "0.95rem")};
  color: ${(p) => (p.muted ? textLight : dark)};
  margin: 0;
  line-height: 1.5;
`;

// ── MODAL ─────────────────────────────────────────────────────────────
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(13, 27, 42, 0.72);
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
  box-shadow: 0 24px 64px rgba(13, 27, 42, 0.2);
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
    background: ${primary};
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
  border-radius: 4px;
  color: ${dark};
  font-size: 0.94rem;
  border-left: 3px solid ${secondary};
  transition: all 0.18s;

  &:hover {
    transform: translateX(3px);
    background: rgba(201, 150, 58, 0.08);
  }
`;
