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
import ResearchSection from "./components/ResearchSection";
import HighlightsSection from "./components/HighlightsSection";
import PublicationsSection from "./components/PublicationsSection";
import AcademicLinksSection from "./components/AcademicLinksSection";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <Container>
      <HeroSection />
      <ResearchSection />
      <HighlightsSection setSelected={setSelected} />
      <PublicationsSection />
      <AcademicLinksSection />

      {/* Modal de Destaques */}
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
