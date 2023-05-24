import styled from 'styled-components';

import Dots from './assets/dots.png';

export const SectionTitle = styled.p`
  color: white;
  font-size: 4rem;
  font-style: italic;
  position: sticky;

  &:after {
    width: 104%;
    height: 0.3em;
    background-color: #2d1aa3;
    content: '';
    position: absolute;
    bottom: 12%;
    left: -1%;
    z-index: -1;
  }
`;

export const ExperienceSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  background-color: black;
  padding: 96px 40px;
  min-width: 100vw;
  min-height: 100vh;
  gap: 48px;
  position: sticky;
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding: 8px 0;
  width: 100%;
  gap: 16px;
`;

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 80%;
  height: 80%;
  top: 20%;
  left: 0;
`;

export const Overlay = styled.div`
  z-index: -1;
  opacity: 0.35;
  mix-blend-mode: overlay;
  background-image: url('/dots.png');
  background-size: 200px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  width: 100%;
  height: 100%;
`;
