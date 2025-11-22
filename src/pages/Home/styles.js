import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  padding: 6rem 2rem 5rem;
  display: flex;
  justify-content: center;
  background: #fafafa;

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Photo = styled.img`
  width: 480pxpx;
  height: 480px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #e6e6e6;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 260px;
    height: 260px;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.5px;

  @media (max-width: 900px) {
    font-size: 2.3rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 0.4rem;
  color: #555;
  letter-spacing: -0.2px;
`;

export const Bio = styled.p`
  margin-top: 1.8rem;
  max-width: 520px;
  color: #444;
  line-height: 1.75;
  font-size: 1.05rem;

  @media (max-width: 900px) {
    margin: 1.4rem auto 0;
  }
`;

export const Buttons = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Button = styled(Link)`
  background: ${({ secondary }) => (secondary ? "#e9e9e9" : "#0057ff")};
  color: ${({ secondary }) => (secondary ? "#333" : "#fff")};

  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;

  transition: 0.25s ease;

  box-shadow: ${({ secondary }) =>
    secondary ? "0 0 0 rgba(0,0,0,0)" : "0 3px 10px rgba(0, 87, 255, 0.25)"};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
