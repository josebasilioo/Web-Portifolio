import styled from 'styled-components';

export const ExpertiseSection = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  position: sticky;

  padding: 96px 40px;
  min-width: 100vw;
  min-height: 100vh;
  gap: 48px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 3rem;
`;

export const ColoredContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: purple;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const ExpertisesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(100% / 3));
  width: 90%;
  max-width: 1000px;
  min-height: 800px;
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;

  & > :first-child {
    border-right: 1px solid #e6ecf8;
  }

  & > :last-child {
    border-left: 1px solid #e6ecf8;
  }

  @media (max-width: 620px) {
    grid-template-columns: none;
    grid-template-rows: repeat(auto-fill, calc(100% / 3));

    & > :first-child {
      border-bottom: 1px solid #e6ecf8;
    }

    & > :last-child {
      border-top: 1px solid #e6ecf8;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: black;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
