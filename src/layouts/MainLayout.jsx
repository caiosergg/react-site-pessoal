import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.main`
  padding: 2rem 0;
  min-height: 70vh;
`;

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
