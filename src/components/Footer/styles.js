import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #0f355a, #00aef0);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #ffd700;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;
