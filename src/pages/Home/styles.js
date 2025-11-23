import styled from "styled-components";
import { Link } from "react-router-dom";

const primary = "#0F355A";
const dark = "#1E1E25";
const text = "#3F4550";
const light = "#EAE7E2";
const background = "#F4F1EA";
const border = "#C8C1B8";

export const Container = styled.section`
  width: 100%;
  padding: 8rem 4rem 8rem;
  display: flex;
  justify-content: center;
  background: ${background};

  @media (max-width: 900px) {
    padding: 0rem 1.5rem 4rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Photo = styled.img`
  width: 480px;
  height: 480px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid ${border};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    width: 240px;
    height: 240px;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h1`
  margin-top: 0;
  font-size: 2.8rem;
  font-weight: 800;
  color: ${dark};
  letter-spacing: -0.5px;

  @media (max-width: 900px) {
    font-size: 2.3rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 0.4rem;
  color: #a7acc5;
`;

export const Bio = styled.p`
  margin-top: 1.8rem;
  max-width: 1200px;
  color: ${text};
  line-height: 1.75;
  font-size: 1.05rem;

  @media (max-width: 900px) {
    margin: 1.4rem auto 0;
  }
`;

export const BioEn = styled.p`
  margin-top: 0.55rem;
  max-width: 520px;
  color: ${text};
  opacity: 0.6;
  font-size: 0.88rem;
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 5rem;
`;

export const Section = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: ${background};

  &:nth-child(even) {
    background: ${light};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.2rem;
  color: ${dark};
`;

export const ResearchList = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  list-style: none;
`;

export const ResearchItem = styled.li`
  padding: 0.9rem 1.4rem;
  border-left: 4px solid #c8c1b8;
  background: #f6f3ee;
  border-radius: 10px;
  color: #1e1e25;
  font-weight: 600;
  transition: 0.25s ease;

  &:hover {
    transform: translateX(4px);
    border-color: #c09a69ff;
  }
`;

export const Stats = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, #ffffff, #f4f7ff);
  border-radius: 16px;
  padding: 2.2rem 1.8rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid #e2e6ff;

  box-shadow: 0 6px 14px rgba(0, 40, 120, 0.08);
  transition: all 0.25s ease;

  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 22px rgba(0, 40, 120, 0.12);
    border-color: #c8d4ff;
  }

  &:hover::before {
    opacity: 0.15;
    transform: translateX(180%);
  }

  &::before {
    content: "";
    position: absolute;
    top: -40%;
    left: -40%;
    width: 180%;
    height: 180%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.05) 60%
    );
    transform: translateX(-100%);
    transition: 0.5s ease;
  }

  .stat-content {
    position: relative;
    z-index: 2;
  }

  .stat-value {
    font-size: 2.6rem;
    font-weight: 800;
    color: #1b1b1b;
    margin-bottom: 0.4rem;
    letter-spacing: -1px;
  }

  .stat-label {
    font-size: 1rem;
    color: #4b4b4b;
    opacity: 0.85;
    font-weight: 500;
  }
`;

export const PublicationsList = styled.div`
  max-width: 900px;
  margin: 0 auto 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const PubItem = styled.div`
  padding: 1.3rem 1.4rem;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    border-color: #ccd9ff;
  }

  strong {
    display: block;
    font-size: 1.1rem;
    color: #111a42;
    font-weight: 700;
    margin-bottom: 0.35rem;
  }

  span {
    font-size: 0.9rem;
    color: #667;
  }
`;

export const AcademicLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AcademicLink = styled.a`
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  background: #e9eefc;
  color: ${primary};
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    background: #d7e3ff;
  }
`;

export const Buttons = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const Button = styled(Link)`
  background: ${primary};
  color: #fff;

  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.25s ease;
  box-shadow: 0 3px 10px rgba(0, 87, 255, 0.25);

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  max-width: 480px;
  width: 90%;
  padding: 32px;
  color: #fff;
  position: relative;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.1);
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 24px;

  letter-spacing: 0.5px;
  line-height: 1.3;
`;

export const DetailsList = styled.ul`
  margin-top: 12px;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailItem = styled.li`
  background: rgba(255, 255, 255, 0.07);
  padding: 14px 16px;
  border-radius: 8px;

  color: #eaeaea;
  font-size: 0.95rem;
  line-height: 1.45;

  border-left: 3px solid #4da3ff;
  backdrop-filter: blur(10px);

  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.12);
  }
`;
