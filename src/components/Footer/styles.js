import styled from "styled-components";

import { primary, dark, text } from "../../layouts/Theme";

export const Container = styled.footer`
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  background: linear-gradient(90deg, ${primary}, ${dark});
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  p {
    color: ${text};
`;
