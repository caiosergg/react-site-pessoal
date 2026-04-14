import React, { useState } from "react";
import {
  Container,
  ModalOverlay,
  ModalBox,
  CloseBtn,
  ModalTitle,
  DetailsList,
  DetailItem,
} from "./styles";

import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import ResearchSection from "./components/ResearchSection";
import PublicationsSection from "./components/PublicationsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <Container>
      <HeroSection />
      <HighlightsSection setSelected={setSelected} />
      <ResearchSection />
      <PublicationsSection />
      <ContactSection />

      {selected && (
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={closeModal}>×</CloseBtn>
            <ModalTitle>{selected.label}</ModalTitle>
            <DetailsList>
              {selected.details.map((d, i) => (
                <DetailItem key={i}>{d}</DetailItem>
              ))}
            </DetailsList>
          </ModalBox>
        </ModalOverlay>
      )}
    </Container>
  );
}
