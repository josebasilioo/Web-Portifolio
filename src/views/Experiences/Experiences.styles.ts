import styled from 'styled-components';

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
