import styled from "styled-components";
import { dark, secondary, textLight } from "../../layouts/Theme";

export const Container = styled.footer`
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${dark};
  border-top: 3px solid ${secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    color: ${textLight};
    font-size: 0.85rem;
    margin: 0;
    opacity: 0.8;
  }

  span {
    font-size: 0.78rem;
    color: ${secondary};
    opacity: 0.75;
    letter-spacing: 0.4px;
  }
`;
